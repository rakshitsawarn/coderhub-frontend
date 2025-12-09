import React, { useState } from "react";
import "../python_css/Basics.css";

const topics = [
  {
    id: "intro",
    title: "Introduction to Java",
    sections: [
      {
        type: "text",
        content:
          "Java is a high-level, object-oriented programming language used to build applications for computers, mobile phones (Android), and large-scale enterprise systems. Java is popular because it is simple, secure, and portable."
      },
      {
        type: "heading",
        content: "Why Java is Popular?"
      },
      {
        type: "list",
        items: [
          "Simple syntax – beginner-friendly and easy to read",
          "Platform independent – write once, run anywhere (WORA)",
          "Highly secure – used in banking and enterprise apps",
          "Large community – millions of developers",
          "Used everywhere – web apps, mobile apps, enterprise systems",
          "Rich libraries – prebuilt tools that simplify coding"
        ]
      },
      {
        type: "heading",
        content: "Who Uses Java?"
      },
      {
        type: "list",
        items: [
          "Google – Android apps",
          "Amazon – backend systems",
          "Netflix – large-scale distributed systems",
          "Uber – server-side applications",
          "Spotify – scalable backend services"
        ]
      }
    ]
  },

  {
    id: "syntax",
    title: "Java Syntax",
    sections: [
      {
        type: "text",
        content:
          "Java syntax is structured and resembles English-like instructions. Every Java program must have a class and a main method to run."
      },
      {
        type: "heading",
        content: "Basic Java Program"
      },
      {
        type: "code",
        content:
          `class Main {
    public static void main(String[] args) {
        System.out.println("Hello Java!");
    }
}`
      },
      {
        type: "text",
        content: "Explanation for absolute beginners:"
      },
      {
        type: "list",
        items: [
          "`class Main` — Every Java program starts with a class.",
          "`main()` — This is the entry point; the program runs from here.",
          "`System.out.println()` — Prints text on the screen."
        ]
      },
      {
        type: "heading",
        content: "Comments in Java"
      },
      {
        type: "code",
        content:
          `// Single-line comment

/*
 Multi-line
 comment
*/`
      }
    ]
  },

  {
    id: "variables",
    title: "Variables",
    sections: [
      {
        type: "text",
        content:
          "Variables store data in Java. Think of a variable as a small box where you put some value."
      },
      {
        type: "heading",
        content: "Example"
      },
      {
        type: "code",
        content:
          `String name = "Amit";  
int age = 10;          
double pi = 3.14;     `
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
          "Use only letters, numbers, and underscores"
        ]
      },
      {
        type: "code",
        content:
          `// Wrong
1name = "Amit";

// Correct
name1 = "Amit";
student_name = "Amit";`
      }
    ]
  },

  {
    id: "data-types",
    title: "Data Types",
    sections: [
      {
        type: "text",
        content:
          "Data types tell Java what type of data a variable will store. Java is a strongly typed language, so the type must be declared."
      },
      {
        type: "heading",
        content: "Common Data Types"
      },

      {
        type: "datatype",
        name: "Integer (int)",
        desc: "Whole numbers without decimals",
        code:
          `int x = 10;
int y = -5;`
      },

      {
        type: "datatype",
        name: "Double (double)",
        desc: "Decimal numbers",
        code:
          `double pi = 3.14;
double temp = -2.5;`
      },

      {
        type: "datatype",
        name: "String",
        desc: "Text inside double quotes",
        code:
          `String name = "Amit";
String greet = "Hello";`
      },

      {
        type: "datatype",
        name: "Boolean (boolean)",
        desc: "true or false values",
        code:
          `boolean isRaining = true;
boolean isSunny = false;`
      },

      {
        type: "heading",
        content: "Check Data Type (Concept)"
      },
      {
        type: "text",
        content:
          "Java is statically typed — type checking happens during compilation, so Java does not use a runtime type-check function like Python’s `type()`."
      }
    ]
  },

  {
    id: "operators",
    title: "Operators",
    sections: [
      {
        type: "text",
        content: "Operators perform actions on variables and values."
      },
      {
        type: "heading",
        content: "Arithmetic Operators"
      },
      {
        type: "code",
        content:
          `+   // Addition
-   // Subtraction
*   // Multiplication
/   // Division
%   // Modulo (remainder)`
      },
      {
        type: "heading",
        content: "Comparison Operators"
      },
      {
        type: "code",
        content:
          `==  // Equal to
!=  // Not equal
>   // Greater than
<   // Less than
>=  // Greater or equal
<=  // Less or equal`
      },
      {
        type: "heading",
        content: "Example"
      },
      {
        type: "code",
        content:
          `int a = 10;
int b = 5;

System.out.println(a + b);   // 15
System.out.println(a * 2);   // 20
System.out.println(a > b);   // true`
      }
    ]
  },

  {
    id: "strings",
    title: "Strings",
    sections: [
      {
        type: "text",
        content: "Strings store text values such as names, messages, etc."
      },
      {
        type: "code",
        content:
          `String name = "Java";
String greeting = "Hello";`
      },
      {
        type: "heading",
        content: "String Indexing"
      },
      {
        type: "text",
        content:
          "Java strings work like arrays of characters; indexing starts from 0."
      },
      {
        type: "code",
        content:
          `String text = "Hello";
System.out.println(text.charAt(0));  // H
System.out.println(text.charAt(4));  // o`
      },
      {
        type: "heading",
        content: "String Operations"
      },
      {
        type: "code",
        content:
          `// Concatenation
String newText = "Hello" + " World";

// Repetition (Java does not support * repetition like Python)
// But we can manually repeat using a loop`
      }
    ]
  },

  {
    id: "string-methods",
    title: "String Methods",
    sections: [
      {
        type: "text",
        content: "Java provides many built-in methods to work with strings."
      },
      {
        type: "method",
        name: "toUpperCase() & toLowerCase()",
        code:
          `String text = "Hello";
System.out.println(text.toUpperCase()); // HELLO
System.out.println(text.toLowerCase()); // hello`
      },
      {
        type: "method",
        name: "trim()",
        code:
          `String text = "  Java  ";
System.out.println(text.trim()); // Java`
      },
      {
        type: "method",
        name: "replace()",
        code:
          `String text = "Hello";
System.out.println(text.replace("H", "Y")); // Yello`
      },
      {
        type: "method",
        name: "split()",
        code:
          `String text = "Hello World";
String[] arr = text.split(" ");`
      }
    ]
  },

  {
    id: "arrays",
    title: "Arrays",
    sections: [
      {
        type: "text",
        content: "Arrays store multiple values of the same type in one variable."
      },
      {
        type: "code",
        content:
          `int[] numbers = {1, 2, 3};
String[] fruits = {"apple", "mango", "banana"};`
      },
      {
        type: "heading",
        content: "Accessing Items"
      },
      {
        type: "code",
        content:
          `System.out.println(fruits[0]);   // apple
System.out.println(fruits[2]);   // banana`
      },
      {
        type: "heading",
        content: "Modifying Arrays"
      },
      {
        type: "code",
        content:
          `fruits[1] = "orange";`
      }
    ]
  },

  {
    id: "conditions",
    title: "Conditions (if/else)",
    sections: [
      {
        type: "text",
        content: "Conditions help Java make decisions based on true/false."
      },
      {
        type: "code",
        content:
          `int x = 10;

if (x > 5) {
    System.out.println("Big");
} else if (x == 5) {
    System.out.println("Equal");
} else {
    System.out.println("Small");
}`
      },
      {
        type: "heading",
        content: "Combining Conditions"
      },
      {
        type: "code",
        content:
          `if (x > 5 && x < 15) {
    System.out.println("x is between 5 and 15");
}`
      }
    ]
  },

  {
    id: "loops",
    title: "Loops (for/while)",
    sections: [
      {
        type: "text",
        content: "Loops repeat tasks multiple times."
      },
      {
        type: "heading",
        content: "For Loop"
      },
      {
        type: "code",
        content:
          `for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
// Output: 0 1 2 3 4`
      },
      {
        type: "heading",
        content: "While Loop"
      },
      {
        type: "code",
        content:
          `int x = 0;
while (x < 5) {
    System.out.println(x);
    x++;
}
// Output: 0 1 2 3 4`
      }
    ]
  },

  {
    id: "methods",
    title: "Methods",
    sections: [
      {
        type: "text",
        content:
          "Methods are reusable blocks of code that perform a specific task."
      },
      {
        type: "heading",
        content: "Creating a Method"
      },
      {
        type: "code",
        content:
          `static void greet(String name) {
    System.out.println("Hello " + name);
}`
      },
      {
        type: "heading",
        content: "Using a Method"
      },
      {
        type: "code",
        content:
          `greet("Amit");  // Output: Hello Amit`
      },
      {
        type: "heading",
        content: "Method with Return"
      },
      {
        type: "code",
        content:
          `static int add(int a, int b) {
    return a + b;
}

int result = add(5, 10);
System.out.println(result); // 15`
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
          <h1 className="sidebar-title">Basics Java</h1>
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