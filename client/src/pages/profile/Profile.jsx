import {
  User,
  Mail,
  Shield,
  Circle,
  LogOut,
  Edit3,
} from "lucide-react";

import { currentUser } from "../../data/mockData";
import { useAuth } from "../../context/AuthContext";

function Profile() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div>
          <p className="profile-eyebrow">ACCOUNT</p>
          <h1>Your Profile</h1>
          <p>
            Manage your TeamFlow profile and account information.
          </p>
        </div>

        <button className="profile-edit-button">
          <Edit3 size={17} />
          Edit Profile
        </button>
      </div>

      <div className="profile-grid">
        {/* Profile Card */}
        <section className="profile-card profile-main-card">
          <div className="profile-avatar-large">
            {currentUser.initials}
          </div>

          <h2>{currentUser.name}</h2>

          <div className="profile-status">
            <Circle size={9} fill="currentColor" />
            <span>{currentUser.status}</span>
          </div>

          <p className="profile-role">
            {currentUser.role}
          </p>
        </section>

        {/* Account Information */}
        <section className="profile-card">
          <div className="profile-card-title">
            <User size={19} />
            <h3>Account Information</h3>
          </div>

          <div className="profile-info-list">
            <div className="profile-info-item">
              <span>Name</span>
              <strong>{currentUser.name}</strong>
            </div>

            <div className="profile-info-item">
              <span>Email</span>
              <strong>mukund@teamflow.dev</strong>
            </div>

            <div className="profile-info-item">
              <span>Role</span>
              <strong>{currentUser.role}</strong>
            </div>

            <div className="profile-info-item">
              <span>Status</span>
              <strong className="profile-online">
                <Circle size={8} fill="currentColor" />
                Online
              </strong>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="profile-card">
          <div className="profile-card-title">
            <Shield size={19} />
            <h3>Security</h3>
          </div>

          <div className="profile-security-content">
            <div>
              <strong>Password</strong>
              <p>
                Your account password is protected.
              </p>
            </div>

            <button className="profile-secondary-button">
              Change Password
            </button>
          </div>
        </section>

        {/* Account Actions */}
        <section className="profile-card danger-card">
          <div className="profile-card-title">
            <LogOut size={19} />
            <h3>Account Actions</h3>
          </div>

          <p>
            Sign out of your current TeamFlow session.
          </p>

          <button
            className="profile-logout-button"
            onClick={handleLogout}
          >
            <LogOut size={17} />
            Logout
          </button>
        </section>
      </div>
    </div>
  );
}

export default Profile;