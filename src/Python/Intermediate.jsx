import React, { useState } from "react";
import "/src/Python CSS/Intermediate.css";

const topics = [
  {
    id: "advanced-data-types",
    title: "Advanced Data Types",
    content: `
### Advanced Python Collections
Python provides powerful built-in data structures that help you store, organize, and manipulate data efficiently.

---

## 1. **Lists**
- Ordered, mutable, allow duplicates  
- Support slicing, indexing, nested lists  
- Ideal for dynamic data  

**Example:**
\`\`\`python
nums = [10, 20, 30, 40]
nums.append(50)
print(nums[1:4])      # [20, 30, 40]
nested = [[1,2], [3,4]]
print(nested[1][0])   # 3
\`\`\`

---

## 2. **Tuples**
- Ordered, immutable  
- Faster than lists  
- Great for fixed data  

**Example:**
\`\`\`python
t = (1, 2, 3)
print(t[0])  # 1
new_t = t + (4, 5)
print(new_t)
\`\`\`

---

## 3. **Sets**
- Unordered, store unique elements  
- Perfect for membership tests & removing duplicates  

**Example:**
\`\`\`python
items = {1, 2, 3, 3, 2}
print(items)             # {1, 2, 3}
print(2 in items)        # True
items.add(5)
\`\`\`

---

## 4. **Dictionaries**
- Key–value pairs  
- Keys must be unique & immutable  
- Values can be anything  

**Example:**
\`\`\`python
student = {"name": "Amit", "age": 21}
student["marks"] = 89
print(student["name"])
\`\`\`

---

### ✅ **DIY Questions**
1. Create a list of 5 numbers and print only even numbers using slicing or loops.  
2. Convert a list with duplicates into a set without using set().  
3. Create a dictionary to store product details (name, price, brand) and print each key-value pair.  
`
  },

  {
    id: "functions-intermediate",
    title: "Functions (Intermediate)",
    content: `
### Intermediate-Level Python Functions

---

## 1. **Default Arguments**
\`\`\`python
def greet(name="Guest"):
    print("Hello", name)

greet()
\`\`\`

---

## 2. **Keyword Arguments**
\`\`\`python
def show(name, age):
    print(name, age)

show(age=22, name="Amit")
\`\`\`

---

## 3. **Variable-Length Arguments**
### *args → multiple values (tuple)  
### **kwargs → key-value pairs (dict)
\`\`\`python
def add(*nums):
    return sum(nums)

def info(**details):
    print(details)

info(name="Ravi", age=20)
\`\`\`

---

## 4. **Returning Multiple Values**
\`\`\`python
def operations(a, b):
    return a+b, a*b

s, p = operations(2, 3)
\`\`\`

---

## 5. **Nested Functions & Closures**
\`\`\`python
def outer():
    msg = "Hello"

    def inner():
        print(msg)

    return inner

func = outer()
func()
\`\`\`

---

### 🎯 DIY Questions
1. Write a function that accepts unlimited numbers and returns their average.  
2. Create a function that returns two values: count of even numbers & odd numbers from a list.  
3. Write a closure that stores a number and returns a function that multiplies any number with it.  
`
  },


  {
    id: "lambda-map-filter-reduce",
    title: "Lambda, Map, Filter, Reduce",
    content: `
### Functional Programming in Python

**Lambda Functions**
- Anonymous, small functions
\`\`\`
square = lambda x: x*x
print(square(5))  # 25
\`\`\`

**Map**
\`\`\`
nums = [1,2,3]
squared = list(map(lambda x: x*x, nums))
\`\`\`

**Filter**
\`\`\`
nums = [1,2,3,4]
even = list(filter(lambda x: x%2==0, nums))
\`\`\`

**Reduce** (from functools)
\`\`\`
from functools import reduce
nums = [1,2,3,4]
product = reduce(lambda x,y: x*y, nums)
\`\`\``
  },

  {
    id: "modules-packages",
    title: "Modules & Packages",
    content: `
### Python Modules & Packages
1. **Built-in Modules**: math, random, os, sys, json
2. **Importing Modules**
\`\`\`
import math
print(math.sqrt(16))
\`\`\`
3. **Specific Function Import**
\`\`\`
from math import sqrt
print(sqrt(25))
\`\`\`
4. **Creating Your Own Module**
- Save functions/classes in .py
- Import in other scripts

5. **Packages**
- Directories containing multiple modules
- Use __init__.py to make a package`
  },

  {
    id: "file-handling-intermediate",
    title: "File Handling (Intermediate)",
    content: `
### Advanced File Handling
1. **With Statement**
\`\`\`
with open("file.txt", "r") as f:
    content = f.read()
\`\`\`

2. **Reading Lines**
\`\`\`
lines = f.readlines()
\`\`\`

3. **Writing Multiple Lines**
\`\`\`
with open("file.txt", "w") as f:
    f.writelines(["Line1\\n", "Line2\\n"])
\`\`\`

4. **Working with CSV & JSON**
- Use **csv** module for CSV files
- Use **json** module for JSON parsing
\`\`\`
import json
data = json.load(open("data.json"))
\`\`\``
  },

  {
    id: "exception-handling-intermediate",
    title: "Exception Handling (Intermediate)",
    content: `
### Advanced Exception Handling
1. **Multiple Except Blocks**
\`\`\`
try:
    x = int(input())
except ValueError:
    print("Invalid input")
except ZeroDivisionError:
    print("Division by zero")
\`\`\`

2. **Else Block**
- Executes if no exception occurs
\`\`\`
try:
    print(10/2)
except ZeroDivisionError:
    print("Error")
else:
    print("No error")
\`\`\`

3. **Custom Exceptions**
\`\`\`
class MyError(Exception):
    pass
raise MyError("Custom error occurred")
\`\`\``
  },

  {
    id: "object-oriented-python",
    title: "Object-Oriented Programming (OOP)",
    content: `
### Python OOP Concepts
1. **Classes & Objects**
\`\`\`
class Person:
    def __init__(self, name):
        self.name = name
p = Person("Amit")
print(p.name)
\`\`\`

2. **Inheritance**
- Child class inherits parent class
\`\`\`
class Student(Person):
    pass
\`\`\`

3. **Polymorphism**
- Same interface, different implementation
4. **Encapsulation**
- Private attributes using __ prefix
5. **Class & Static Methods**
\`\`\`
class MyClass:
    @classmethod
    def cls_method(cls):
        pass
    @staticmethod
    def static_method():
        pass
\`\`\``
  },

  {
    id: "iterators-generators",
    title: "Iterators & Generators",
    content: `
### Iterators & Generators
1. **Iterators**
- Objects you can loop over using iter() and next()
\`\`\`
nums = [1,2,3]
it = iter(nums)
print(next(it))  # 1
\`\`\`

2. **Generators**
- Functions that yield values one by one
\`\`\`
def gen():
    for i in range(3):
        yield i
for x in gen():
    print(x)
\`\`\`

3. **Generator Expressions**
\`\`\`
squared = (x*x for x in range(5))
\`\`\``
  },

  {
    id: "decorators",
    title: "Decorators",
    content: `
### Python Decorators
Decorators **modify the behavior of a function** without changing its code.

---

**Basic Decorator**
\`\`\`
def decorator(func):
    def wrapper():
        print("Before")
        func()
        print("After")
    return wrapper

@decorator
def say_hello():
    print("Hello")
say_hello()
\`\`\`
- Used for **logging, timing, authentication**`
  },

  {
    id: "context-managers",
    title: "Context Managers",
    content: `
### Python Context Managers
1. **Using with Statement**
- Automatically handles resource cleanup
\`\`\`
with open("file.txt", "r") as f:
    content = f.read()
\`\`\`

2. **Custom Context Manager**
\`\`\`
class MyCM:
    def __enter__(self):
        print("Enter")
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Exit")
with MyCM():
    print("Inside")
\`\`\``
  },

  {
    id: "advanced-itertools-functools",
    title: "Itertools & Functools",
    content: `
### Useful Python Modules
1. **itertools**
- cycle(), count(), permutations(), combinations(), product()

2. **functools**
- reduce(), lru_cache(), partial()
\`\`\`
from itertools import permutations
print(list(permutations([1,2,3])))
\`\`\``
  },

  {
    id: "multithreading-multiprocessing",
    title: "Multithreading & Multiprocessing",
    content: `
### Python Parallelism
1. **Threading**
\`\`\`
import threading
def func():
    print("Thread running")
t = threading.Thread(target=func)
t.start()
\`\`\`

2. **Multiprocessing**
\`\`\`
from multiprocessing import Process
def func():
    print("Process running")
p = Process(target=func)
p.start()
\`\`\`
- Threads share memory, processes do not`
  }
];


