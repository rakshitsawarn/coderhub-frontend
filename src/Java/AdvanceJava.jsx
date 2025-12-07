import React, { useState } from "react";
import "/src/python_css/Basics.css";

const topics = [

  /* -------------------------------------------------------------------------- */
  /*                          1. EXCEPTION HANDLING                             */
  /* -------------------------------------------------------------------------- */

  {
    id: "exceptions",
    title: "Exception Handling",
    sections: [
      {
        type: "text",
        content:
          "Exceptions are errors that occur during program execution. If not handled, they stop the program. Java provides a structured way to handle these errors so programs run safely."
      },

      {
        type: "heading",
        content: "Why Exceptions Occur?"
      },

      {
        type: "list",
        items: [
          "Dividing a number by zero",
          "Accessing an invalid array index",
          "Opening a file that does not exist",
          "Incorrect input from user",
          "Network failure or no internet"
        ]
      },

      {
        type: "heading",
        content: "Basic Exception Handling Syntax"
      },

      {
        type: "code",
        content:
          `try {
    // code that might cause error
} catch (Exception e) {
    // handling the error
} finally {
    // runs always
}`
      },

      {
        type: "heading",
        content: "Example"
      },

      {
        type: "code",
        content:
          `try {
    int x = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
} finally {
    System.out.println("This always runs");
}`
      },

      {
        type: "heading",
        content: "Types of Exceptions"
      },

      {
        type: "list",
        items: [
          "Checked Exceptions – must be handled (FileNotFoundException)",
          "Unchecked Exceptions – runtime errors (NullPointerException)",
          "Errors – serious issues (OutOfMemoryError)"
        ]
      }
    ]
  },

  /* -------------------------------------------------------------------------- */
  /*                             2. FILE HANDLING                                */
  /* -------------------------------------------------------------------------- */

  {
    id: "file-handling",
    title: "File Handling",
    sections: [
      {
        type: "text",
        content:
          "Java provides File, FileReader, FileWriter, BufferedReader, and PrintWriter classes to read and write files on the computer."
      },

      {
        type: "heading",
        content: "Writing to a File"
      },

      {
        type: "code",
        content:
          `import java.io.*;

class Main {
    public static void main(String[] args) throws Exception {
        FileWriter fw = new FileWriter("data.txt");
        fw.write("Hello Java File!");
        fw.close();
    }
}`
      },

      {
        type: "heading",
        content: "Reading a File"
      },

      {
        type: "code",
        content:
          `FileReader fr = new FileReader("data.txt");
BufferedReader br = new BufferedReader(fr);

String line;
while ((line = br.readLine()) != null) {
    System.out.println(line);
}

br.close();`
      }
    ]
  },

  /* -------------------------------------------------------------------------- */
  /*                        3. COLLECTIONS FRAMEWORK                             */
  /* -------------------------------------------------------------------------- */

  {
    id: "collections",
    title: "Collections Framework",
    sections: [
      {
        type: "text",
        content:
          "Collections Framework provides ready-made data structures like List, Set, and Map to store and manipulate groups of objects efficiently."
      },

      {
        type: "heading",
        content: "Why Collections?"
      },

      {
        type: "list",
        items: [
          "Dynamic size (unlike arrays)",
          "Built-in sorting and searching methods",
          "Better memory management",
          "Easy to iterate and modify"
        ]
      },

      {
        type: "heading",
        content: "Important Interfaces"
      },

      {
        type: "list",
        items: [
          "List – duplicates allowed, ordered",
          "Set – no duplicates",
          "Map – key-value pairs"
        ]
      },

      {
        type: "heading",
        content: "ArrayList Example"
      },

      {
        type: "code",
        content:
          `import java.util.*;

ArrayList<String> list = new ArrayList<>();
list.add("Apple");
list.add("Mango");
list.add("Banana");

System.out.println(list.get(1)); // Mango`
      },

      {
        type: "heading",
        content: "HashMap Example"
      },

      {
        type: "code",
        content:
          `HashMap<String, Integer> map = new HashMap<>();
map.put("Amit", 90);
map.put("Rahul", 85);

System.out.println(map.get("Amit")); // 90`
      }
    ]
  },

  /* -------------------------------------------------------------------------- */
  /*                                 4. GENERICS                                 */
  /* -------------------------------------------------------------------------- */

  {
    id: "generics",
    title: "Generics",
    sections: [
      {
        type: "text",
        content:
          "Generics allow you to create classes, methods, and interfaces that work with any data type. This increases reusability and type safety."
      },

      {
        type: "heading",
        content: "Generic Class Example"
      },

      {
        type: "code",
        content:
          `class Box<T> {
    T value;

    void set(T value) {
        this.value = value;
    }

    T get() {
        return value;
    }
}

Box<String> b = new Box<>();
b.set("Hello");
System.out.println(b.get());`
      }
    ]
  },

  /* -------------------------------------------------------------------------- */
  /*                           5. MULTITHREADING                                 */
  /* -------------------------------------------------------------------------- */

  {
    id: "multithreading",
    title: "Multithreading",
    sections: [
      {
        type: "text",
        content:
          "Multithreading means running multiple tasks at the same time. Java has built-in support for multithreading, making it ideal for high-performance applications."
      },

      {
        type: "heading",
        content: "Why Threads?"
      },

      {
        type: "list",
        items: [
          "Perform tasks simultaneously",
          "Improve application performance",
          "Used in games, servers, download managers"
        ]
      },

      {
        type: "heading",
        content: "Creating a Thread (Method 1: Extending Thread)"
      },

      {
        type: "code",
        content:
          `class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running...");
    }
}

new MyThread().start();`
      },

      {
        type: "heading",
        content: "Creating a Thread (Method 2: Implementing Runnable)"
      },

      {
        type: "code",
        content:
          `class Worker implements Runnable {
    public void run() {
        System.out.println("Task executed");
    }
}

Thread t = new Thread(new Worker());
t.start();`
      }
    ]
  },

  /* -------------------------------------------------------------------------- */
  /*                           6. SYNCHRONIZATION                                */
  /* -------------------------------------------------------------------------- */

  {
    id: "synchronization",
    title: "Synchronization",
    sections: [
      {
        type: "text",
        content:
          "When two or more threads try to modify shared data, incorrect results may occur. Synchronization ensures only one thread accesses a resource at a time."
      },

      {
        type: "heading",
        content: "Example: Synchronized Method"
      },

      {
        type: "code",
        content:
          `synchronized void deposit(int amount) {
    balance += amount;
}`
      }
    ]
  },

  /* -------------------------------------------------------------------------- */
  /*                               7. NETWORKING                                 */
  /* -------------------------------------------------------------------------- */

  {
    id: "networking",
    title: "Networking",
    sections: [
      {
        type: "text",
        content:
          "Java provides APIs to build network communication using TCP, UDP, and HTTP. The InetAddress, Socket, ServerSocket classes help create network programs."
      },

      {
        type: "heading",
        content: "Client-Server Example"
      },

      {
        type: "code",
        content:
          `Socket s = new Socket("localhost", 8080);
PrintWriter out = new PrintWriter(s.getOutputStream(), true);
out.println("Hello Server!");`
      }
    ]
  },

  /* -------------------------------------------------------------------------- */
  /*                                  8. JDBC                                    */
  /* -------------------------------------------------------------------------- */

  {
    id: "jdbc",
    title: "JDBC (Database Connectivity)",
    sections: [
      {
        type: "text",
        content:
          "JDBC allows Java programs to connect and interact with databases like MySQL, PostgreSQL, Oracle, etc."
      },

      {
        type: "heading",
        content: "Steps in JDBC"
      },

      {
        type: "list",
        items: [
          "Load the driver",
          "Create connection",
          "Create statement",
          "Execute SQL query",
          "Close connection"
        ]
      },

      {
        type: "heading",
        content: "Example: Connect to MySQL"
      },

      {
        type: "code",
        content:
          `Class.forName("com.mysql.cj.jdbc.Driver");

Connection con = DriverManager.getConnection(
    "jdbc:mysql://localhost:3306/test", "root", "password");

Statement stmt = con.createStatement();
ResultSet rs = stmt.executeQuery("SELECT * FROM students");

while (rs.next()) {
    System.out.println(rs.getString(1));
}

con.close();`
      }
    ]
  },

  /* -------------------------------------------------------------------------- */
  /*                          9. LAMBDA EXPRESSIONS                              */
  /* -------------------------------------------------------------------------- */

  {
    id: "lambda",
    title: "Lambda Expressions",
    sections: [
      {
        type: "text",
        content:
          "Lambda expressions provide a shorter way to write code for functional interfaces. They make Java cleaner and reduce boilerplate code."
      },

      {
        type: "heading",
        content: "Example"
      },

      {
        type: "code",
        content:
          `interface Greeting {
    void sayHello();
}

Greeting g = () -> System.out.println("Hello from Lambda!");
g.sayHello();`
      }
    ]
  },

  /* -------------------------------------------------------------------------- */
  /*                           10. STREAMS API                                   */
  /* -------------------------------------------------------------------------- */

  {
    id: "streams",
    title: "Streams API",
    sections: [
      {
        type: "text",
        content:
          "Streams allow processing data in a declarative way using operations like filtering, mapping, and reducing. They are heavily used in modern Java."
      },

      {
        type: "heading",
        content: "Example: Filter Numbers"
      },

      {
        type: "code",
        content:
          `List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);

nums.stream()
    .filter(n -> n % 2 == 0)
    .forEach(System.out::println);   // prints 2, 4`
      }
    ]
  },

  /* -------------------------------------------------------------------------- */
  /*                               11. JVM BASICS                                 */
  /* -------------------------------------------------------------------------- */

  {
    id: "jvm",
    title: "JVM Internals",
    sections: [
      {
        type: "text",
        content:
          "JVM (Java Virtual Machine) is responsible for running Java bytecode. It handles memory management, garbage collection, and optimizations."
      },

      {
        type: "heading",
        content: "JVM Components"
      },

      {
        type: "list",
        items: [
          "Class Loader",
          "Heap Memory",
          "Stack Memory",
          "Garbage Collector",
          "JIT Compiler"
        ]
      },

      {
        type: "heading",
        content: "Memory Areas"
      },

      {
        type: "list",
        items: [
          "Heap — stores objects",
          "Stack — stores method calls and local variables",
          "Method Area — stores class data",
          "PC Register — stores instruction address"
        ]
      }
    ]
  },

  /* -------------------------------------------------------------------------- */
  /*                         12. GARBAGE COLLECTION                               */
  /* -------------------------------------------------------------------------- */

  {
    id: "garbage-collection",
    title: "Garbage Collection",
    sections: [
      {
        type: "text",
        content:
          "Garbage Collection automatically removes objects that are no longer used, freeing memory."
      },

      {
        type: "heading",
        content: "How GC Works?"
      },

      {
        type: "list",
        items: [
          "Tracks unused objects",
          "Reclaims their memory",
          "Prevents memory leaks"
        ]
      }
    ]
  },

  /* -------------------------------------------------------------------------- */
  /*                             13. SERIALIZATION                                */
  /* -------------------------------------------------------------------------- */

  {
    id: "serialization",
    title: "Serialization",
    sections: [
      {
        type: "text",
        content:
          "Serialization converts an object into a byte stream so it can be stored in files, databases, or sent over networks."
      },

      {
        type: "heading",
        content: "Example"
      },

      {
        type: "code",
        content:
          `class Student implements Serializable {
    String name;
    int age;
}

ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("obj.dat"));
out.writeObject(new Student());
out.close();`
      }
    ]
  }

];


function AdvanceJava() {
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
          <h1 className="sidebar-title">Advance Java</h1>
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

export default AdvanceJava;