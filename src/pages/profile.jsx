import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "/src/CSS files/profile.css";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");


  // At the top of your Profile.jsx
  const languageTotals = {
    Python: 250,
    Java: 200,
    "C++": 150,
    C: 100,
    "C#": 80,
    JavaScript: 120,
    Dart: 60,
  };


  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("Please log in first!");
      navigate("/");
      return;
    }

    // Fetch full user profile
    axios
      .get(`https://coderhub-backend-1.onrender.com/api/auth/profile/${userId}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        alert("Unable to fetch profile data");
      });
  }, [navigate]);

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.removeItem("userId");
      localStorage.removeItem("userEmail");
      alert("Logged out successfully!");
      navigate("/");
    }
  };

  if (!user) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="loading-text">Loading your profile...</p>
      </div>
    );
  }

  // Calculate total progress
  const totalSolved = user.languages?.reduce((acc, lang) => acc + lang.solved, 0) || 0;
  const totalProblems = user.languages?.reduce((acc, lang) => {
    const langTotal = languageTotals[lang.name] || lang.total || 0;
    return acc + langTotal;
  }, 0);

  const overallProgress = totalProblems > 0 ? Math.round((totalSolved / totalProblems) * 100) : 0;

  return (
    <div className="profile-container">
      {/* Animated Background */}
      <div className="profile-background">
        <div className="profile-grid"></div>
        <div className="profile-gradient-orb orb-1"></div>
        <div className="profile-gradient-orb orb-2"></div>
        <div className="profile-gradient-orb orb-3"></div>
      </div>

      {/* Header Navigation */}
      <div className="profile-header-nav">
        <button className="back-button-profile" onClick={() => navigate(-1)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </button>
      </div>

      {/* Profile Header */}
      <div className="profile-header-section">
        <div className="profile-card">
          <div className="profile-card-banner"></div>
          <div className="profile-card-content">
            <div className="profile-avatar-section">
              <div className="profile-avatar">
                <span className="avatar-text">{user.full_name?.trim().charAt(0).toUpperCase()}</span>
              </div>
              <div className="profile-user-info">
                <h1 className="profile-user-name">{user.full_name}</h1>
                <p className="profile-user-email">{user.email}</p>
                <div className="profile-user-meta">
                  <div className="meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>{user.phone_number}</span>
                  </div>
                  {user.user_description && (
                    <div className="meta-item description">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      <span>{user.user_description}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <button className="profile-logout-btn" onClick={handleLogout}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              Logout
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="profile-stats-grid">
          <div className="stat-card">
            <div className="stat-icon-wrapper blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <div className="stat-info">
              <p className="stat-label">Total Solved</p>
              <p className="stat-value">{totalSolved}</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrapper purple">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="stat-info">
              <p className="stat-label">Languages</p>
              <p className="stat-value">{user.languages?.length || 0}</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrapper green">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div className="stat-info">
              <p className="stat-label">Progress</p>
              <p className="stat-value">{overallProgress}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="profile-tabs-container">
        <div className="profile-tabs">
          <button
            className={`tab-button ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            Overview
          </button>
          <button
            className={`tab-button ${activeTab === "languages" ? "active" : ""}`}
            onClick={() => setActiveTab("languages")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            Languages
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="profile-content">
        {activeTab === "overview" && (
          <div className="tab-content-panel">
            <div className="welcome-section">
              <h2 className="welcome-title">Welcome back, {user.full_name.split(" ")[0]}!</h2>
              <p className="welcome-subtitle">
                Continue your coding journey and master new skills. You're making excellent progress!
              </p>
            </div>

            <div className="progress-overview-card">
              <h3 className="section-heading">Overall Progress</h3>
              <div className="progress-bar-large">
                <div
                  className="progress-fill-large"
                  style={{ width: `${overallProgress}%` }}
                ></div>
              </div>
              <div className="progress-stats">
                <span className="progress-text">{totalSolved} of {totalProblems} problems solved</span>
                <span className="progress-percentage">{overallProgress}%</span>
              </div>
            </div>

            {user.languages && user.languages.length > 0 && (
              <div className="quick-stats-card">
                <h3 className="section-heading">Quick Stats</h3>
                <div className="quick-stats-list">
                  {user.languages.slice(0, 3).map((lang, i) => {
                    // Use languageTotals map to get correct total
                    const totalForLang = languageTotals[lang.name] || lang.total || 0;
                    const percent = Math.round((lang.solved / totalForLang) * 100);

                    return (
                      <div key={i} className="quick-stat-item">
                        <div className="quick-stat-header">
                          <span className="quick-stat-name">{lang.name}</span>
                          <span className="quick-stat-percent">{percent}%</span>
                        </div>
                        <div className="quick-progress-bar">
                          <div
                            className="quick-progress-fill"
                            style={{ width: `${percent}%` }}
                          ></div>
                        </div>
                        <span className="quick-stat-count">{lang.solved} / {totalForLang} solved</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "languages" && (
          <div className="tab-content-panel">
            <div className="languages-header">
              <h2 className="section-title">Language Proficiency</h2>
              <p className="section-subtitle">Track your progress across different programming languages</p>
            </div>

            {user.languages && user.languages.length > 0 ? (
              <div className="languages-grid">
                {user.languages.map((lang, i) => {
                  // Use languageTotals for correct total
                  const totalForLang = languageTotals[lang.name] || lang.total || 0;
                  const percent = totalForLang > 0 ? Math.round((lang.solved / totalForLang) * 100) : 0;

                  return (
                    <div key={i} className="language-card">
                      <div className="language-card-header">
                        <h4 className="language-name">{lang.name}</h4>
                        <span className="language-badge">{percent}%</span>
                      </div>
                      <div className="language-progress-section">
                        <div className="language-progress-bar">
                          <div
                            className="language-progress-fill"
                            style={{ width: `${percent}%` }}
                          ></div>
                        </div>
                        <div className="language-stats">
                          <span className="problems-solved">{lang.solved} solved</span>
                          <span className="problems-total">of {totalForLang}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="empty-state">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <p className="empty-state-text">No language progress data available yet.</p>
                <p className="empty-state-subtext">Start solving problems to see your progress here!</p>
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;