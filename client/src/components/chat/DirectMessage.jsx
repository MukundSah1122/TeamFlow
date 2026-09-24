import EmptyState from "../common/EmptyState";

import {
  Send,
  Smile,
  Paperclip,
} from "lucide-react";

import { currentUser } from "../../data/mockData";

function DirectMessage({
  user,
  messages,
  onSendMessage,
}) {
  const handleSendMessage = (event) => {
    event.preventDefault();

    const formData = new FormData(
      event.currentTarget
    );

    const messageText = formData
      .get("message")
      ?.toString()
      .trim();

    if (!messageText) {
      return;
    }

    const newMessage = {
      id: `${user.id}-${Date.now()}`,
      userId: currentUser.id,
      userName: currentUser.name,
      initials: currentUser.initials,
      message: messageText,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      }),
    };

    onSendMessage(newMessage);

    event.currentTarget.reset();
  };

  return (
    <section className="conversation">
      {/* =========================
          DM HEADER
          ========================= */}
      <header className="conversation-header">
        <div className="conversation-title">
          <div className="dm-header-avatar">
            {user.initials}
          </div>

          <div>
            <h2>{user.name}</h2>

            <p className="dm-status">
              <span
                className={`presence-dot ${user.status}`}
              />
              {user.status === "online"
                ? "Active now"
                : "Offline"}
            </p>
          </div>
        </div>
      </header>

      {/* =========================
          MESSAGES
          ========================= */}
      <div className="conversation-messages">
        {messages.length === 0 ? (
  <EmptyState
    title={`Start a conversation with ${user.name}`}
    message={`This is the beginning of your direct message history with ${user.name}. Send a message to start chatting.`}
  />
) : (
          messages.map((message) => {
            const isCurrentUser =
              message.userId === currentUser.id;

            return (
              <article
                key={message.id}
                className={`message ${
                  isCurrentUser
                    ? "message-current-user"
                    : ""
                }`}
              >
                <div className="message-avatar">
                  {message.initials}
                </div>

                <div className="message-content">
                  <div className="message-meta">
                    <strong>
                      {message.userName}
                    </strong>

                    <span>
                      {message.timestamp}
                    </span>
                  </div>

                  <p>{message.message}</p>
                </div>
              </article>
            );
          })
        )}
      </div>

      {/* =========================
          MESSAGE COMPOSER
          ========================= */}
      <form
        className="message-composer"
        onSubmit={handleSendMessage}
      >
        <button
          type="button"
          className="composer-action"
          title="Attach file"
        >
          <Paperclip size={18} />
        </button>

        <input
          name="message"
          type="text"
          placeholder={`Message ${user.name}`}
          aria-label={`Message ${user.name}`}
          autoComplete="off"
        />

        <button
          type="button"
          className="composer-action"
          title="Add emoji"
        >
          <Smile size={18} />
        </button>

        <button
          type="submit"
          className="send-message-button"
          title="Send message"
        >
          <Send size={17} />
        </button>
      </form>
    </section>
  );
}

export default DirectMessage;