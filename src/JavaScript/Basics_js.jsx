import React, { useState } from "react";
import "/src/python_css/Basics.css";

const topics = [
  {
    id: "intro",
    title: "Introduction to JavaScript",
    sections: [
      { type: "text", content: "JavaScript (JS) is a programming language that helps make web pages interactive. Think of HTML as the skeleton, CSS as the clothes, and JavaScript as the muscles that make things move and respond." },
      { type: "heading", content: "Why learn JavaScript?" },
      {
        type: "list", items: [
          "Runs in every web browser — so your code can reach billions of users",
          "Used for front-end (browser) and back-end (Node.js)",
          "Great community and lots of tools",
          "Easy start (you can open DevTools and try immediately)"
        ]
      },
      { type: "heading", content: "Analogy for kids" },
      { type: "text", content: "If a webpage is a toy, JavaScript is the switch that makes the toy move — press the button and it dances." }
    ]
  },
  {
    id: "hello-world",
    title: "First Program — Hello World",
    sections: [
      { type: "text", content: "The simplest JavaScript program prints text to the console or shows an alert." },
      { type: "code", content: "// Open browser DevTools (F12) to see console output\nconsole.log('Hello, JavaScript!');\nalert('Hello, JavaScript!');" },
      { type: "heading", content: "Kid-friendly explanation" },
      { type: "text", content: "console.log is like writing a note on the computer's diary (the console). alert shows a message box on the screen like a pop-up sticker." }
    ]
  },
  {
    id: "syntax",
    title: "Basic Syntax & Statements",
    sections: [
      { type: "text", content: "JavaScript reads commands from top to bottom. Each command can be a statement ending with a semicolon (optional in most cases)." },
      { type: "heading", content: "Example" },
      { type: "code", content: "let x = 5;\nlet y = 3;\nconsole.log(x + y); // 8" },
      { type: "heading", content: "Tips for beginners" },
      {
        type: "list", items: [
          "Whitespace (spaces/newlines) usually doesn't matter",
          "Use indentation to make code readable",
          "Comments start with // for one line, /* ... */ for block comments"
        ]
      }
    ]
  },
  {
    id: "variables",
    title: "Variables (let / const / var)",
    sections: [
      { type: "text", content: "Variables are named boxes that store values. Use names that describe the content." },
      { type: "heading", content: "Keywords" },
      {
        type: "list", items: [
          "var — old way, function-scoped (avoid in modern code)",
          "let — block-scoped, can be reassigned",
          "const — block-scoped, cannot be reassigned (the box can't be reassigned, but contents can change if it's an object)"
        ]
      },
      { type: "code", content: "let name = 'Asha';\nconst PI = 3.14159;\nvar legacy = 10;" },
      { type: "heading", content: "Kid explanation" },
      { type: "text", content: "Imagine labeled jars: a jar named 'age' holds the number 7. You can change what's inside a 'let' jar, but a 'const' jar's label says 'do not replace this jar'." }
    ]
  },
  {
    id: "data-types",
    title: "Data Types (Primitives & Objects)",
    sections: [
      { type: "text", content: "JS has simple (primitive) and complex (reference) types. Knowing them helps avoid bugs." },
      { type: "datatype", name: "Number", desc: "All numbers (integers and floats) share the same type", code: "let n = 42; let pi = 3.14;" },
      { type: "datatype", name: "String", desc: "Text inside quotes", code: "let s = 'hello'; let t = \"world\";" },
      { type: "datatype", name: "Boolean", desc: "true or false", code: "let ok = true;" },
      { type: "datatype", name: "Undefined", desc: "Variable declared but no value", code: "let a; // undefined" },
      { type: "datatype", name: "Null", desc: "Intentional empty value", code: "let b = null;" },
      { type: "datatype", name: "Symbol", desc: "Unique identifier (rarely used in basics)", code: "let id = Symbol('id');" },
      { type: "datatype", name: "BigInt", desc: "Big integers beyond Number limits", code: "let big = 12345678901234567890n;" },
      { type: "datatype", name: "Object", desc: "Collection of key-value pairs and complex structures", code: "let obj = { name: 'Asha', age: 7 };" },
      { type: "heading", content: "Quick checks" },
      { type: "code", content: "console.log(typeof 5); // 'number'\nconsole.log(typeof 'hi'); // 'string'\nconsole.log(typeof null); // 'object' (historic quirk)" }
    ]
  },
  {
    id: "operators",
    title: "Operators",
    sections: [
      { type: "text", content: "Operators let you work with values: math, comparisons, logic, and more." },
      { type: "heading", content: "Arithmetic" },
      { type: "code", content: "+, -, *, /, %, ** (power)\nlet sum = 2 + 3;" },
      { type: "heading", content: "Assignment" },
      { type: "code", content: "=, +=, -=, *=, /=\nlet x = 5; x += 2; // 7" },
      { type: "heading", content: "Comparison" },
      { type: "code", content: "== (loose), === (strict), !=, !==, >, <, >=, <=\n0 == '0' // true, 0 === '0' // false" },
      { type: "heading", content: "Logical" },
      { type: "code", content: "&& (and), || (or), ! (not)\nlet ok = true && false; // false" },
      { type: "heading", content: "Kid tip" },
      { type: "text", content: "Think of == as 'looks equal' and === as 'is exactly the same type and value'. Prefer === in most cases." }
    ]
  },
  {
    id: "strings",
    title: "Strings & String Methods",
    sections: [
      { type: "text", content: "Strings are sequences of characters. You can join, split, search, and change them." },
      { type: "code", content: "let s = 'Hello';\nconsole.log(s.length); // 5\nconsole.log(s[0]); // 'H'" },
      { type: "heading", content: "Useful methods" },
      { type: "list", items: ["toUpperCase(), toLowerCase()", "trim()", "slice(start, end)", "split(separator)", "replace(old, new)", "includes(substring)"] },
      { type: "code", content: "' hello '.trim(); // 'hello'\n'one,two'.split(','); // ['one','two']" }
    ]
  },
  {
    id: "arrays",
    title: "Arrays (Lists)",
    sections: [
      { type: "text", content: "Arrays store ordered lists of items. Items can be any type, even other arrays." },
      { type: "code", content: "let arr = ['apple', 'banana', 'cherry'];\nconsole.log(arr[0]); // 'apple'\narr.push('date'); // add at end" },
      { type: "heading", content: "Basic methods" },
      { type: "list", items: ["push(), pop()", "shift(), unshift()", "indexOf(), includes()", "splice(start, deleteCount, ...items)"] },
      { type: "heading", content: "Kid explanation" },
      { type: "text", content: "An array is like a row of boxes labeled 0,1,2... You can put toys (values) in each box." }
    ]
  },
  {
    id: "array-iterators",
    title: "Array Iteration & Higher-Order Methods",
    sections: [
      { type: "text", content: "Modern JS uses methods that take functions to process arrays — powerful and expressive." },
      { type: "list", items: ["forEach(callback)", "map(callback) — transforms items and returns new array", "filter(callback) — keeps items that match", "reduce(callback, initial) — reduces to single value", "find(), findIndex(), some(), every()"] },
      { type: "code", content: "let nums = [1,2,3];\nlet squared = nums.map(n => n*n);\nlet evens = nums.filter(n => n%2===0);" },
      { type: "heading", content: "Advanced note" },
      { type: "text", content: "These methods take callbacks; understanding functions is key to using them well." }
    ]
  },
  {
    id: "objects",
    title: "Objects (Key-Value Pairs)",
    sections: [
      { type: "text", content: "Objects store data as properties: keys (strings or symbols) mapped to values." },
      { type: "code", content: "let student = { name: 'Asha', age: 7 };\nconsole.log(student.name);\nstudent.grade = 'A';" },
      { type: "heading", content: "Methods on objects" },
      { type: "code", content: "let person = { greet() { console.log('Hi'); } }; person.greet();" },
      { type: "heading", content: "Destructuring" },
      { type: "code", content: "let { name, age } = student; // pull properties into variables" }
    ]
  },
  {
    id: "functions",
    title: "Functions (Reusable Pieces)",
    sections: [
      { type: "text", content: "Functions are named actions you can run multiple times. They can take inputs and return outputs." },
      { type: "code", content: "function add(a, b) { return a + b; }\nconst square = x => x * x;\nconsole.log(add(2,3)); // 5" },
      { type: "heading", content: "Parameters vs Arguments" },
      { type: "text", content: "Parameters are the names in the function definition, arguments are the actual values you pass." },
      { type: "heading", content: "Default & Rest parameters" },
      { type: "code", content: "function greet(name='friend') { console.log('Hi ' + name); }\nfunction sum(...nums) { return nums.reduce((s,n)=>s+n,0); }" }
    ]
  },
  {
    id: "scope-hoisting",
    title: "Scope & Hoisting (Who can see what)",
    sections: [
      { type: "text", content: "Scope defines where variables exist: global scope, function scope, and block scope. Hoisting means declarations are processed before code runs (but not initializations)." },
      { type: "code", content: "{ let x = 1; }\n// x is not visible here\nfunction f() { var y = 2; }\n// y is not visible here" },
      { type: "heading", content: "Kid-friendly" },
      { type: "text", content: "Imagine rooms in a house: toys kept in a room are only available inside that room unless you take them out." }
    ]
  },
  {
    id: "this-and-bind",
    title: "The this keyword & Function binding",
    sections: [
      { type: "text", content: "this refers to the object that called the function (context). In arrow functions, this is taken from the surrounding context." },
      { type: "code", content: "const obj = { name: 'A', greet() { console.log(this.name); } }; obj.greet(); // 'A'\nconst f = obj.greet; f(); // undefined or global depending on environment" },
      { type: "heading", content: "call, apply, bind" },
      { type: "code", content: "function say() { console.log(this.name); }\nsay.call({name:'B'});\nlet bound = say.bind({name:'C'}); bound();" }
    ]
  },
  {
    id: "closures",
    title: "Closures (Functions remembering)",
    sections: [
      { type: "text", content: "A closure is when a function 'remembers' the variables from the place it was created, even if run later." },
      { type: "code", content: "function counter() { let count = 0; return function() { count++; return count; } }\nlet c = counter(); console.log(c()); //1 console.log(c()); //2" },
      { type: "heading", content: "Why useful?" },
      { type: "list", items: ["Keep private data (data hiding)", "Create factories and helpers", "Work with asynchronous callbacks"] }
    ]
  },
  {
    id: "async-basics",
    title: "Asynchronous JavaScript (Callbacks, Promises, async/await)",
    sections: [
      { type: "text", content: "JavaScript does not block the page while waiting for slow tasks (like loading data). Instead it uses asynchronous patterns." },
      { type: "heading", content: "Callback example" },
      { type: "code", content: "setTimeout(() => console.log('later'), 1000);" },
      { type: "heading", content: "Promise example" },
      { type: "code", content: "fetch('/data.json')\n  .then(res => res.json())\n  .then(data => console.log(data))\n  .catch(err => console.error(err));" },
      { type: "heading", content: "async/await" },
      { type: "code", content: "async function getData() { try { let res = await fetch('/data.json'); let data = await res.json(); console.log(data); } catch(e) { console.error(e); } }" },
      { type: "heading", content: "Kid explanation" },
      { type: "text", content: "Think of async tasks as asking a friend to bring a book later — you continue playing and use the book when it arrives." }
    ]
  },
  {
    id: "dom-basics",
    title: "DOM Basics (Make the page move)",
    sections: [
      { type: "text", content: "The DOM (Document Object Model) is the page structure your JavaScript can read and change." },
      { type: "code", content: "const el = document.querySelector('#myBtn'); el.textContent = 'Click me';" },
      { type: "heading", content: "Events" },
      { type: "code", content: "el.addEventListener('click', () => console.log('clicked'));" },
      { type: "heading", content: "Kid-friendly" },
      { type: "text", content: "The DOM is like a tree of Lego blocks you can pick and repaint with JS." }
    ]
  },
  {
    id: "debugging",
    title: "Debugging & DevTools",
    sections: [
      { type: "text", content: "Use console.log, breakpoints, and the Sources panel to step through code. Read error messages — they tell where things went wrong." },
      { type: "list", items: ["console.log(), console.warn(), console.error()", "Use debugger; to pause execution", "Inspect variables in DevTools"] },
      { type: "code", content: "// Pause here\ndebugger;" }
    ]
  },
  {
    id: "errors-exceptions",
    title: "Errors & Exception Handling",
    sections: [
      { type: "text", content: "Handle failures gracefully using try/catch. Not every error should crash your app." },
      { type: "code", content: "try { JSON.parse(bad); } catch(e) { console.error('Parsing failed', e); } finally { console.log('Always runs'); }" }
    ]
  },
  {
    id: "modules",
    title: "Modules (import / export)",
    sections: [
      { type: "text", content: "Break code into files using modules. Use export to share and import to take functions/values from other files." },
      { type: "code", content: "// math.js\nexport function add(a,b) { return a+b; }\n// main.js\nimport { add } from './math.js'; console.log(add(2,3));" },
      { type: "heading", content: "Note" },
      { type: "text", content: "Module syntax (ESM) is standard in modern JS. Node.js supports it with .mjs or package.json type: 'module' or use CommonJS (require) in older projects." }
    ]
  },
  {
    id: "best-practices",
    title: "Best Practices & Tips",
    sections: [
      {
        type: "list", items: [
          "Prefer const for values that won't change",
          "Use === and !== instead of == and !=",
          "Keep functions small and single-purpose",
          "Use meaningful variable names",
          "Write comments for WHY, not WHAT",
          "Format code consistently (use a linter / Prettier)"
        ]
      },
      { type: "heading", content: "Security basics" },
      { type: "list", items: ["Never eval() untrusted input", "Escape user input when adding to HTML to prevent XSS"] }
    ]
  },
  {
    id: "next-steps",
    title: "Next Steps & Learning Path",
    sections: [
      { type: "text", content: "After basics, practice by building small projects: To‑Do app, calculator, a small game, or a data fetcher to display API data." },
      { type: "list", items: ["Learn DOM deeply (forms, events, performance)", "Learn modern tooling: npm, bundlers (Vite/webpack)", "Learn a front-end framework: React / Vue / Svelte", "Learn Node.js basics for backend"] },
      { type: "heading", content: "How I would teach this to a class 1 student vs B.Tech" },
      { type: "text", content: "For class 1: use stories, analogies, and live playgrounds (like codepen) with instant visual feedback. For B.Tech: include engine internals, complexity, memory model, and module resolution. This document mixes both: simple analogies followed by technical notes in each section." }
    ]
  }
];

