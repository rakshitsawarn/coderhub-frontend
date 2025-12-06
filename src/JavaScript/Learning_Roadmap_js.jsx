import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "/src/javascript_css/learning_roadmap_js.css";
import { Link } from "react-router-dom";


function JavaRoadmap() {
  const navigate = useNavigate();
  const [hoveredModule, setHoveredModule] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const modules = [
    {
      title: "Basics",
      link: "/JavaScript/basics_js",
      icon: "🔰",
      duration: "2-3 weeks",
      topics: 15,
      description: "Variables, data types, control flow"
    },
    {
      title: "Intermediate",
      link: "/JavaScript/intermediate_js",
      icon: "⚙️",
      duration: "3-4 weeks",
      topics: 20,
      description: "Functions, OOP, file handling"
    },
    {
      title: "Advanced",
      link: "/JavaScript/advance_js",
      icon: "🚀",
      duration: "4-5 weeks",
      topics: 25,
      description: "Decorators, generators, async"
    },
    {
      title: "Practice Questions",
      link: "/JavaScript/practice_js",
      icon: "💻",
      duration: "Ongoing",
      topics: 100,
      description: "Coding challenges & exercises"
    },
    {
      title: "Interview Questions",
      link: "/JavaScript/interviewQ_js",
      icon: "🎯",
      duration: "2 weeks",
      topics: 50,
      description: "Company-wise interview prep"
    },
    {
      title: "Projects",
      link: "/JavaScript/projects_js",
      icon: "🧩",
      duration: "Ongoing",
      topics: 30,
      description: "Real-world applications"
    },
  ];

  const projects = [
    { name: "Simple Calculator", difficulty: "Easy", time: "1-2 days", icon: "🧮" },
    { name: "To-Do List App", difficulty: "Easy", time: "2-3 days", icon: "✅" },
    { name: "Weather App (Fetch API)", difficulty: "Medium", time: "3-4 days", icon: "🌦️" },
    { name: "Expense Tracker", difficulty: "Medium", time: "4-5 days", icon: "💰" },
    { name: "Quiz Application", difficulty: "Medium", time: "4-6 days", icon: "🧠" },
    { name: "E-Commerce Shopping Cart", difficulty: "Advanced", time: "7-10 days", icon: "🛒" },
    { name: "Chat Application (Node.js + Socket.io)", difficulty: "Advanced", time: "10-12 days", icon: "💬" },
    { name: "Portfolio Website", difficulty: "Advanced", time: "7-9 days", icon: "💼" }
  ];

  const courseOutcome = [
    { text: "Master core JavaScript concepts from basics to advanced", icon: "💡" },
    { text: "Develop interactive web applications using DOM and Events", icon: "🌐" },
    { text: "Work confidently with APIs, Async/Await, and modern ES6+ features", icon: "⚙️" },
    { text: "Build real-world full-stack applications using Node.js and MERN", icon: "🏗️" },
    { text: "Apply JavaScript for problem-solving and interview preparation", icon: "💼" },
    { text: "Gain hands-on experience through projects and portfolio building", icon: "🎓" },
  ];


  const stats = [
    { number: "6", label: "Modules" },
    { number: "100+", label: "Topics" },
    { number: "12-16", label: "Weeks" },
    { number: "30+", label: "Projects" }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy": return "#43e97b";
      case "Medium": return "#fcd34d";
      case "Advanced": return "#f5576c";
      default: return "#667eea";
    }
  };

  return (
    <div className="roadmap-container">
      {/* Profile Circle */}
      <Link to="/pages/profile" className="profile-circle">
        <div className="profile-avatar">
          <span className="profile-text">👤</span>
        </div>
        <div className="profile-status"></div>
      </Link>
      {/* Background Elements */}
      <div className="roadmap-background">
        <div className="grid-pattern"></div>
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
      </div>

      {/* Hero Section */}
      <div className="roadmap-hero">
        <div className="hero-badge">
          <span className="badge-icon">🐍</span>
          <span className="badge-text">JavaScript Programming</span>
        </div>
        <h1 className="roadmap-title">
          Your <span>Learning Roadmap</span>
        </h1>
        <p className="roadmap-subtitle">
          Follow this structured path from beginner to advance JavaScript developer
        </p>

        {/* Stats */}
        <div className="roadmap-stats">
          {stats.map((stat, idx) => (
            <React.Fragment key={idx}>
              <div className="stat-box">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
              {idx < stats.length - 1 && <div className="stat-divider"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Learning Path */}
      <div className="learning-path-section">
        <div className="section-header">
          <h2 className="section-title">Learning Path</h2>

        </div>

        <div className="modules-timeline">
          {modules.map((mod, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-connector">
                {idx < modules.length - 1 && <div className="connector-line"></div>}
                <div className="timeline-dot">{idx + 1}</div>
              </div>

              <div
                className={`module-card ${hoveredModule === idx ? 'hovered' : ''}`}
                onClick={() => navigate(mod.link)}
                onMouseEnter={() => setHoveredModule(idx)}
                onMouseLeave={() => setHoveredModule(null)}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="module-icon">{mod.icon}</div>
                <div className="module-content">
                  <h3 className="module-title">{mod.title}</h3>
                  <p className="module-description">{mod.description}</p>
                  <div className="module-meta">
                    <span className="meta-item">
                      <span className="meta-icon">⏱️</span>
                      {mod.duration}
                    </span>
                    <span className="meta-item">
                      <span className="meta-icon">📚</span>
                      {mod.topics} topics
                    </span>
                  </div>
                </div>
                <div className="module-arrow">→</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-showcase">
        <div className="section-header">
          <h2 className="section-title">Suggested Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className={`project-showcase-card ${hoveredProject === idx ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="project-icon-large">{proj.icon}</div>
              <h3 className="project-name">{proj.name}</h3>
              <div className="project-info">
                <span
                  className="project-difficulty"
                  style={{
                    background: getDifficultyColor(proj.difficulty),
                    boxShadow: `0 4px 15px ${getDifficultyColor(proj.difficulty)}40`
                  }}
                >
                  {proj.difficulty}
                </span>
                <span className="project-time">
                  <span className="time-icon">⏱️</span>
                  {proj.time}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Course Outcome */}
      <div className="course-outcome-section">
        <div className="outcome-content">
          <h2 className="outcome-title">What You'll Achieve</h2>
          <p className="outcome-subtitle">By completing this roadmap, you will:</p>

          <div className="outcome-grid">
            {courseOutcome.map((item, idx) => (
              <div
                key={idx}
                className="outcome-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="outcome-icon">{item.icon}</div>
                <p className="outcome-text">{item.text}</p>
                <div className="outcome-check">✓</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="roadmap-cta">
        <h2>Ready to Start Your Journey?</h2>
        <p>Begin with the basics and work your way to becoming a JavaScript expert</p>
        <button
          className="cta-button"
          onClick={() => navigate(modules[0].link)}
        >
          Start Learning Now
          <span className="cta-icon">🚀</span>
        </button>
      </div>
    </div>
  );
}

export default JavaRoadmap;
