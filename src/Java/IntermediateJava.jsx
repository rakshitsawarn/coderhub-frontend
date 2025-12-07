import React, { useState } from "react";
import "/src/python_css/Basics.css";

const topics = [

  /* -------------------------------------------------------------------------- */
  /*                          1. OOP INTRODUCTION                               */
  /* -------------------------------------------------------------------------- */

  {
    id: "oop-intro",
    title: "Object-Oriented Programming (OOP)",
    sections: [
      {
        type: "text",
        content:
          "OOP (Object-Oriented Programming) is a method of structuring programs using objects. An object represents real-world things like a Car, Mobile, Student, etc. Each object has properties (data) and actions (methods). OOP makes Java easier to maintain, reuse, and scale."
      },

      {
        type: "heading",
        content: "Why OOP Is Needed?"
      },

      {
        type: "list",
        items: [
          "OOP organizes code like real-life objects — It becomes easier to understand.",
          "Code reusability — no need to rewrite logic again and again.",
          "Security — sensitive data can be hidden inside classes.",
          "Easy to maintain — changes in one place do not break the whole project.",
          "Better for building large apps — used by companies around the world."
        ]
      },

      {
        type: "heading",
        content: "Real-Life Analogy"
      },

      {
        type: "text",
        content:
          "Think of a Car: It has properties (color, speed) and actions (start, stop). In the same way, Java classes have variables (properties) and methods (actions)."
      }
    ]
  },

  /* -------------------------------------------------------------------------- */
  /*                         2. CLASSES AND OBJECTS                             */
  /* -------------------------------------------------------------------------- */

  {
    id: "classes-objects",
    title: "Classes & Objects",
    sections: [
      {
        type: "text",
        content:
          "A Class is like a blueprint or template. An Object is created using the class — just like a house is built using a building plan. You can create multiple objects from one class."
      },

      {
        type: "heading",
        content: "Example with Simple Explanation"
      },

      {
        type: "code",
        content:
          `// A class is a blueprint
class Car {
    String color;   // property
    int speed;      // property

    void drive() {  // method (action)
        System.out.println("Car is driving...");
    }
}

class Main {
    public static void main(String[] args) {
        Car myCar = new Car(); // Creating an object
        myCar.color = "Red";
        myCar.speed = 120;

        System.out.println(myCar.color); // Red
        myCar.drive(); // Car is driving...
    }
}`
      },

      {
        type: "text",
        content:
          "Here, Car is the class. myCar is the object (real-life copy). You can make many objects from the same class."
      }
    ]
  },

  /* -------------------------------------------------------------------------- */
  /*                              3. CONSTRUCTORS                               */
  /* -------------------------------------------------------------------------- */

  {
    id: "constructors",
    title: "Constructors",
    sections: [
      {
        type: "text",
        content:
          "A constructor is a special method that runs automatically when an object is created. It is used to assign initial values to variables. Constructor name must match the class name and it has no return type."
      },

      {
        type: "heading",
        content: "Types of Constructors"
      },

      {
        type: "list",
        items: [
          "Default Constructor — Java gives it automatically if you don't create one.",
          "Parameterized Constructor — You can pass values while creating objects."
        ]
      },

      {
        type: "heading",
        content: "Example: Parameterized Constructor"
      },

      {
        type: "code",
        content:
          `class Student {
    String name;
    int age;

    Student(String n, int a) {  // Constructor
        name = n;
        age = a;
    }
}

class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Amit", 15); // passing values
        System.out.println(s1.name + " is " + s1.age + " years old.");
    }
}`
      },

      {
        type: "text",
        content:
          "Constructor saves time because you don't have to set values manually for each object."
      }
    ]
  },

  /* -------------------------------------------------------------------------- */
  /*                               4. INHERITANCE                               */
  /* -------------------------------------------------------------------------- */

  {
    id: "inheritance",
    title: "Inheritance",
    sections: [
      {
        type: "text",
        content:
          "Inheritance allows one class (child) to reuse properties and methods of another class (parent). It helps avoid writing duplicate code."
      },

      {
        type: "heading",
        content: "Simple Explanation"
      },

      {
        type: "text",
        content:
          "If Animal has a method eat(), Dog automatically gets it because Dog extends Animal."
      },

      {
        type: "heading",
        content: "Example"
      },

      {
        type: "code",
        content:
          `class Animal {
    void eat() {
        System.out.println("Animal is eating...");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog is barking...");
    }
}

class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();  // Inherited from Animal
        d.bark(); // Dog's own method
    }
}`
      },

      {
        type: "heading",
        content: "Types of Inheritance in Java"
      },

      {
        type: "list",
        items: [
          "Single Inheritance — One parent, one child.",
          "Multi-level Inheritance — Parent → Child → Grandchild.",
          "Hierarchical Inheritance — One parent, many children."
        ]
      },

      {
        type: "text",
        content:
          "Java does NOT support multiple inheritance using classes (because of ambiguity)."
      }
    ]
  },

  /* -------------------------------------------------------------------------- */
  /*                              5. POLYMORPHISM                               */
  /* -------------------------------------------------------------------------- */

  {
    id: "polymorphism",
    title: "Polymorphism",
    sections: [
      {
        type: "text",
        content:
          "Polymorphism means one thing having many forms. In Java, it means that the same method name can behave differently depending on where or how it is used."
      },

      {
        type: "heading",
        content: "Two Types of Polymorphism"
      },

      {
        type: "list",
        items: [
          "Method Overloading — Same method name but different parameters.",
          "Method Overriding — Child class changes method of parent class."
        ]
      },

      {
        type: "heading",
        content: "1. Method Overloading (Compile-time Polymorphism)"
      },

      {
        type: "code",
        content:
          `class MathOps {
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}`
      },

      {
        type: "text",
        content:
          "Here add() works differently depending on number of arguments."
      },

      {
        type: "heading",
        content: "2. Method Overriding (Runtime Polymorphism)"
      },

      {
        type: "code",
        content:
          `class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}`
      },

      {
        type: "text",
        content:
          "Here Dog changes behaviour of the sound() method of Animal."
      }
    ]
  },

  /* -------------------------------------------------------------------------- */
  /*                               6. ABSTRACTION                               */
  /* -------------------------------------------------------------------------- */

  {
    id: "abstraction",
    title: "Abstraction",
    sections: [
      {
        type: "text",
        content:
          "Abstraction means hiding complex details and showing only what is necessary. For example, when using a phone, you only press buttons — you don't care about internal circuits."
      },

      {
        type: "heading",
        content: "Two Ways Java Achieves Abstraction"
      },

      {
        type: "list",
        items: [
          "Abstract Classes",
          "Interfaces"
        ]
      },

      {
        type: "heading",
        content: "1. Abstract Class Example"
      },

      {
        type: "code",
        content:
          `abstract class Animal {
    abstract void sound(); // abstract method
    void sleep() {         // normal method
        System.out.println("Sleeping...");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}`
      },

      {
        type: "heading",
        content: "2. Interface Example"
      },

      {
        type: "code",
        content:
          `interface Vehicle {
    void start(); // abstract by default
}

class Car implements Vehicle {
    public void start() {
        System.out.println("Car starts");
    }
}`
      },

      {
        type: "text",
        content:
          "Interfaces allow a class to achieve 'multiple behaviors'. A class can implement many interfaces."
      }
    ]
  },

  /* -------------------------------------------------------------------------- */
  /*                            7. ENCAPSULATION                                */
  /* -------------------------------------------------------------------------- */

  {
    id: "encapsulation",
    title: "Encapsulation",
    sections: [
      {
        type: "text",
        content:
          "Encapsulation hides sensitive data from direct access. You keep variables private and use getters & setters to access them safely."
      },

      {
        type: "heading",
        content: "Example"
      },

      {
        type: "code",
        content:
          `class BankAccount {
    private int balance; // hidden

    void deposit(int amount) {
        balance += amount;
    }

    int getBalance() {
        return balance;
    }
}`
      },

      {
        type: "text",
        content:
          "This makes data secure. No one can directly change the balance from outside."
      }
    ]
  }

];


function IntermediateJava() {
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
          <h1 className="sidebar-title">Intermediate Java</h1>
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

export default IntermediateJava;