import {
  Search,
  Bell,
  HelpCircle,
} from "lucide-react";

import { currentUser } from "../../data/mockData";

function TopBar() {
  return (
    <header className="topbar">
      <div className="search-container">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search conversations..."
        />

        <span className="search-shortcut">
          Ctrl K
        </span>
      </div>

      <div className="topbar-actions">
        <button className="icon-button">
          <HelpCircle size={20} />
        </button>

        <button className="icon-button notification-button">
          <Bell size={20} />
          <span className="notification-dot" />
        </button>

        <div className="topbar-user">
          <div className="avatar">
            {currentUser.initials}
          </div>

          <div className="topbar-user-info">
            <strong>{currentUser.name}</strong>
            <span>{currentUser.role}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopBar;