import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/navigation/Sidebar";
import TopBar from "../components/layout/TopBar";

import { channels } from "../data/mockData";

function AppLayout() {
  const [selectedChannel, setSelectedChannel] =
    useState(channels[0]);

  return (
    <div className="app-layout">
      <Sidebar
        selectedChannel={selectedChannel}
        onChannelSelect={setSelectedChannel}
      />

      <div className="app-main">
        <TopBar />

        <main className="main-content">
          <Outlet
            context={{
              selectedChannel,
              setSelectedChannel,
            }}
          />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;