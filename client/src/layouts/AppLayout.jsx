import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/navigation/Sidebar";
import TopBar from "../components/layout/TopBar";

import {
  channels,
  notifications,
} from "../data/mockData";

function AppLayout() {
  // =========================
  // CHANNEL STATE
  // =========================

  const [selectedChannel, setSelectedChannel] =
    useState(channels[0]);

  // =========================
  // DIRECT MESSAGE STATE
  // =========================

  const [selectedDM, setSelectedDM] =
    useState(null);

  // =========================
  // SEARCH STATE
  // =========================

  const [searchQuery, setSearchQuery] =
    useState("");

  // =========================
  // NOTIFICATION STATE
  // =========================

const [notificationList, setNotificationList] = useState(() => {
  const savedNotifications =
    localStorage.getItem("teamflow_notifications");

  return savedNotifications
    ? JSON.parse(savedNotifications)
    : notifications;
});

  const unreadNotificationCount =
    notificationList.filter(
      (notification) => !notification.read
    ).length;

    useEffect(() => {
  localStorage.setItem(
    "teamflow_notifications",
    JSON.stringify(notificationList)
  );
}, [notificationList]);

  // =========================
  // CHANNEL SELECTION
  // =========================

  const handleChannelSelect = (channel) => {
    setSelectedChannel(channel);
    setSelectedDM(null);
  };

  // =========================
  // DM SELECTION
  // =========================

  const handleDMSelect = (user) => {
    setSelectedDM(user);
  };

  // =========================
  // SEARCH SELECTION
  // =========================

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

  // =========================
  // MARK NOTIFICATION READ
  // =========================

  const markNotificationAsRead = (
    notificationId
  ) => {
    setNotificationList(
      (currentNotifications) =>
        currentNotifications.map(
          (notification) =>
            notification.id === notificationId
              ? {
                  ...notification,
                  read: true,
                }
              : notification
        )
    );
  };

  // =========================
  // MARK ALL AS READ
  // =========================

  const markAllNotificationsAsRead = () => {
    setNotificationList(
      (currentNotifications) =>
        currentNotifications.map(
          (notification) => ({
            ...notification,
            read: true,
          })
        )
    );
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
          onSearchSelect={handleSearchSelect}
          notifications={notificationList}
          unreadNotificationCount={
            unreadNotificationCount
          }
          onNotificationRead={
            markNotificationAsRead
          }
          onMarkAllNotificationsRead={
            markAllNotificationsAsRead
          }
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

              notifications:
                notificationList,

              unreadNotificationCount,

              onNotificationRead:
                markNotificationAsRead,

              onMarkAllNotificationsRead:
                markAllNotificationsAsRead,
            }}
          />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;