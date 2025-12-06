import React from "react";
import "/src/css_files/Courses.css";
import { Link } from "react-router-dom";

import { Lock, Sparkles, Crown, Star, Zap } from "lucide-react";

const NoPremium = () => {
  return (
    <div className="no-premium-container">

      {/* Profile Circle */}
      <Link to="/pages/profile" className="profile-circle">
        <div className="profile-avatar">
          <span className="profile-text">👤</span>
        </div>
        <div className="profile-status"></div>
      </Link>


      {/* Animated Background */}
      <div className="premium-background">
        <div className="premium-grid"></div>
        <div className="premium-orb orb-1"></div>
        <div className="premium-orb orb-2"></div>
        <div className="premium-orb orb-3"></div>
      </div>


      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="float-icon float-1">
          <Crown className="icon" />
        </div>
        <div className="float-icon float-2">
          <Star className="icon" />
        </div>
        <div className="float-icon float-3">
          <Zap className="icon" />
        </div>
        <div className="float-icon float-4">
          <Sparkles className="icon" />
        </div>
      </div>




      {/* Main Content */}
      <div className="premium-content">
        {/* Lock Icon with Animation */}
        <div className="lock-wrapper">
          <div className="lock-circle">
            <div className="lock-pulse"></div>
            <div className="lock-pulse pulse-2"></div>
            <Lock className="lock-icon" />
          </div>
        </div>



        {/* Main Title */}
        <h1 className="premium-title">
          No <span className="gradient-text">Premium Courses</span> for You
        </h1>



        {/* Features List */}
        <div className="premium-features">
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <Crown className="feature-icon" />
            </div>
            <span className="feature-text">Exclusive Premium Courses</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <Sparkles className="feature-icon" />
            </div>
            <span className="feature-text">AI-Powered Learning</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <Star className="feature-icon" />
            </div>
            <span className="feature-text">Industry Certifications</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <Zap className="feature-icon" />
            </div>
            <span className="feature-text">Priority Support</span>
          </div>
        </div>



      </div>
    </div>
  );
};

export default NoPremium;