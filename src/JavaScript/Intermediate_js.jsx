import React, { useState } from "react";
import "/src/python_css/Basics.css";

const topics = [
  {
    id: "intro",
    title: "Introduction to Python",
    sections: [
      {
        type: "text",
        content: "Python is a high-level, interpreted, general-purpose programming language. It is known for its simple syntax, which makes it very easy to learn and read."
      },
      {
        type: "heading",
        content: "Why Python is Popular?"
      },
      {
        type: "list",
        items: [
          "Easy to learn and read - Python's syntax is similar to English",
          "Free and open-source - Download and use for free",
          "Cross-platform - Works on Windows, Mac, and Linux",
          "Large community - Millions of Python users worldwide",
          "Versatile - Web dev, game dev, data science, ML, automation",
          "Powerful libraries - NumPy, Pandas, Matplotlib, TensorFlow"
        ]
      },
      {
        type: "heading",
        content: "Who Uses Python?"
      },
      {
        type: "list",
        items: [
          "Google - Search engines and AI projects",
          "Netflix - Content recommendation systems",
          "Instagram - Backend development",
          "NASA - Scientific programming",
          "Spotify - Data analysis and recommendations"
        ]
      }
    ]
  },
  {
    id: "syntax",
    title: "Python Syntax",
    sections: [
      {
        type: "text",
        content: "Python syntax is simple and easy to read. Here's what you need to know:"
      },
      {
        type: "heading",
        content: "Python Statements"
      },
      {
        type: "code",
        content: `x = 5\ny = 10\nprint(x + y)  # Output: 15`
      },
      {
        type: "heading",
        content: "Indentation"
      },
      {
        type: "text",
        content: "Python uses indentation (spaces) to define blocks of code:"
      },
      {
        type: "code",
        content: `if x > 0:\n    print("Positive")\nelse:\n    print("Non-positive")`
      },
      {
        type: "heading",
        content: "Comments"
      },
      {
        type: "code",
        content: `# Single-line comment\n\n"""\nMulti-line\ncomment\n"""`
      },
      {
        type: "heading",
        content: "First Python Program"
      },
      {
        type: "code",
        content: `print("Hello, Python!")`
      }
    ]
  },
  // ... (basic topics omitted here for brevity - original basic topics go above)

  // ------------------ INTERMEDIATE TOPICS ------------------
  {
    id: "intermediate-intro",
    title: "Intermediate Python — Overview",
    sections: [
      {
        type: "text",
        content: "These intermediate topics build upon basics and prepare you for real-world projects: object-oriented design, advanced data structures, modules & packages, file and network IO, testing, and asynchronous programming. Explanations include simple analogies and concrete code examples so beginners and advanced students both benefit."
      }
    ]
  },
  {
    id: "o-o-p",
    title: "Object-Oriented Programming (OOP)",
    sections: [
      { type: "text", content: "OOP lets you model real-world things using classes and objects. It's about bundling data and behavior together." },
      { type: "heading", content: "Class & Object" },
      { type: "code", content: `class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        print(self.name + ' makes a sound')\n\ndog = Animal('Buddy')\ndog.speak()` },
      { type: "heading", content: "Inheritance & Polymorphism" },
      { type: "code", content: `class Dog(Animal):\n    def speak(self):\n        print(self.name + ' barks')\n\nmydog = Dog('Rex')\nmydog.speak()  # Rex barks` },
      { type: "heading", content: "Encapsulation & Private Members" },
      { type: "text", content: "Use naming conventions (e.g., _hidden or __very_hidden) to indicate private attributes; use properties for controlled access." },
      { type: "code", content: `class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.__balance = balance\n    def deposit(self, amt):\n        self.__balance += amt\n    def get_balance(self):\n        return self.__balance` }
    ]
  },
  {
    id: "data-structures-advanced",
    title: "Advanced Data Structures",
    sections: [
      { type: "text", content: "Beyond lists and dicts: Sets, Tuples, NamedTuples, deque, defaultdict, Counter, and heapq are essential for efficient code." },
      { type: "code", content: `from collections import deque, defaultdict, Counter\nfrom heapq import heappush, heappop\n\nq = deque([1,2,3])\nq.appendleft(0)\n\nd = defaultdict(list)\nd['a'].append(1)\n\nc = Counter([1,2,2,3])\nprint(c[2])  # 2` },
      { type: "heading", content: "When to use which" },
      { type: "list", items: ["Use set for unique items and fast membership checks", "Use deque for fast pops from both ends", "Use heapq for priority queues"] }
    ]
  },
  {
    id: "comprehensions",
    title: "List / Dict / Set Comprehensions & Generator Expressions",
    sections: [
      { type: "text", content: "Comprehensions provide concise syntax for building collections; generator expressions compute items lazily." },
      { type: "code", content: `squares = [x*x for x in range(10)]\nsquare_gen = (x*x for x in range(10))\nd = {x: x*x for x in range(5)}\nunique = {x for x in [1,2,2,3]}  # {1,2,3}` },
      { type: "heading", content: "Kid-friendly" },
      { type: "text", content: "Comprehensions are like magic boxes that make a new list from an old one using a recipe (the expression)." }
    ]
  },
  {
    id: "functions-advanced",
    title: "Functions — Advanced (args, kwargs, decorators, closures)",
    sections: [
      { type: "text", content: "Understand flexible parameter handling, decorators for modifying behavior, and closures for stateful functions." },
      { type: "code", content: `def func(a, b=2, *args, **kwargs):\n    print(a, b, args, kwargs)\n\ndef decorator(fn):\n    def wrapper(*a, **k):\n        print('Before')\n        res = fn(*a, **k)\n        print('After')\n        return res\n    return wrapper\n\n@decorator\ndef greet(name):\n    print('Hello', name)` },
      { type: "heading", content: "Practical use" },
      { type: "list", items: ["Decorators: logging, memoization, access control", "Closures: factories, callbacks with memory"] }
    ]
  },
  {
    id: "file-network-io",
    title: "File Handling & Network I/O (requests, sockets)",
    sections: [
      { type: "text", content: "Reading/writing files, working with CSV/JSON, and fetching data from the web are everyday tasks." },
      { type: "code", content: `# Files\nwith open('notes.txt','w') as f:\n    f.write('hello')\n\n# JSON\nimport json\nobj = {'a':1}\nwith open('data.json','w') as f:\n    json.dump(obj, f)\n\n# Requests (HTTP)\nimport requests\nres = requests.get('https://api.github.com')\nprint(res.status_code)` },
      { type: "heading", content: "CSV" },
      { type: "code", content: `import csv\nwith open('data.csv') as f:\n    reader = csv.reader(f)\n    for row in reader:\n        print(row)` }
    ]
  },
  {
    id: "errors-exceptions-advanced",
    title: "Exception Handling & Assertions",
    sections: [
      { type: "text", content: "Use exceptions to handle unexpected situations and assertions to document assumptions during development." },
      { type: "code", content: `try:\n    risky()\nexcept (ValueError, TypeError) as e:\n    print('Handled', e)\nelse:\n    print('No error')\nfinally:\n    cleanup()` },
      { type: "heading", content: "Custom Exceptions" },
      { type: "code", content: `class AppError(Exception):\n    pass\n\nraise AppError('Something went wrong')` }
    ]
  },
  {
    id: "iterators-generators",
    title: "Iterators & Generators",
    sections: [
      { type: "text", content: "Generators let you produce values on-the-fly using yield — great for large data and streaming." },
      { type: "code", content: `def count_up_to(n):\n    i = 1\n    while i <= n:\n        yield i\n        i += 1\n\nfor x in count_up_to(5):\n    print(x)` },
      { type: "heading", content: "Use cases" },
      { type: "list", items: ["Streaming big files", "Pipelines that process data step-by-step"] }
    ]
  },
  {
    id: "concurrency",
    title: "Concurrency — threading, multiprocessing, asyncio",
    sections: [
      { type: "text", content: "Learn the difference between threads (shared memory), processes (separate memory), and asyncio (cooperative multitasking)." },
      { type: "code", content: `# Thread example\nimport threading\ndef job():\n    print('working')\nthread = threading.Thread(target=job)\nthread.start()\n\n# Asyncio example\nimport asyncio\nasync def main():\n    await asyncio.sleep(1)\n    print('done')\nasyncio.run(main())` },
      { type: "heading", content: "When to use" },
      { type: "list", items: ["IO-bound: use asyncio or threading", "CPU-bound: use multiprocessing"] }
    ]
  },
  {
    id: "testing-debugging",
    title: "Testing & Debugging",
    sections: [
      { type: "text", content: "Write tests to catch regressions and use debuggers to inspect runtime behavior." },
      { type: "code", content: `# unittest example\nimport unittest\n\nclass TestMath(unittest.TestCase):\n    def test_add(self):\n        self.assertEqual(1+1, 2)\n\nif __name__ == '__main__':\n    unittest.main()` },
      { type: "heading", content: "Tools" },
      { type: "list", items: ["pytest — modern testing framework", "pdb — interactive debugger", "logging module for production logs"] }
    ]
  },
  {
    id: "packaging-env",
    title: "Packaging, Virtual Environments & Dependencies",
    sections: [
      { type: "text", content: "Use virtual environments to isolate projects, and pip/requirements.txt or pyproject.toml to manage dependencies." },
      { type: "code", content: `# create venv\npython -m venv env\n# activate (Windows)\n# env\\Scripts\\activate\n# install\npip install requests\n# freeze\npip freeze > requirements.txt` },
      { type: "heading", content: "Publishing" },
      { type: "text", content: "Package your library using setuptools or poetry and publish to PyPI if needed." }
    ]
  },
  {
    id: "typing",
    title: "Type Hints & Static Checking",
    sections: [
      { type: "text", content: "Type hints help document APIs and enable static analysis with tools like mypy." },
      { type: "code", content: `def greet(name: str) -> str:\n    return 'Hello ' + name\n\nfrom typing import List\ndef total(nums: List[int]) -> int:\n    return sum(nums)` },
      { type: "heading", content: "Practical tip" },
      { type: "text", content: "Start with a few key modules typed and expand as the codebase grows. Type hints are optional but very helpful." }
    ]
  },
  {
    id: "security",
    title: "Security Basics",
    sections: [
      { type: "text", content: "Understand common security pitfalls: input validation, injection attacks, secure handling of secrets, and safe deserialization." },
      { type: "list", items: ["Never trust user input", "Use parameterized queries for databases", "Avoid eval() on untrusted strings", "Store secrets in environment variables"] }
    ]
  },
  {
    id: "next-steps-intermediate",
    title: "Projects & Next Steps",
    sections: [
      { type: "text", content: "Practice by building: a web scraper, a REST API with Flask/FastAPI, a CLI tool, and small data pipelines. Combine topics: OOP + testing + packaging + async IO." },
      { type: "list", items: ["Build a REST API and test it", "Write a scraper that stores results in a database", "Create a command-line utility and package it"] }
    ]
  }
];

// export default topics;

function Intermediate_js() {
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
          <h1 className="sidebar-title">Python Basics</h1>
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

export default Intermediate_js;