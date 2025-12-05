import React, { useState } from "react";
import "/src/JavaScript CSS/projects_js.css";
import { Link } from "react-router-dom";


const projects = [

  {
    name: "Hello JavaScript",
    description: "Print 'Hello, JavaScript!' in the console to understand syntax and environment setup.",
    difficulty: "Easy",
    icon: "👋",
    tags: ["JavaScript", "Basics"],
    duration: "10 minutes"
  },
  {
    name: "Simple Calculator",
    description: "Create a calculator that performs basic arithmetic using prompt inputs and alerts.",
    difficulty: "Easy",
    icon: "🧮",
    tags: ["JavaScript", "Operators", "Functions"],
    duration: "1 day"
  },
  {
    name: "Temperature Converter",
    description: "Convert between Celsius, Fahrenheit, and Kelvin using user input.",
    difficulty: "Easy",
    icon: "🌡️",
    tags: ["JavaScript", "Conditionals", "Functions"],
    duration: "1 day"
  },
  {
    name: "Number Guessing Game",
    description: "Generate a random number and let the user guess until they find the correct number.",
    difficulty: "Easy",
    icon: "🎯",
    tags: ["JavaScript", "Random", "Loops"],
    duration: "1 day"
  },
  {
    name: "Tip Calculator",
    description: "Calculate the total bill and tip based on user input for amount and tip percentage.",
    difficulty: "Easy",
    icon: "💸",
    tags: ["JavaScript", "DOM", "Events"],
    duration: "1 day"
  },
  {
    name: "Digital Clock",
    description: "Create a live digital clock using Date objects and DOM manipulation.",
    difficulty: "Easy",
    icon: "⏰",
    tags: ["JavaScript", "Date", "DOM"],
    duration: "1 day"
  },
  {
    name: "To-Do List (Console)",
    description: "Create a command-line to-do list where users can add, delete, and view tasks.",
    difficulty: "Easy",
    icon: "✅",
    tags: ["JavaScript", "Arrays", "Loops"],
    duration: "2 days"
  },
  {
    name: "Palindrome Checker",
    description: "Check if a given word or sentence is a palindrome using string methods.",
    difficulty: "Easy",
    icon: "🔁",
    tags: ["JavaScript", "Strings", "Conditionals"],
    duration: "1 day"
  },


  {
    name: "To-Do List (Web)",
    description: "Create a browser-based to-do list using DOM manipulation and localStorage.",
    difficulty: "Intermediate",
    icon: "🗒️",
    tags: ["JavaScript", "DOM", "LocalStorage"],
    duration: "2-3 days"
  },
  {
    name: "Weather App",
    description: "Fetch and display live weather data using a public API and async/await.",
    difficulty: "Intermediate",
    icon: "🌦️",
    tags: ["JavaScript", "Fetch API", "Async/Await"],
    duration: "3 days"
  },
  {
    name: "Expense Tracker",
    description: "Track income and expenses with charts and localStorage persistence.",
    difficulty: "Intermediate",
    icon: "💰",
    tags: ["JavaScript", "DOM", "LocalStorage"],
    duration: "3-4 days"
  },
  {
    name: "Quiz App",
    description: "Create a multiple-choice quiz with score calculation and progress tracking.",
    difficulty: "Intermediate",
    icon: "🧠",
    tags: ["JavaScript", "Arrays", "Events"],
    duration: "3-4 days"
  },
  {
    name: "Image Slider",
    description: "Build an image carousel that automatically slides through pictures using JS.",
    difficulty: "Intermediate",
    icon: "🖼️",
    tags: ["JavaScript", "DOM", "Timers"],
    duration: "2-3 days"
  },
  {
    name: "Movie Search App",
    description: "Use OMDb API to search for movies and display results dynamically.",
    difficulty: "Intermediate",
    icon: "🎬",
    tags: ["JavaScript", "API", "Fetch"],
    duration: "3-4 days"
  },
  {
    name: "Form Validator",
    description: "Validate form inputs like email, password, and phone number in real-time.",
    difficulty: "Intermediate",
    icon: "📋",
    tags: ["JavaScript", "DOM", "Events"],
    duration: "2 days"
  },
  {
    name: "Typing Speed Tester",
    description: "Measure typing speed and accuracy using event listeners and timing functions.",
    difficulty: "Intermediate",
    icon: "⌨️",
    tags: ["JavaScript", "Events", "DOM"],
    duration: "3 days"
  },

  // 🔵 ADVANCED PROJECTS
  {
    name: "Music Player",
    description: "Build a custom audio player with play/pause, progress bar, and playlist features.",
    difficulty: "Advanced",
    icon: "🎵",
    tags: ["JavaScript", "DOM", "Audio API"],
    duration: "5 days"
  },
  {
    name: "Chat App (WebSockets)",
    description: "Create a real-time chat app using Node.js and WebSocket communication.",
    difficulty: "Advanced",
    icon: "💬",
    tags: ["JavaScript", "Node.js", "WebSockets"],
    duration: "5-6 days"
  },
  {
    name: "Note Taking App",
    description: "Develop a full CRUD notes app with localStorage and rich text support.",
    difficulty: "Advanced",
    icon: "🗒️",
    tags: ["JavaScript", "CRUD", "LocalStorage"],
    duration: "4-5 days"
  },
  {
    name: "E-commerce Shopping Cart",
    description: "Build a shopping cart with product listing, cart management, and checkout flow.",
    difficulty: "Advanced",
    icon: "🛒",
    tags: ["JavaScript", "DOM", "LocalStorage"],
    duration: "6-7 days"
  },
  {
    name: "Real-Time Weather Dashboard",
    description: "Display real-time weather for multiple cities using APIs and charts.",
    difficulty: "Advanced",
    icon: "🌍",
    tags: ["JavaScript", "API", "Async/Await"],
    duration: "5-6 days"
  },
  {
    name: "Portfolio Website",
    description: "Build a personal portfolio using HTML, CSS, and JavaScript interactivity.",
    difficulty: "Advanced",
    icon: "💼",
    tags: ["JavaScript", "DOM", "Frontend"],
    duration: "5 days"
  },
  {
    name: "Authentication System (JWT)",
    description: "Implement user signup, login, and JWT-based authentication in Node.js.",
    difficulty: "Advanced",
    icon: "🔐",
    tags: ["JavaScript", "Node.js", "JWT"],
    duration: "7 days"
  },
  {
    name: "RESTful API for Blog",
    description: "Develop a RESTful API using Express.js with CRUD endpoints for blog posts.",
    difficulty: "Advanced",
    icon: "📰",
    tags: ["JavaScript", "Node.js", "Express"],
    duration: "6-7 days"
  },

  // 🔴 EXPERT PROJECTS
  {
    name: "Real-Time Chat App (Socket.io)",
    description: "Build a scalable real-time chat app with Node.js, Express, and Socket.io.",
    difficulty: "Expert",
    icon: "💻",
    tags: ["JavaScript", "Node.js", "Socket.io"],
    duration: "10 days"
  },
  {
    name: "Task Manager (MERN Stack)",
    description: "Create a full-stack task management app with MongoDB, Express, React, and Node.",
    difficulty: "Expert",
    icon: "📋",
    tags: ["JavaScript", "MERN", "Full Stack"],
    duration: "10-12 days"
  },
  {
    name: "E-commerce Web App (MERN)",
    description: "Build a complete e-commerce website with authentication, cart, and admin panel.",
    difficulty: "Expert",
    icon: "🛍️",
    tags: ["JavaScript", "MERN", "Full Stack"],
    duration: "14 days"
  },
  {
    name: "Real-Time Stock Tracker",
    description: "Fetch and update live stock prices using WebSockets and chart.js.",
    difficulty: "Expert",
    icon: "📈",
    tags: ["JavaScript", "WebSockets", "Charts"],
    duration: "10+ days"
  },
  {
    name: "Social Media Dashboard",
    description: "Develop a dashboard showing analytics and posts with charts and APIs.",
    difficulty: "Expert",
    icon: "📊",
    tags: ["JavaScript", "API", "Frontend"],
    duration: "12 days"
  },
  {
    name: "AI Chatbot (OpenAI API)",
    description: "Integrate OpenAI API to create an AI-powered chatbot with conversation memory.",
    difficulty: "Expert",
    icon: "🤖",
    tags: ["JavaScript", "API", "AI"],
    duration: "12+ days"
  },
  {
    name: "Online Code Editor",
    description: "Build a web-based IDE supporting HTML, CSS, and JavaScript live preview.",
    difficulty: "Expert",
    icon: "💻",
    tags: ["JavaScript", "Frontend", "DOM"],
    duration: "14 days"
  },
  {
    name: "Project Management App (MERN + Auth)",
    description: "Build a team project board with authentication and real-time task updates.",
    difficulty: "Expert",
    icon: "📁",
    tags: ["JavaScript", "MERN", "Auth"],
    duration: "14+ days"
  },
  {
    name: "Real-Time Collaboration Document Editor",
    description: "Use WebSockets to create a collaborative Google Docs-style editor.",
    difficulty: "Expert",
    icon: "📝",
    tags: ["JavaScript", "WebSockets", "Node.js"],
    duration: "14+ days"
  },
  {
    name: "AI-Powered Image Caption Generator",
    description: "Integrate a machine learning API to generate captions for uploaded images.",
    difficulty: "Expert",
    icon: "🖼️",
    tags: ["JavaScript", "AI", "APIs"],
    duration: "14+ days"
  }
];



