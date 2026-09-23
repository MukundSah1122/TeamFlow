import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import {
  Hash,
  MessageCircle,
  Users,
  ArrowRight,
  Activity,
} from "lucide-react";

import {
  recentConversations,
  channels,
  channelMessages,
} from "../../data/mockData";

import Conversation from "../../components/chat/Conversation";

const MESSAGES_STORAGE_KEY = "teamflow_channel_messages";

function Dashboard() {
  const {
    selectedChannel,
    setSelectedChannel,
  } = useOutletContext();

  const [messagesByChannel, setMessagesByChannel] =
    useState(() => {
      try {
        const savedMessages = localStorage.getItem(
          MESSAGES_STORAGE_KEY
        );

        if (savedMessages) {
          return JSON.parse(savedMessages);
        }
      } catch (error) {
        console.error(
          "Failed to load saved messages:",
          error
        );
      }

      return channelMessages;
    });

  useEffect(() => {
    try {
      localStorage.setItem(
        MESSAGES_STORAGE_KEY,
        JSON.stringify(messagesByChannel)
      );
    } catch (error) {
      console.error(
        "Failed to save messages:",
        error
      );
    }
  }, [messagesByChannel]);

  const handleSendMessage = (newMessage) => {
    setMessagesByChannel((currentMessages) => ({
      ...currentMessages,
      [selectedChannel.id]: [
        ...(currentMessages[selectedChannel.id] || []),
        newMessage,
      ],
    }));
  };

  const currentMessages =
    messagesByChannel[selectedChannel.id] || [];

  return (
    <div className="dashboard">
      {/* =========================
          DASHBOARD HEADER
          ========================= */}
      <section className="welcome-section">
        <div>
          <span className="eyebrow">
            TEAMFLOW WORKSPACE
          </span>

          <h1>
            Welcome back, Mukund 👋
          </h1>

          <p>
            Stay connected with your team, manage
            conversations, and keep your work moving
            forward.
          </p>
        </div>

        <div className="activity-badge">
          <Activity size={16} />
          All systems operational
        </div>
      </section>

      {/* =========================
          STATS
          ========================= */}
      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue">
            <Hash size={21} />
          </div>

          <div>
            <span>Channels</span>
            <strong>4</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">
            <MessageCircle size={21} />
          </div>

          <div>
            <span>Conversations</span>
            <strong>12</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <Users size={21} />
          </div>

          <div>
            <span>Members</span>
            <strong>24</strong>
          </div>
        </div>
      </section>

      {/* =========================
          CHANNELS
          ========================= */}
      <section className="section-heading">
        <div>
          <h2>Channels</h2>

          <p>
            Select a channel to open the conversation.
          </p>
        </div>
      </section>

      <section className="conversation-grid">
        {channels.map((channel) => {
          const isSelected =
            selectedChannel.id === channel.id;

          return (
            <button
              key={channel.id}
              type="button"
              className={`conversation-card ${
                isSelected ? "selected" : ""
              }`}
              onClick={() =>
                setSelectedChannel(channel)
              }
            >
              <div className="conversation-icon">
                <Hash size={20} />
              </div>

              <div className="conversation-content">
                <h3>#{channel.name}</h3>

                <strong>
                  {channel.name === "general"
                    ? "General Team Discussion"
                    : channel.name === "development"
                    ? "Development"
                    : channel.name === "design"
                    ? "Design"
                    : "Random"}
                </strong>

                <p>{channel.description}</p>
              </div>

              <div className="card-arrow">
                <ArrowRight size={17} />
              </div>
            </button>
          );
        })}
      </section>

      {/* =========================
          ACTIVE CONVERSATION
          ========================= */}
      <section className="dashboard-conversation">
        <Conversation
          channel={selectedChannel}
          messages={currentMessages}
          onSendMessage={handleSendMessage}
        />
      </section>

      {/* =========================
          RECENT CONVERSATIONS
          ========================= */}
      <section className="section-heading">
        <div>
          <h2>Recent conversations</h2>

          <p>
            Jump back into your team's latest discussions.
          </p>
        </div>

        <button
          type="button"
          className="text-button"
        >
          View all
          <ArrowRight size={16} />
        </button>
      </section>

      <section className="conversation-grid">
        {recentConversations.map((conversation) => (
          <div
            className="conversation-card"
            key={conversation.channel}
          >
            <div className="conversation-icon">
              <Hash size={20} />
            </div>

            <div className="conversation-content">
              <h3>
                #{conversation.channel}
              </h3>

              <strong>
                {conversation.title}
              </strong>

              <p>
                {conversation.description}
              </p>

              <span>
                {conversation.members} members
              </span>
            </div>

            <div className="card-arrow">
              <ArrowRight size={17} />
            </div>
          </div>
        ))}
      </section>

      {/* =========================
          WORKSPACE ACTIVITY
          ========================= */}
      <section className="activity-panel">
        <div className="section-heading compact">
          <div>
            <h2>Workspace activity</h2>

            <p>
              Latest activity across your workspace.
            </p>
          </div>
        </div>

        <div className="activity-item">
          <div className="avatar small">
            A
          </div>

          <div>
            <strong>Alex</strong>

            <span>
              started a discussion in #development
            </span>
          </div>

          <time>10 min ago</time>
        </div>

        <div className="activity-item">
          <div className="avatar small">
            R
          </div>

          <div>
            <strong>Rahul</strong>

            <span>
              shared an update in #design
            </span>
          </div>

          <time>32 min ago</time>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;