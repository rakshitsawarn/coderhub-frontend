import React, { useState } from "react";
import "/src/python_css/Projects.css";
import { Link } from "react-router-dom";


const projects = [
  {
    name: "Hello World Program",
    description: "Start your Python journey by printing a simple 'Hello World' message.",
    difficulty: "Easy",
    icon: "👋",
    tags: ["Python", "Basics"],
    duration: "10 minutes"
  },
  {
    name: "Simple Calculator",
    description: "Create a calculator that performs addition, subtraction, multiplication, and division.",
    difficulty: "Easy",
    icon: "🧮",
    tags: ["Python", "Arithmetic"],
    duration: "1 day"
  },
  {
    name: "Temperature Converter",
    description: "Convert temperatures between Celsius, Fahrenheit, and Kelvin using basic input and output.",
    difficulty: "Easy",
    icon: "🌡️",
    tags: ["Python", "Functions"],
    duration: "1 day"
  },
  {
    name: "Number Guessing Game",
    description: "Develop a simple game where the user guesses a randomly generated number.",
    difficulty: "Easy",
    icon: "🎯",
    tags: ["Python", "Random"],
    duration: "1 day"
  },
  {
    name: "Dice Roller Simulator",
    description: "Simulate rolling dice with random numbers and display results.",
    difficulty: "Easy",
    icon: "🎲",
    tags: ["Python", "Random"],
    duration: "1 day"
  },
  {
    name: "Countdown Timer",
    description: "Build a timer that counts down from a user-specified number of seconds.",
    difficulty: "Easy",
    icon: "⏱️",
    tags: ["Python", "Time"],
    duration: "1 day"
  },
  {
    name: "Simple Alarm Clock",
    description: "Create a Python program that rings an alarm after a set time.",
    difficulty: "Easy",
    icon: "⏰",
    tags: ["Python", "Time"],
    duration: "1 day"
  },
  {
    name: "Rock Paper Scissors Game",
    description: "Develop a fun Rock-Paper-Scissors game against the computer.",
    difficulty: "Easy",
    icon: "✊✋✌️",
    tags: ["Python", "Conditionals"],
    duration: "1 day"
  },
  {
    name: "Quiz Application",
    description: "Make a command-line quiz app that checks answers and gives a score.",
    difficulty: "Easy",
    icon: "🧠",
    tags: ["Python", "Lists"],
    duration: "2 days"
  },
  {
    name: "To-Do List CLI App",
    description: "Create a text-based to-do list that lets users add, view, and delete tasks.",
    difficulty: "Easy",
    icon: "✅",
    tags: ["Python", "File Handling"],
    duration: "2 days"
  },

  // 🟡 INTERMEDIATE PROJECTS
  {
    name: "Password Generator",
    description: "Generate strong random passwords with letters, numbers, and symbols.",
    difficulty: "Intermediate",
    icon: "🔐",
    tags: ["Python", "Random", "String"],
    duration: "2 days"
  },
  {
    name: "File Organizer",
    description: "Automatically organize files in folders based on file type.",
    difficulty: "Intermediate",
    icon: "🗂️",
    tags: ["Python", "OS"],
    duration: "2-3 days"
  },
  {
    name: "Weather App",
    description: "Fetch and display real-time weather data using an API like OpenWeatherMap.",
    difficulty: "Intermediate",
    icon: "🌤️",
    tags: ["Python", "API", "Requests"],
    duration: "3 days"
  },
  {
    name: "YouTube Video Downloader",
    description: "Download YouTube videos using the pytube library.",
    difficulty: "Intermediate",
    icon: "📹",
    tags: ["Python", "pytube"],
    duration: "3 days"
  },
  {
    name: "Expense Tracker",
    description: "Track your expenses and generate daily or monthly reports.",
    difficulty: "Intermediate",
    icon: "💰",
    tags: ["Python", "CSV"],
    duration: "3-4 days"
  },
  {
    name: "Chatbot",
    description: "Build a rule-based chatbot for FAQs or basic conversation.",
    difficulty: "Intermediate",
    icon: "💬",
    tags: ["Python", "NLP", "Regex"],
    duration: "4 days"
  },
  {
    name: "Flask Blog Website",
    description: "Create a blog website using Flask and SQLite with CRUD operations.",
    difficulty: "Intermediate",
    icon: "📰",
    tags: ["Flask", "SQLite", "HTML"],
    duration: "5-7 days"
  },
  {
    name: "Image Resizer Tool",
    description: "Resize or compress images using Pillow (PIL).",
    difficulty: "Intermediate",
    icon: "🖼️",
    tags: ["Python", "PIL"],
    duration: "3 days"
  },
  {
    name: "Currency Converter",
    description: "Convert between different currencies using a live exchange API.",
    difficulty: "Intermediate",
    icon: "💱",
    tags: ["Python", "API"],
    duration: "2-3 days"
  },
  {
    name: "Email Automation",
    description: "Send bulk emails automatically using Python’s smtplib library.",
    difficulty: "Intermediate",
    icon: "📧",
    tags: ["Python", "SMTP"],
    duration: "3-4 days"
  },
  {
    name: "Sudoku Solver",
    description: "Build a Sudoku puzzle solver using backtracking algorithms.",
    difficulty: "Intermediate",
    icon: "🧩",
    tags: ["Python", "Algorithm"],
    duration: "4-5 days"
  },
  {
    name: "Library Management System",
    description: "Manage books, members, and issued records using file storage or a database.",
    difficulty: "Intermediate",
    icon: "📚",
    tags: ["Python", "SQLite"],
    duration: "4-6 days"
  },
  {
    name: "Voice Assistant",
    description: "Develop a voice-activated assistant using SpeechRecognition.",
    difficulty: "Intermediate",
    icon: "🎙️",
    tags: ["Python", "SpeechRecognition"],
    duration: "5-6 days"
  },
  {
    name: "Tic Tac Toe Game",
    description: "Create a 2-player Tic Tac Toe game with a graphical interface using Tkinter.",
    difficulty: "Intermediate",
    icon: "⭕❌",
    tags: ["Tkinter", "Python"],
    duration: "2-3 days"
  },
  {
    name: "PDF Merger Tool",
    description: "Merge multiple PDF files into one using PyPDF2 library.",
    difficulty: "Intermediate",
    icon: "📄",
    tags: ["Python", "PyPDF2"],
    duration: "2 days"
  },

  // 🔴 ADVANCED PROJECTS
  {
    name: "Face Detection System",
    description: "Use OpenCV and Haar cascades to detect faces in images or live video.",
    difficulty: "Advanced",
    icon: "😎",
    tags: ["OpenCV", "Python", "AI"],
    duration: "5-7 days"
  },
  {
    name: "Currency Note Detector",
    description: "Build a computer vision system to detect fake or real currency notes.",
    difficulty: "Advanced",
    icon: "💵",
    tags: ["Python", "OpenCV", "ML"],
    duration: "10+ days"
  },
  {
    name: "Stock Price Predictor",
    description: "Predict stock prices using LSTM neural networks and financial data.",
    difficulty: "Advanced",
    icon: "📈",
    tags: ["Python", "TensorFlow", "Finance"],
    duration: "7-10 days"
  },
  {
    name: "Object Detection System",
    description: "Train a YOLO or SSD model to detect real-world objects in images.",
    difficulty: "Advanced",
    icon: "🎯",
    tags: ["Python", "Deep Learning", "OpenCV"],
    duration: "10+ days"
  },
  {
    name: "Fake News Classifier",
    description: "Classify news articles as real or fake using NLP and ML algorithms.",
    difficulty: "Advanced",
    icon: "📰",
    tags: ["Python", "NLP", "Sklearn"],
    duration: "7-10 days"
  },
  {
    name: "E-commerce Website with Django",
    description: "Develop a fully functional e-commerce site with cart, orders, and authentication.",
    difficulty: "Advanced",
    icon: "🛒",
    tags: ["Django", "Python", "HTML"],
    duration: "10-14 days"
  },
  {
    name: "AI Chatbot with NLP",
    description: "Build an intelligent chatbot that understands and responds using deep learning models.",
    difficulty: "Advanced",
    icon: "🤖",
    tags: ["Python", "Transformers", "AI"],
    duration: "10+ days"
  },
  {
    name: "Music Recommendation System",
    description: "Recommend songs to users using collaborative filtering and audio features.",
    difficulty: "Advanced",
    icon: "🎵",
    tags: ["Python", "Pandas", "ML"],
    duration: "8-10 days"
  },
  {
    name: "Handwritten Digit Recognizer",
    description: "Train a neural network on the MNIST dataset to recognize handwritten digits.",
    difficulty: "Advanced",
    icon: "✍️",
    tags: ["Python", "TensorFlow", "Deep Learning"],
    duration: "7-10 days"
  },
  {
    name: "Real-Time Chat App with Flask & SocketIO",
    description: "Implement a real-time messaging app with Flask backend and WebSockets.",
    difficulty: "Advanced",
    icon: "💬",
    tags: ["Flask", "SocketIO", "Websockets"],
    duration: "10 days"
  },
  {
    name: "AI Resume Screener",
    description: "Automatically screen resumes using NLP and ranking algorithms.",
    difficulty: "Advanced",
    icon: "📄",
    tags: ["Python", "NLP", "ML"],
    duration: "10+ days"
  },
  {
    name: "Currency Detection System (Definiti Software Inspired)",
    description: "Detect counterfeit banknotes using AI, ORB features, and deep learning.",
    difficulty: "Advanced",
    icon: "💸",
    tags: ["Python", "OpenCV", "AI"],
    duration: "14+ days"
  },
  {
    name: "AI-Based Plagiarism Checker",
    description: "Detect similarity between texts using cosine similarity and NLP models.",
    difficulty: "Advanced",
    icon: "🧾",
    tags: ["Python", "NLP", "Cosine Similarity"],
    duration: "8-10 days"
  },
  {
    name: "Image Stitching Software",
    description: "Combine overlapping images to create panoramas using SIFT and RANSAC.",
    difficulty: "Advanced",
    icon: "🖼️",
    tags: ["Python", "OpenCV", "SIFT"],
    duration: "10 days"
  },
  {
    name: "AI-Powered Brand Analyzer",
    description: "Analyze online reviews and detect fake reviews using sentiment analysis.",
    difficulty: "Advanced",
    icon: "🔍",
    tags: ["Python", "Flask", "NLP"],
    duration: "10+ days"
  },
  {
    name: "Face Recognition Attendance System",
    description: "Mark attendance automatically by recognizing faces through webcam.",
    difficulty: "Advanced",
    icon: "🧑‍💼",
    tags: ["Python", "OpenCV", "Face Recognition"],
    duration: "10+ days"
  },
  {
    name: "AI Currency Converter with Voice Commands",
    description: "Build a currency converter that listens to voice commands and converts instantly.",
    difficulty: "Advanced",
    icon: "🗣️",
    tags: ["Python", "SpeechRecognition", "API"],
    duration: "8-10 days"
  },
  {
    name: "Gesture Controlled Media Player",
    description: "Use hand gestures to play, pause, and control media using OpenCV.",
    difficulty: "Advanced",
    icon: "✋",
    tags: ["Python", "OpenCV", "MediaPipe"],
    duration: "10+ days"
  },
  {
    name: "AI Image Caption Generator",
    description: "Use deep learning to generate captions for images automatically.",
    difficulty: "Advanced",
    icon: "🖼️",
    tags: ["Python", "TensorFlow", "CNN", "RNN"],
    duration: "14+ days"
  },
  {
    name: "Python-Based Cyber Security Scanner",
    description: "Scan websites for vulnerabilities using Python and ethical hacking libraries.",
    difficulty: "Advanced",
    icon: "🕵️‍♂️",
    tags: ["Python", "Networking", "Security"],
    duration: "14+ days"
  },
  {
    name: "AI Document Summarizer",
    description: "Automatically summarize large text documents using NLP and transformers.",
    difficulty: "Advanced",
    icon: "📚",
    tags: ["Python", "NLP", "AI"],
    duration: "10+ days"
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