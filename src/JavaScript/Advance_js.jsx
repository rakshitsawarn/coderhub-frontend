import React, { useState } from "react";
import "/src/python_css/Basics.css";

const topics = [
  {
    id: "intro",
    title: "Introduction to JavaScript",
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
  {
    id: "variables",
    title: "Variables",
    sections: [
      {
        type: "text",
        content: "Variables are containers that store data in a program."
      },
      {
        type: "heading",
        content: "Example"
      },
      {
        type: "code",
        content: `name = "Amit"    # String\nage = 10         # Integer\npi = 3.14        # Float`
      },
      {
        type: "heading",
        content: "Naming Rules"
      },
      {
        type: "list",
        items: [
          "Cannot start with a number",
          "Case-sensitive (Name ≠ name)",
          "Use meaningful names",
          "Use letters, numbers, and underscores only"
        ]
      },
      {
        type: "code",
        content: `# Wrong\n1name = "Amit"\n\n# Correct\nname1 = "Amit"\nstudent_name = "Amit"`
      }
    ]
  },
  {
    id: "data-types",
    title: "Data Types",
    sections: [
      {
        type: "text",
        content: "A data type tells Python what kind of data is stored in a variable."
      },
      {
        type: "heading",
        content: "Common Data Types"
      },
      {
        type: "datatype",
        name: "Integer (int)",
        desc: "Whole numbers",
        code: `x = 10\ny = -5`
      },
      {
        type: "datatype",
        name: "Float (float)",
        desc: "Decimal numbers",
        code: `pi = 3.14\ntemp = -2.5`
      },
      {
        type: "datatype",
        name: "String (str)",
        desc: "Text in quotes",
        code: `name = "Amit"\ngreeting = 'Hello'`
      },
      {
        type: "datatype",
        name: "Boolean (bool)",
        desc: "True or False",
        code: `is_raining = True\nis_sunny = False`
      },
      {
        type: "datatype",
        name: "List (list)",
        desc: "Ordered collection",
        code: `fruits = ["apple", "banana"]\nnumbers = [1, 2, 3]`
      },
      {
        type: "datatype",
        name: "Dictionary (dict)",
        desc: "Key-value pairs",
        code: `student = {\n  "name": "Amit",\n  "age": 12\n}`
      },
      {
        type: "heading",
        content: "Check Data Type"
      },
      {
        type: "code",
        content: `x = 10\nprint(type(x))  # <class 'int'>`
      }
    ]
  },
  {
    id: "operators",
    title: "Operators",
    sections: [
      {
        type: "text",
        content: "Operators perform operations on values and variables."
      },
      {
        type: "heading",
        content: "Arithmetic Operators"
      },
      {
        type: "code",
        content: `+   # Addition\n-   # Subtraction\n*   # Multiplication\n/   # Division\n%   # Modulo\n**  # Exponent\n//  # Floor division`
      },
      {
        type: "heading",
        content: "Comparison Operators"
      },
      {
        type: "code",
        content: `==  # Equal to\n!=  # Not equal\n>   # Greater than\n<   # Less than\n>=  # Greater or equal\n<=  # Less or equal`
      },
      {
        type: "heading",
        content: "Example"
      },
      {
        type: "code",
        content: `a = 10\nb = 5\n\nprint(a + b)   # 15\nprint(a ** 2)  # 100\nprint(a > b)   # True`
      }
    ]
  },
  {
    id: "strings",
    title: "Strings",
    sections: [
      {
        type: "text",
        content: "Strings are text enclosed in quotes."
      },
      {
        type: "code",
        content: `name = "Python"\ngreeting = 'Hello'`
      },
      {
        type: "heading",
        content: "String Indexing"
      },
      {
        type: "code",
        content: `text = "Hello"\nprint(text[0])   # H\nprint(text[-1])  # o`
      },
      {
        type: "heading",
        content: "String Operations"
      },
      {
        type: "code",
        content: `# Concatenation\nnew_text = "Hello" + " World"\n\n# Repetition\nrepeat = "Hi" * 3  # HiHiHi`
      }
    ]
  },
  {
    id: "string-methods",
    title: "String Methods",
    sections: [
      {
        type: "text",
        content: "String methods help you work with text easily."
      },
      {
        type: "method",
        name: "upper() & lower()",
        code: `text = "Hello"\nprint(text.upper())  # HELLO\nprint(text.lower())  # hello`
      },
      {
        type: "method",
        name: "strip()",
        code: `text = "  Python  "\nprint(text.strip())  # Python`
      },
      {
        type: "method",
        name: "replace()",
        code: `text = "Hello"\nprint(text.replace("H", "Y"))  # Yello`
      },
      {
        type: "method",
        name: "split()",
        code: `text = "Hello World"\nprint(text.split())  # ['Hello', 'World']`
      }
    ]
  },
  {
    id: "lists",
    title: "Lists",
    sections: [
      {
        type: "text",
        content: "Lists store multiple values in a single variable."
      },
      {
        type: "code",
        content: `fruits = ["apple", "mango", "banana"]\nnumbers = [1, 2, 3, 4]\nmixed = [1, "apple", 3.5, True]`
      },
      {
        type: "heading",
        content: "Accessing Items"
      },
      {
        type: "code",
        content: `fruits = ["apple", "mango", "banana"]\nprint(fruits[0])   # apple\nprint(fruits[-1])  # banana`
      },
      {
        type: "heading",
        content: "Modifying Lists"
      },
      {
        type: "code",
        content: `fruits[1] = "orange"      # Change\nfruits.append("grapes")   # Add\nfruits.remove("apple")    # Remove`
      }
    ]
  },
  {
    id: "list-methods",
    title: "List Methods",
    sections: [
      {
        type: "method",
        name: "append()",
        code: `fruits = ["apple"]\nfruits.append("banana")\nprint(fruits)  # ['apple', 'banana']`
      },
      {
        type: "method",
        name: "insert()",
        code: `fruits.insert(0, "mango")\nprint(fruits)  # ['mango', 'apple', 'banana']`
      },
      {
        type: "method",
        name: "sort()",
        code: `nums = [3, 1, 2]\nnums.sort()\nprint(nums)  # [1, 2, 3]`
      },
      {
        type: "method",
        name: "reverse()",
        code: `nums.reverse()\nprint(nums)  # [3, 2, 1]`
      }
    ]
  },
  {
    id: "dictionaries",
    title: "Dictionaries",
    sections: [
      {
        type: "text",
        content: "Dictionaries store data in key-value pairs."
      },
      {
        type: "code",
        content: `student = {\n  "name": "Amit",\n  "age": 12,\n  "class": 7\n}`
      },
      {
        type: "heading",
        content: "Accessing Items"
      },
      {
        type: "code",
        content: `print(student["name"])  # Amit\nprint(student["age"])   # 12`
      },
      {
        type: "heading",
        content: "Modifying Dictionary"
      },
      {
        type: "code",
        content: `student["age"] = 13        # Change\nstudent["grade"] = "A"     # Add\ndel student["class"]       # Remove`
      }
    ]
  },
  {
    id: "conditions",
    title: "Conditions (if/elif/else)",
    sections: [
      {
        type: "text",
        content: "Conditions allow Python to make decisions."
      },
      {
        type: "code",
        content: `x = 10\n\nif x > 5:\n    print("Big")\nelif x == 5:\n    print("Equal")\nelse:\n    print("Small")\n\n# Output: Big`
      },
      {
        type: "heading",
        content: "Combining Conditions"
      },
      {
        type: "code",
        content: `if x > 5 and x < 15:\n    print("x is between 5 and 15")`
      }
    ]
  },
  {
    id: "loops",
    title: "Loops (for/while)",
    sections: [
      {
        type: "text",
        content: "Loops repeat actions multiple times."
      },
      {
        type: "heading",
        content: "For Loop"
      },
      {
        type: "code",
        content: `for i in range(5):\n    print(i)\n\n# Output: 0, 1, 2, 3, 4`
      },
      {
        type: "heading",
        content: "While Loop"
      },
      {
        type: "code",
        content: `x = 0\nwhile x < 5:\n    print(x)\n    x += 1\n\n# Output: 0, 1, 2, 3, 4`
      }
    ]
  },
  {
    id: "functions",
    title: "Functions",
    sections: [
      {
        type: "text",
        content: "Functions are reusable blocks of code."
      },
      {
        type: "heading",
        content: "Creating a Function"
      },
      {
        type: "code",
        content: `def greet(name):\n    print("Hello", name)`
      },
      {
        type: "heading",
        content: "Using a Function"
      },
      {
        type: "code",
        content: `greet("Amit")  # Output: Hello Amit`
      },
      {
        type: "heading",
        content: "Functions with Return"
      },
      {
        type: "code",
        content: `def add(a, b):\n    return a + b\n\nresult = add(5, 10)\nprint(result)  # 15`
      }
    ]
  },
  {
    id: "modules",
    title: "Modules",
    sections: [
      {
        type: "text",
        content: "Modules are Python files containing functions and variables."
      },
      {
        type: "heading",
        content: "Using Math Module"
      },
      {
        type: "code",
        content: `import math\n\nprint(math.sqrt(16))   # 4.0\nprint(math.ceil(4.2))  # 5\nprint(math.floor(4.8)) # 4\nprint(math.pi)         # 3.14159...`
      },
      {
        type: "heading",
        content: "Using Random Module"
      },
      {
        type: "code",
        content: `import random\n\nprint(random.randint(1, 10))  # Random number\nprint(random.choice([1,2,3])) # Random choice`
      }
    ]
  },
  {
    id: "file-handling",
    title: "File Handling",
    sections: [
      {
        type: "text",
        content: "Python can read and write files."
      },
      {
        type: "heading",
        content: "Reading a File"
      },
      {
        type: "code",
        content: `with open("file.txt", "r") as f:\n    content = f.read()\n    print(content)`
      },
      {
        type: "heading",
        content: "Writing to a File"
      },
      {
        type: "code",
        content: `with open("file.txt", "w") as f:\n    f.write("Hello World")`
      }
    ]
  },
  {
    id: "exception-handling",
    title: "Exception Handling",
    sections: [
      {
        type: "text",
        content: "Handle errors gracefully with try-except blocks."
      },
      {
        type: "code",
        content: `try:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero")\nfinally:\n    print("This always runs")`
      }
    ]
  }
];

function Advance_js() {
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

export default Advance_js;