function Projects() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [filterDifficulty, setFilterDifficulty] = useState("All");

  const getDifficultyColor = (level) => {
    switch (level) {
      case "Easy":
        return "#4CAF50";
      case "Intermediate":
        return "#FFC107";
      case "Advanced":
        return "#F44336";
      default:
        return "#9E9E9E";
    }
  };

  const filteredProjects = filterDifficulty === "All"
    ? projects
    : projects.filter(p => p.difficulty === filterDifficulty);

  return (
    <div className="projects-container">
      {/* Profile Circle */}
      <Link to="/pages/profile" className="profile-circle">
        <div className="profile-avatar">
          <span className="profile-text">👤</span>
        </div>
        <div className="profile-status"></div>
      </Link>
      {/* Animated Background */}
      <div className="background-grid"></div>
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>

      {/* Header Section */}
      <header className="projects-header">
        <div className="header-badge">
          <span className="badge-icon">🚀</span>
          <span className="badge-text">Hands-On Projects</span>
        </div>
        <h1>
          Build Real <span>Projects</span>
        </h1>
        <p className="subtitle">
          Choose from beginner to advanced projects, build them on your device, and submit your GitHub repo for rewards.
        </p>

        {/* Stats */}
        <div className="projects-stats">
          <div className="stat-item">
            <span className="stat-number">{projects.length}</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Difficulty Levels</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <span className="stat-label">Students Building</span>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          {["All", "Easy", "Intermediate", "Advanced"].map((level) => (
            <button
              key={level}
              className={`filter-btn ${filterDifficulty === level ? 'active' : ''}`}
              onClick={() => setFilterDifficulty(level)}
            >
              {level}
            </button>
          ))}
        </div>
      </header>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${hoveredCard === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="card-inner">
              {/* Project Icon */}
              <div className="project-icon-wrapper">
                <div
                  className="project-icon"
                  style={{ background: getDifficultyColor(project.difficulty) }}
                >
                  {project.icon}
                </div>
                <span
                  className="difficulty-badge"
                  style={{
                    backgroundColor: getDifficultyColor(project.difficulty),
                    boxShadow: `0 4px 15px ${getDifficultyColor(project.difficulty)}40`
                  }}
                >
                  {project.difficulty}
                </span>
              </div>

              {/* Project Header */}
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                <div className="project-duration">
                  <span className="duration-icon">⏱️</span>
                  {project.duration}
                </div>
              </div>

              {/* Project Description */}
              <p className="project-description">{project.description}</p>

              {/* Tech Tags */}
              <div className="tech-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}


              {/* Hover Overlay */}
              <div
                className="card-overlay"
                style={{ background: getDifficultyColor(project.difficulty) }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="no-results">
          <div className="no-results-icon">🔍</div>
          <h3>No projects found</h3>
          <p>Try selecting a different difficulty level</p>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="projects-cta">
        <h2>Have Your Own Project Idea?</h2>
        <p>Submit your custom project and get it reviewed by our mentors</p>
        <a href="mailto:connect@de-fake.com" className="cta-button">
          Submit Your Project
          <span className="cta-icon">📤</span>
        </a>
      </div>

    </div>
  );
}

export default Projects;