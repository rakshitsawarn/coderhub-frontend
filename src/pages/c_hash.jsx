import React, { useState } from "react";
import "/src/CSS files/C_hash.css";
import { useNavigate, Link } from "react-router-dom";

function CHash() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();


  const getLink = (name) => {
    switch (name) {
      case "Basics":
        return "/c_hash/basics_c_hash";
      case "Intermediate":
        return "/c_hash/intermediate_c_hash";
      case "Advanced":
        return "/c_hash/advanced_c_hash";
      case "Practice Questions":
        return "/c_hash/practice_c_hash";
      case "Projects":
        return "/c_hash/projects_c_hash";
      case "Learning Roadmap":
        return "/c_hash/roadmap_c_hash";
      case "Interview Questions":
        return "/c_hash/interview_questions_c_hash";
      default:
        return "#";
    }
  };


  const cards = [
    {
      title: "Basics",
      description: "Master Basic concepts of C# programming",
      icon: "🔰",
      color: "#667eea",
      topics: ["Classes", "Data Types", "Loops", "Exception Handling"]
    },
    {
      title: "Intermediate",
      description: "Master Intermediate concepts of C# programming",
      icon: "⚙️",
      color: "#764ba2",
      topics: ["Collections", "LINQ", "Interfaces", "File Handling"]
    },
    {
      title: "Advanced",
      description: "Master Advance concepts of C# programming",
      icon: "🚀",
      color: "#f093fb",
      topics: ["Async/Await", "WPF", ".NET Core APIs", "Dependency Injection"]
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
      topics: ["TO-DO App", "Inventory Management", "Games", "Chat Applicaton"]
    },
    {
      title: "Learning Roadmap",
      description: "Follow a structured guide to master C#",
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
          <span className="badge-icon">C#</span>
          <span className="badge-text">Programming Language</span>
        </div>
        <h1 className="c-title">
          Practice C# Programming
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
            <span className="stat-number">50+</span>
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
        <h2>Ready to Master C# Programming?</h2>
        <p>Start your journey from fundamentals to advanced concepts</p>
      </div>
    </div>
  );
}

export default CHash;