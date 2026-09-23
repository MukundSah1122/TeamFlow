import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/navigation/Sidebar";
import TopBar from "../components/layout/TopBar";

import {
  channels,
} from "../data/mockData";

function AppLayout() {
  const [selectedChannel, setSelectedChannel] =
    useState(channels[0]);

  const [selectedDM, setSelectedDM] =
    useState(null);

  const [searchQuery, setSearchQuery] =
    useState("");

  const handleChannelSelect = (channel) => {
    setSelectedChannel(channel);
    setSelectedDM(null);
  };

  const handleDMSelect = (user) => {
    setSelectedDM(user);
  };

  const handleSearchSelect = (result) => {
    if (result.type === "channel") {
      setSelectedChannel(result.data);
      setSelectedDM(null);
    }

    if (result.type === "dm") {
      setSelectedDM(result.data);
    }

    if (result.type === "message") {
      if (result.source === "channel") {
        setSelectedChannel(result.data);
        setSelectedDM(null);
      }

      if (result.source === "dm") {
        setSelectedDM(result.data);
      }
    }

    setSearchQuery("");
  };

  return (
    <div className="app-layout">
      <Sidebar
        selectedChannel={selectedChannel}
        onChannelSelect={handleChannelSelect}
        selectedDM={selectedDM}
        onDMSelect={handleDMSelect}
      />

      <div className="app-main">
        <TopBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <main className="main-content">
          <Outlet
            context={{
              selectedChannel,
              setSelectedChannel:
                handleChannelSelect,
              selectedDM,
              setSelectedDM:
                handleDMSelect,
              searchQuery,
              setSearchQuery,
              onSearchSelect:
                handleSearchSelect,
            }}
          />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;