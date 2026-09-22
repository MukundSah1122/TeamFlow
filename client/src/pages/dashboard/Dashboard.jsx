import {
  Hash,
  MessageCircle,
  Users,
  ArrowRight,
  Activity,
} from "lucide-react";

import { recentConversations } from "../../data/mockData";

function Dashboard() {
  return (
    <div className="dashboard">
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

      <section className="section-heading">
        <div>
          <h2>Recent conversations</h2>
          <p>Jump back into your team's latest discussions.</p>
        </div>

        <button className="text-button">
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
              <h3>#{conversation.channel}</h3>

              <strong>{conversation.title}</strong>

              <p>{conversation.description}</p>

              <span>
                {conversation.members} members
              </span>
            </div>

            <button className="card-arrow">
              <ArrowRight size={17} />
            </button>
          </div>
        ))}
      </section>

      <section className="activity-panel">
        <div className="section-heading compact">
          <div>
            <h2>Workspace activity</h2>
            <p>Latest activity across your workspace.</p>
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