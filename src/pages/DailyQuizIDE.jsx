import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CodeIDE from "/src/pages/CodeIDE";
import "/src/css_files/dailyquizide.css";

function DailyQuizIDE() {
    const location = useLocation();
    const navigate = useNavigate();
    const [question, setQuestion] = useState(null);

    // Security states
    const [alertMessage, setAlertMessage] = useState("");
    const [cheatingAttempts, setCheatingAttempts] = useState(0);
    const [mediaAccessGranted, setMediaAccessGranted] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);

    // Refs for security
    const cheatCooldownRef = useRef(false);
    const videoElRef = useRef(null);
    const debugVideoRef = useRef(null);
    const canvasRef = useRef(null);
    const cameraRef = useRef(null);
    const audioCtxRef = useRef(null);
    const streamRef = useRef(null);
    const talkingCount = useRef(0);
    const blinkCount = useRef(0);

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
                
                .practice-ide-container * {
                    -webkit-user-select: none !important;
                    -moz-user-select: none !important;
                    -ms-user-select: none !important;
                    user-select: none !important;
                }
                
                .monaco-editor * {
                    -webkit-user-select: text !important;
                    -moz-user-select: text !important;
                    -ms-user-select: text !important;
                    user-select: text !important;
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
            setIsFullScreen(inFullScreen);

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

    // Media setup for proctoring
    const initMedia = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { width: 640, height: 480, facingMode: "user" },
                audio: true,
            });

            setMediaAccessGranted(true);
            streamRef.current = stream;

            // Hidden video element for processing
            const videoEl = document.createElement("video");
            videoEl.srcObject = stream;
            videoEl.muted = true;
            videoEl.playsInline = true;
            videoEl.autoplay = true;
            videoEl.width = 640;
            videoEl.height = 480;
            videoEl.style.display = "none";
            document.body.appendChild(videoEl);
            videoElRef.current = videoEl;

            // Debug preview
            const debugCam = document.createElement("video");
            debugCam.srcObject = stream;
            debugCam.autoplay = true;
            debugCam.muted = true;
            debugCam.playsInline = true;
            debugCam.width = 160;
            debugCam.height = 120;
            debugCam.style.position = "fixed";
            debugCam.style.bottom = "10px";
            debugCam.style.right = "10px";
            debugCam.style.zIndex = "9999";
            debugCam.style.border = "2px solid #2ecc71";
            debugCam.style.borderRadius = "6px";
            document.body.appendChild(debugCam);
            debugVideoRef.current = debugCam;

            // Canvas for processing
            const canvas = document.createElement("canvas");
            canvas.width = 640;
            canvas.height = 480;
            canvas.style.display = "none";
            document.body.appendChild(canvas);
            canvasRef.current = canvas;

            // Audio context for noise detection
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            audioCtxRef.current = audioCtx;
            const src = audioCtx.createMediaStreamSource(stream);
            const analyser = audioCtx.createAnalyser();
            analyser.fftSize = 2048;
            const data = new Uint8Array(analyser.frequencyBinCount);
            src.connect(analyser);

            let noiseCounter = 0;
            const detectAudio = () => {
                analyser.getByteFrequencyData(data);
                const vol = data.reduce((a, b) => a + b, 0) / data.length;
                if (vol > 20) {
                    noiseCounter++;
                    if (noiseCounter > 1) {
                        raiseCheat("⚠️ Background talking/noise detected!");
                        noiseCounter = 0;
                    }
                } else {
                    noiseCounter = 0;
                }
                requestAnimationFrame(detectAudio);
            };
            detectAudio();

        } catch (err) {
            console.error("initMedia error:", err);
            setMediaAccessGranted(false);
            setAlertMessage("🚫 Camera/Microphone access denied! Please allow access and refresh.");
        }
    };

    useEffect(() => {
        const questionFromState = location.state?.question;
        if (questionFromState) {
            setQuestion(questionFromState);
        } else {
            console.warn("⚠️ No question found in state!");
        }
    }, [location.state]);

    // Setup security when component mounts
    useEffect(() => {
        if (question) {
            const cleanupSecurity = setupSecurity();
            initMedia();

            return () => {
                cleanupSecurity();

                // Cleanup media
                try {
                    if (cameraRef.current && cameraRef.current.stop) {
                        cameraRef.current.stop();
                    }
                } catch (e) { }

                try {
                    if (streamRef.current) {
                        streamRef.current.getTracks().forEach((t) => t.stop());
                    }
                } catch (e) { }

                try {
                    if (audioCtxRef.current && audioCtxRef.current.close) {
                        audioCtxRef.current.close();
                    }
                } catch (e) { }

                try {
                    if (videoElRef.current && videoElRef.current.parentNode) {
                        videoElRef.current.parentNode.removeChild(videoElRef.current);
                    }
                    if (debugVideoRef.current && debugVideoRef.current.parentNode) {
                        debugVideoRef.current.parentNode.removeChild(debugVideoRef.current);
                    }
                    if (canvasRef.current && canvasRef.current.parentNode) {
                        canvasRef.current.parentNode.removeChild(canvasRef.current);
                    }
                } catch (e) { }
            };
        }
    }, [question]);

    const handleSubmitCode = async (submissionData) => {
        console.log("🟢 Code submitted:", submissionData);

        // Add cheating attempts to submission data
        const submissionWithSecurity = {
            ...submissionData,
            cheatAttempts: cheatingAttempts,
            mediaAccessGranted: mediaAccessGranted,
            submittedAt: new Date().toISOString()
        };

        // Here you would typically send this to your backend
        console.log("📤 Submission with security data:", submissionWithSecurity);

        // Show success message
        alert("✅ Code submitted successfully! Cheating attempts detected: " + cheatingAttempts);

        // Navigate back or to results page
        navigate("/dailyquiz", {
            state: {
                submissionSuccess: true,
                cheatAttempts: cheatingAttempts
            }
        });
    };

    if (!question) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading question...</p>
            </div>
        );
    }

    return (
        <div className="practice-ide-container">
            {/* Security Alert */}
            {alertMessage && (
                <div className="security-alert">
                    <span className="alert-icon">⚠️</span>
                    <span>{alertMessage}</span>
                    <span className="cheat-count">(Attempts: {cheatingAttempts})</span>
                </div>
            )}

            {/* Media Access Warning */}
            {!mediaAccessGranted && (
                <div className="media-warning">
                    <span className="warning-icon">🎥</span>
                    <span>Camera/microphone access required for proctoring</span>
                </div>
            )}

            {/* Fullscreen Warning */}
            {!isFullScreen && (
                <div className="fullscreen-warning">
                    <span className="warning-icon">🔒</span>
                    <span>Please enter fullscreen mode to continue</span>
                    <button onClick={requestFullScreen} className="fullscreen-btn">
                        Enter Fullscreen
                    </button>
                </div>
            )}

            <div className="question-panel">
                <div className="question-header">
                    <h2>{question.title}</h2>
                    {question.difficulty && (
                        <span className={`difficulty-badge ${question.difficulty.toLowerCase()}`}>
                            {question.difficulty}
                        </span>
                    )}
                </div>

                <div className="question-content">
                    <h3>Problem Description</h3>
                    <p>{question.description}</p>

                    {question.topics && (
                        <div className="topics-container">
                            <h4>Topics</h4>
                            <div className="topics-list">
                                {question.topics.map((topic, idx) => (
                                    <span key={idx} className="topic-tag">{topic}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="examples-container">
                        <h4>Sample Input</h4>
                        <pre className="code-block">{question.sampleInput || "N/A"}</pre>

                        <h4>Sample Output</h4>
                        <pre className="code-block">{question.sampleOutput || "N/A"}</pre>
                    </div>
                </div>
            </div>

            <div className="ide-panel">
                <CodeIDE
                    initialQuestion={question}
                    onSubmitCode={handleSubmitCode}
                    disabled={!mediaAccessGranted || !isFullScreen}
                />
            </div>
        </div>
    );
}

export default DailyQuizIDE;
