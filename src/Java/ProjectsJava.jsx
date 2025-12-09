import React, { useState } from "react";
import "../java_css/Projects_java.css";
import { Link } from "react-router-dom";


const projects = [
  {
    name: "Hello Java Program",
    description: "Print a simple 'Hello, Java!' message to understand basic syntax and setup.",
    difficulty: "Easy",
    icon: "👋",
    tags: ["Java", "Basics"],
    duration: "10 minutes"
  },
  {
    name: "Simple Calculator",
    description: "Create a console-based calculator that performs arithmetic operations.",
    difficulty: "Easy",
    icon: "🧮",
    tags: ["Java", "OOP", "Scanner"],
    duration: "1 day"
  },
  {
    name: "Temperature Converter",
    description: "Convert between Celsius, Fahrenheit, and Kelvin using user input.",
    difficulty: "Easy",
    icon: "🌡️",
    tags: ["Java", "Conditionals"],
    duration: "1 day"
  },
  {
    name: "Number Guessing Game",
    description: "Generate a random number and let the user guess until correct.",
    difficulty: "Easy",
    icon: "🎯",
    tags: ["Java", "Random", "Loops"],
    duration: "1 day"
  },
  {
    name: "Bank Account Simulator",
    description: "Simulate deposits, withdrawals, and balance inquiry using OOP concepts.",
    difficulty: "Easy",
    icon: "🏦",
    tags: ["Java", "Classes", "OOP"],
    duration: "2 days"
  },
  {
    name: "Student Grade Calculator",
    description: "Take marks as input and calculate total, average, and grade.",
    difficulty: "Easy",
    icon: "📚",
    tags: ["Java", "Arrays", "Scanner"],
    duration: "1-2 days"
  },
  {
    name: "Simple Library System",
    description: "Create a basic library management system using classes and lists.",
    difficulty: "Easy",
    icon: "📖",
    tags: ["Java", "OOP", "Collections"],
    duration: "2-3 days"
  },
  {
    name: "ATM Interface",
    description: "Simulate an ATM with PIN verification, withdrawal, and balance inquiry.",
    difficulty: "Easy",
    icon: "🏧",
    tags: ["Java", "Conditionals", "Loops"],
    duration: "2 days"
  },
  {
    name: "To-Do List App (CLI)",
    description: "Create a console-based to-do list where users can add, remove, and view tasks.",
    difficulty: "Easy",
    icon: "✅",
    tags: ["Java", "File Handling"],
    duration: "2 days"
  },
  {
    name: "Mini Quiz Game",
    description: "Ask multiple-choice questions and calculate the user's score.",
    difficulty: "Easy",
    icon: "🧠",
    tags: ["Java", "Arrays", "Scanner"],
    duration: "2 days"
  },

  // 🟡 INTERMEDIATE PROJECTS
  {
    name: "File Organizer",
    description: "Organize files into folders based on their extensions using Java I/O.",
    difficulty: "Intermediate",
    icon: "🗂️",
    tags: ["Java", "File IO"],
    duration: "2-3 days"
  },
  {
    name: "Expense Tracker",
    description: "Track daily expenses and generate a monthly summary report.",
    difficulty: "Intermediate",
    icon: "💰",
    tags: ["Java", "Collections", "File IO"],
    duration: "3-4 days"
  },
  {
    name: "Hotel Reservation System",
    description: "Manage room booking, check-in, and check-out operations.",
    difficulty: "Intermediate",
    icon: "🏨",
    tags: ["Java", "OOP", "Collections"],
    duration: "4 days"
  },
  {
    name: "Bank Management System (JDBC)",
    description: "Create a database-driven system for managing bank accounts using JDBC.",
    difficulty: "Intermediate",
    icon: "💳",
    tags: ["Java", "JDBC", "MySQL"],
    duration: "4-5 days"
  },
  {
    name: "Employee Payroll System",
    description: "Calculate salaries, bonuses, and deductions for employees.",
    difficulty: "Intermediate",
    icon: "💼",
    tags: ["Java", "OOP", "JDBC"],
    duration: "4-6 days"
  },
  {
    name: "Online Voting System",
    description: "Build a secure voting application with user authentication.",
    difficulty: "Intermediate",
    icon: "🗳️",
    tags: ["Java", "File IO", "OOP"],
    duration: "4 days"
  },
  {
    name: "Chat Application (Console)",
    description: "Implement a simple console chat between two users using sockets.",
    difficulty: "Intermediate",
    icon: "💬",
    tags: ["Java", "Networking", "Sockets"],
    duration: "3-5 days"
  },
  {
    name: "Inventory Management System",
    description: "Manage stock levels, product data, and generate inventory reports.",
    difficulty: "Intermediate",
    icon: "📦",
    tags: ["Java", "JDBC", "OOP"],
    duration: "5 days"
  },
  {
    name: "Simple E-commerce CLI",
    description: "Simulate product listing, cart management, and order placement.",
    difficulty: "Intermediate",
    icon: "🛍️",
    tags: ["Java", "OOP", "Collections"],
    duration: "5-6 days"
  },
  {
    name: "Library System with JDBC",
    description: "Manage books, members, and issued books using database integration.",
    difficulty: "Intermediate",
    icon: "📚",
    tags: ["Java", "JDBC", "MySQL"],
    duration: "5-6 days"
  },

  // 🔵 ADVANCED PROJECTS
  {
    name: "Multithreaded Downloader",
    description: "Download files in parallel using multiple threads for speed.",
    difficulty: "Advanced",
    icon: "⚡",
    tags: ["Java", "Multithreading", "Networking"],
    duration: "5-6 days"
  },
  {
    name: "Real-Time Chat Server",
    description: "Build a real-time chat application using Java sockets and threading.",
    difficulty: "Advanced",
    icon: "💻",
    tags: ["Java", "Networking", "Threads"],
    duration: "7 days"
  },
  {
    name: "Student Result Management System",
    description: "Web-based system using JSP & Servlets to manage student marks and results.",
    difficulty: "Advanced",
    icon: "🎓",
    tags: ["Java", "Servlets", "JSP", "MySQL"],
    duration: "7-10 days"
  },
  {
    name: "Online Banking System",
    description: "Full-stack banking portal using Servlets and JDBC.",
    difficulty: "Advanced",
    icon: "🏦",
    tags: ["Java", "Servlets", "JDBC"],
    duration: "10 days"
  },
  {
    name: "Hospital Management System",
    description: "Maintain patient, doctor, and appointment data with a database backend.",
    difficulty: "Advanced",
    icon: "🏥",
    tags: ["Java", "JDBC", "OOP"],
    duration: "10 days"
  },
  {
    name: "Flight Reservation System",
    description: "Implement a ticket booking and cancellation system.",
    difficulty: "Advanced",
    icon: "✈️",
    tags: ["Java", "JSP", "JDBC"],
    duration: "8-10 days"
  },
  {
    name: "E-commerce Website (Spring Boot)",
    description: "Build an online shopping site with product catalog, cart, and payments.",
    difficulty: "Advanced",
    icon: "🛒",
    tags: ["Java", "Spring Boot", "MySQL"],
    duration: "10-14 days"
  },
  {
    name: "RESTful API for Notes App",
    description: "Develop a REST API using Spring Boot for managing notes.",
    difficulty: "Advanced",
    icon: "🗒️",
    tags: ["Java", "Spring Boot", "REST"],
    duration: "5-7 days"
  },
  {
    name: "Online Course Portal",
    description: "Create an LMS with user login, course listing, and progress tracking.",
    difficulty: "Advanced",
    icon: "🎓",
    tags: ["Java", "Spring MVC", "JPA"],
    duration: "10-12 days"
  },
  {
    name: "Blog Application (Spring Boot + Thymeleaf)",
    description: "Develop a full-featured blogging platform with CRUD operations.",
    difficulty: "Advanced",
    icon: "📰",
    tags: ["Java", "Spring Boot", "Thymeleaf"],
    duration: "7-10 days"
  },

  // 🔴 EXPERT PROJECTS
  {
    name: "Hotel Booking Web App (Spring Boot + Hibernate)",
    description: "Manage room bookings, availability, and user accounts via a web interface.",
    difficulty: "Expert",
    icon: "🏨",
    tags: ["Java", "Spring Boot", "Hibernate"],
    duration: "10-14 days"
  },
  {
    name: "Online Examination Portal",
    description: "Create a secure examination system with admin and student modules.",
    difficulty: "Expert",
    icon: "📝",
    tags: ["Java", "Spring Boot", "MySQL"],
    duration: "10+ days"
  },
  {
    name: "Movie Recommendation System",
    description: "Recommend movies based on user preferences using Java and ML integration.",
    difficulty: "Expert",
    icon: "🎬",
    tags: ["Java", "Machine Learning", "API"],
    duration: "12+ days"
  },
  {
    name: "Chatbot for Customer Support",
    description: "Integrate a chatbot using NLP APIs and Spring Boot for a helpdesk system.",
    difficulty: "Expert",
    icon: "🤖",
    tags: ["Java", "Spring Boot", "NLP"],
    duration: "10+ days"
  },
  {
    name: "Blockchain-Based Voting System",
    description: "Implement a blockchain ledger for secure voting using Java.",
    difficulty: "Expert",
    icon: "🗳️",
    tags: ["Java", "Blockchain"],
    duration: "14+ days"
  },
  {
    name: "Face Recognition Attendance System (JavaFX)",
    description: "Integrate OpenCV with JavaFX for attendance marking via face recognition.",
    difficulty: "Expert",
    icon: "🧑‍💼",
    tags: ["Java", "OpenCV", "JavaFX"],
    duration: "14+ days"
  },
  {
    name: "Microservices-Based E-commerce App",
    description: "Build a scalable microservice e-commerce system using Spring Cloud.",
    difficulty: "Expert",
    icon: "☁️",
    tags: ["Java", "Spring Cloud", "Microservices"],
    duration: "14+ days"
  },
  {
    name: "AI-Powered Resume Screener",
    description: "Use Java and ML APIs to screen resumes automatically based on job roles.",
    difficulty: "Expert",
    icon: "📄",
    tags: ["Java", "AI", "APIs"],
    duration: "10+ days"
  },
  {
    name: "Real-Time Vehicle Tracking System",
    description: "Track vehicles using GPS and update locations in real-time.",
    difficulty: "Expert",
    icon: "🚗",
    tags: ["Java", "Spring Boot", "WebSockets"],
    duration: "12+ days"
  },
  {
    name: "Cyber Security Vulnerability Scanner",
    description: "Develop a web scanner to detect security loopholes using Java networking.",
    difficulty: "Expert",
    icon: "🕵️‍♂️",
    tags: ["Java", "Networking", "Security"],
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