import {
  Search,
  Bell,
  HelpCircle,
  User,
  Hash,
  MessageCircle,
} from "lucide-react";

import {
  currentUser,
  channels,
  directMessages,
  channelMessages,
  directMessageHistory,
} from "../../data/mockData";

function TopBar({
  searchQuery,
  onSearchChange,
  onSearchSelect,
}) {
  const query = searchQuery.trim().toLowerCase();

  const peopleResults = query
    ? directMessages.filter((user) =>
        user.name.toLowerCase().includes(query)
      )
    : [];

  const channelResults = query
    ? channels.filter(
        (channel) =>
          channel.name
            .toLowerCase()
            .includes(query) ||
          channel.description
            .toLowerCase()
            .includes(query)
      )
    : [];

  const messageResults = [];

  if (query) {
    Object.entries(channelMessages).forEach(
      ([channelId, messages]) => {
        const channel = channels.find(
          (item) => item.id === channelId
        );

        if (!channel) {
          return;
        }

        messages.forEach((message) => {
          if (
            message.message
              .toLowerCase()
              .includes(query)
          ) {
            messageResults.push({
              type: "message",
              source: "channel",
              data: channel,
              message,
            });
          }
        });
      }
    );

    Object.entries(directMessageHistory).forEach(
      ([userId, messages]) => {
        const user = directMessages.find(
          (item) => item.id === userId
        );

        if (!user) {
          return;
        }

        messages.forEach((message) => {
          if (
            message.message
              .toLowerCase()
              .includes(query)
          ) {
            messageResults.push({
              type: "message",
              source: "dm",
              data: user,
              message,
            });
          }
        });
      }
    );
  }

  const hasResults =
    peopleResults.length > 0 ||
    channelResults.length > 0 ||
    messageResults.length > 0;

  return (
    <header className="topbar">
      {/* =========================
          SEARCH
          ========================= */}
      <div className="search-container">
        <Search size={18} />

        <input
          type="text"
          value={searchQuery}
          onChange={(event) =>
            onSearchChange(event.target.value)
          }
          placeholder="Search conversations..."
          aria-label="Search conversations"
          autoComplete="off"
        />

        {searchQuery && (
          <button
            type="button"
            className="search-clear-button"
            onClick={() => onSearchChange("")}
            aria-label="Clear search"
          >
            ×
          </button>
        )}

        <span className="search-shortcut">
          Ctrl K
        </span>

        {/* =========================
            SEARCH RESULTS
            ========================= */}
        {query && (
          <div className="search-results">
            {!hasResults ? (
              <div className="search-no-results">
                <Search size={20} />

                <strong>
                  No results found
                </strong>

                <span>
                  Try searching for a person,
                  channel, or message.
                </span>
              </div>
            ) : (
              <>
                {/* PEOPLE */}
                {peopleResults.length > 0 && (
                  <div className="search-result-group">
                    <div className="search-result-heading">
                      People
                    </div>

                    {peopleResults.map((user) => (
                      <button
                        key={user.id}
                        type="button"
                        className="search-result-item"
                        onClick={() =>
                          onSearchSelect({
                            type: "dm",
                            data: user,
                          })
                        }
                      >
                        <div className="search-result-icon">
                          <User size={17} />
                        </div>

                        <div className="search-result-content">
                          <strong>
                            {user.name}
                          </strong>

                          <span>
                            Direct message
                          </span>
                        </div>

                        <span
                          className={`presence-dot ${user.status}`}
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* CHANNELS */}
                {channelResults.length > 0 && (
                  <div className="search-result-group">
                    <div className="search-result-heading">
                      Channels
                    </div>

                    {channelResults.map(
                      (channel) => (
                        <button
                          key={channel.id}
                          type="button"
                          className="search-result-item"
                          onClick={() =>
                            onSearchSelect({
                              type: "channel",
                              data: channel,
                            })
                          }
                        >
                          <div className="search-result-icon">
                            <Hash size={17} />
                          </div>

                          <div className="search-result-content">
                            <strong>
                              #{channel.name}
                            </strong>

                            <span>
                              {channel.description}
                            </span>
                          </div>
                        </button>
                      )
                    )}
                  </div>
                )}

                {/* MESSAGES */}
                {messageResults.length > 0 && (
                  <div className="search-result-group">
                    <div className="search-result-heading">
                      Messages
                    </div>

                    {messageResults
                      .slice(0, 6)
                      .map((result) => (
                        <button
                          key={result.message.id}
                          type="button"
                          className="search-result-item"
                          onClick={() =>
                            onSearchSelect(
                              result
                            )
                          }
                        >
                          <div className="search-result-icon">
                            <MessageCircle
                              size={17}
                            />
                          </div>

                          <div className="search-result-content">
                            <strong>
                              {result.source ===
                              "channel"
                                ? `#${result.data.name}`
                                : result.data.name}
                            </strong>

                            <span>
                              {result.message.message}
                            </span>
                          </div>
                        </button>
                      ))}
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>

      {/* =========================
          TOPBAR ACTIONS
          ========================= */}
      <div className="topbar-actions">
        <button
          type="button"
          className="icon-button"
          title="Help"
        >
          <HelpCircle size={20} />
        </button>

        <button
          type="button"
          className="icon-button notification-button"
          title="Notifications"
        >
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