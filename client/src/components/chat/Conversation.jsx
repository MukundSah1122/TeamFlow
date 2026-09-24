import EmptyState from "../common/EmptyState";

import {
  Send,
  Users,
  Smile,
  Paperclip,
  Hash,
} from "lucide-react";

import { currentUser } from "../../data/mockData";

function Conversation({
  channel,
  messages,
  onSendMessage,
}) {
  const handleSendMessage = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const messageText = formData
      .get("message")
      ?.toString()
      .trim();

    if (!messageText) {
      return;
    }

    const newMessage = {
      id: `${channel.id}-${Date.now()}`,
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
          CONVERSATION HEADER
          ========================= */}
      <header className="conversation-header">
        <div className="conversation-title">
          <div className="conversation-channel-icon">
            <Hash size={19} />
          </div>

          <div>
            <h2>{channel.name}</h2>

            <p>{channel.description}</p>
          </div>
        </div>

       <div className="conversation-actions">
  <div className="conversation-member-count">
    <Users size={17} />
    <span>{channel.members} members</span>
  </div>

  <button
    type="button"
    className="conversation-action-button"
    title="Members"
  >
    <Users size={17} />
  </button>
</div>
      </header>

      {/* =========================
          MESSAGES
          ========================= */}
      <div className="conversation-messages">
        {messages.length === 0 ? (
  <EmptyState
  title={`Welcome to #${channel.name}`}
  message={
    channel.description ||
    "Start the conversation and collaborate with your team."
  }
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
          placeholder={`Message #${channel.name}`}
          aria-label={`Message #${channel.name}`}
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

export default Conversation;