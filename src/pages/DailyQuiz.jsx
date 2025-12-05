import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "/src/CSS files/DailyQuiz.css";
import { Link } from "react-router-dom";

import CodeIDE from "./CodeIDE";
import {
  Brain,
  Clock,
  CheckCircle,
  AlertCircle,
  Trophy,
  Zap,
  Target,
  Code,
} from "lucide-react";

const API_BASE = "https://coderhub-backend-1.onrender.com/api/dailyquiz";

const DailyQuiz = () => {
  const [userId, setUserId] = useState(null);
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showIDE, setShowIDE] = useState(false);
  const [locked, setLocked] = useState(false);

  // Security states
  const [alertMessage, setAlertMessage] = useState("");
  const [cheatingAttempts, setCheatingAttempts] = useState(0);
  const cheatCooldownRef = useRef(false);

  useEffect(() => {
    const storedId = localStorage.getItem("userId");
    if (storedId) setUserId(storedId);
  }, []);

  // Security functions
  const requestFullScreen = () => {
    const elem = document.documentElement;
    if (
      !document.fullscreenElement &&
      !document.webkitFullscreenElement &&
      !document.mozFullScreenElement &&
      !document.msFullscreenElement
    ) {
      if (elem.requestFullscreen) elem.requestFullscreen();
      else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen();
      else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
      else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
    }
  };

  const raiseCheat = (msg) => {
    if (cheatCooldownRef.current) return;

    setAlertMessage(msg);
    setCheatingAttempts((p) => p + 1);
    cheatCooldownRef.current = true;

    setTimeout(() => {
      cheatCooldownRef.current = false;
    }, 2500);
  };

  // Enhanced security setup
  const setupSecurity = () => {
    // Enhanced copy/cut/paste prevention
    const blockCopyPaste = (e) => {
      e.preventDefault();
      e.stopPropagation();
      raiseCheat("⚠️ Copy/Paste/Cut blocked!");
      return false;
    };

    // Add comprehensive event listeners
    document.addEventListener("copy", blockCopyPaste);
    document.addEventListener("cut", blockCopyPaste);
    document.addEventListener("paste", blockCopyPaste);

    // Disable right-click context menu
    const blockContextMenu = (e) => {
      e.preventDefault();
      raiseCheat("⚠️ Right-click disabled!");
      return false;
    };
    document.addEventListener("contextmenu", blockContextMenu);

    // Disable text selection
    const blockSelection = (e) => {
      e.preventDefault();
      return false;
    };
    document.addEventListener("selectstart", blockSelection);
    document.addEventListener("mousedown", blockSelection);

    // Apply CSS to disable text selection
    const disableTextSelection = () => {
      const style = document.createElement('style');
      style.id = 'no-selection-style';
      style.textContent = `
        * {
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          user-select: none !important;
          -webkit-touch-callout: none !important;
          -webkit-tap-highlight-color: transparent !important;
        }
        
        .daily-quiz-container * {
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          user-select: none !important;
        }
      `;
      document.head.appendChild(style);
    };
    disableTextSelection();

    // Enhanced Screenshot / Screen Capture Detection
    const handleKeyDown = async (e) => {
      // Detect PrintScreen and common screenshot shortcuts
      if (
        e.key === "PrintScreen" ||
        (e.ctrlKey && e.shiftKey && (e.key === "S" || e.key === "3" || e.key === "4")) ||
        (e.metaKey && e.shiftKey && (e.key === "3" || e.key === "4")) || // Mac
        (e.altKey && e.key === "PrintScreen") // Alt + PrintScreen
      ) {
        e.preventDefault();
        e.stopPropagation();
        raiseCheat("⚠️ Screenshot Attempt Detected!");

        // Attempt to overwrite clipboard
        try {
          await navigator.clipboard.writeText("Screenshot blocked for security reasons");
        } catch (err) {
          console.warn("Clipboard clear failed:", err);
        }

        // Visual feedback
        document.body.style.filter = "blur(8px)";
        document.body.style.transition = "filter 0.3s ease";
        setTimeout(() => {
          document.body.style.filter = "none";
        }, 3000);
      }

      // Block common developer shortcuts
      if (
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "C" || e.key === "J")) ||
        (e.key === "F12") ||
        (e.ctrlKey && e.key === "u")
      ) {
        e.preventDefault();
        e.stopPropagation();
        raiseCheat("⚠️ Developer tools disabled!");
      }
    };

    // Add event listeners for enhanced protection
    document.addEventListener("keydown", handleKeyDown, true);

    // Prevent drag and drop
    const blockDragDrop = (e) => {
      e.preventDefault();
      return false;
    };
    document.addEventListener("dragstart", blockDragDrop);
    document.addEventListener("drop", blockDragDrop);
    document.addEventListener("dragover", blockDragDrop);

    // Tab visibility change detection
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setCheatingAttempts((p) => p + 1);
        setAlertMessage("⚠️ You switched tabs!");
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Fullscreen change detection
    const handleFullScreenChange = () => {
      const inFullScreen = !!document.fullscreenElement;
      if (!inFullScreen) {
        setCheatingAttempts((p) => p + 1);
        setAlertMessage("⚠️ You exited fullscreen!");

        const proceed = window.confirm("Re-enter fullscreen to continue");
        if (proceed) requestFullScreen();
      } else {
        setAlertMessage("");
      }
    };
    document.addEventListener("fullscreenchange", handleFullScreenChange);

    // Request fullscreen on component mount
    requestFullScreen();

    // Return cleanup function
    return () => {
      document.removeEventListener("copy", blockCopyPaste);
      document.removeEventListener("cut", blockCopyPaste);
      document.removeEventListener("paste", blockCopyPaste);
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("selectstart", blockSelection);
      document.removeEventListener("mousedown", blockSelection);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("dragstart", blockDragDrop);
      document.removeEventListener("drop", blockDragDrop);
      document.removeEventListener("dragover", blockDragDrop);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("fullscreenchange", handleFullScreenChange);

      // Remove CSS style
      const styleElement = document.getElementById('no-selection-style');
      if (styleElement) {
        styleElement.remove();
      }

      // Restore body styles
      document.body.style.filter = "none";
    };
  };

  useEffect(() => {
    if (!userId) return;

    const fetchQuiz = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API_BASE}/today/${userId}`);
        const quizData = res.data.quiz;

        setQuiz(quizData);
        setMessage(res.data.message);
        setLocked(res.data.locked || false);
      } catch (err) {
        console.error("Error fetching quiz:", err);
        setMessage("Failed to load today's quiz.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [userId]);

  // Setup security when component mounts and quiz is available
  useEffect(() => {
    if (quiz && !locked) {
      const cleanupSecurity = setupSecurity();

      return () => {
        cleanupSecurity();
      };
    }
  }, [quiz, locked]);

  useEffect(() => {
    const autoSubmitOnTabHide = async () => {
      if (document.hidden && quiz && !locked) {
        try {
          const payload = {
            questionId: quiz.question.id || quiz.question._id || quiz.questionId,
            code: "Auto-submitted due to tab switch.",
            output: "",
            language: "N/A",
            executionTime: 0,
            submittedAt: new Date().toISOString(),
          };

          await axios.post(`${API_BASE}/codesubmit/${userId}`, payload);
          console.log("Quiz auto-submitted due to tab change.");
          setLocked(true);
        } catch (err) {
          console.error("Auto-submit failed:", err);
        }
      }
    };

    document.addEventListener("visibilitychange", autoSubmitOnTabHide);
    window.addEventListener("beforeunload", autoSubmitOnTabHide);

    return () => {
      document.removeEventListener("visibilitychange", autoSubmitOnTabHide);
      window.removeEventListener("beforeunload", autoSubmitOnTabHide);
    };
  }, [quiz, userId, locked]);

  const handleCodeSubmit = async ({ code, output, language, executionTime }) => {
    if (!quiz || !quiz.question) {
      alert("No question found to submit code for!");
      return;
    }

    try {
      setLoading(true);
      const payload = {
        questionId: quiz.question.id || quiz.question._id || quiz.questionId,
        code,
        output,
        language,
        executionTime,
        submittedAt: new Date().toISOString(),
        cheatAttempts: cheatingAttempts, // Include cheating attempts in submission
      };

      const res = await axios.post(`${API_BASE}/codesubmit/${userId}`, payload);
      if (res.data.success) {
        alert("✅ Code submitted successfully!");
        setShowIDE(false);
        setLocked(true);
      } else {
        alert("❌ Submission failed: " + (res.data.message || "unknown"));
      }
    } catch (err) {
      console.error("Error saving code submission:", err);
      alert("❌ Failed to save submission (see console).");
    } finally {
      setLoading(false);
    }
  };

  if (locked) {
    return (
      <div className="daily-quiz-container">
        <div className="quiz-background">
          <div className="quiz-grid"></div>
          <div className="quiz-orb orb-1"></div>
          <div className="quiz-orb orb-2"></div>
        </div>
        <div className="locked-wrapper">
          <div className="locked-icon-wrapper">
            <CheckCircle className="locked-icon" />
          </div>
          <h2 className="locked-title">✅ Quiz Completed!</h2>
          <p className="locked-text">
            You've already attempted today's quiz. Come back after 24 hours for the next challenge!
          </p>
          <div className="locked-timer">
            <Clock className="timer-icon" />
            <span>Next challenge available tomorrow</span>
          </div>
        </div>
      </div>
    );
  }

  if (showIDE && quiz) {
    return (
      <div className="daily-quiz-ide-container">
        <CodeIDE
          initialQuestion={quiz.question}
          onSubmitCode={handleCodeSubmit}
        />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="daily-quiz-container">
        <div className="quiz-background">
          <div className="quiz-grid"></div>
          <div className="quiz-orb orb-1"></div>
          <div className="quiz-orb orb-2"></div>
        </div>
        <div className="loading-wrapper">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading today's challenge...</p>
        </div>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="daily-quiz-container">
        <div className="quiz-background">
          <div className="quiz-grid"></div>
          <div className="quiz-orb orb-1"></div>
          <div className="quiz-orb orb-2"></div>
        </div>
        <div className="error-wrapper">
          <AlertCircle className="error-icon" />
          <p className="error-text">{message || "No quiz available today."}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="daily-quiz-container">
      {/* Security Alert */}
      {alertMessage && (
        <div className="security-alert">
          <AlertCircle className="alert-icon" />
          <span>{alertMessage}</span>
          <span className="cheat-count">(Attempts: {cheatingAttempts})</span>
        </div>
      )}

      {/* Profile Circle */}
      <Link to="/pages/profile" className="profile-circle">
        <div className="profile-avatar">
          <span className="profile-text">👤</span>
        </div>
        <div className="profile-status"></div>
      </Link>

      {/* Animated Background */}
      <div className="quiz-background">
        <div className="quiz-grid"></div>
        <div className="quiz-orb orb-1"></div>
        <div className="quiz-orb orb-2"></div>
        <div className="quiz-orb orb-3"></div>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="float-icon float-1">
          <Brain className="icon" />
        </div>
        <div className="float-icon float-2">
          <Trophy className="icon" />
        </div>
        <div className="float-icon float-3">
          <Target className="icon" />
        </div>
      </div>

      {/* Main Quiz Card */}
      <div className="quiz-card">
        {/* Header */}
        <div className="quiz-header">
          <div className="header-badge">
            <Zap className="badge-icon" />
            <span className="badge-text">Daily Challenge</span>
          </div>
          <h2 className="quiz-title">
            <span className="gradient-text">Today's Quiz</span>
          </h2>
          <div className="quiz-date">
            <Clock className="date-icon" />
            <span>{quiz.date}</span>
          </div>
        </div>

        {/* Status Message */}
        {message && (
          <div className="status-message">
            <AlertCircle className="status-icon" />
            <span>{message}</span>
          </div>
        )}

        {/* Security Info */}
        <div className="security-info">
          <AlertCircle className="security-icon" />
          <span>Copy, paste, and screenshots are disabled for security</span>
        </div>

        {/* Question Section */}
        <div className="question-section">
          <div className="question-header">
            <Brain className="question-icon" />
            <h3 className="question-title">{quiz.question.title}</h3>
          </div>
          {quiz.question.description && (
            <p className="question-description">{quiz.question.description}</p>
          )}
        </div>

        {/* Solve in IDE Button */}
        <button className="solve-ide-button" onClick={() => setShowIDE(true)}>
          <div className="button-background"></div>
          <div className="button-content">
            <Code className="button-icon" />
            <span className="button-text">Solve in IDE</span>
          </div>
          <div className="button-shine"></div>
        </button>

        {/* Footer */}
        <div className="quiz-footer">
          <Trophy className="footer-icon" />
          <p className="footer-text">
            Solve this challenge to maintain your streak! 🔥
          </p>
        </div>
      </div>
    </div>
  );
};

export default DailyQuiz;