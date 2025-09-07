import React, { useState } from 'react';
import '../CSS/pageCSS/Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  
  // Sample user data
  const userData = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    joinDate: "January 2022",
    isHost: false,
    eventsCreated: 0
  };

  // Form state
  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSave = () => {
    // Here you would typically save the data to your backend
    alert("Profile updated successfully!");
    setIsEditing(false);
  };

  const becomeHost = () => {
    alert("Redirecting to host registration...");
    // Here you would redirect to host registration page
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>My Profile</h1>
        <p>Manage your account settings and preferences</p>
      </div>

      <div className="profile-content">
        {/* Sidebar */}
        <div className="profile-sidebar">
          <div className="user-card">
            <div className="avatar-container">
              <img src={userData.avatar} alt={userData.name} className="avatar" />
              <button className="edit-avatar-btn">
                <i className="fas fa-camera"></i>
              </button>
            </div>
            <h2>{userData.name}</h2>
            <p>{userData.email}</p>
            <div className="member-since">
              <i className="fas fa-calendar-alt"></i>
              Member since {userData.joinDate}
            </div>
          </div>

          <div className="sidebar-menu">
            <button 
              className={`menu-item ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              <i className="fas fa-user"></i>
              Profile Information
            </button>
            <button 
              className={`menu-item ${activeTab === 'security' ? 'active' : ''}`}
              onClick={() => setActiveTab('security')}
            >
              <i className="fas fa-lock"></i>
              Password & Security
            </button>
            <button 
              className={`menu-item ${activeTab === 'host' ? 'active' : ''}`}
              onClick={() => setActiveTab('host')}
            >
              <i className="fas fa-crown"></i>
              Host Dashboard
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="profile-main">
          {activeTab === 'profile' && (
            <div className="tab-content">
              <div className="tab-header">
                <h2>Profile Information</h2>
                {!isEditing ? (
                  <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
                    <i className="fas fa-edit"></i> Edit Profile
                  </button>
                ) : (
                  <div className="action-buttons">
                    <button className="btn btn-outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </button>
                    <button className="btn btn-primary" onClick={handleSave}>
                      Save Changes
                    </button>
                  </div>
                )}
              </div>

              <div className="form-section">
                <div className="form-group">
                  <label>Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <div className="read-only-field">{userData.name}</div>
                  )}
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <div className="read-only-field">{userData.email}</div>
                  )}
                </div>

                {!isEditing && (
                  <div className="info-card">
                    <i className="fas fa-info-circle"></i>
                    <p>You can update your profile information by clicking the "Edit Profile" button.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="tab-content">
              <div className="tab-header">
                <h2>Password & Security</h2>
              </div>

              <div className="form-section">
                <div className="form-group">
                  <label>Current Password</label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleInputChange}
                    placeholder="Enter your current password"
                  />
                </div>

                <div className="form-group">
                  <label>New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleInputChange}
                    placeholder="Enter your new password"
                  />
                </div>

                <div className="form-group">
                  <label>Confirm New Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your new password"
                  />
                </div>

                <button className="btn btn-primary">
                  Update Password
                </button>

                <div className="security-tips">
                  <h3>Password Requirements</h3>
                  <ul>
                    <li>Minimum 8 characters</li>
                    <li>At least one uppercase letter</li>
                    <li>At least one number</li>
                    <li>At least one special character</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'host' && (
            <div className="tab-content">
              <div className="tab-header">
                <h2>Host Dashboard</h2>
                {userData.isHost && (
                  <button className="btn btn-primary">
                    <i className="fas fa-plus"></i> Create New Event
                  </button>
                )}
              </div>

              {userData.isHost ? (
                <div className="host-stats">
                  <div className="stat-cards">
                    <div className="stat-card">
                      <div className="stat-icon">
                        <i className="fas fa-calendar"></i>
                      </div>
                      <div className="stat-content">
                        <h3>{userData.eventsCreated}</h3>
                        <p>Events Created</p>
                      </div>
                    </div>

                    <div className="stat-card">
                      <div className="stat-icon">
                        <i className="fas fa-ticket-alt"></i>
                      </div>
                      <div className="stat-content">
                        <h3>128</h3>
                        <p>Tickets Sold</p>
                      </div>
                    </div>

                    <div className="stat-card">
                      <div className="stat-icon">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="stat-content">
                        <h3>4.8</h3>
                        <p>Average Rating</p>
                      </div>
                    </div>
                  </div>

                  <div className="host-actions">
                    <h3>Quick Actions</h3>
                    <div className="action-buttons-grid">
                      <button className="action-btn">
                        <i className="fas fa-plus"></i>
                        <span>Create Event</span>
                      </button>
                      <button className="action-btn">
                        <i className="fas fa-chart-bar"></i>
                        <span>View Analytics</span>
                      </button>
                      <button className="action-btn">
                        <i className="fas fa-wallet"></i>
                        <span>Earnings</span>
                      </button>
                      <button className="action-btn">
                        <i className="fas fa-cog"></i>
                        <span>Host Settings</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="become-host-card">
                  <div className="host-content">
                    <div className="host-icon">
                      <i className="fas fa-crown"></i>
                    </div>
                    <h2>Become an Event Host</h2>
                    <p>Start creating and managing your own events. Reach thousands of attendees and grow your community.</p>
                    <ul className="host-benefits">
                      <li><i className="fas fa-check"></i> Create unlimited events</li>
                      <li><i className="fas fa-check"></i> Sell tickets directly to attendees</li>
                      <li><i className="fas fa-check"></i> Manage registrations and check-ins</li>
                      <li><i className="fas fa-check"></i> Access analytics and insights</li>
                    </ul>
                    <button className="btn btn-primary btn-large" onClick={becomeHost}>
                      Get Started as a Host
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;