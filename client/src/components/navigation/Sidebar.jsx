import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import {
  Hash,
  Settings,
  Plus,
  ChevronDown,
  LogOut,
} from "lucide-react";

import {
  workspace,
  channels,
  directMessages,
  currentUser,
} from "../../data/mockData";

function Sidebar({
  selectedChannel,
  onChannelSelect,
  selectedDM,
  onDMSelect,
}) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleChannelSelect = (channel) => {
    onChannelSelect(channel);
    onDMSelect(null);
  };

  const handleDMSelect = (user) => {
    onDMSelect(user);
  };

  return (
    <aside className="sidebar">
      {/* =========================
          WORKSPACE HEADER
          ========================= */}
      <div className="workspace-header">
        <div className="workspace-logo">
          {workspace.initials}
        </div>

        <div className="workspace-info">
          <strong>{workspace.name}</strong>
          <span>Workspace</span>
        </div>

        <ChevronDown size={17} />
      </div>

      {/* =========================
          CHANNELS
          ========================= */}
      <div className="sidebar-section">
        <div className="sidebar-section-header">
          <span>CHANNELS</span>

          <button
            type="button"
            className="icon-button small"
          >
            <Plus size={15} />
          </button>
        </div>

        {channels.map((channel) => {
          const isActive =
            selectedChannel?.id === channel.id &&
            !selectedDM;

          return (
            <button
              key={channel.id}
              type="button"
              className={`sidebar-item ${
                isActive ? "active" : ""
              }`}
              onClick={() =>
                handleChannelSelect(channel)
              }
            >
              <Hash size={17} />
              <span>{channel.name}</span>
            </button>
          );
        })}
      </div>

      {/* =========================
          DIRECT MESSAGES
          ========================= */}
      <div className="sidebar-section">
        <div className="sidebar-section-header">
          <span>DIRECT MESSAGES</span>

          <button
            type="button"
            className="icon-button small"
          >
            <Plus size={15} />
          </button>
        </div>

        {directMessages.map((user) => {
          const isActive =
            selectedDM?.id === user.id;

          return (
            <button
              key={user.id}
              type="button"
              className={`sidebar-item ${
                isActive ? "active" : ""
              }`}
              onClick={() =>
                handleDMSelect(user)
              }
            >
              <span
                className={`presence-dot ${user.status}`}
              />

              <span>{user.name}</span>
            </button>
          );
        })}
      </div>

      {/* =========================
          BOTTOM SECTION
          ========================= */}
      <div className="sidebar-bottom">
        <button
          type="button"
          className="sidebar-item"
        >
          <Settings size={17} />
          <span>Settings</span>
        </button>

        <div className="sidebar-user">
          <div className="avatar">
            {currentUser.initials}
          </div>

          <div>
            <strong>{currentUser.name}</strong>

            <span>
              <span className="online-indicator" />
              Online
            </span>
          </div>
        </div>

        <button
          type="button"
          className="sidebar-logout-button"
          onClick={handleLogout}
        >
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;