import React, { useState } from "react";
import "/src/python_css/Advanced.css";

const topics = [
  {
    id: "metaclasses",
    title: "Metaclasses",
    content: `
### Python Metaclasses
- Define the behavior of classes
- Classes are instances of metaclasses

**Example:**
\`\`\`python
class Meta(type):
    def __new__(cls, name, bases, dct):
        print("Creating class", name)
        return super().__new__(cls, name, bases, dct)

class MyClass(metaclass=Meta):
    pass
\`\`\``
  },
  {
    id: "descriptors",
    title: "Descriptors",
    content: `
### Descriptors
- Objects that manage attribute access
- Use __get__, __set__, __delete__

**Example:**
\`\`\`python
class Descriptor:
    def __get__(self, obj, objtype):
        return "Accessed"
    def __set__(self, obj, value):
        print("Set value:", value)

class MyClass:
    attr = Descriptor()

m = MyClass()
print(m.attr)
m.attr = 42
\`\`\``
  },
  {
    id: "coroutines-async",
    title: "Coroutines & Async",
    content: `
### Asynchronous Programming
- Use async/await to write non-blocking code
- Ideal for I/O-bound tasks

**Example:**
\`\`\`python
import asyncio

async def say_hello():
    await asyncio.sleep(1)
    print("Hello")

asyncio.run(say_hello())
\`\`\``
  },
  {
    id: "memory-management",
    title: "Memory Management & Garbage Collection",
    content: `
### Python Memory Management
- Python uses reference counting
- Garbage collector handles cyclic references

**Example:**
\`\`\`python
import gc

print(gc.isenabled())
gc.collect()
\`\`\``
  },
  {
    id: "contextlib",
    title: "Advanced Context Managers",
    content: `
### contextlib Module
- Simplifies creation of context managers
- Use contextlib.contextmanager decorator

**Example:**
\`\`\`python
from contextlib import contextmanager

@contextmanager
def open_file(file):
    f = open(file)
    yield f
    f.close()

with open_file("test.txt") as f:
    print(f.read())
\`\`\``
  },
  {
    id: "metaprogramming",
    title: "Metaprogramming",
    content: `
### Metaprogramming in Python
- Writing code that modifies code
- Commonly via decorators, metaclasses, or type()

**Example:**
\`\`\`python
def add_method(cls):
    cls.greet = lambda self: print("Hello")
    return cls

@add_method
class MyClass:
    pass

MyClass().greet()
\`\`\``
  },
  {
    id: "destructors-finalizers",
    title: "Destructors & Finalizers",
    content: `
### Object Destruction
- __del__ method is called before object deletion
- Works with reference counting

**Example:**
\`\`\`python
class MyClass:
    def __del__(self):
        print("Object deleted")

obj = MyClass()
del obj
\`\`\``
  },
  {
    id: "memory-profiling",
    title: "Memory Profiling & Optimization",
    content: `
### Optimizing Memory Usage
- Use sys.getsizeof() to check object size
- Use generators for large data
- Tools: memory_profiler, objgraph

**Example:**
\`\`\`python
import sys
nums = [i for i in range(1000)]
print(sys.getsizeof(nums))
\`\`\``
  },
  {
    id: "advanced-iterators",
    title: "Advanced Iterators & Itertools",
    content: `
### Powerful Itertools
- Infinite iterators: cycle(), count()
- Combinatorics: permutations(), combinations(), product()

**Example:**
\`\`\`python
from itertools import combinations
items = [1,2,3]
print(list(combinations(items, 2)))  # [(1,2),(1,3),(2,3)]
\`\`\``
  },
  {
    id: "profiling-debugging",
    title: "Profiling & Debugging",
    content: `
### Profiling & Debugging Tools
- Use cProfile, profile, and timeit for performance
- Use pdb for debugging

**Example:**
\`\`\`python
import cProfile

def func():
    sum(range(10000))

cProfile.run("func()")
\`\`\``
  }
];

function Advanced() {
  const [activeTopic, setActiveTopic] = useState(topics[0].id);
  const [searchTerm, setSearchTerm] = useState("");

  const currentContent = topics.find(t => t.id === activeTopic);

  const filteredTopics = topics.filter(topic =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="python-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1 className="sidebar-title">Python Advanced</h1>
          <p className="sidebar-subtitle">Complete Learning Guide</p>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search topics..."
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
            <h2 className="content-title">{currentContent.title}</h2>
            <div className="title-underline"></div>
          </div>

          <div className="content-card">
            <div className="content-body">
              {currentContent.content.split("\n").map((line, i) => {
                const trimmedLine = line.trim();
                if (!trimmedLine) return <div key={i} className="spacer"></div>;
                if (line.startsWith("    ")) return <pre key={i} className="code-block"><code>{line.trim()}</code></pre>;
                if (trimmedLine.endsWith(":") && !trimmedLine.match(/^\d/)) return <h3 key={i} className="section-header">{trimmedLine}</h3>;
                if (trimmedLine.startsWith("•") || trimmedLine.startsWith("-")) return <li key={i} className="bullet-point">{trimmedLine.substring(1).trim()}</li>;
                if (trimmedLine.match(/^\d+\./)) return <p key={i} className="numbered-item">{trimmedLine}</p>;
                return <p key={i} className="paragraph">{trimmedLine}</p>;
              })}
            </div>
          </div>

          <div className="nav-buttons">
            <button
              onClick={() => {
                const currentIndex = topics.findIndex(t => t.id === activeTopic);
                if (currentIndex > 0) setActiveTopic(topics[currentIndex - 1].id);
              }}
              disabled={topics.findIndex(t => t.id === activeTopic) === 0}
              className="nav-button"
            >
              ← Previous
            </button>

            <button
              onClick={() => {
                const currentIndex = topics.findIndex(t => t.id === activeTopic);
                if (currentIndex < topics.length - 1) setActiveTopic(topics[currentIndex + 1].id);
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

export default Advanced;
