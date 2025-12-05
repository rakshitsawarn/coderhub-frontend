import React, { useState } from "react";
import "/src/Python CSS/interview-questions.css";
import { Link } from "react-router-dom";


const Interview = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const questions = [
    {
      q: "What is Python?",
      a: "Python is a high-level, interpreted, general-purpose programming language known for its simplicity and readability.",
      difficulty: "Easy"
    },
    {
      q: "Who developed Python?",
      a: "Python was created by Guido van Rossum and first released in 1991.",

      difficulty: "Easy"
    },
    {
      q: "What are Python's key features?",
      a: "Easy to learn, interpreted, dynamically typed, portable, supports OOP, and has a vast standard library.",

      difficulty: "Easy"
    },
    {
      q: "What is PEP 8?",
      a: "PEP 8 is the style guide for writing readable Python code — it defines naming conventions, indentation, and best practices.",
      difficulty: "Easy"
    },
    {
      q: "What are Python data types?",
      a: "int, float, str, list, tuple, dict, set, bool, complex, and NoneType.",
      category: "Data Types",
      difficulty: "Easy"
    },
    {
      q: "Difference between list and tuple?",
      a: "Lists are mutable; tuples are immutable.",
      category: "Data Types",
      difficulty: "Easy"
    },
    {
      q: "What is a dictionary in Python?",
      a: "A collection of key-value pairs. Example: {'name': 'Alice', 'age': 22}",
      category: "Data Types",
      difficulty: "Easy"
    },
    {
      q: "What are Python's mutable and immutable data types?",
      a: "Mutable: list, dict, set; Immutable: tuple, str, int, float, bool.",
      category: "Data Types",
      difficulty: "Intermediate"
    },
    {
      q: "What is the difference between shallow and deep copy?",
      a: "Shallow copy copies only references; deep copy duplicates nested objects too.",
      difficulty: "Intermediate"
    },
    {
      q: "What is Python used for?",
      a: "Web development, AI/ML, data analysis, automation, scripting, game development, and more.",

      difficulty: "Easy"
    },
    {
      q: "What is an interpreter?",
      a: "An interpreter executes Python code line by line rather than compiling it into machine code.",

      difficulty: "Easy"
    },
    {
      q: "How is memory managed in Python?",
      a: "Python uses reference counting and a garbage collector to manage memory automatically.",
      difficulty: "Intermediate"
    },
    {
      q: "What are Python namespaces?",
      a: "A namespace is a mapping from names to objects. Examples: local, global, built-in, and enclosing.",

      difficulty: "Intermediate"
    },
    {
      q: "What is PYTHONPATH?",
      a: "An environment variable that specifies where Python looks for modules.",

      difficulty: "Easy"
    },
    {
      q: "What are Python modules and packages?",
      a: "Modules are files containing Python code; packages are directories with multiple modules and an __init__.py file.",
      difficulty: "Easy"
    },
    {
      q: "What is the difference between == and is?",
      a: "== compares values; is compares object identities.",
      category: "Operators",
      difficulty: "Intermediate"
    },
    {
      q: "What are Python keywords?",
      a: "Reserved words like if, else, for, while, def, return, etc. that cannot be used as identifiers.",

      difficulty: "Easy"
    },
    {
      q: "What is the use of self in Python?",
      a: "self represents the instance of the class and allows access to its attributes and methods.",
      category: "OOP",
      difficulty: "Easy"
    },
    {
      q: "What is __init__()?",
      a: "A constructor method automatically called when an object is created.",
      category: "OOP",
      difficulty: "Easy"
    },
    {
      q: "What is the difference between del and remove()?",
      a: "del deletes by index or variable; remove() deletes by value (used in lists).",
      category: "Data Types",
      difficulty: "Easy"
    },
    {
      q: "What is slicing in Python?",
      a: "Extracting a part of a sequence using syntax like list[start:end:step].",
      category: "Data Types",
      difficulty: "Easy"
    },
    {
      q: "What are docstrings?",
      a: "Multiline comments that describe a function or class, defined using triple quotes.",

      difficulty: "Easy"
    },
    {
      q: "What is type casting?",
      a: "Converting one data type to another, e.g., int('10') → 10.",
      category: "Data Types",
      difficulty: "Easy"
    },
    {
      q: "What are lambda functions?",
      a: "Anonymous, one-line functions defined using the lambda keyword.",
      category: "Functions",
      difficulty: "Intermediate"
    },
    {
      q: "What are decorators?",
      a: "Functions that modify the behavior of other functions or methods.",
      difficulty: "Advance"
    },
    {
      q: "What is recursion?",
      a: "When a function calls itself directly or indirectly.",
      category: "Functions",
      difficulty: "Intermediate"
    },
    {
      q: "What are global, local, and nonlocal variables?",
      a: "global: declared outside all functions, local: inside a function, nonlocal: used in nested functions.",
      category: "Functions",
      difficulty: "Intermediate"
    },
    {
      q: "What is pass statement?",
      a: "A placeholder statement that does nothing — used for empty code blocks.",
      difficulty: "Easy"
    },
    {
      q: "What are Python iterators?",
      a: "Objects that implement __iter__() and __next__() methods for iteration.",
      difficulty: "Intermediate"
    },
    {
      q: "What is a generator?",
      a: "A function that yields values one by one using the yield keyword.",

      difficulty: "Advance"
    },
    {
      q: "What are comprehensions?",
      a: "Shortcuts for creating sequences like lists, sets, or dicts in a single line.",
      category: "Data Types",
      difficulty: "Intermediate"
    },
    {
      q: "What are Python exceptions?",
      a: "Errors that occur during program execution — can be handled using try-except blocks.",
      category: "Exception Handling",
      difficulty: "Easy"
    },
    {
      q: "What is the difference between compile-time and run-time error?",
      a: "Python doesn't have compile-time errors since it's interpreted — errors occur at runtime.",
      category: "Exception Handling",
      difficulty: "Intermediate"
    },
    {
      q: "What are assertions?",
      a: "Used for debugging — checks if a condition is True, otherwise raises an AssertionError.",
      category: "Exception Handling",
      difficulty: "Intermediate"
    },
    {
      q: "What is pickling and unpickling?",
      a: "Pickling converts Python objects into byte streams; unpickling restores them.",

      difficulty: "Intermediate"
    },
    {
      q: "What are Python's built-in data structures?",
      a: "List, Tuple, Set, and Dictionary.",
      category: "Data Types",
      difficulty: "Easy"
    },
    {
      q: "What is the difference between range() and xrange()?",
      a: "In Python 3, range() behaves like xrange() — it returns an iterator, not a list.",
      category: "Functions",
      difficulty: "Intermediate"
    },
    {
      q: "What is the difference between append() and extend()?",
      a: "append() adds a single element; extend() adds multiple elements (like from a list).",
      category: "Data Types",
      difficulty: "Easy"
    },
    {
      q: "How to reverse a list in Python?",
      a: "Using list.reverse() or list[::-1].",
      category: "Data Types",
      difficulty: "Easy"
    },
    {
      q: "How to swap variables in Python?",
      a: "a, b = b, a",

      difficulty: "Easy"
    },
    {
      q: "What are Python strings?",
      a: "Sequences of Unicode characters enclosed in quotes.",
      category: "Data Types",
      difficulty: "Easy"
    },
    {
      q: "What is string immutability?",
      a: "Once created, string contents cannot be modified.",
      category: "Data Types",
      difficulty: "Easy"
    },
    {
      q: "What are escape sequences?",
      a: "Characters like \\n, \\t, \\\\ used for formatting strings.",
      category: "Data Types",
      difficulty: "Easy"
    },
    {
      q: "How do you format strings in Python?",
      a: "Using f-strings, format(), or %-formatting.",
      category: "Data Types",
      difficulty: "Easy"
    },
    {
      q: "What are Python comments?",
      a: "Single-line (#) or multi-line (''' ''') comments ignored by the interpreter.",
      difficulty: "Easy"
    },
    {
      q: "What is indentation in Python?",
      a: "Python uses indentation (spaces/tabs) to define code blocks instead of braces.",

      difficulty: "Easy"
    },
    {
      q: "What is __name__ == '__main__' used for?",
      a: "To check if the script is being run directly or imported as a module.",

      difficulty: "Intermediate"
    },
    {
      q: "How do you read user input in Python?",
      a: "Using input() function.",

      difficulty: "Easy"
    },
    {
      q: "What is type() function?",
      a: "Returns the type of an object.",

      difficulty: "Easy"
    },
    {
      q: "How to install external libraries in Python?",
      a: "Using pip install <library_name>.",

      difficulty: "Easy"
    },
    {
      q: "51. What are *args and **kwargs in Python?",
      a: "*args allows a function to accept any number of positional arguments; **kwargs allows keyword arguments.",
      difficulty: "Intermediate"

    },
    {
      q: "52. What is the difference between a shallow copy and deep copy?",
      a: "Shallow copy copies only references of objects; deep copy recursively copies all nested objects.",
      difficulty: "Intermediate"
    },
    {
      q: "53. What are Python decorators used for?",
      a: "Decorators modify or enhance functions or classes without changing their code.",
      difficulty: "Intermediate"
    },
    {
      q: "54. What is the difference between an iterator and an iterable?",
      a: "Iterable can be looped (like lists, tuples); iterator is the object returned by iter() that produces values using next().",
      difficulty: "Intermediate"
    },
    {
      q: "55. What are Python closures?",
      a: "Functions that remember variables from their enclosing scope even after that scope has finished executing.",
      difficulty: "Intermediate"
    },
    {
      q: "56. Explain the concept of list comprehension.",
      a: "A concise way to create lists: [x**2 for x in range(5)]",
      difficulty: "Intermediate"
    },
    {
      q: "57. What is a Python generator?",
      a: "A function that yields items one by one using 'yield', providing memory-efficient iteration.",
      difficulty: "Intermediate"
    },
    {
      q: "58. What is the difference between a function and a method?",
      a: "A function is independent, while a method is associated with an object or class.",
      difficulty: "Intermediate"
    },
    {
      q: "59. What is monkey patching in Python?",
      a: "Dynamically modifying or extending a class or module at runtime.",
      difficulty: "Intermediate"
    },
    {
      q: "60. What are Python’s built-in data types for sequences?",
      a: "List, tuple, range, string, bytes, and bytearray.",
      difficulty: "Intermediate"
    },
    {
      q: "61. How do you handle exceptions in Python?",
      a: "Using try, except, else, and finally blocks.",
      difficulty: "Intermediate"
    },
    {
      q: "62. What is the difference between except Exception and except BaseException?",
      a: "Exception handles normal errors; BaseException also catches system-exiting exceptions like KeyboardInterrupt.",
      difficulty: "Intermediate"
    },
    {
      q: "63. How can you raise an exception manually?",
      a: "Using the raise keyword, e.g., raise ValueError('Invalid input')",
      difficulty: "Intermediate"
    },
    {
      q: "64. What is the 'finally' block used for?",
      a: "It always executes, even if an exception occurs — often used for cleanup.",
      difficulty: "Intermediate"
    },
    {
      q: "65. What is file handling in Python?",
      a: "Opening, reading, writing, and closing files using the open() function.",
      difficulty: "Intermediate"
    },
    {
      q: "66. Explain different file modes in Python.",
      a: "'r' read, 'w' write, 'a' append, 'rb' read binary, 'wb' write binary.",
      difficulty: "Intermediate"
    },
    {
      q: "67. How do you read a file line by line?",
      a: "Using a for loop: for line in open('file.txt'): print(line)",
      difficulty: "Intermediate"
    },
    {
      q: "68. How do you check if a file exists?",
      a: "Using os.path.exists('filename') or Path('filename').exists() from pathlib.",
      difficulty: "Intermediate"
    },
    {
      q: "69. What is context management in Python?",
      a: "Using the 'with' statement to automatically manage resources like file closing.",
      difficulty: "Intermediate"
    },
    {
      q: "70. What are Python modules?",
      a: "Files containing Python definitions and statements. Imported using the import keyword.",
      difficulty: "Intermediate"
    },
    {
      q: "71. What are Python packages?",
      a: "Collections of related modules organized in directories with __init__.py.",
      difficulty: "Intermediate"
    },
    {
      q: "72. What is the difference between import and from-import?",
      a: "import brings the module; from-import brings specific attributes or functions.",
      difficulty: "Intermediate"
    },
    {
      q: "73. What are Python virtual environments?",
      a: "Isolated Python environments that allow installing packages without affecting the global setup.",
      difficulty: "Intermediate"
    },
    {
      q: "74. How do you create a virtual environment?",
      a: "python -m venv env and activate it using source env/bin/activate (Linux) or env\\Scripts\\activate (Windows).",
      difficulty: "Intermediate"
    },
    {
      q: "75. What is pip?",
      a: "Python's package manager used to install and manage external libraries.",
      difficulty: "Intermediate"
    },
    {
      q: "76. What is JSON and how to handle it in Python?",
      a: "JSON (JavaScript Object Notation) is handled using the json module — json.dumps() and json.loads().",
      difficulty: "Intermediate"
    },
    {
      q: "77. What is the difference between json.dump() and json.dumps()?",
      a: "dump() writes JSON data to a file; dumps() returns it as a string.",
      difficulty: "Intermediate"
    },
    {
      q: "78. What is the difference between class variables and instance variables?",
      a: "Class variables are shared across all instances; instance variables belong to each object.",
      difficulty: "Intermediate"
    },
    {
      q: "79. What are Python class methods?",
      a: "Methods defined using @classmethod decorator, taking 'cls' as the first argument.",
      difficulty: "Intermediate"
    },
    {
      q: "80. What are static methods?",
      a: "Defined using @staticmethod, they don’t access class or instance attributes.",
      difficulty: "Intermediate"
    },
    {
      q: "81. What is method overriding?",
      a: "Redefining a method of a parent class in the child class.",
      difficulty: "Intermediate"
    },
    {
      q: "82. What is method overloading?",
      a: "Python doesn't support traditional overloading; it can be mimicked with default arguments or *args.",
      difficulty: "Intermediate"
    },
    {
      q: "83. What is multiple inheritance?",
      a: "When a class inherits from more than one parent class.",
      difficulty: "Intermediate"
    },
    {
      q: "84. What is the MRO (Method Resolution Order)?",
      a: "The order in which Python looks for methods in the class hierarchy.",
      difficulty: "Intermediate"
    },
    {
      q: "85. What is encapsulation?",
      a: "Restricting access to variables and methods — done using private/protected members.",
      difficulty: "Intermediate"
    },
    {
      q: "86. What is polymorphism?",
      a: "The ability of different objects to respond to the same function or method in different ways.",
      difficulty: "Intermediate"
    },
    {
      q: "87. What is abstraction?",
      a: "Hiding complex implementation details and showing only necessary features.",
      difficulty: "Intermediate"
    },
    {
      q: "88. What are abstract classes?",
      a: "Classes with abstract methods (defined using @abstractmethod) that must be implemented in child classes.",
      difficulty: "Intermediate"
    },
    {
      q: "89. What is the difference between composition and inheritance?",
      a: "Inheritance derives behavior; composition uses other classes’ functionality by containing their objects.",
      difficulty: "Intermediate"
    },
    {
      q: "90. What are magic (dunder) methods?",
      a: "Special methods like __init__, __str__, __add__, etc. that enable operator overloading and class behavior customization.",
      difficulty: "Intermediate"
    },
    {
      q: "91. What is operator overloading?",
      a: "Defining custom behavior for operators (e.g., +, -, *) using dunder methods like __add__.",
      difficulty: "Intermediate"
    },
    {
      q: "92. What does __str__ and __repr__ do?",
      a: "__str__ is for user-friendly string; __repr__ is for developer-readable representation.",
      difficulty: "Intermediate"
    },
    {
      q: "93. What is the difference between isinstance() and type()?",
      a: "isinstance() checks for inheritance too; type() checks only the exact type.",
      difficulty: "Intermediate"
    },
    {
      q: "94. What is a metaclass?",
      a: "A class of a class — controls how classes are created and behave.",
      difficulty: "Intermediate"
    },
    {
      q: "95. What are Python’s built-in functions?",
      a: "Functions like len(), type(), id(), dir(), sum(), max(), min(), range(), map(), filter(), etc.",
      difficulty: "Intermediate"
    },
    {
      q: "96. What is the difference between map(), filter(), and reduce()?",
      a: "map() applies a function to all items, filter() selects items based on a condition, reduce() applies cumulative operation.",
      difficulty: "Intermediate"
    },
    {
      q: "97. How do you sort data in Python?",
      a: "Using sorted() for new lists or .sort() for in-place sorting, with key and reverse parameters.",
      difficulty: "Intermediate"
    },
    {
      q: "98. What is zip() used for?",
      a: "Combines multiple iterables element-wise into tuples.",
      difficulty: "Intermediate"
    },
    {
      q: "99. What is enumerate() used for?",
      a: "Adds a counter to an iterable during iteration.",
      difficulty: "Intermediate"
    },
    {
      q: "100. How to merge two dictionaries in Python?",
      a: "Using dict1.update(dict2) or {**dict1, **dict2}.",
      difficulty: "Intermediate"
    },
    {
      q: "101. What is Python memory management?",
      a: "Python uses a private heap for memory allocation and manages memory through reference counting and garbage collection.",
      difficulty: "Advance"
    },
    {
      q: "102. What is garbage collection in Python?",
      a: "It automatically frees up memory by deleting objects with zero references using the gc module.",
      difficulty: "Advance"
    },
    {
      q: "103. What are weak references in Python?",
      a: "References that do not increase an object’s reference count, found in the weakref module.",
      difficulty: "Advance"
    },
    {
      q: "104. How to manually trigger garbage collection?",
      a: "Using import gc and then calling gc.collect().",
      difficulty: "Advance"
    },
    {
      q: "105. What are Python descriptors?",
      a: "Objects that customize attribute access using __get__, __set__, and __delete__ methods.",
      difficulty: "Advance"
    },
    {
      q: "106. What is the difference between @classmethod, @staticmethod, and @property?",
      a: "@classmethod works with the class, @staticmethod is independent, and @property converts methods into attributes.",
      difficulty: "Advance"
    },
    {
      q: "107. What are coroutines?",
      a: "Functions that can pause and resume execution using 'await' — used for asynchronous programming.",
      difficulty: "Advance"
    },
    {
      q: "108. What is the asyncio module?",
      a: "A Python module for writing concurrent code using async/await syntax.",
      difficulty: "Advance"
    },
    {
      q: "109. What is the difference between threading and multiprocessing?",
      a: "Threading runs tasks in the same memory space (I/O bound), multiprocessing uses separate processes (CPU bound).",
      difficulty: "Advance"
    },
    {
      q: "110. What are Python’s Global Interpreter Lock (GIL)?",
      a: "A mutex that allows only one thread to execute Python bytecode at a time — limiting true parallelism in threads.",
      difficulty: "Advance"
    },
    {
      q: "111. How to achieve true parallelism in Python?",
      a: "By using multiprocessing or libraries like concurrent.futures.ProcessPoolExecutor.",
      difficulty: "Advance"
    },
    {
      q: "112. What are Python context managers?",
      a: "Objects that manage resources automatically using __enter__() and __exit__() — typically used in with statements.",
      difficulty: "Advance"
    },
    {
      q: "113. How to create a custom context manager?",
      a: "By defining a class with __enter__ and __exit__ methods or using contextlib.contextmanager decorator.",
      difficulty: "Advance"
    },
    {
      q: "114. What are data classes in Python?",
      a: "Introduced in Python 3.7 via @dataclass decorator — they auto-generate init, repr, and eq methods for classes.",
      difficulty: "Advance"
    },
    {
      q: "115. What are namedtuples?",
      a: "Lightweight immutable objects created using collections.namedtuple() — act like tuples but with named fields.",
      difficulty: "Advance"
    },
    {
      q: "116. What is the difference between a dataclass and namedtuple?",
      a: "namedtuple is immutable; dataclass can be mutable and supports type hints and default values.",
      difficulty: "Advance"
    },
    {
      q: "117. What is memoization?",
      a: "An optimization technique that caches function results to avoid repeated calculations.",
      difficulty: "Advance"
    },
    {
      q: "118. How do you implement caching in Python?",
      a: "Using functools.lru_cache decorator or manual caching using a dictionary.",
      difficulty: "Advance"
    },
    {
      q: "119. What is the difference between deepcopy and copy.deepcopy?",
      a: "copy.deepcopy() is part of the standard copy module and recursively copies nested objects.",
      difficulty: "Advance"
    },
    {
      q: "120. What are Python’s design patterns?",
      a: "Common ones include Singleton, Factory, Observer, Decorator, and Strategy patterns implemented in Pythonic ways.",
      difficulty: "Advance"
    },
    {
      q: "121. Explain the Singleton pattern in Python.",
      a: "Ensures a class has only one instance — achieved by overriding __new__ or using decorators/metaclasses.",
      difficulty: "Advance"
    },
    {
      q: "122. What is duck typing?",
      a: "Python’s philosophy that type checking is based on behavior ('if it walks like a duck...') rather than inheritance.",
      difficulty: "Advance"
    },
    {
      q: "123. What are Python metaclasses used for?",
      a: "They define how classes are constructed — allowing customization of class creation.",
      difficulty: "Advance"
    },
    {
      q: "124. What are slots in Python classes?",
      a: "__slots__ limits instance attributes and optimizes memory usage by preventing dynamic attribute creation.",
      difficulty: "Advance"
    },
    {
      q: "125. What are Python’s built-in modules for concurrency?",
      a: "threading, multiprocessing, asyncio, concurrent.futures.",
      difficulty: "Advance"
    },
    {
      q: "126. What are Python’s regular expressions?",
      a: "Used for pattern matching and string searching, implemented with the re module.",
      difficulty: "Advance"
    },
    {
      q: "127. How to find all matches in a string using regex?",
      a: "Using re.findall(pattern, string).",
      difficulty: "Advance"
    },
    {
      q: "128. What are Python’s JSON operations?",
      a: "Serialization using json.dump()/json.dumps(), deserialization using json.load()/json.loads().",
      difficulty: "Advance"
    },
    {
      q: "129. What are Python’s logging levels?",
      a: "DEBUG, INFO, WARNING, ERROR, and CRITICAL from the logging module.",
      difficulty: "Advance"
    },
    {
      q: "130. How do you configure logging in Python?",
      a: "Using logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(message)s').",
      difficulty: "Advance"
    },
    {
      q: "131. What are Python’s popular web frameworks?",
      a: "Flask, Django, FastAPI, Pyramid, and Tornado.",
      difficulty: "Advance"
    },
    {
      q: "132. Difference between Flask and Django?",
      a: "Flask is lightweight and flexible; Django is a full-featured, batteries-included framework.",
      difficulty: "Advance"
    },
    {
      q: "133. What is WSGI?",
      a: "Web Server Gateway Interface — a standard for communication between web servers and Python apps.",
      difficulty: "Advance"
    },
    {
      q: "134. What is ASGI?",
      a: "Asynchronous Server Gateway Interface — supports async web apps (used in FastAPI and modern Django).",
      difficulty: "Advance"
    },
    {
      q: "135. What are Python’s common data analysis libraries?",
      a: "NumPy, Pandas, Matplotlib, Seaborn, SciPy.",
      difficulty: "Advance"
    },
    {
      q: "136. What is NumPy used for?",
      a: "Efficient array computations and linear algebra operations.",
      difficulty: "Advance"
    },
    {
      q: "137. What is the difference between a NumPy array and a Python list?",
      a: "NumPy arrays are faster and more memory-efficient for numerical operations.",
      difficulty: "Advance"
    },
    {
      q: "138. What is Pandas used for?",
      a: "Data manipulation and analysis using DataFrames and Series.",
      difficulty: "Advance"
    },
    {
      q: "139. What is a Pandas DataFrame?",
      a: "A 2D labeled data structure with rows and columns, similar to an Excel sheet.",
      difficulty: "Advance"
    },
    {
      q: "140. What is vectorization in NumPy?",
      a: "Performing operations on entire arrays without explicit loops, using optimized C code under the hood.",
      difficulty: "Advance"
    },
    {
      q: "141. What is broadcasting in NumPy?",
      a: "Automatic expansion of arrays with different shapes for element-wise operations.",
      difficulty: "Advance"
    },
    {
      q: "142. What is a lambda with filter/map/reduce?",
      a: "Using lambda functions inline with map(), filter(), or reduce() for concise functional operations.",
      difficulty: "Advance"
    },
    {
      q: "143. What is the difference between deep copy and shallow copy in Pandas?",
      a: "Shallow copies share data; deep copies duplicate data.",
      difficulty: "Advance"
    },
    {
      q: "144. What is serialization?",
      a: "Converting objects into a byte or string format for storage or transmission.",
      difficulty: "Advance"
    },
    {
      q: "145. What are Python’s serialization formats?",
      a: "JSON, pickle, CSV, YAML, and protocol buffers.",
      difficulty: "Advance"
    },
    {
      q: "146. What is the pickle module used for?",
      a: "For serializing and deserializing Python objects.",
      difficulty: "Advance"
    },
    {
      q: "147. What are Python’s profiling tools?",
      a: "cProfile, timeit, and line_profiler for performance measurement.",
      difficulty: "Advance"
    },
    {
      q: "148. What is the difference between @staticmethod and normal functions?",
      a: "staticmethods are part of a class namespace but don’t access class or instance data.",
      difficulty: "Advance"
    },
    {
      q: "149. What are asynchronous generators?",
      a: "Generators defined with 'async def' and 'yield', allowing async iteration over data streams.",
      difficulty: "Advance"
    },
    {
      q: "150. What is the difference between synchronous and asynchronous code?",
      a: "Synchronous code executes sequentially; asynchronous code can perform tasks concurrently using async/await.",
      difficulty: "Advance"
    },
    {
      q: "151. What is the difference between deepcopy and shallow copy for nested objects?",
      a: "A shallow copy only copies references to nested objects, while deepcopy recursively duplicates all nested levels.",
      difficulty: "Advance"
    },
    {
      q: "152. What are Python type hints?",
      a: "They specify expected variable or function types for better code readability and static analysis (PEP 484).",
      difficulty: "Advance"
    },
    {
      q: "153. How do you declare type hints in Python?",
      a: "Using syntax like: def add(x: int, y: int) -> int: return x + y.",
      difficulty: "Advance"
    },
    {
      q: "154. What is the typing module?",
      a: "It provides support for type hints — like List, Dict, Tuple, Union, Optional, Any, etc.",
      difficulty: "Advance"
    },
    {
      q: "155. What are Python annotations?",
      a: "Metadata attached to variables or function parameters, usually for type hinting or documentation.",
      difficulty: "Advance"
    },
    {
      q: "156. What is monkey patching and when is it risky?",
      a: "Modifying or replacing code at runtime. It's risky because it can break encapsulation and cause unpredictable behavior.",
      difficulty: "Advance"
    },
    {
      q: "157. What does the eval() function do?",
      a: "It parses and executes a Python expression passed as a string.",
      difficulty: "Advance"
    },
    {
      q: "158. What is exec() used for?",
      a: "It executes dynamically created Python code (statements) from a string or compiled object.",
      difficulty: "Advance"
    },
    {
      q: "159. What’s the difference between eval() and exec()?",
      a: "eval() returns a value from an expression; exec() executes code blocks without returning anything.",
      difficulty: "Advance"
    },
    {
      q: "160. What is the compile() function?",
      a: "Converts source code into a code object that can be executed by eval() or exec().",
      difficulty: "Advance"
    },
    {
      q: "161. What are Python’s bytecode files (.pyc)?",
      a: "Compiled bytecode cached by Python to speed up execution — stored in __pycache__ directories.",
      difficulty: "Advance"
    },
    {
      q: "162. How do you inspect bytecode?",
      a: "Using the dis module: import dis; dis.dis(function_name).",
      difficulty: "Advance"
    },
    {
      q: "163. What are metaprogramming and reflection in Python?",
      a: "Metaprogramming allows code to manipulate code; reflection inspects objects using getattr(), hasattr(), etc.",
      difficulty: "Advance"
    },
    {
      q: "164. What is introspection?",
      a: "The ability to examine an object’s type or attributes at runtime using dir(), type(), id(), etc.",
      difficulty: "Advance"
    },
    {
      q: "165. What is sys.getsizeof() used for?",
      a: "It returns the memory size of an object in bytes.",
      difficulty: "Advance"
    },
    {
      q: "166. How do you reduce Python memory usage?",
      a: "By using generators, __slots__, efficient data types (like arrays), and avoiding large global lists.",
      difficulty: "Advance"
    },
    {
      q: "167. What are Python’s memory views?",
      a: "They allow direct access to shared memory of data structures like byte arrays without copying data.",
      difficulty: "Advance"
    },
    {
      q: "168. How does Python manage object lifetime?",
      a: "Through reference counting and garbage collection cycles.",
      difficulty: "Advance"
    },
    {
      q: "169. What are weak references and why are they used?",
      a: "They allow referencing objects without increasing their reference count — used in caches.",
      difficulty: "Advance"
    },
    {
      q: "170. What are Python closures used for?",
      a: "To retain access to variables from an enclosing scope even after the function has returned.",
      difficulty: "Advance"
    },
    {
      q: "171. What is partial function application?",
      a: "Creating new functions with fixed arguments using functools.partial.",
      difficulty: "Advance"
    },
    {
      q: "172. What are Python’s callable objects?",
      a: "Any object that implements the __call__() method, allowing it to be used like a function.",
      difficulty: "Advance"
    },
    {
      q: "173. What are frozen sets?",
      a: "Immutable versions of sets — hashable and usable as dictionary keys.",
      difficulty: "Advance"
    },
    {
      q: "174. What are memory leaks in Python?",
      a: "Situations where objects remain referenced unintentionally, preventing garbage collection.",
      difficulty: "Advance"
    },
    {
      q: "175. What is the difference between threading.Lock and RLock?",
      a: "Lock can be acquired once; RLock (re-entrant lock) can be acquired multiple times by the same thread.",
      difficulty: "Advance"
    },
    {
      q: "176. What is deadlock?",
      a: "A situation where two or more threads are waiting indefinitely for each other's resources.",
      difficulty: "Advance"
    },
    {
      q: "177. What is the difference between async and threading?",
      a: "async uses cooperative multitasking (single thread), threading uses preemptive multitasking.",
      difficulty: "Advance"
    },
    {
      q: "178. What are context variables?",
      a: "Variables specific to a particular asynchronous task, maintained using contextvars module.",
      difficulty: "Advance"
    },
    {
      q: "179. How do you handle circular imports?",
      a: "By restructuring code, moving imports inside functions, or using delayed imports.",
      difficulty: "Advance"
    },
    {
      q: "180. What is dependency injection?",
      a: "Passing dependencies (objects or functions) to a class or function instead of creating them internally.",
      difficulty: "Advance"
    },
    {
      q: "181. What is duck typing vs static typing?",
      a: "Duck typing focuses on behavior (runtime), while static typing enforces types at compile-time or with type hints.",
      difficulty: "Advance"
    },
    {
      q: "182. What is the difference between mutable and hashable?",
      a: "Mutable objects can change value; hashable objects have a fixed hash value and can be used as dict keys.",
      difficulty: "Advance"
    },
    {
      q: "183. What are Python’s special variable conventions?",
      a: "Single underscore (_) for temporary variables; double underscore (__) for name mangling.",
      difficulty: "Advance"
    },
    {
      q: "184. What is name mangling?",
      a: "A technique to prevent accidental overriding of private variables in subclasses (e.g., _ClassName__var).",
      difficulty: "Advance"
    },
    {
      q: "185. What is a metaclass’s __new__ method used for?",
      a: "To customize how new classes are created, such as injecting methods or modifying attributes.",
      difficulty: "Advance"
    },
    {
      q: "186. What is the difference between id() and hash()?",
      a: "id() returns an object’s memory address; hash() returns a hash value used in dict/set lookups.",
      difficulty: "Advance"
    },
    {
      q: "187. What is the purpose of the collections module?",
      a: "Provides specialized data types like deque, Counter, namedtuple, defaultdict, and OrderedDict.",
      difficulty: "Advance"
    },
    {
      q: "188. What is the difference between Counter and defaultdict?",
      a: "Counter counts occurrences of elements; defaultdict creates default values for missing keys.",
      difficulty: "Advance"
    },
    {
      q: "189. What are contextlib utilities?",
      a: "Tools for creating and managing context managers, like contextlib.contextmanager and suppress.",
      difficulty: "Advance"
    },
    {
      q: "190. What is the use of timeit module?",
      a: "Measures execution time of small code snippets precisely.",
      difficulty: "Advance"
    },
    {
      q: "191. What are the differences between Python 2 and Python 3?",
      a: "Python 3 uses Unicode by default, has print as a function, integer division returns float, and better library support.",
      difficulty: "Advance"
    },
    {
      q: "192. What are some common performance optimization techniques in Python?",
      a: "Use built-in functions, list comprehensions, generators, avoid global variables, use NumPy for math-heavy tasks.",
      difficulty: "Advance"
    },
    {
      q: "193. What are Python memory profilers?",
      a: "Tools like memory_profiler and objgraph to analyze memory usage.",
      difficulty: "Advance"
    },
    {
      q: "194. How do you debug Python code?",
      a: "Using pdb, logging, or IDE debuggers (breakpoints, step-in, watch variables).",
      difficulty: "Advance"
    },
    {
      q: "195. What are Python code linters?",
      a: "Tools like pylint, flake8, and black that check code style and errors.",
      difficulty: "Advance"
    },
    {
      q: "196. What are Python’s common interview tricky questions?",
      a: "Mutability of default arguments, list aliasing, variable scoping, and integer caching.",
      difficulty: "Advance"
    },
    {
      q: "197. Why is 'is' not reliable for string comparison sometimes?",
      a: "Because 'is' checks identity, not value; Python may cache small strings but not always.",
      difficulty: "Advance"
    },
    {
      q: "198. What happens when you use a mutable object as a default argument?",
      a: "The same object is reused across function calls, leading to unexpected behavior.",
      difficulty: "Advance"
    },
    {
      q: "199. How to avoid mutable default argument issues?",
      a: "Use None as the default and create a new object inside the function.",
      difficulty: "Advance"
    },
    {
      q: "200. What are Python’s hidden gems or lesser-known features?",
      a: "enumerate, zip, with statements, comprehensions, contextlib, itertools, dataclasses, f-strings, and LRU cache.",
      difficulty: "Advance"
    }
  ];

  const categories = ["All", ...new Set(questions.map(q => q.category))];

  const filteredQuestions = questions.filter(q => {
    const matchesSearch = q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.a.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "All" || q.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy": return "#43e97b";
      case "Intermediate": return "#fcd34d";
      case "Advance": return "#f5576c";
      default: return "#667eea";
    }
  };

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="interview-container">

      {/* Profile Circle */}
      <Link to="/pages/profile" className="profile-circle">
        <div className="profile-avatar">
          <span className="profile-text">👤</span>
        </div>
        <div className="profile-status"></div>
      </Link>
      {/* Background */}
      <div className="interview-background">
        <div className="interview-grid"></div>
        <div className="interview-orb orb-1"></div>
        <div className="interview-orb orb-2"></div>
      </div>

      {/* Header */}
      <div className="interview-header">
        <div className="header-badge-interview">
          <span className="badge-icon-interview">🎯</span>
          <span className="badge-text-interview">Interview Preparation</span>
        </div>
        <h1 className="interview-title">
          Python <span className="highlight-interview">Interview Questions</span>
        </h1>
        <p className="interview-subtitle">
          50 Essential Python questions covering all fundamental concepts for interview success
        </p>

        {/* Stats */}
        <div className="interview-stats">
          <div className="stat-card-interview">
            <span className="stat-number-interview">{questions.length}</span>
            <span className="stat-label-interview">Questions</span>
          </div>
          <div className="stat-card-interview">
            <span className="stat-number-interview">{categories.length - 1}</span>
            <span className="stat-label-interview">Categories</span>
          </div>
          <div className="stat-card-interview">
            <span className="stat-number-interview">3</span>
            <span className="stat-label-interview">Difficulty Levels</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="interview-filters">
        <div className="search-bar-interview">
          <span className="search-icon-interview">🔍</span>
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input-interview"
          />
          {searchTerm && (
            <button
              className="clear-search-interview"
              onClick={() => setSearchTerm("")}
            >
              ✕
            </button>
          )}
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-chip-interview ${filterCategory === category ? "active" : ""}`}
              onClick={() => setFilterCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="results-count-interview">
        Showing {filteredQuestions.length} of {questions.length} questions
      </div>

      {/* Questions List */}
      <div className="questions-list">
        {filteredQuestions.map((item, index) => (
          <div
            key={index}
            className={`question-item ${expandedIndex === index ? "expanded" : ""}`}
            onClick={() => toggleExpand(index)}
          >
            <div className="question-header-interview">
              <div className="question-left">
                <span className="question-number-interview">Q{index + 1}</span>
                <h3 className="question-text">{item.q}</h3>
              </div>
              <div className="question-right">
                <span
                  className="difficulty-tag-interview"
                  style={{
                    background: getDifficultyColor(item.difficulty),
                    boxShadow: `0 4px 12px ${getDifficultyColor(item.difficulty)}40`
                  }}
                >
                  {item.difficulty}
                </span>
                <span className={`expand-icon ${expandedIndex === index ? "rotated" : ""}`}>
                  ▼
                </span>
              </div>
            </div>

            {expandedIndex === index && (
              <div className="question-answer">
                <div className="answer-label">Answer:</div>
                <p className="answer-text">{item.a}</p>
                <div className="answer-footer">
                  <span className="category-badge-interview">
                    📁 {item.category}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredQuestions.length === 0 && (
        <div className="no-results-interview">
          <div className="no-results-icon-interview">🔍</div>
          <h3>No questions found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default Interview;