import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import "../css_files/PracticeSolve.css";

const languageMap = {
  Java: 62,
  JavaScript: 63,
  Python: 71,
};

// Test backend connection
const testBackendConnection = async () => {
  try {
    const response = await fetch("https://coderhub-backend-1.onrender.com/");
    return response.ok;
  } catch (error) {
    console.error("Backend connection test failed:", error);
    return false;
  }
};

// Enhanced Gemini AI Detection Function with fallback
const detectAI = async (code, language) => {
  // Simple fallback detection if Gemini fails
  const simpleAIDetection = (code) => {
    const lines = code.split("\n").filter((l) => l.trim() !== "");
    const commentLines = code.split("\n").filter(
      (l) => l.trim().startsWith("//") || l.trim().startsWith("#") || l.trim().startsWith("/*")
    );
    const commentDensity = lines.length ? commentLines.length / lines.length : 0;

    // Common AI patterns
    const aiPatterns = [
      "def solution",
      "public class Solution",
      "function solve",
      "// This code",
      "# This function",
      "algorithm",
      "approach",
      "time complexity",
      "space complexity"
    ];

    let aiScore = 0;
    if (commentDensity > 0.15) aiScore += 1;
    aiPatterns.forEach(pattern => {
      if (code.includes(pattern)) aiScore += 0.5;
    });

    return aiScore >= 1;
  };

  try {
    console.log("Sending AI detection request...");
    const response = await fetch("https://coderhub-backend-1.onrender.com/api/gemini/detect-ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: code,
        language: language,
        error: output
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("AI Detection Result:", result);

    if (result.isAIGenerated !== undefined) {
      return result.isAIGenerated;
    } else {
      // Fallback to simple detection
      return simpleAIDetection(code);
    }
  } catch (error) {
    console.error("AI Detection failed, using fallback:", error);
    return simpleAIDetection(code);
  }
};

function PracticeSolve() {
  const location = useLocation();
  const navigate = useNavigate();
  const question = location.state?.question;
  const initialLanguage = location.state?.language || "Python";
  const talkingCount = useRef(0);
  const blinkCount = useRef(0);

  // Helper functions to get/set data from localStorage
  const getInitialData = (type, defaultValue) => {
    if (!question?.id || !language) return defaultValue;
    const saved = localStorage.getItem(`${type}_${question.id}_${language}`);
    if (saved === null) return defaultValue;

    try {
      if (type === 'code') return saved;
      return Number(saved);
    } catch (err) {
      return defaultValue;
    }
  };

  const updateData = (type, value) => {
    if (question?.id && language) {
      localStorage.setItem(`${type}_${question.id}_${language}`, value.toString());
    }
    return value;
  };

  // State with localStorage persistence
  const [code, setCode] = useState("# Write your code here\n");
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState(initialLanguage);
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [theme, setTheme] = useState("vs-dark");
  const [fontSize, setFontSize] = useState(14);
  const [executionTime, setExecutionTime] = useState(null);
  const [backendOnline, setBackendOnline] = useState(true);

  // Attempt counters with localStorage persistence
  const [runAttempts, setRunAttempts] = useState(0);
  const [correctAttempts, setCorrectAttempts] = useState(0);
  const [cheatingAttempts, setCheatingAttempts] = useState(0);

  // Initialize state from localStorage when component mounts or question/language changes
  useEffect(() => {
    if (question?.id && language) {
      const initialCode = getInitialData('code', "# Write your code here\n");
      const initialRunAttempts = getInitialData("runAttempts", 0);
      const initialCorrectAttempts = getInitialData("correctAttempts", 0);
      const initialCheatingAttempts = getInitialData("cheatingAttempts", 0);

      setCode(initialCode);
      setRunAttempts(initialRunAttempts);
      setCorrectAttempts(initialCorrectAttempts);
      setCheatingAttempts(initialCheatingAttempts);
    }
  }, [question?.id, language]);

  // Wrapper functions to update both state and localStorage
  const setCodePersistent = (newCodeOrFunction) => {
    if (typeof newCodeOrFunction === 'function') {
      setCode(prev => {
        const newCode = newCodeOrFunction(prev);
        return updateData("code", newCode);
      });
    } else {
      const newCode = updateData("code", newCodeOrFunction);
      setCode(newCode);
    }
  };

  const setRunAttemptsPersistent = (newCountOrFunction) => {
    if (typeof newCountOrFunction === 'function') {
      setRunAttempts(prev => {
        const newCount = newCountOrFunction(prev);
        return updateData("runAttempts", newCount);
      });
    } else {
      const newCount = updateData("runAttempts", newCountOrFunction);
      setRunAttempts(newCount);
    }
  };

  const setCorrectAttemptsPersistent = (newCountOrFunction) => {
    if (typeof newCountOrFunction === 'function') {
      setCorrectAttempts(prev => {
        const newCount = newCountOrFunction(prev);
        return updateData("correctAttempts", newCount);
      });
    } else {
      const newCount = updateData("correctAttempts", newCountOrFunction);
      setCorrectAttempts(newCount);
    }
  };

  const setCheatingAttemptsPersistent = (newCountOrFunction) => {
    if (typeof newCountOrFunction === 'function') {
      setCheatingAttempts(prev => {
        const newCount = newCountOrFunction(prev);
        return updateData("cheatingAttempts", newCount);
      });
    } else {
      const newCount = updateData("cheatingAttempts", newCountOrFunction);
      setCheatingAttempts(newCount);
    }
  };

  // Proctoring states
  const [alertMessage, setAlertMessage] = useState("");
  const [mediaAccessGranted, setMediaAccessGranted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // refs for cleanup and cooldown
  const cheatCooldownRef = useRef(false);
  const videoElRef = useRef(null); // hidden video element
  const debugVideoRef = useRef(null); // preview video element
  const canvasRef = useRef(null);
  const cameraRef = useRef(null);
  const audioCtxRef = useRef(null);
  const streamRef = useRef(null);
  const editorDisposeRef = useRef(null);

  // Enhanced Gemini Debugging Function with fallback
  const debugWithGemini = async () => {
    if (!output) {
      alert("No output to debug. Please run your code first.");
      return;
    }

    setOutput("🔄 Getting AI debug analysis...");

    // Fallback debug analysis
    const fallbackDebug = (code, language, error) => {
      const simpleAnalysis = `
🔧 Basic Debug Analysis (Fallback):

Since Gemini is temporarily unavailable, here are some general debugging tips:

1. 🔍 Check for syntax errors in your ${language} code
2. 🐛 Look for common issues:
   - Missing parentheses/brackets
   - Incorrect variable names
   - Wrong indentation
   - Missing imports

3. 🎯 Common ${language} issues:
${language === 'Python' ? '   - Indentation errors\n   - Missing colons\n   - Incorrect function calls' :
          language === 'JavaScript' ? '   - Missing semicolons\n   - Undefined variables\n   - Async/await issues' :
            language === 'Java' ? '   - Missing semicolons\n   - Class/method declarations\n   - Import statements' :
              '   - Check language-specific syntax'}
  
4. 💡 Try these steps:
   - Add print statements to trace execution
   - Check variable values
   - Test with smaller inputs
   - Review the error message carefully

Error Output:
${error}
      `;
      return simpleAnalysis;
    };

    try {
      console.log("Sending debug request...");
      const response = await fetch("https://coderhub-backend-1.onrender.com/api/gemini/debug", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: code,
          language: language,
          error: output
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const debugResult = await response.json();
      console.log("Debug Result:", debugResult);

      if (debugResult.errorExplanation) {
        const debugMessage = `
🔧 Gemini Debug Analysis:

❓ Error Explanation: ${debugResult.errorExplanation}

📍 Likely Location: ${debugResult.likelyLocation}

🛠️ Debugging Steps:
${debugResult.debuggingSteps?.map(step => `• ${step}`).join('\n')}

💡 Suggested Fix: ${debugResult.suggestedFix}

📝 Tips:
${debugResult.tips?.map(tip => `• ${tip}`).join('\n')}
        `;
        setOutput(debugMessage);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Debug with Gemini failed, using fallback:", error);
      const fallbackMessage = fallbackDebug(code, language, output);
      setOutput(fallbackMessage);
    }
  };

  // Enhanced Gemini Complexity Analysis Function with fallback
  const analyzeComplexityWithGemini = async () => {
    setOutput("🔄 Analyzing code complexity...");

    // Fallback complexity analysis
    const fallbackComplexity = (code, language) => {
      const simpleAnalysis = `
📊 Basic Complexity Analysis (Fallback):

Since Gemini is temporarily unavailable, here's a basic analysis:

🔍 Quick Complexity Check:

1. Look for loops in your code:
   - Single loop → O(n)
   - Nested loops → O(n²)
   - Multiple sequential loops → O(n)

2. Check for recursive calls
3. Look for data structure operations

💡 General Tips:
- Use efficient algorithms
- Avoid unnecessary nested loops
- Choose appropriate data structures
- Consider edge cases

🧠 Manual Analysis Steps:
1. Identify the main operations
2. Count how many times they execute
3. Consider worst-case scenarios
4. Look for optimization opportunities

Try running your code with different input sizes to test performance!
      `;
      return simpleAnalysis;
    };

    try {
      console.log("Sending complexity analysis request...");
      const response = await fetch("https://coderhub-backend-1.onrender.com/api/gemini/analyze-complexity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: code,
          language: language,
          error: output
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const complexityResult = await response.json();
      console.log("Complexity Result:", complexityResult);

      if (complexityResult.timeComplexity) {
        const complexityMessage = `
📊 Gemini Complexity Analysis:

⏱️ Time Complexity: ${complexityResult.timeComplexity?.bigO || "Unknown"}
📝 Explanation: ${complexityResult.timeComplexity?.explanation || "Not available"}
✅ Optimal: ${complexityResult.timeComplexity?.isOptimal ? 'Yes' : 'No'}

💾 Space Complexity: ${complexityResult.spaceComplexity?.bigO || "Unknown"}
📝 Explanation: ${complexityResult.spaceComplexity?.explanation || "Not available"}
✅ Optimal: ${complexityResult.spaceComplexity?.isOptimal ? 'Yes' : 'No'}

${complexityResult.improvementSuggestions?.needsImprovement ?
            `🚀 Improvement Suggestions:
${complexityResult.improvementSuggestions?.suggestions?.map(suggestion => `• ${suggestion}`).join('\n')}
🎯 Potential Complexity: ${complexityResult.improvementSuggestions?.potentialComplexity}`
            : '✅ Your code complexity looks good!'}

📋 Overall Assessment: ${complexityResult.overallAssessment || "Not available"}
        `;
        setOutput(complexityMessage);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Complexity analysis with Gemini failed, using fallback:", error);
      const fallbackMessage = fallbackComplexity(code, language);
      setOutput(fallbackMessage);
    }
  };

  // Test backend connection on component mount
  useEffect(() => {
    const checkBackend = async () => {
      const isOnline = await testBackendConnection();
      setBackendOnline(isOnline);
      if (!isOnline) {
        console.warn("Backend is offline, using fallback features");
      }
    };
    checkBackend();
  }, []);

  // --- Fullscreen helper ---
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
      else if (elem.webkitRequestFullscreen) elem.webkitRequestfullscreen();
      else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
    }
  };

  // raise cheat with cooldown (to avoid spam)
  const raiseCheat = (msg) => {
    if (cheatCooldownRef.current) return; // prevent spam

    setAlertMessage(msg);
    setCheatingAttemptsPersistent(prev => prev + 1);
    cheatCooldownRef.current = true;

    // cooldown reset
    setTimeout(() => {
      cheatCooldownRef.current = false;
    }, 2500);
  };

  // --- Reset all data for current question ---
  const resetQuestionData = () => {
    if (question?.id && language) {
      // Clear current language's data
      localStorage.removeItem(`code_${question.id}_${language}`);
      localStorage.removeItem(`runAttempts_${question.id}_${language}`);
      localStorage.removeItem(`correctAttempts_${question.id}_${language}`);
      localStorage.removeItem(`cheatingAttempts_${question.id}_${language}`);

      // Optional: Clear all languages for this question
      Object.keys(languageMap).forEach(lang => {
        localStorage.removeItem(`code_${question.id}_${lang}`);
        localStorage.removeItem(`runAttempts_${question.id}_${lang}`);
        localStorage.removeItem(`correctAttempts_${question.id}_${lang}`);
        localStorage.removeItem(`cheatingAttempts_${question.id}_${lang}`);
      });

      setCode("# Write your code here\n");
      setRunAttempts(0);
      setCorrectAttempts(0);
      setCheatingAttempts(0);
    }
  };

  // --- Submit handler ---
  const handleSubmit = async () => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("⛔ User not logged in! Please login first.");
      return;
    }

    // Show loading state
    setOutput("🔄 Analyzing code for AI patterns...");

    // Use the new Gemini AI detection
    const isAIGenerated = await detectAI(code, language);

    console.log("Submitting => ", {
      user_id: Number(userId),
      question_id: question?.id,
      language,
      code,
      output,
      is_correct: correctAttempts > 0 ? 1 : 0,
      run_count: runAttempts,
      cheat_count: cheatingAttempts,
      ai_detected: isAIGenerated ? 1 : 0,
    });

    try {
      const res = await fetch("https://coderhub-backend-1.onrender.com/saveSubmission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: Number(userId),
          question_id: question?.id,
          language,
          code,
          output,
          is_correct: correctAttempts > 0 ? 1 : 0,
          run_count: runAttempts,
          cheat_count: cheatingAttempts,
          ai_detected: isAIGenerated ? 1 : 0,
        }),
      });

      const data = await res.json();
      console.log("Submission Response:", data);
      if (data.solvedQuestionId) {
        localStorage.setItem(
          "solvedQuestions",
          JSON.stringify([
            ...(JSON.parse(localStorage.getItem("solvedQuestions")) || []),
            data.solvedQuestionId
          ])
        );
      }

      // ✅ RESET ALL DATA AFTER SUCCESSFUL SUBMISSION
      resetQuestionData();
      alert("✅ Submission Saved Successfully!");

      // ✅ REDIRECT TO PRACTICE PAGE
      navigate("/python/practice");

    } catch (err) {
      console.log(err);
      alert("❌ Failed to save submission");
    }
  };

  // --- runCode ---
  const runCode = async () => {
    setIsRunning(true);
    setOutput("");
    setExecutionTime(null);
    setRunAttemptsPersistent(prev => prev + 1);

    const langId = languageMap[language];
    const expectedOutput = question.Sample_Output || "";

    try {
      const startTime = Date.now();

      const res = await fetch(
        "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key": "101b2e4918msh0bfec76ce9c2b00p129affjsnd8b6ce4cce80",
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          },
          body: JSON.stringify({
            language_id: langId,
            source_code: code,
            stdin: question.Sample_Input || "",
          }),
        }
      );

      const data = await res.json();
      const endTime = Date.now();

      // --- Get user output ---
      const userOutput = data.stdout ? data.stdout.trim() : "";

      // --- Normalize outputs for comparison ---
      const normalizedUserOutput = userOutput.replace(/\r\n/g, "\n").trim();
      const normalizedExpectedOutput = expectedOutput.replace(/\r\n/g, "\n").trim();

      const passed = normalizedUserOutput === normalizedExpectedOutput;
      if (passed) setCorrectAttemptsPersistent(prev => prev + 1);

      // --- Prepare display message ---
      const resultMessage = passed
        ? "Testcase 1: Passed ✅"
        : "Testcase 1: Failed ❌";

      setOutput(`${resultMessage}\n\nYour Output:\n${userOutput}`);
      setExecutionTime(((endTime - startTime) / 1000).toFixed(2));
      setIsRunning(false);

    } catch (err) {
      setOutput("❌ Error running code. Please try again.");
      setIsRunning(false);
      console.error("runCode Error:", err);
    }
  };

  // Handle code changes with persistence
  const handleCodeChange = (value) => {
    setCodePersistent(value || "");
  };

  useEffect(() => {
    requestFullScreen();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setCheatingAttemptsPersistent(prev => prev + 1);
        setAlertMessage("⚠️ You switched tabs!");
      }
    };

    const blockCopy = (e) => {
      e.preventDefault();
      raiseCheat("⚠️ Copy/Paste blocked!");
    };

    document.addEventListener("copy", blockCopy);
    document.addEventListener("cut", blockCopy);
    document.addEventListener("paste", blockCopy);

    const handleFullScreenChange = () => {
      const inFullScreen = !!document.fullscreenElement;
      setIsFullScreen(inFullScreen);

      if (!inFullScreen) {
        setCheatingAttemptsPersistent(prev => prev + 1);
        setAlertMessage("⚠️ You exited fullscreen!");

        const proceed = window.confirm("Re-enter fullscreen to continue");
        if (proceed) requestFullScreen();
      } else {
        setAlertMessage("");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("fullscreenchange", handleFullScreenChange);

    // --- Screenshot / Screen Capture Detection ---
    const handleKeyDown = async (e) => {
      // Detect PrintScreen
      if (e.key === "PrintScreen") {
        raiseCheat("⚠️ Screenshot Attempt Detected!");

        // Attempt to overwrite clipboard image
        try {
          await navigator.clipboard.writeText("");
        } catch (err) {
          console.warn("Clipboard clear failed:", err);
        }

        // Optional: Add screen blur for 2 seconds
        document.body.style.filter = "blur(5px)";
        setTimeout(() => {
          document.body.style.filter = "none";
        }, 2000);
      }
    };

    // Add event listener
    document.addEventListener("keydown", handleKeyDown);

    let mounted = true;

    const initMedia = async () => {
      try {
        console.log("initMedia called");

        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 640, height: 480, facingMode: "user" },
          audio: true,
        });

        if (!mounted) {
          // component unmounted during permission prompt
          stream.getTracks().forEach((t) => t.stop());
          return;
        }

        setMediaAccessGranted(true);
        streamRef.current = stream;

        // --- hidden video element for processing (kept off-screen) ---
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

        // --- debug preview so user/dev can see camera feed and avoid blank screen ---
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

        // --- canvas for mediapipe/frame processing (hidden) ---
        const canvas = document.createElement("canvas");
        canvas.width = 640;
        canvas.height = 480;
        canvas.style.display = "none";
        document.body.appendChild(canvas);
        canvasRef.current = canvas;
        const ctx = canvas.getContext("2d");

        // --- ensure MediaPipe exists on window (CDN loaded) ---
        if (!window.FaceMesh || !window.Camera) {
          console.error("MediaPipe FaceMesh/Camera not found on window. Make sure CDN scripts are in index.html");
          setAlertMessage("🚫 Proctoring libraries not loaded");
          return;
        }

        // --- FaceMesh setup ---
        const faceMesh = new window.FaceMesh({
          locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
        });

        faceMesh.setOptions({
          maxNumFaces: 1,
          refineLandmarks: true,
          minDetectionConfidence: 0.5,
          minTrackingConfidence: 0.5,
        });

        // FaceMesh result handler (safe, with try/catch)
        faceMesh.onResults((res) => {
          if (!res.multiFaceLandmarks || res.multiFaceLandmarks.length === 0) {
            raiseCheat("⚠️ No face detected!");
            return;
          }

          const face = res.multiFaceLandmarks[0];
          const lIris = face[468]; // left iris center
          const rIris = face[473]; // right iris center

          const leftEyeTop = face[159].y;
          const leftEyeBottom = face[145].y;
          const rightEyeTop = face[386].y;
          const rightEyeBottom = face[374].y;

          const mouthTop = face[13].y;
          const mouthBottom = face[14].y;

          const noseZ = face[1].z;

          // ━━━━━ 👁️ EYE / IRIS GAZE ━━━━━
          const eyeDiff = Math.abs(leftEyeTop - rightEyeTop);
          if (eyeDiff > 0.022) {
            raiseCheat("⚠️ Looking away from screen!");
          }

          // ━━━━━ 👄 SPEECH DETECTION (talking) ━━━━━
          const mouthOpen = Math.abs(mouthTop - mouthBottom);
          if (mouthOpen > 0.045) {
            talkingCount.current++;
          } else talkingCount.current = 0;

          if (talkingCount.current > 15) {
            raiseCheat("⚠️ Talking detected!");
            talkingCount.current = 0;
          }

          // ━━━━━ 👁️ BLINK / SPOOF CHECK (printed face) ━━━━━
          const leftEyeHeight = Math.abs(leftEyeTop - leftEyeBottom);
          const rightEyeHeight = Math.abs(rightEyeTop - rightEyeBottom);

          if (leftEyeHeight < 0.003 && rightEyeHeight < 0.003) {
            blinkCount.current++;
          } else blinkCount.current = 0;

          // No blinking for 6+ seconds = suspicious
          if (blinkCount.current > 120) {
            raiseCheat("⚠️ Fake face detected (no blink)!");
            blinkCount.current = 0;
          }

        });

        // --- Camera (MediaPipe Camera wrapper) ---
        const camera = new window.Camera(videoEl, {
          onFrame: async () => {
            try {
              // draw current video frame to our hidden canvas and send to faceMesh
              ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
              await faceMesh.send({ image: canvas });
            } catch (err) {

            }
          },
          width: 640,
          height: 480,
        });

        cameraRef.current = camera;
        camera.start();

        // --- FACE DETECTION (detect multiple people) ---
        if (window.FaceDetection) {
          const faceDetection = new window.FaceDetection({
            locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`,
          });
          faceDetection.setOptions({
            model: 'short',
            minDetectionConfidence: 0.5,
          });

          faceDetection.onResults((res) => {
            if (res.detections && res.detections.length > 1) {
              raiseCheat("⚠️ Multiple people detected in frame!");
            }
          });

          const detectFaces = async () => {
            ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
            await faceDetection.send({ image: canvas });
            requestAnimationFrame(detectFaces);
          };
          detectFaces();
        } else {
          console.warn("FaceDetection not found on window. Make sure CDN is included.");
        }

        // --- OBJECT DETECTION (detect phone/laptop) ---
        if (window.ObjectDetector) {
          try {
            const objectDetector = await window.ObjectDetector.createFromOptions({
              baseOptions: {
                modelAssetPath: 'https://storage.googleapis.com/mediapipe-tasks/object_detector/efficientdet_lite0.tflite',
              },
            });

            const detectObjects = async () => {
              ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
              const detections = await objectDetector.detect(canvas);

              if (detections && detections.length > 0) {
                detections.forEach((det) => {
                  const label = det.categories?.[0]?.categoryName?.toLowerCase() || '';
                  if (label.includes('phone') || label.includes('cell') || label.includes('laptop')) {
                    raiseCheat(`⚠️ Detected object: ${label}`);
                  }
                });
              }
              requestAnimationFrame(detectObjects);
            };
            detectObjects();
          } catch (err) {
            console.warn("Object detection init failed:", err);
          }
        } else {
          console.warn("ObjectDetector not found on window. Check CDN link in index.html.");
        }

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
          // tuned threshold (device-dependent)
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

    initMedia();

    return () => {
      // cleanup
      mounted = false;
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("copy", blockCopy);
      document.removeEventListener("cut", blockCopy);
      document.removeEventListener("paste", blockCopy);

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

      // cleanup editor listeners if any
      if (editorDisposeRef.current) editorDisposeRef.current();
    };
  }, []);

  if (!question) {
    return (
      <div style={{ padding: "40px", textAlign: "center", color: "white" }}>
        <h2>No question selected</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "#43e97b";
      case "Intermediate":
        return "#fcd34d";
      case "Advanced":
        return "#f5576c";
      default:
        return "#667eea";
    }
  };

  // Editor mount handler for PracticeSolve: blocks paste and records attempts via raiseCheat
  const handleEditorMount = (editor, monaco) => {
    try {
      const dom = editor.getDomNode();

      const pasteHandler = (e) => {
        e.preventDefault();
        raiseCheat("⚠️ Paste attempt blocked inside editor!");
      };

      dom.addEventListener("paste", pasteHandler);

      const keydownDisposable = editor.onKeyDown((e) => {
        const isPaste = (e.ctrlKey || e.metaKey) && (e.keyCode === monaco.KeyCode.KeyV || e.keyCode === 86);
        if (isPaste) {
          e.preventDefault();
          raiseCheat("⚠️ Paste attempt blocked inside editor!");
        }
      });

      // optional: block context menu if you want
      const ctxHandler = (e) => {
        // e.preventDefault();
      };
      dom.addEventListener("contextmenu", ctxHandler);

      editorDisposeRef.current = () => {
        try {
          dom.removeEventListener("paste", pasteHandler);
        } catch (err) { }
        try {
          dom.removeEventListener("contextmenu", ctxHandler);
        } catch (err) { }
        if (keydownDisposable && keydownDisposable.dispose) keydownDisposable.dispose();
      };
    } catch (err) {
      console.warn("Practice handleEditorMount err:", err);
    }
  };

  return (
    <div className="practice-solve-container">
      {/* Left Panel */}
      <div className="question-panel-split">
        <button className="back-button" onClick={() => navigate(-1)}>
          <span className="back-icon">←</span> Back to Problems
        </button>

        <div className="question-header-split">
          <div className="header-top-split">
            <h2 className="question-title-split">{question.title}</h2>
            <span
              className="difficulty-badge-split"
              style={{
                background: getDifficultyColor(question.difficulty),
                boxShadow: `0 4px 15px ${getDifficultyColor(question.difficulty)}40`,
              }}
            >
              {question.difficulty}
            </span>
          </div>
          <div className="question-stats-split">
            <span className="stat-item-split">✓ {question.successRate}</span>
            <span className="stat-divider-split"></span>
            <span className="stat-item-split">👥 {question.submissions}</span>
          </div>
        </div>

        <div className="question-tabs-split">
          <button
            className={`tab-button-split ${activeTab === "description" ? "active" : ""}`}
            onClick={() => setActiveTab("description")}
          >
            📝 Description
          </button>
          <button
            className={`tab-button-split ${activeTab === "examples" ? "active" : ""}`}
            onClick={() => setActiveTab("examples")}
          >
            💡 Examples
          </button>
        </div>

        <div className="question-content-split">
          {activeTab === "description" && (
            <div className="content-section-split">
              <h3 className="section-title-split">Problem Statement</h3>
              <p className="question-description-split">{question.description}</p>

              <h3 className="section-title-split">Topics</h3>
              <div className="topics-container-split">
                {question.topics.map((topic, idx) => (
                  <span key={idx} className="topic-tag-split">{topic}</span>
                ))}
              </div>
            </div>
          )}

          {activeTab === "examples" && (
            <div className="content-section-split">
              <h3 className="section-title-split">Examples</h3>
              <div className="example-box-split">
                <h4>🧮 Sample Input</h4>
                <pre className="code-block-split">{question.Sample_Input || "No sample input"}</pre>
              </div>
              <div className="example-box-split">
                <h4>📤 Expected Output</h4>
                <pre className="code-block-split">{question.Sample_Output || "No expected output"}</pre>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Panel */}
      <div className="ide-panel-split">
        {!mediaAccessGranted && (
          <div className="alert-box permission-alert">
            🚫 Camera and Microphone permissions are required to use the IDE.
            Please enable them and refresh the page.
          </div>
        )}

        {!backendOnline && (
          <div className="alert-box backend-alert">
            ⚠️ AI features are using fallback mode. Backend connection issues.
          </div>
        )}

        <div className="ide-toolbar-split">
          <div className="toolbar-left-split">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="language-selector-split"
              disabled={!mediaAccessGranted}
            >
              {Object.keys(languageMap).map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>

            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="theme-selector-split"
              disabled={!mediaAccessGranted}
            >
              <option value="vs-dark">Dark</option>
              <option value="light">Light</option>
            </select>

            <input
              type="range"
              min="10"
              max="20"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="font-slider-split"
              title={`Font Size: ${fontSize}px`}
              disabled={!mediaAccessGranted}
            />
          </div>

          <div className="toolbar-right-split">
            {/* Gemini Buttons */}


            <button
              className="gemini-button-split"
              onClick={analyzeComplexityWithGemini}
              disabled={!code || !mediaAccessGranted}
              title="Analyze time/space complexity"
            >
              <span>📊 Analyze</span>
            </button>

            <button
              className={`run-button-split ${isRunning ? "running" : ""}`}
              onClick={runCode}
              disabled={isRunning || !mediaAccessGranted}
            >
              {isRunning ? (
                <>
                  <span className="spinner-split"></span> Running...
                </>
              ) : (
                <>
                  <span className="run-icon-split">▶</span> Run Code
                </>
              )}
            </button>

            <button
              className="submit-button-split"
              onClick={handleSubmit}
              disabled={!mediaAccessGranted}
            >
              <span>✓</span> Submit
            </button>
          </div>
        </div>

        {/* Editor Section */}
        {!isFullScreen && (
          <div className="fullscreen-container">
            <button className="fullscreen-button" onClick={requestFullScreen}>
              🔒 Enter Fullscreen to Start
            </button>
          </div>
        )}

        <div className="editor-section-split">
          {(!mediaAccessGranted || !isFullScreen) && (
            <div className="alert-box permission-alert">
              🚫 Editor Locked! Please enable camera/mic and re-enter fullscreen mode to continue.
            </div>
          )}

          {(() => {
            const editorLocked = !mediaAccessGranted || !isFullScreen;
            return (
              <Editor
                height="100%"
                width="100%"
                language={language.toLowerCase()}
                theme={theme}
                value={code}
                onChange={handleCodeChange}
                onMount={handleEditorMount}
                options={{
                  fontSize,
                  minimap: { enabled: false },
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  tabSize: 2,
                  wordWrap: "on",
                  lineNumbers: "on",
                  fontFamily: "'Fira Code', 'Courier New', monospace",
                  readOnly: editorLocked,
                }}
              />
            );
          })()}
        </div>

        <div className="output-section-split">
          <div className="output-header-split">
            <span className="output-title-split">
              <span className="output-icon-split">📤</span> Output
            </span>
            {executionTime && <span className="execution-time-split">⏱️ {executionTime}s</span>}
          </div>

          <div className="output-content-split">
            {alertMessage && (
              <div className="alert-box">
                <p>{alertMessage}</p>
              </div>
            )}

            {isRunning ? (
              <div className="output-loading-split">
                <div className="loading-spinner-split"></div>
                <p>Executing code...</p>
              </div>
            ) : output ? (
              <pre className="output-text-split">{output}</pre>
            ) : (
              <div className="output-placeholder-split">
                <span className="placeholder-icon-split">💡</span>
                <p>Run your code to see the output</p>
              </div>
            )}
          </div>

          <div className="attempts-info-split">
            <p>Total Runs: {runAttempts}</p>
            <p>Correct Runs: {correctAttempts}</p>
            <p>Cheating Attempts: {cheatingAttempts}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PracticeSolve;