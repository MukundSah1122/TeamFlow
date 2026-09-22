import {
  Hash,
  MessageCircle,
  Settings,
  Plus,
  ChevronDown,
} from "lucide-react";

import {
  workspace,
  channels,
  directMessages,
  currentUser,
} from "../../data/mockData";

function Sidebar() {
  return (
    <aside className="sidebar">
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

      <div className="sidebar-section">
        <div className="sidebar-section-header">
          <span>CHANNELS</span>

          <button className="icon-button small">
            <Plus size={15} />
          </button>
        </div>

        {channels.map((channel, index) => (
          <button
            key={channel.id}
            className={`sidebar-item ${
              index === 0 ? "active" : ""
            }`}
          >
            <Hash size={17} />
            <span>{channel.name}</span>
          </button>
        ))}
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-header">
          <span>DIRECT MESSAGES</span>

          <button className="icon-button small">
            <Plus size={15} />
          </button>
        </div>

        {directMessages.map((user) => (
          <button key={user.id} className="sidebar-item">
            <span
              className={`presence-dot ${user.status}`}
            />

            <span>{user.name}</span>
          </button>
        ))}
      </div>

      <div className="sidebar-bottom">
        <button className="sidebar-item">
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
      </div>
    </aside>
  );
}

export default Sidebar;