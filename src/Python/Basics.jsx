import React, { useState } from "react";
import "/src/python_css/Basics.css";

const topics = [
  // -------------------------------------------------
  // 1. INTRODUCTION TO PYTHON
  // -------------------------------------------------
  {
    id: "intro",
    title: "Introduction to Python",
    sections: [
      {
        type: "text",
        content:
          "Python is a high-level, interpreted, general-purpose programming language used for web development, data science, machine learning, automation, scripting, and more. It is known for its simple syntax, which makes it easy for beginners to learn and powerful enough for professionals."
      },
      {
        type: "heading",
        content: "Key Features of Python"
      },
      {
        type: "list",
        items: [
          "Simple and Readable – Syntax is similar to English.",
          "Interpreted Language – Runs line by line.",
          "Cross-Platform – Works on Windows, Linux, and macOS.",
          "Huge Community – Millions of developers worldwide.",
          "Rich Libraries – NumPy, Pandas, Django, Flask, TensorFlow.",
          "Versatile – Used in ML, AI, Cybersecurity, Web Dev, Automation."
        ]
      },
      {
        type: "heading",
        content: "Who Uses Python?"
      },
      {
        type: "list",
        items: [
          "Google – Machine learning and backend systems",
          "Netflix – Recommendation algorithms",
          "NASA – Scientific research and automation",
          "Instagram – Backend server-side development",
          "Spotify – Data analytics and recommendation engine"
        ]
      }
    ]
  },

  // -------------------------------------------------
  // 2. PYTHON SYNTAX
  // -------------------------------------------------
  {
    id: "syntax",
    title: "Python Syntax",
    sections: [
      {
        type: "text",
        content:
          "Python syntax is designed to be clean and readable. Indentation plays a major role in defining code blocks."
      },
      {
        type: "heading",
        content: "Basic Python Statements"
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
        content:
          "Python uses indentation (spaces) to define blocks of code such as inside loops, functions, and conditions."
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
        content: `# Single-line comment\n\n"""\nMulti-line\ncomment\n""" `
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

  // -------------------------------------------------
  // 3. VARIABLES
  // -------------------------------------------------
  {
    id: "variables",
    title: "Variables",
    sections: [
      {
        type: "text",
        content:
          "Variables are containers used to store data. In Python, you don't need to declare the type of a variable (dynamic typing)."
      },
      {
        type: "heading",
        content: "Example"
      },
      {
        type: "code",
        content: `name = "Amit"      # String\nage = 20           # Integer\npi = 3.14          # Float`
      },
      {
        type: "heading",
        content: "Variable Naming Rules"
      },
      {
        type: "list",
        items: [
          "Must not start with a number.",
          "Case-sensitive (Name ≠ name).",
          "Should not contain special characters except underscore.",
          "Use meaningful names for readability."
        ]
      },
      {
        type: "code",
        content: `# Invalid\n1name = "Amit"\n\n# Valid\nname1 = "Amit"\nstudent_name = "Amit"`
      }
    ]
  },

  // -------------------------------------------------
  // 4. DATA TYPES
  // -------------------------------------------------
  {
    id: "data-types",
    title: "Data Types",
    sections: [
      {
        type: "text",
        content:
          "A data type tells Python what type of value is stored inside a variable."
      },
      {
        type: "heading",
        content: "Common Data Types"
      },

      // Integer
      {
        type: "datatype",
        name: "Integer (int)",
        desc: "Whole numbers without decimals.",
        code: `x = 10\ny = -5`
      },

      // Float
      {
        type: "datatype",
        name: "Float (float)",
        desc: "Numbers with decimal values.",
        code: `pi = 3.14\ntemp = -2.5`
      },

      // String
      {
        type: "datatype",
        name: "String (str)",
        desc: "Sequence of characters enclosed in quotes.",
        code: `name = "Amit"\nmsg = 'Hello'`
      },

      // Boolean
      {
        type: "datatype",
        name: "Boolean (bool)",
        desc: "Represents True or False values.",
        code: `is_raining = True\nis_sunny = False`
      },

      // List
      {
        type: "datatype",
        name: "List (list)",
        desc: "Ordered and changeable collection of items.",
        code: `fruits = ["apple", "banana"]\nnumbers = [1, 2, 3]`
      },

      // Tuple
      {
        type: "datatype",
        name: "Tuple (tuple)",
        desc: "Ordered and unchangeable collection of items.",
        code: `point = (10, 20)`
      },

      // Dictionary
      {
        type: "datatype",
        name: "Dictionary (dict)",
        desc: "Stores data in key-value pairs.",
        code: `student = {\n  "name": "Amit",\n  "age": 12\n}`
      },

      // Set
      {
        type: "datatype",
        name: "Set (set)",
        desc: "Unordered collection of unique values.",
        code: `unique = {1, 2, 3, 3}    # duplicates removed`
      },

      {
        type: "heading",
        content: "Checking Data Type"
      },
      {
        type: "code",
        content: `x = 10\nprint(type(x))  # <class 'int'>`
      }
    ]
  },

  // -------------------------------------------------
  // 5. OPERATORS
  // -------------------------------------------------
  {
    id: "operators",
    title: "Operators",
    sections: [
      {
        type: "text",
        content:
          "Operators are symbols used to perform operations on variables and values."
      },

      {
        type: "heading",
        content: "Arithmetic Operators"
      },
      {
        type: "code",
        content: `+   # Addition\n-   # Subtraction\n*   # Multiplication\n/   # Division\n%   # Modulus\n**  # Exponent\n//  # Floor Division`
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
        content: "Logical Operators"
      },
      {
        type: "code",
        content: `and   # Both conditions must be True\nor    # At least one condition True\nnot   # Reverses the condition`
      },

      {
        type: "heading",
        content: "Example"
      },
      {
        type: "code",
        content: `a = 10\nb = 5\n\nprint(a + b)   # 15\nprint(a > b)   # True\nprint(a == 10 and b < 3)  # False`
      }
    ]
  },

  // -------------------------------------------------
  // 6. STRINGS
  // -------------------------------------------------
  {
    id: "strings",
    title: "Strings",
    sections: [
      {
        type: "text",
        content: "Strings represent text in Python and are enclosed in quotes."
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
        content: `# Concatenation\nmsg = "Hello" + " World"\n\n# Repetition\nrepeat = "Hi" * 3  # HiHiHi`
      }
    ]
  },

  // -------------------------------------------------
  // 7. STRING METHODS
  // -------------------------------------------------
  {
    id: "string-methods",
    title: "String Methods",
    sections: [
      {
        type: "text",
        content:
          "String methods allow easy manipulation of text like converting case, replacing characters, splitting text, etc."
      },

      {
        type: "method",
        name: "upper() / lower()",
        code: `text = "Hello"\nprint(text.upper())\nprint(text.lower())`
      },
      {
        type: "method",
        name: "strip()",
        code: `text = "  Python  "\nprint(text.strip())  # removes spaces`
      },
      {
        type: "method",
        name: "replace()",
        code: `text = "Hello"\nprint(text.replace("H", "Y"))`
      },
      {
        type: "method",
        name: "split()",
        code: `text = "Hello World"\nprint(text.split())`
      }
    ]
  },

  // -------------------------------------------------
  // 8. LISTS
  // -------------------------------------------------
  {
    id: "lists",
    title: "Lists",
    sections: [
      {
        type: "text",
        content:
          "Lists store multiple values in a single variable. They are ordered and changeable."
      },
      {
        type: "code",
        content: `fruits = ["apple", "mango", "banana"]\nnumbers = [1, 2, 3, 4]`
      },
      {
        type: "heading",
        content: "Accessing List Items"
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
        content: `fruits[1] = "orange"\nfruits.append("grapes")\nfruits.remove("apple")`
      }
    ]
  },

  // -------------------------------------------------
  // 9. LIST METHODS
  // -------------------------------------------------
  {
    id: "list-methods",
    title: "List Methods",
    sections: [
      {
        type: "method",
        name: "append()",
        code: `fruits = ["apple"]\nfruits.append("banana")`
      },
      {
        type: "method",
        name: "insert()",
        code: `fruits.insert(0, "mango")`
      },
      {
        type: "method",
        name: "sort()",
        code: `nums = [3, 1, 2]\nnums.sort()`
      },
      {
        type: "method",
        name: "reverse()",
        code: `nums.reverse()`
      }
    ]
  },

  // -------------------------------------------------
  // 10. DICTIONARIES
  // -------------------------------------------------
  {
    id: "dictionaries",
    title: "Dictionaries",
    sections: [
      {
        type: "text",
        content:
          "Dictionaries store data in key-value pairs and are useful for structured information."
      },
      {
        type: "code",
        content: `student = {\n  "name": "Amit",\n  "age": 12,\n  "class": 7\n}`
      },
      {
        type: "heading",
        content: "Accessing Values"
      },
      {
        type: "code",
        content: `print(student["name"])  # Amit`
      },
      {
        type: "heading",
        content: "Modifying Dictionary"
      },
      {
        type: "code",
        content: `student["age"] = 13\nstudent["grade"] = "A"\ndel student["class"]`
      }
    ]
  },

  // -------------------------------------------------
  // 11. CONDITIONS
  // -------------------------------------------------
  {
    id: "conditions",
    title: "Conditions (if / elif / else)",
    sections: [
      {
        type: "text",
        content:
          "Conditional statements allow Python to make decisions based on conditions."
      },
      {
        type: "code",
        content: `x = 10\n\nif x > 5:\n    print("Big")\nelif x == 5:\n    print("Equal")\nelse:\n    print("Small")`
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

  // -------------------------------------------------
  // 12. LOOPS
  // -------------------------------------------------
  {
    id: "loops",
    title: "Loops (for / while)",
    sections: [
      {
        type: "text",
        content:
          "Loops allow repeating an action multiple times until a condition is met."
      },

      {
        type: "heading",
        content: "For Loop"
      },
      {
        type: "code",
        content: `for i in range(5):\n    print(i)`
      },

      {
        type: "heading",
        content: "While Loop"
      },
      {
        type: "code",
        content: `x = 0\nwhile x < 5:\n    print(x)\n    x += 1`
      }
    ]
  },

  // -------------------------------------------------
  // 13. FUNCTIONS
  // -------------------------------------------------
  {
    id: "functions",
    title: "Functions",
    sections: [
      {
        type: "text",
        content:
          "Functions are reusable blocks of code that perform a specific task."
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
        content: `greet("Amit")`
      },
      {
        type: "heading",
        content: "Return Values"
      },
      {
        type: "code",
        content: `def add(a, b):\n    return a + b\n\nresult = add(5, 10)\nprint(result)`
      }
    ]
  },

  // -------------------------------------------------
  // 14. MODULES
  // -------------------------------------------------
  {
    id: "modules",
    title: "Modules",
    sections: [
      {
        type: "text",
        content:
          "Modules are Python files that contain functions, variables, or classes. You can import them into other programs."
      },

      {
        type: "heading",
        content: "Math Module"
      },
      {
        type: "code",
        content: `import math\n\nprint(math.sqrt(16))\nprint(math.pi)`
      },

      {
        type: "heading",
        content: "Random Module"
      },
      {
        type: "code",
        content: `import random\n\nprint(random.randint(1, 10))\nprint(random.choice([1, 2, 3]))`
      }
    ]
  },

  // -------------------------------------------------
  // 15. FILE HANDLING
  // -------------------------------------------------
  {
    id: "file-handling",
    title: "File Handling",
    sections: [
      {
        type: "text",
        content:
          "Python allows reading and writing files for storing and loading data."
      },

      {
        type: "heading",
        content: "Reading a File"
      },
      {
        type: "code",
        content: `with open("data.txt", "r") as f:\n    content = f.read()\n    print(content)`
      },

      {
        type: "heading",
        content: "Writing to a File"
      },
      {
        type: "code",
        content: `with open("data.txt", "w") as f:\n    f.write("Hello World")`
      }
    ]
  },

  // -------------------------------------------------
  // 16. EXCEPTION HANDLING
  // -------------------------------------------------
  {
    id: "exception-handling",
    title: "Exception Handling",
    sections: [
      {
        type: "text",
        content:
          "Exceptions are errors that occur during runtime. Python provides try-except blocks to handle them gracefully."
      },
      {
        type: "code",
        content: `try:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print("You cannot divide by zero.")\nfinally:\n    print("This block always runs.")`
      }
    ]
  }
];

function Basics() {
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

export default Basics;