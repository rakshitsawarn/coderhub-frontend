import React, { useState } from "react";
import "../python_css/Basics.css";

const topics = [
  {
    id: "advanced-data-types",
    title: "Advanced Data Types",
    sections: [
      {
        type: "text",
        content:
          "Python's built-in data structures (lists, tuples, sets, dicts) are powerful. Learn their strengths, trade-offs, and common idioms for everyday problems."
      },
      {
        type: "datatype",
        name: "Lists",
        desc: "Ordered, mutable, allow duplicates",
        features: ["Support slicing, indexing, nested lists", "Ideal for dynamic collections"],
        code: `nums = [10, 20, 30, 40]\nnums.append(50)\nprint(nums[1:4])      # [20, 30, 40]\n\nnested = [[1,2], [3,4]]\nprint(nested[1][0])   # 3`
      },
      {
        type: "datatype",
        name: "Tuples",
        desc: "Ordered, immutable",
        features: ["Faster than lists for fixed data", "Can be used as dict keys if containing immutables"],
        code: `t = (1, 2, 3)\nprint(t[0])  # 1\n\nnew_t = t + (4, 5)\nprint(new_t)  # (1, 2, 3, 4, 5)`
      },
      {
        type: "datatype",
        name: "Sets",
        desc: "Unordered collection of unique elements",
        features: ["Perfect for membership tests", "Useful for set algebra (union, intersection, difference)"],
        code: `items = {1, 2, 3, 3, 2}\nprint(items)        # {1, 2, 3}\nprint(2 in items)   # True\nitems.add(5)\nprint(items)        # {1,2,3,5}`
      },
      {
        type: "datatype",
        name: "Dictionaries",
        desc: "Key-value mappings",
        features: ["Fast lookup by key (hash table)", "Keys must be immutable & unique; values can be any type"],
        code: `student = {"name": "Amit", "age": 21}\nstudent["marks"] = 89\nprint(student["name"])  # Amit\nprint(student.get("grade", "Not found"))`
      },
      {
        type: "challenge",
        title: "✅ DIY Questions",
        questions: [
          "Given a list of numbers, return a new list with duplicates removed while preserving order.",
          "Use set operations to find common elements between two lists.",
          "Create a dict mapping each character in a string to its frequency."
        ]
      }
    ]
  },

  {
    id: "comprehensions",
    title: "Comprehensions (List/Dict/Set/Generator)",
    sections: [
      {
        type: "text",
        content:
          "Comprehensions provide a concise, readable way to build lists, dicts, sets or generators from iterables."
      },
      {
        type: "concept",
        name: "List Comprehension",
        desc: "Compact way to create lists",
        code: `nums = [1,2,3,4]\nsq = [x*x for x in nums]\nprint(sq)  # [1,4,9,16]\n# With condition\neven_sq = [x*x for x in nums if x%2==0]`
      },
      {
        type: "concept",
        name: "Dict & Set Comprehension",
        desc: "Create dicts/sets similarly",
        code: `words = ["apple","ball"]\nlengths = {w: len(w) for w in words}\nunique_chars = {c for w in words for c in w}\nprint(lengths)\nprint(unique_chars)`
      },
      {
        type: "concept",
        name: "Generator Expression",
        desc: "Lazy evaluation (memory efficient)",
        code: `gen = (x*x for x in range(10))\nfor v in gen:\n    print(v)\n# Use next() to pull values lazily`
      },
      {
        type: "challenge",
        title: "🎯 DIY Questions",
        questions: [
          "Create a list of squares for numbers 1–50 but only if the square is divisible by 3.",
          "Build a dictionary that maps numbers 1–10 to their binary representation using comprehension."
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
        content:
          "Deepen your function knowledge: argument types, scope, closures, and writing clean APIs with docstrings and annotations."
      },
      {
        type: "concept",
        name: "Default & Keyword Arguments",
        desc: "Defaults provide optional parameters; keyword args increase clarity",
        code: `def greet(name="Guest", sep=" "):\n    print(\"Hello\" + sep + name)\n\ngreet()\ngreet(name=\"Amit\")\ngreet(sep=\", \", name=\"Ravi\")`
      },
      {
        type: "concept",
        name: "Variable-Length Arguments (*args, **kwargs)",
        desc: "Accept arbitrary positional and keyword arguments",
        code: `def add(*nums):\n    return sum(nums)\n\nprint(add(1,2,3))  # 6\n\ndef info(**data):\n    for k,v in data.items():\n        print(k, v)\n\ninfo(name=\"A\", age=20)`
      },
      {
        type: "concept",
        name: "Docstrings & Annotations",
        desc: "Document functions and hint types",
        code: `def add(a: int, b: int) -> int:\n    \"\"\"Return sum of a and b.\"\"\"\n    return a + b\n\nprint(add.__doc__)`
      },
      {
        type: "concept",
        name: "Closures & Nested Functions",
        desc: "Inner functions capturing outer scope",
        code: `def outer(x):\n    def inner(y):\n        return x + y\n    return inner\n\nadder5 = outer(5)\nprint(adder5(10))  # 15`
      },
      {
        type: "challenge",
        title: "🎯 DIY Questions",
        questions: [
          "Write a function that accepts any number of keyword arguments and returns the keys sorted.",
          "Make a closure that remembers a prefix string and returns a function to prefix any message."
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
        content:
          "Functional tools for short, expressive transformations — use when they improve clarity."
      },
      {
        type: "concept",
        name: "Lambda",
        desc: "Small anonymous functions for quick use",
        code: `square = lambda x: x*x\nprint(square(6))  # 36\nadd = lambda a,b: a+b\nprint(add(2,3))`
      },
      {
        type: "concept",
        name: "map()",
        desc: "Apply a function to every element",
        code: `nums = [1,2,3]\nprint(list(map(lambda x: x*2, nums)))\n# Map with multiple iterables\nprint(list(map(lambda a,b: a+b, [1,2], [10,20])))`
      },
      {
        type: "concept",
        name: "filter()",
        desc: "Select elements that satisfy a predicate",
        code: `nums = [1,2,3,4,5]\nprint(list(filter(lambda x: x%2==0, nums)))  # [2,4]`
      },
      {
        type: "concept",
        name: "reduce()",
        desc: "Combine elements to a single value (functools.reduce)",
        code: `from functools import reduce\nprint(reduce(lambda a,b: a+b, [1,2,3,4]))  # 10`
      },
      {
        type: "challenge",
        title: "🎯 DIY Questions",
        questions: [
          "Use map to convert a list of string numbers to integers and sum them with reduce.",
          "Filter a list of words to keep only those with length > 3, then uppercase them with map."
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
        content:
          "Modularize code into modules and packages for better organization. Understand import styles, package layout, and __name__ guard."
      },
      {
        type: "heading",
        content: "Import Styles & Best Practices"
      },
      {
        type: "list",
        items: [
          "import module",
          "import module as alias",
          "from module import name",
          "Avoid from module import * in libraries"
        ]
      },
      {
        type: "concept",
        name: "Creating a Package",
        desc: "Directory with __init__.py; submodules as files",
        code: `# package/\n#   __init__.py\n#   utils.py\n#\n# from project root\nfrom package import utils\n\n# __name__ == \"__main__\"\nif __name__ == \"__main__\":\n    # code that runs only when executed directly\n    pass`
      },
      {
        type: "concept",
        name: "Using pip & virtualenv",
        desc: "Isolate dependencies per project",
        code: `# Create venv\npython -m venv venv\n# Activate (POSIX)\nsource venv/bin/activate\n# Install\npip install requests`
      },
      {
        type: "challenge",
        title: "✅ DIY Questions",
        questions: [
          "Create a small package 'mathops' with add/subtract functions and import it from another file.",
          "Explain when to use virtual environments and demonstrate creating one."
        ]
      }
    ]
  },

  {
    id: "file-handling-intermediate",
    title: "File Handling (Intermediate)",
    sections: [
      {
        type: "text",
        content:
          "Beyond basic read/write: work with CSV, JSON, binary files, and large files safely and efficiently."
      },
      {
        type: "concept",
        name: "with Statement",
        desc: "Ensures resources are cleaned up automatically",
        code: `with open("notes.txt", "w") as f:\n    f.write("Hello")\n# File closed automatically`
      },
      {
        type: "concept",
        name: "CSV Handling",
        desc: "Use csv module for structured data",
        code: `import csv\nwith open("data.csv", "r", newline='') as f:\n    reader = csv.DictReader(f)\n    for row in reader:\n        print(row['Name'], row['Age'])`
      },
      {
        type: "concept",
        name: "JSON Handling",
        desc: "Serialize/deserialize Python objects",
        code: `import json\nobj = {'a':1}\nwith open('data.json','w') as f:\n    json.dump(obj, f, indent=2)\nwith open('data.json','r') as f:\n    data = json.load(f)\nprint(data)`
      },
      {
        type: "concept",
        name: "Large File Streaming",
        desc: "Process files line-by-line to save memory",
        code: `with open('big.txt','r') as f:\n    for line in f:\n        process(line)  # do not read entire file into memory`
      },
      {
        type: "challenge",
        title: "🎯 DIY Questions",
        questions: [
          "Convert a CSV file to JSON using csv.DictReader and json.dump.",
          "Write a script that reads a large log file and prints the top 5 most frequent IP addresses (streaming, memory efficient)."
        ]
      }
    ]
  },

  {
    id: "exception-handling-intermediate",
    title: "Exception Handling (Intermediate)",
    sections: [
      {
        type: "text",
        content:
          "Write robust code with careful error handling, resource cleanup, and your own exception types for clear error semantics."
      },
      {
        type: "concept",
        name: "Try / Except / Else / Finally",
        desc: "Handle errors, run code on success, and always run cleanup",
        code: `try:\n    val = int(input('Enter: '))\nexcept ValueError:\n    print('Not an integer')\nelse:\n    print('Got integer', val)\nfinally:\n    print('This always runs')`
      },
      {
        type: "concept",
        name: "Custom Exceptions",
        desc: "Define domain-specific errors for clarity",
        code: `class ValidationError(Exception):\n    pass\n\nraise ValidationError('Invalid data')`
      },
      {
        type: "concept",
        name: "Exception Chaining & Logging",
        desc: "Chain exceptions or log full tracebacks for debugging",
        code: `import logging\ntry:\n    do_something()\nexcept Exception as e:\n    logging.exception('Failed in do_something')\n    raise`
      },
      {
        type: "challenge",
        title: "🎯 DIY Questions",
        questions: [
          "Create a custom exception InvalidUsernameError and use it inside a validate_username() function.",
          "Demonstrate using try/except/else/finally in a database-like resource simulation."
        ]
      }
    ]
  },

  {
    id: "object-oriented-python",
    title: "Object-Oriented Programming (OOP)",
    sections: [
      {
        type: "text",
        content:
          "OOP helps model complex systems with classes, encapsulation, inheritance and polymorphism. Use it to build modular and testable code."
      },
      {
        type: "concept",
        name: "Classes & Instances",
        desc: "Blueprints (classes) and concrete objects (instances)",
        code: `class Person:\n    \"\"\"Simple Person class\"\"\"\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    def greet(self):\n        return f'Hi, I am {self.name}'\n\np = Person('Amit', 21)\nprint(p.greet())`
      },
      {
        type: "concept",
        name: "Inheritance & super()",
        desc: "Extend and reuse behavior from parent classes",
        code: `class Student(Person):\n    def __init__(self, name, age, sid):\n        super().__init__(name, age)\n        self.sid = sid\n\ns = Student('Ravi', 20, 'S001')\nprint(s.greet())`
      },
      {
        type: "concept",
        name: "Encapsulation & Name Mangling",
        desc: "Private attributes with double underscore",
        code: `class Bank:\n    def __init__(self, bal):\n        self.__bal = bal\n    def deposit(self, amt):\n        self.__bal += amt\n    def get_balance(self):\n        return self.__bal`
      },
      {
        type: "concept",
        name: "Polymorphism & Duck Typing",
        desc: "Use objects interchangeably if they implement required methods",
        code: `class Dog:\n    def speak(self): return 'Woof'\nclass Cat:\n    def speak(self): return 'Meow'\nfor a in [Dog(), Cat()]:\n    print(a.speak())`
      },
      {
        type: "challenge",
        title: "✅ DIY Questions",
        questions: [
          "Design classes for a simple library system: Book, Member, Loan. Implement borrow() and return().",
          "Show how method overriding works in a subclass."
        ]
      }
    ]
  },

  {
    id: "iterators-generators",
    title: "Iterators & Generators",
    sections: [
      {
        type: "text",
        content:
          "Iterators let you traverse collections; generators produce values lazily which is great for memory efficiency."
      },
      {
        type: "concept",
        name: "Iterator Protocol",
        desc: "__iter__() and __next__() allow custom iteration",
        code: `class CountTo:\n    def __init__(self, n):\n        self.i = 0\n        self.n = n\n    def __iter__(self):\n        return self\n    def __next__(self):\n        if self.i < self.n:\n            self.i += 1\n            return self.i\n        raise StopIteration\n\nfor x in CountTo(3):\n    print(x)`
      },
      {
        type: "concept",
        name: "Generators (yield)",
        desc: "Simpler way to create iterators; supports resume state",
        code: `def countdown(n):\n    while n>0:\n        yield n\n        n -= 1\n\nfor v in countdown(3):\n    print(v)  # 3,2,1`
      },
      {
        type: "concept",
        name: "Use Cases",
        desc: "Streams, pipelines, reading big files, producing infinite sequences",
        code: `import itertools\n# infinite counter (use with care)\nfor i in itertools.count(1):\n    if i>5: break\n    print(i)`
      },
      {
        type: "challenge",
        title: "🎯 DIY Questions",
        questions: [
          "Create a generator that yields prime numbers up to N.",
          "Implement an iterator class that iterates backward over a list."
        ]
      }
    ]
  },

  {
    id: "decorators",
    title: "Decorators",
    sections: [
      {
        type: "text",
        content:
          "Decorators wrap functions to transparently add behavior (logging, caching, validation). Understand how to write safe decorators that preserve metadata."
      },
      {
        type: "concept",
        name: "Basic Decorator",
        desc: "Wrap a function to add pre/post behavior",
        code: `def deco(func):\n    def wrapper(*args, **kwargs):\n        print('Before')\n        res = func(*args, **kwargs)\n        print('After')\n        return res\n    return wrapper\n\n@deco\ndef say():\n    print('Hello')\n\nsay()`
      },
      {
        type: "concept",
        name: "functools.wraps & preserving metadata",
        desc: "Use wraps to keep function name, docstring, etc.",
        code: `from functools import wraps\n\ndef deco(func):\n    @wraps(func)\n    def wrapper(*a, **k):\n        return func(*a, **k)\n    return wrapper`
      },
      {
        type: "concept",
        name: "Parametrized Decorators",
        desc: "Decorators that accept arguments",
        code: `def repeat(n):\n    def real_deco(f):\n        def wrapper(*a, **k):\n            for _ in range(n):\n                f(*a, **k)\n        return wrapper\n    return real_deco\n\n@repeat(3)\ndef hi():\n    print('Hi')\n\nhi()`
      },
      {
        type: "challenge",
        title: "🎯 DIY Questions",
        questions: [
          "Write a decorator that logs function name and arguments each time the function is called.",
          "Create a simple caching decorator for pure functions."
        ]
      }
    ]
  },

  {
    id: "context-managers",
    title: "Context Managers",
    sections: [
      {
        type: "text",
        content:
          "Context managers provide a protocol (enter/exit) for allocating and releasing resources reliably (files, DB connections, locks)."
      },
      {
        type: "concept",
        name: "with Statement",
        desc: "Use with to ensure cleanup",
        code: `with open('f.txt','w') as f:\n    f.write('hello')\n# file closed automatically`
      },
      {
        type: "concept",
        name: "Custom Context Manager (class)",
        code: `class CM:\n    def __enter__(self):\n        print('enter')\n        return self\n    def __exit__(self, exc_type, exc, tb):\n        print('exit')\n\nwith CM():\n    print('inside')`
      },
      {
        type: "concept",
        name: "contextlib.contextmanager (function-based)",
        code: `from contextlib import contextmanager\n\n@contextmanager\ndef open_db():\n    conn = connect()\n    try:\n        yield conn\n    finally:\n        conn.close()`
      },
      {
        type: "challenge",
        title: "🎯 DIY Questions",
        questions: [
          "Write a custom context manager that measures and prints the execution time of a block.",
          "Use contextlib.contextmanager to create a temporary directory context that deletes itself after use."
        ]
      }
    ]
  },

  {
    id: "itertools-functools",
    title: "Itertools & Functools",
    sections: [
      {
        type: "text",
        content:
          "Standard library modules itertools and functools provide efficient iteration building blocks and function utilities like memoization and partial application."
      },
      {
        type: "concept",
        name: "Useful itertools",
        desc: "combinations, permutations, product, chain, islice, groupby",
        code: `from itertools import permutations, combinations, chain\nitems = [1,2,3]\nprint(list(permutations(items,2)))\nprint(list(combinations(items,2)))\nprint(list(chain([1,2],[3,4])))`
      },
      {
        type: "concept",
        name: "functools tools",
        desc: "lru_cache for memoization, partial for fixing arguments",
        code: `from functools import lru_cache, partial\n\n@lru_cache(maxsize=None)\ndef fib(n):\n    if n<2: return n\n    return fib(n-1)+fib(n-2)\n\nadd5 = partial(lambda a,b: a+b, 5)\nprint(add5(10))  # 15`
      },
      {
        type: "challenge",
        title: "🎯 DIY Questions",
        questions: [
          "Use itertools.groupby to group words by their starting letter.",
          "Use lru_cache and write a fast recursive algorithm for binomial coefficients."
        ]
      }
    ]
  },

  {
    id: "concurrency",
    title: "Multithreading & Multiprocessing (Basics)",
    sections: [
      {
        type: "text",
        content:
          "Concurrency can improve throughput. Use threads for I/O-bound tasks and processes for CPU-bound tasks. Understand Python's GIL and basic synchronization."
      },
      {
        type: "concept",
        name: "Threading (I/O-bound)",
        desc: "Threads share memory and are lightweight, but limited by GIL for CPU work",
        code: `import threading, time\n\ndef task(n):\n    time.sleep(1)\n    print('done', n)\n\nthreads = [threading.Thread(target=task, args=(i,)) for i in range(3)]\nfor t in threads: t.start()\nfor t in threads: t.join()`
      },
      {
        type: "concept",
        name: "Multiprocessing (CPU-bound)",
        desc: "Processes have separate memory spaces; bypass GIL",
        code: `from multiprocessing import Pool\n\ndef square(x): return x*x\nwith Pool(4) as p:\n    print(p.map(square, range(10)))`
      },
      {
        type: "concept",
        name: "Synchronization Basics",
        desc: "Locks, Events, Queues for safe communication",
        code: `from threading import Lock\nlock = Lock()\nwith lock:\n    # critical section\n    pass`
      },
      {
        type: "challenge",
        title: "🎯 DIY Questions",
        questions: [
          "Write a threaded downloader that fetches multiple URLs (simulate network calls).",
          "Compare runtime of a CPU-heavy task using threading vs multiprocessing on your machine and note differences."
        ]
      }
    ]
  },

  {
    id: "testing-logging-debugging",
    title: "Testing, Logging & Debugging (Essentials)",
    sections: [
      {
        type: "text",
        content:
          "Quality code needs tests, logging and the ability to debug. Learn unit testing basics, structured logging and using a debugger for troubleshooting."
      },
      {
        type: "concept",
        name: "unittest Basics",
        desc: "Standard library for unit tests",
        code: `import unittest\n\nclass TestMath(unittest.TestCase):\n    def test_add(self):\n        self.assertEqual(1+1, 2)\n\nif __name__ == '__main__':\n    unittest.main()`
      },
      {
        type: "concept",
        name: "pytest (shortcut style)",
        desc: "Third-party testing library; concise and powerful",
        code: `# test_sample.py\ndef inc(x): return x+1\n\ndef test_inc():\n    assert inc(3) == 4`
      },
      {
        type: "concept",
        name: "Logging",
        desc: "Use logging instead of print for production apps",
        code: `import logging\nlogging.basicConfig(level=logging.INFO)\nlogging.info('App started')\nlogging.exception('on error')`
      },
      {
        type: "concept",
        name: "Debugging (pdb)",
        desc: "Set breakpoints and step through code",
        code: `import pdb\nx = 5\npdb.set_trace()\nprint(x+2)`
      },
      {
        type: "challenge",
        title: "🎯 DIY Questions",
        questions: [
          "Write tests for a small module using pytest and run coverage to see test coverage.",
          "Replace print statements with logging and show how to change log level via environment variable."
        ]
      }
    ]
  },

  {
    id: "typing-regex-stdlib",
    title: "Type Hints, Regular Expressions & Useful Stdlib",
    sections: [
      {
        type: "text",
        content:
          "Type hints improve readability and tooling. Regex is useful for pattern matching. Also learn a few helpful stdlib modules for day-to-day tasks."
      },
      {
        type: "concept",
        name: "Type Hints (PEP 484)",
        desc: "Optional static typing via annotations",
        code: `from typing import List, Dict\n\ndef greet(name: str) -> str:\n    return 'Hello ' + name\n\ndef sum_list(nums: List[int]) -> int:\n    return sum(nums)`
      },
      {
        type: "concept",
        name: "Regular Expressions",
        desc: "Search and extract text patterns with re module",
        code: `import re\nm = re.search(r'\\b\\w+@\\w+\\.\\w+\\b', 'mail me at a@b.com')\nprint(m.group())  # a@b.com\n\n# findall, sub, split are commonly used`
      },
      {
        type: "concept",
        name: "Handy Stdlib Modules",
        desc: "os, sys, shutil, datetime, pathlib, subprocess",
        code: `from pathlib import Path\np = Path('file.txt')\nprint(p.exists())\nfrom datetime import datetime\nprint(datetime.now().isoformat())`
      },
      {
        type: "challenge",
        title: "🎯 DIY Questions",
        questions: [
          "Add type hints to an existing small project and run a static checker (mypy).",
          "Use re to validate phone numbers in different formats."
        ]
      }
    ]
  },

  {
    id: "packaging-deployment-basics",
    title: "Packaging, Distribution & Deployment (Intro)",
    sections: [
      {
        type: "text",
        content:
          "Prepare code for distribution (packages), pin dependencies, and know basic deployment options for Python apps."
      },
      {
        type: "concept",
        name: "Packaging with pyproject.toml",
        desc: "Modern packaging configuration",
        code: `# pyproject.toml (example)\n# [project]\n# name = 'myproj'\n# version = '0.1.0'\n# dependencies = ['requests>=2.0']`
      },
      {
        type: "concept",
        name: "requirements.txt vs Pipfile",
        desc: "Pin dependencies for reproducible installs",
        code: `# requirements.txt\nrequests==2.31.0\nflask==2.2.0`
      },
      {
        type: "concept",
        name: "Simple Deployment Options",
        desc: "Deploy to Heroku/Render/AWS or build Docker images for portability",
        code: `# Dockerfile (simple)\n# FROM python:3.11-slim\n# WORKDIR /app\n# COPY . /app\n# RUN pip install -r requirements.txt\n# CMD ['python','app.py']`
      },
      {
        type: "challenge",
        title: "✅ DIY Questions",
        questions: [
          "Create a requirements.txt for a small project and build a Dockerfile to run it.",
          "Explain the difference between a source distribution and a wheel (.whl)."
        ]
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