import React, { useState } from "react";
import "/src/python_css/Basics.css";

const topics = [
  {
    id: "advanced-data-types",
    title: "Advanced Data Types",
    sections: [
      {
        type: "text",
        content: "Python provides powerful built-in data structures that help you store, organize, and manipulate data efficiently."
      },
      {
        type: "datatype",
        name: "Lists",
        desc: "Ordered, mutable, allow duplicates",
        features: ["Support slicing, indexing, nested lists", "Ideal for dynamic data"],
        code: `nums = [10, 20, 30, 40]\nnums.append(50)\nprint(nums[1:4])      # [20, 30, 40]\n\nnested = [[1,2], [3,4]]\nprint(nested[1][0])   # 3`
      },
      {
        type: "datatype",
        name: "Tuples",
        desc: "Ordered, immutable",
        features: ["Faster than lists", "Great for fixed data"],
        code: `t = (1, 2, 3)\nprint(t[0])  # 1\n\nnew_t = t + (4, 5)\nprint(new_t)  # (1, 2, 3, 4, 5)`
      },
      {
        type: "datatype",
        name: "Sets",
        desc: "Unordered, unique elements",
        features: ["Perfect for membership tests", "Removes duplicates automatically"],
        code: `items = {1, 2, 3, 3, 2}\nprint(items)        # {1, 2, 3}\nprint(2 in items)   # True\nitems.add(5)`
      },
      {
        type: "datatype",
        name: "Dictionaries",
        desc: "Key-value pairs",
        features: ["Keys must be unique & immutable", "Values can be anything"],
        code: `student = {"name": "Amit", "age": 21}\nstudent["marks"] = 89\nprint(student["name"])  # Amit`
      },
      {
        type: "challenge",
        title: "✅ DIY Questions",
        questions: [
          "Create a list of 5 numbers and print only even numbers using slicing or loops.",
          "Convert a list with duplicates into a set without using set().",
          "Create a dictionary to store product details (name, price, brand) and print each key-value pair."
        ]
      }
    ]
  },
  {
    id: "functions-intermediate",
    title: "Functions (Intermediate)",
    sections: [
      {
        type: "text",
        content: "Master advanced function concepts to write more flexible and powerful code."
      },
      {
        type: "concept",
        name: "Default Arguments",
        desc: "Provide default values for parameters",
        code: `def greet(name="Guest"):\n    print("Hello", name)\n\ngreet()         # Hello Guest\ngreet("Amit")   # Hello Amit`
      },
      {
        type: "concept",
        name: "Keyword Arguments",
        desc: "Pass arguments by parameter name",
        code: `def show(name, age):\n    print(name, age)\n\nshow(age=22, name="Amit")  # Amit 22`
      },
      {
        type: "concept",
        name: "Variable-Length Arguments",
        desc: "*args for multiple values, **kwargs for key-value pairs",
        code: `def add(*nums):\n    return sum(nums)\n\nprint(add(1, 2, 3, 4))  # 10\n\ndef info(**details):\n    for key, value in details.items():\n        print(f"{key}: {value}")\n\ninfo(name="Ravi", age=20)`
      },
      {
        type: "concept",
        name: "Returning Multiple Values",
        desc: "Return multiple values as a tuple",
        code: `def operations(a, b):\n    return a+b, a*b, a-b\n\nsum_val, prod, diff = operations(5, 3)\nprint(sum_val)  # 8\nprint(prod)     # 15`
      },
      {
        type: "concept",
        name: "Nested Functions & Closures",
        desc: "Functions inside functions that remember outer scope",
        code: `def outer(x):\n    def inner(y):\n        return x + y\n    return inner\n\nadd_five = outer(5)\nprint(add_five(3))  # 8`
      },
      {
        type: "challenge",
        title: "🎯 DIY Questions",
        questions: [
          "Write a function that accepts unlimited numbers and returns their average.",
          "Create a function that returns two values: count of even & odd numbers from a list.",
          "Write a closure that stores a number and returns a function that multiplies any number with it."
        ]
      }
    ]
  },
  {
    id: "lambda-map-filter-reduce",
    title: "Lambda, Map, Filter, Reduce",
    sections: [
      {
        type: "text",
        content: "Functional programming concepts that make your code more concise and expressive."
      },
      {
        type: "concept",
        name: "Lambda Functions",
        desc: "Anonymous, inline functions for quick operations",
        code: `# Regular function\ndef square(x):\n    return x * x\n\n# Lambda equivalent\nsquare = lambda x: x * x\nprint(square(5))  # 25\n\n# Multiple arguments\nadd = lambda a, b: a + b\nprint(add(3, 7))  # 10`
      },
      {
        type: "concept",
        name: "Map",
        desc: "Apply a function to every item in an iterable",
        code: `nums = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x*x, nums))\nprint(squared)  # [1, 4, 9, 16, 25]\n\n# With multiple iterables\na = [1, 2, 3]\nb = [10, 20, 30]\nresult = list(map(lambda x, y: x+y, a, b))\nprint(result)  # [11, 22, 33]`
      },
      {
        type: "concept",
        name: "Filter",
        desc: "Filter items based on a condition",
        code: `nums = [1, 2, 3, 4, 5, 6]\neven = list(filter(lambda x: x%2==0, nums))\nprint(even)  # [2, 4, 6]\n\n# Filter names starting with 'A'\nnames = ["Amit", "Ravi", "Asha", "Dev"]\na_names = list(filter(lambda n: n[0]=='A', names))\nprint(a_names)  # ['Amit', 'Asha']`
      },
      {
        type: "concept",
        name: "Reduce",
        desc: "Reduce an iterable to a single value",
        code: `from functools import reduce\n\nnums = [1, 2, 3, 4]\nproduct = reduce(lambda x, y: x*y, nums)\nprint(product)  # 24\n\n# Find maximum\nmax_val = reduce(lambda a, b: a if a > b else b, nums)\nprint(max_val)  # 4`
      },
      {
        type: "challenge",
        title: "🎯 DIY Questions",
        questions: [
          "Use map() to convert a list of strings to uppercase.",
          "Use filter() to get all numbers greater than 10 from a list.",
          "Use reduce() to find the sum of squares of numbers in a list."
        ]
      }
    ]
  },
  {
    id: "modules-packages",
    title: "Modules & Packages",
    sections: [
      {
        type: "text",
        content: "Organize and reuse code across multiple files and projects."
      },
      {
        type: "heading",
        content: "Built-in Modules"
      },
      {
        type: "list",
        items: [
          "math - Mathematical functions",
          "random - Random number generation",
          "os - Operating system interface",
          "sys - System-specific parameters",
          "json - JSON encoding/decoding",
          "datetime - Date and time handling"
        ]
      },
      {
        type: "concept",
        name: "Importing Modules",
        code: `import math\nprint(math.sqrt(16))  # 4.0\nprint(math.pi)        # 3.14159...\n\n# Import with alias\nimport numpy as np\n\n# Import specific functions\nfrom math import sqrt, pow\nprint(sqrt(25))  # 5.0`
      },
      {
        type: "concept",
        name: "Creating Your Own Module",
        desc: "Save functions in a .py file and import them",
        code: `# mymodule.py\ndef greet(name):\n    return f"Hello, {name}"\n\ndef add(a, b):\n    return a + b\n\n# main.py\nimport mymodule\nprint(mymodule.greet("Amit"))\nprint(mymodule.add(5, 3))`
      }
    ]
  },
  {
    id: "file-handling-intermediate",
    title: "File Handling (Intermediate)",
    sections: [
      {
        type: "text",
        content: "Advanced techniques for reading and writing files efficiently."
      },
      {
        type: "concept",
        name: "With Statement",
        desc: "Automatically handles file closing",
        code: `with open("file.txt", "r") as f:\n    content = f.read()\n    print(content)\n# File automatically closed here`
      },
      {
        type: "concept",
        name: "Reading Methods",
        code: `with open("file.txt", "r") as f:\n    # Read entire file\n    content = f.read()\n    \n    # Read one line\n    line = f.readline()\n    \n    # Read all lines as list\n    lines = f.readlines()`
      },
      {
        type: "concept",
        name: "Working with CSV",
        code: `import csv\n\n# Reading CSV\nwith open("data.csv", "r") as f:\n    reader = csv.reader(f)\n    for row in reader:\n        print(row)\n\n# Writing CSV\nwith open("data.csv", "w") as f:\n    writer = csv.writer(f)\n    writer.writerow(["Name", "Age"])\n    writer.writerow(["Amit", 21])`
      },
      {
        type: "concept",
        name: "Working with JSON",
        code: `import json\n\n# Read JSON\nwith open("data.json", "r") as f:\n    data = json.load(f)\n\n# Write JSON\ndata = {"name": "Amit", "age": 21}\nwith open("data.json", "w") as f:\n    json.dump(data, f, indent=2)`
      }
    ]
  },
  {
    id: "exception-handling-intermediate",
    title: "Exception Handling (Intermediate)",
    sections: [
      {
        type: "text",
        content: "Advanced error handling techniques for robust code."
      },
      {
        type: "concept",
        name: "Multiple Except Blocks",
        desc: "Handle different exceptions separately",
        code: `try:\n    x = int(input("Enter: "))\n    result = 10 / x\nexcept ValueError:\n    print("Invalid input!")\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")`
      },
      {
        type: "concept",
        name: "Else & Finally",
        desc: "Else runs if no exception, Finally always runs",
        code: `try:\n    result = 10 / 2\nexcept ZeroDivisionError:\n    print("Error")\nelse:\n    print("Success!")\nfinally:\n    print("Cleanup")`
      },
      {
        type: "concept",
        name: "Custom Exceptions",
        desc: "Create your own exception classes",
        code: `class InvalidAgeError(Exception):\n    pass\n\ndef validate_age(age):\n    if age < 18:\n        raise InvalidAgeError("Must be 18+")\n    return True\n\ntry:\n    validate_age(15)\nexcept InvalidAgeError as e:\n    print(e)`
      }
    ]
  },
  {
    id: "object-oriented-python",
    title: "Object-Oriented Programming (OOP)",
    sections: [
      {
        type: "text",
        content: "Master OOP concepts to write modular, reusable, and maintainable code."
      },
      {
        type: "concept",
        name: "Classes & Objects",
        desc: "Blueprint for creating objects",
        code: `class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def introduce(self):\n        return f"Hi, I'm {self.name}"\n\np1 = Person("Amit", 21)\nprint(p1.introduce())`
      },
      {
        type: "concept",
        name: "Inheritance",
        desc: "Child class inherits from parent",
        code: `class Student(Person):\n    def __init__(self, name, age, student_id):\n        super().__init__(name, age)\n        self.student_id = student_id\n\ns1 = Student("Ravi", 20, "S123")\nprint(s1.introduce())  # Inherited`
      },
      {
        type: "concept",
        name: "Encapsulation",
        desc: "Private attributes with __",
        code: `class BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance\n    \n    def deposit(self, amount):\n        self.__balance += amount\n    \n    def get_balance(self):\n        return self.__balance`
      },
      {
        type: "concept",
        name: "Polymorphism",
        desc: "Same method, different behavior",
        code: `class Dog:\n    def speak(self):\n        return "Woof!"\n\nclass Cat:\n    def speak(self):\n        return "Meow!"\n\nfor animal in [Dog(), Cat()]:\n    print(animal.speak())`
      }
    ]
  },
  {
    id: "iterators-generators",
    title: "Iterators & Generators",
    sections: [
      {
        type: "text",
        content: "Efficient ways to work with sequences and large datasets."
      },
      {
        type: "concept",
        name: "Iterators",
        desc: "Objects that can be looped over",
        code: `nums = [1, 2, 3, 4]\nit = iter(nums)\n\nprint(next(it))  # 1\nprint(next(it))  # 2`
      },
      {
        type: "concept",
        name: "Generators",
        desc: "Functions that yield values one at a time",
        code: `def countdown(n):\n    while n > 0:\n        yield n\n        n -= 1\n\nfor num in countdown(5):\n    print(num)  # 5, 4, 3, 2, 1`
      },
      {
        type: "concept",
        name: "Generator Expressions",
        desc: "Like list comprehension but memory-efficient",
        code: `# Generator (lazy evaluation)\nsquares = (x**2 for x in range(1000))\n\nfor sq in squares:\n    if sq > 100:\n        break\n    print(sq)`
      }
    ]
  },
  {
    id: "decorators",
    title: "Decorators",
    sections: [
      {
        type: "text",
        content: "Modify the behavior of functions without changing their code."
      },
      {
        type: "concept",
        name: "Basic Decorator",
        desc: "Wrap a function to add functionality",
        code: `def decorator(func):\n    def wrapper():\n        print("Before")\n        func()\n        print("After")\n    return wrapper\n\n@decorator\ndef say_hello():\n    print("Hello!")\n\nsay_hello()`
      },
      {
        type: "concept",
        name: "Decorator with Arguments",
        code: `def decorator(func):\n    def wrapper(*args, **kwargs):\n        print(f"Calling {func.__name__}")\n        result = func(*args, **kwargs)\n        return result\n    return wrapper\n\n@decorator\ndef add(a, b):\n    return a + b\n\nadd(5, 3)`
      },
      {
        type: "concept",
        name: "Timing Decorator",
        desc: "Measure execution time",
        code: `import time\n\ndef timer(func):\n    def wrapper(*args):\n        start = time.time()\n        result = func(*args)\n        print(f"Took {time.time()-start:.4f}s")\n        return result\n    return wrapper\n\n@timer\ndef slow_function():\n    time.sleep(1)`
      }
    ]
  },
  {
    id: "context-managers",
    title: "Context Managers",
    sections: [
      {
        type: "text",
        content: "Manage resources efficiently with automatic setup and cleanup."
      },
      {
        type: "concept",
        name: "Using with Statement",
        desc: "Automatically handles cleanup",
        code: `with open("file.txt", "r") as f:\n    content = f.read()\n# File automatically closed`
      },
      {
        type: "concept",
        name: "Custom Context Manager",
        code: `class DatabaseConnection:\n    def __enter__(self):\n        print("Opening connection")\n        return self\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print("Closing connection")\n\nwith DatabaseConnection() as db:\n    print("Working with database")`
      }
    ]
  },
  {
    id: "advanced-itertools-functools",
    title: "Itertools & Functools",
    sections: [
      {
        type: "text",
        content: "Powerful tools for efficient iteration and functional programming."
      },
      {
        type: "concept",
        name: "Combinations & Permutations",
        code: `from itertools import permutations, combinations\n\nitems = [1, 2, 3]\n\n# Permutations (order matters)\nprint(list(permutations(items, 2)))\n# [(1,2), (1,3), (2,1), (2,3), (3,1), (3,2)]\n\n# Combinations (order doesn't matter)\nprint(list(combinations(items, 2)))\n# [(1,2), (1,3), (2,3)]`
      },
      {
        type: "concept",
        name: "lru_cache - Memoization",
        code: `from functools import lru_cache\n\n@lru_cache(maxsize=None)\ndef fibonacci(n):\n    if n < 2:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(50))  # Very fast!`
      }
    ]
  },
  {
    id: "multithreading-multiprocessing",
    title: "Multithreading & Multiprocessing",
    sections: [
      {
        type: "text",
        content: "Run code concurrently to improve performance."
      },
      {
        type: "concept",
        name: "Threading",
        desc: "Threads share memory, good for I/O",
        code: `import threading\nimport time\n\ndef task(name):\n    print(f"Task {name} starting")\n    time.sleep(1)\n    print(f"Task {name} done")\n\nt1 = threading.Thread(target=task, args=("A",))\nt2 = threading.Thread(target=task, args=("B",))\n\nt1.start()\nt2.start()\nt1.join()\nt2.join()`
      },
      {
        type: "concept",
        name: "Multiprocessing",
        desc: "Separate memory, good for CPU tasks",
        code: `from multiprocessing import Process\n\ndef calculate(name, nums):\n    result = sum(i*i for i in nums)\n    print(f"{name}: {result}")\n\nif __name__ == "__main__":\n    p1 = Process(target=calculate, args=("P1", range(1000)))\n    p2 = Process(target=calculate, args=("P2", range(1000, 2000)))\n    p1.start()\n    p2.start()\n    p1.join()\n    p2.join()`
      }
    ]
  }
];

function Intermediate() {
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
            {section.features && (
              <ul className="feature-list">
                {section.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            )}
            <pre className="code-block">
              <code>{section.code}</code>
            </pre>
          </div>
        );

      case "concept":
        return (
          <div key={index} className="concept-box">
            <div className="concept-header">
              <div className="concept-name">{section.name}</div>
              {section.desc && <div className="concept-desc">{section.desc}</div>}
            </div>
            <pre className="code-block">
              <code>{section.code}</code>
            </pre>
          </div>
        );

      case "challenge":
        return (
          <div key={index} className="challenge-box">
            <div className="challenge-title">{section.title}</div>
            <ol className="challenge-list">
              {section.questions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ol>
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
          <h1 className="sidebar-title">Python Intermediate</h1>
          <p className="sidebar-subtitle">Advanced Concepts & Techniques</p>
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

export default Intermediate;