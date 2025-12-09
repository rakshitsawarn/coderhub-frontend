import React, { useState } from "react";
import "../css_files/Java.css";
import { useNavigate, Link } from "react-router-dom";


function Java() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const getLink = (name) => {
    switch (name) {
      case "Basics":
        return "/java/basicsjava";
      case "Intermediate":
        return "/java/intermediatejava";
      case "Advanced":
        return "/java/advancejava";
      case "Practice Questions":
        return "/java/practicejava";
      case "Projects":
        return "/java/projectsjava";
      case "Learning Roadmap":
        return "/java/learningroadmapjava";
      case "Interview Questions":
        return "/java/interviewQ";
      default:
        return "#";
    }
  };

  const cards = [
    {
      title: "Basics",
      description: "Master Basics of Java programming",
      icon: "🔰",
      color: "#667eea",
      topics: ["OOP", "Loops", "Arrays", "Classes"]
    },
    {
      title: "Intermediate",
      description: "Master Intermediate concepts of Java programming",
      icon: "⚙️",
      color: "#764ba2",
      topics: ["Collections", "Threads", "Exceptions Handling", "JDBC"]
    },
    {
      title: "Advanced",
      description: "Master Advanced topics of Java programming",
      icon: "🚀",
      color: "#f093fb",
      topics: ["Spring Boot", "JPA", "Microservices", "Design Patterns"]
    },
    {
      title: "Practice Questions",
      description: "Sharpen your logic with coding problems",
      icon: "💻",
      color: "#4facfe",
      topics: ["Easy", "Medium", "Hard", "Expert"]
    },
    {
      title: "Interview Questions",
      description: "Prepare for placements with real questions",
      icon: "🎯",
      color: "#f5576c",
      topics: ["FAQs", "Coding Tests", "Company-wise", "Tips"]
    },
    {
      title: "Projects",
      description: "Build practical projects to apply concepts",
      icon: "🧩",
      color: "#43e97b",
      topics: ["ATM Simulation", "Student Management System", "RESTful web service"]
    },
    {
      title: "Learning Roadmap",
      description: "Follow a structured guide to master Java",
      icon: "🛣️",
      color: "#fa709a",
      topics: ["Beginner", "Intermediate", "Advanced", "Expert"]
    },
  ];

  return (
    <div className="c-page-container">

      {/* Profile Circle */}
      <Link to="/pages/profile" className="profile-circle">
        <div className="profile-avatar">
          <span className="profile-text">👤</span>
        </div>
        <div className="profile-status"></div>
      </Link>

      {/* Animated Background */}
      <div className="c-background">
        <div className="c-grid-pattern"></div>
        <div className="c-gradient-orb orb-1"></div>
        <div className="c-gradient-orb orb-2"></div>
        <div className="c-gradient-orb orb-3"></div>
      </div>

      {/* Hero Section */}
      <div className="c-hero">
        <div className="c-hero-badge">
          <span className="badge-icon">Java</span>
          <span className="badge-text">Programming Language</span>
        </div>
        <h1 className="c-title">
          Practice Java Programming
        </h1>
        <p className="c-subtitle">
          Master the foundation of programming with comprehensive resources from basics to advanced concepts
        </p>
        <div className="c-stats">
          <div className="stat-box">
            <span className="stat-number">7</span>
            <span className="stat-label">Modules</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <span className="stat-number">100+</span>
            <span className="stat-label">Topics</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <span className="stat-number">40+</span>
            <span className="stat-label">Projects</span>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="c-card-grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`c-card ${hoveredCard === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="c-card-inner">
              {/* Card Header */}
              <div className="c-card-header">
                <div className="c-card-icon" style={{ background: card.color }}>
                  {card.icon}
                </div>
                <div className="c-card-number">0{index + 1}</div>
              </div>

              {/* Card Content */}
              <h2 className="c-card-title">{card.title}</h2>
              <p className="c-card-description">{card.description}</p>

              {/* Topics Pills */}
              <div className="c-topics">
                {card.topics.map((topic, idx) => (
                  <span key={idx} className="topic-pill">
                    {topic}
                  </span>
                ))}
              </div>

              {/* Card Button */}
              <button
                className="c-card-btn"
                style={{ background: card.color }}
                onClick={() => navigate(getLink(card.title))}
              >
                <span>Explore Module</span>
                <span className="btn-arrow">→</span>
              </button>

              {/* Hover Overlay */}
              <div className="c-card-overlay" style={{ background: card.color }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="c-cta-section">
        <h2>Ready to Master Java Programming?</h2>
        <p>Start your journey from fundamentals to advanced concepts</p>
      </div>
    </div>
  );
}

export default Java;