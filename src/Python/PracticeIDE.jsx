import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CodeIDE from "../pages/CodeIDE";
import "../python_css/PracticeIDE.css";

function PracticeIDE() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [userOutput, setUserOutput] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    import("./Practice").then(({ allQuestions }) => {
      const q = allQuestions.find(q => q.id === parseInt(id));
      setQuestion(q);
    });
  }, [id]);

  const handleRunCode = async (userCode) => {
    const output = await CodeIDE(userCode);
    setUserOutput(output);

    if (output.trim() === question.expectedOutput.trim()) {
      setResult("Correct ✅");
    } else {
      setResult("Wrong ❌");
    }
  };

  if (!question) return <div>Loading...</div>;

  return (
    <div className="practice-ide-container">
      {/* Left: Question Panel */}
      <div className="question-panel">
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <h4>Sample Input:</h4>
        <pre>{question.sampleInput}</pre>
        <h4>Sample Output:</h4>
        <pre>{question.sampleOutput}</pre>
      </div>

      {/* Right: IDE Panel */}
      <div className="ide-panel">
        <CodeIDE onRunCode={handleRunCode} />
        {userOutput && (
          <div className="output-panel">
            <h4>Your Output:</h4>
            <pre>{userOutput}</pre>
            {result && <div className={`result ${result === "Correct ✅" ? "correct" : "wrong"}`}>{result}</div>}
          </div>
        )}
      </div>
    </div>
  );
}

export default PracticeIDE;