function Intermediate() {
  const [activeTopic, setActiveTopic] = useState(topics[0].id);
  const [searchTerm, setSearchTerm] = useState("");

  const currentContent = topics.find(t => t.id === activeTopic);

  const filteredTopics = topics.filter(topic =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="python-container">
      {/* Sidebar */}
      <aside className="sidebar">
        {/* Header */}
        <div className="sidebar-header">
          <h1 className="sidebar-title">Python Intermediate</h1>
          <p className="sidebar-subtitle">Complete Learning Guide</p>
        </div>

        {/* Search */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Topics List */}
        <nav className="topic-list">
          <ul>
            {filteredTopics.map((topic, index) => (
              <li key={topic.id}>
                <button
                  onClick={() => setActiveTopic(topic.id)}
                  className={`topic-button ${activeTopic === topic.id ? "active" : ""}`}
                >
                  <span className="topic-number">
                    {index + 1}
                  </span>
                  <span className="topic-title">{topic.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="sidebar-footer">
          <p className="footer-text">
            {topics.length} topics available
          </p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <div className="content-wrapper">
          {/* Content Header */}
          <div className="content-header">
            <h2 className="content-title">
              {currentContent.title}
            </h2>
            <div className="title-underline"></div>
          </div>

          {/* Content Body */}
          <div className="content-card">
            <div className="content-body">
              {currentContent.content.split("\n").map((line, i) => {
                const trimmedLine = line.trim();

                if (!trimmedLine) {
                  return <div key={i} className="spacer"></div>;
                }

                if (line.startsWith("    ")) {
                  return (
                    <pre key={i} className="code-block">
                      <code>{line.trim()}</code>
                    </pre>
                  );
                }

                if (trimmedLine.endsWith(":") && !trimmedLine.match(/^\d/)) {
                  return (
                    <h3 key={i} className="section-header">
                      {trimmedLine}
                    </h3>
                  );
                }

                if (trimmedLine.startsWith("•") || trimmedLine.startsWith("-")) {
                  return (
                    <li key={i} className="bullet-point">
                      {trimmedLine.substring(1).trim()}
                    </li>
                  );
                }

                if (trimmedLine.match(/^\d+\./)) {
                  return (
                    <p key={i} className="numbered-item">
                      {trimmedLine}
                    </p>
                  );
                }

                return (
                  <p key={i} className="paragraph">
                    {trimmedLine}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="nav-buttons">
            <button
              onClick={() => {
                const currentIndex = topics.findIndex(t => t.id === activeTopic);
                if (currentIndex > 0) {
                  setActiveTopic(topics[currentIndex - 1].id);
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