// File: CodeIDE.jsx
import React, { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import "../css_files/codeIDE.css";

const languageMap = {
  C: 50,
  "C#": 51,
  "C++": 54,
  Dart: 90,
  Go: 60,
  HTML: "html",
  Java: 62,
  JavaScript: 63,
  Python: 71,
};

const languageIcons = {
  C: "🔵",
  "C#": "🟣",
  "C++": "🔷",
  Dart: "🎯",
  Java: "☕",
  JavaScript: "🟨",
  Python: "🐍",
};

function CodeIDE({ initialQuestion = null, onSubmitCode = null }) {
  const [code, setCode] = useState("# Write your code here\n");
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("Python");
  const [isRunning, setIsRunning] = useState(false);
  const [theme, setTheme] = useState("vs-dark");
  const [fontSize, setFontSize] = useState(14);
  const [executionTime, setExecutionTime] = useState(null);
  const [memory, setMemory] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [userInput, setUserInput] = useState("");

  const editorDisposeRef = useRef(null);

  useEffect(() => {
    if (initialQuestion && initialQuestion.starterCode) {
      setCode(initialQuestion.starterCode);
    }
    if (initialQuestion && initialQuestion.language) {
      // if question suggests language, set it (optional)
      if (Object.keys(languageMap).includes(initialQuestion.language)) {
        setLanguage(initialQuestion.language);
      }
    }

    // cleanup when unmounting
    return () => {
      if (editorDisposeRef.current) editorDisposeRef.current();
    };
  }, [initialQuestion]);

  // ---------- Editor mount handler to block paste inside Monaco ----------
  const handleEditorMount = (editor, monaco) => {
    try {
      const dom = editor.getDomNode();

      const pasteHandler = (e) => {
        e.preventDefault();
        // use alert or custom UI
        alert("Pasting is disabled in this editor.");
      };

      dom.addEventListener("paste", pasteHandler);

      const keydownDisposable = editor.onKeyDown((e) => {
        // monaco.KeyCode.KeyV is preferred; fallback numeric 86 also checked
        const isPaste = (e.ctrlKey || e.metaKey) && (e.keyCode === monaco.KeyCode.KeyV || e.keyCode === 86);
        if (isPaste) {
          e.preventDefault();
          alert("Pasting is disabled in this editor.");
        }
      });

      // optional: block context menu to prevent right-click paste
      const ctxHandler = (e) => {
        // keep right-click enabled if you prefer; comment out next line to allow context menu
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
      // defensive: monaco might not be ready
      console.warn("handleEditorMount error:", err);
    }
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput("");
    setExecutionTime(null);
    setMemory(null);

    const langId = languageMap[language];

    if (language === "HTML") {
      setOutput(code);
      setIsRunning(false);
      return;
    }

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
            stdin: userInput,
          }),
        }
      );
      const data = await res.json();
      const endTime = Date.now();

      const userOut = data.stdout || data.stderr || "";
      setOutput(userOut);
      setExecutionTime(((endTime - startTime) / 1000).toFixed(2));
      setMemory(data.memory || "N/A");
      setIsRunning(false);
    } catch (err) {
      setOutput("❌ Error connecting to API. Please try again.");
      setIsRunning(false);
      console.error(err);
    }
  };

  const clearCode = () => {
    setCode("# Write your code here\n");
    setOutput("");
    setExecutionTime(null);
    setMemory(null);
    setUserInput("");
  };

  const submitCode = () => {
    if (!onSubmitCode) {
      alert("Submit handler not provided by parent.");
      return;
    }
    onSubmitCode({
      code,
      output,
      language,
      executionTime,
    });
  };

  return (
    <div className="code-ide-container" style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Top Toolbar */}
      <div className="ide-toolbar" style={{ zIndex: 5 }}>
        <div className="toolbar-left">
          <div className="language-selector-wrapper">
            <span className="language-icon">{languageIcons[language]}</span>
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="language-selector">
              {Object.keys(languageMap).map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>

          <div className="toolbar-divider"></div>

          <button className="toolbar-btn" onClick={() => navigator.clipboard.writeText(code)} title="Copy Code">
            <span className="btn-icon">📋</span> Copy
          </button>

          <button className="toolbar-btn" onClick={clearCode} title="Clear Code">
            <span className="btn-icon">🗑️</span> Clear
          </button>

          <button className="toolbar-btn" onClick={() => setShowSettings(!showSettings)} title="Settings">
            <span className="btn-icon">⚙️</span> Settings
          </button>
        </div>

        <div className="toolbar-right">
          <button className={`run-button ${isRunning ? "running" : ""}`} onClick={runCode} disabled={isRunning}>
            {isRunning ? (
              <>
                <span className="spinner"></span> Running...
              </>
            ) : (
              <>
                <span className="run-icon">▶</span> Run Code
              </>
            )}
          </button>
        </div>
      </div>

      {/* Settings */}
      {showSettings && (
        <div className="settings-panel">
          <div className="setting-item">
            <label>Theme:</label>
            <select value={theme} onChange={(e) => setTheme(e.target.value)} className="setting-select">
              <option value="vs-dark">Dark</option>
              <option value="light">Light</option>
              <option value="hc-black">High Contrast</option>
            </select>
          </div>

          <div className="setting-item">
            <label>Font Size:</label>
            <input type="range" min="10" max="24" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} />
            <span className="font-size-value">{fontSize}px</span>
          </div>
        </div>
      )}

      {/* Editor */}
      <div style={{ flexGrow: 1, minHeight: 0 }}>
        <Editor
          height="100%"
          width="100%"
          language={language.toLowerCase()}
          theme={theme}
          value={code}
          onChange={(value) => setCode(value || "")}
          onMount={handleEditorMount}
          options={{ fontSize, minimap: { enabled: false }, automaticLayout: true }}
        />
      </div>

      {/* Input & Output & Submit */}
      <div style={{ padding: 12, background: "#0b1220", color: "white" }}>
        <div style={{ display: "flex", gap: 12, marginBottom: 8 }}>
          <textarea value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="stdin input" style={{ flex: 1, minHeight: 60 }} />
          <div style={{ width: 240 }}>
            <div style={{ marginBottom: 8 }}>
              <strong>Execution:</strong> {executionTime ? `${executionTime}s` : "—"}
              <br />
              <strong>Memory:</strong> {memory || "—"}
            </div>
            <button onClick={submitCode} style={{ marginRight: 8, padding: "8px 12px" }}>
              ✅ Submit Code
            </button>
            <button onClick={() => window.location.reload()} style={{ padding: "8px 12px" }}>
              Exit IDE
            </button>
          </div>
        </div>

        <div style={{ minHeight: 80, background: "#071029", padding: 10, borderRadius: 6 }}>
          {output ? (
            <pre style={{ whiteSpace: "pre-wrap", color: "#e6eef8" }}>{output}</pre>
          ) : (
            <div style={{ color: "#99a3b3" }}>Run your code to see output here</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CodeIDE;