// Export for use in other files if desired (uncomment in module environment)
// export default topics;

function Basics_js() {
  const [activeTopic, setActiveTopic] = useState(topics[0].id);
  const [searchTerm, setSearchTerm] = useState("");

  const currentTopic = topics.find(t => t.id === activeTopic);
  const filteredTopics = topics.filter(topic =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderSection = (section, index) => {
    switch (section.type) {
      case "text":
        return <p key={index} className="content-text">{section.content}</p>;

      case "heading":
        return <h3 key={index} className="content-heading">{section.content}</h3>;

      case "code":
        return (
          <pre key={index} className="code-block">
            <code>{section.content}</code>
          </pre>
        );

      case "list":
        return (
          <ul key={index} className="content-list">
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );

      case "datatype":
        return (
          <div key={index} className="datatype-box">
            <div className="datatype-header">
              <span className="datatype-name">{section.name}</span>
              <span className="datatype-desc">{section.desc}</span>
            </div>
            <pre className="code-block">
              <code>{section.code}</code>
            </pre>
          </div>
        );

      case "method":
        return (
          <div key={index} className="method-box">
            <div className="method-name">{section.name}</div>
            <pre className="code-block">
              <code>{section.code}</code>
            </pre>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="python-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1 className="sidebar-title">Basics JavaScript</h1>
          <p className="sidebar-subtitle">Complete Learning Guide</p>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="🔍 Search topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <nav className="topic-list">
          <ul>
            {filteredTopics.map((topic, index) => (
              <li key={topic.id}>
                <button
                  onClick={() => setActiveTopic(topic.id)}
                  className={`topic-button ${activeTopic === topic.id ? "active" : ""}`}
                >
                  <span className="topic-number">{index + 1}</span>
                  <span className="topic-title">{topic.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <p className="footer-text">{topics.length} topics available</p>
        </div>
      </aside>

      <main className="main-content">
        <div className="content-wrapper">
          <div className="content-header">
            <h2 className="content-title">{currentTopic.title}</h2>
            <div className="title-underline"></div>
          </div>

          <div className="content-card">
            {currentTopic.sections.map((section, index) => renderSection(section, index))}
          </div>

          <div className="nav-buttons">
            <button
              onClick={() => {
                const currentIndex = topics.findIndex(t => t.id === activeTopic);
                if (currentIndex > 0) {
                  setActiveTopic(topics[currentIndex - 1].id);
                  window.scrollTo(0, 0);
                }
              }}
              disabled={topics.findIndex(t => t.id === activeTopic) === 0}
              className="nav-button"
            >
              ← Previous
            </button>

            <button
              onClick={() => {
                const currentIndex = topics.findIndex(t => t.id === activeTopic);
                if (currentIndex < topics.length - 1) {
                  setActiveTopic(topics[currentIndex + 1].id);
                  window.scrollTo(0, 0);
                }
              }}
              disabled={topics.findIndex(t => t.id === activeTopic) === topics.length - 1}
              className="nav-button nav-button-next"
            >
              Next →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Basics_js;