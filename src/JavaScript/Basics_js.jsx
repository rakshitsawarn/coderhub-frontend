import React, { useState } from "react";
import "/src/Python CSS/Basics.css";

const topics = [
  {
    id: "intro",
    title: "Introduction to Python",
    content: `Python is a high-level, interpreted, general-purpose programming language. It is known for its simple syntax, which makes it very easy to learn and read. Python is used by beginners and professionals all over the world in different areas of software development.

Why Python is Popular?

1. Easy to learn and read: Python's syntax is very similar to English, which makes it beginner-friendly.

2. Free and open-source: You can download and use Python for free.

3. Cross-platform: Works on Windows, Mac, and Linux.

4. Large community: There are millions of Python users worldwide, which makes finding help easy.

5. Versatile: Python can be used for web development, game development, data science, machine learning, automation, and more.

6. Powerful libraries: Python has many pre-built libraries that help in performing complex tasks quickly (like NumPy, Pandas, Matplotlib, TensorFlow, etc.).

Key Features of Python

1. Interpreted: Python executes code line by line, which helps in easier debugging.

2. High-level: You don't have to worry about the low-level details like memory management.

3. Object-Oriented: Python supports object-oriented programming, which helps in writing modular and reusable code.

4. Dynamically typed: You don't need to declare the type of a variable explicitly. Python figures it out automatically.

5. Extensible and Embeddable: Python can be integrated with other languages like C, C++, and Java.

Who Uses Python?

Some of the world's top companies use Python for their products and services:

1. Google – for search engines and AI projects
2. Netflix – for content recommendation systems
3. Instagram – for backend development
4. NASA – for scientific programming
5. Spotify – for data analysis and recommendation engines

Why Learn Python as a Beginner?

1. It is simple and easy to start coding immediately.
2. Great for learning programming concepts and logic.
3. Prepares you for advanced topics like AI, Machine Learning, and Web Development.
4. A great language for building real-world projects quickly.`
  },
  {
    id: "installation",
    title: "Installing Python",
    content: `To start writing Python programs, you need to install Python on your computer. Follow these simple steps:

Steps:

1. Step 1: Go to the official Python website
Visit https://www.python.org/downloads/ to download Python.

2. Step 2: Download Python
- Look for the latest version of Python 3 (e.g., Python 3.12.x).
- Click the Download button for your operating system:
  • Windows: Click the Windows installer
  • Mac: Click the macOS installer
  • Linux: Follow instructions for your distribution

3. Step 3: Run the Installer

4. Step 4: Verify Installation
- Open Command Prompt (Windows), Terminal (Mac/Linux).
- Type the command:
    python --version

- You should see something like:
    Python 3.12.0
- If yes, Python is installed successfully!

Step 5: Install an IDE
You can also install a Python IDE for easier coding:
- VS Code: https://code.visualstudio.com/
- PyCharm: https://www.jetbrains.com/pycharm/

If you see a version number, installation is successful.`
  },
  {
    id: "syntax",
    title: "Python Syntax",
    content: `
Python syntax is **simple and easy to read**, which is one of the reasons Python is so popular. Here’s everything you need to know to get started:

### 1. Python Statements
- Python code is written in **statements**, one per line.
- Example:
\`\`\`
x = 5
y = 10
print(x + y)
\`\`\`

### 2. Indentation
- Python uses **indentation (spaces)** instead of curly braces {} to define blocks of code.
- **All statements in the same block must be indented the same amount.**
- Example:
\`\`\`
if x > 0:
    print("Positive number")
else:
    print("Non-positive number")
\`\`\`
- Wrong indentation → **SyntaxError**

### 3. Case-Sensitivity
- Python is **case-sensitive**.  
- Example:
\`\`\`
Name = "Amit"
name = "Ravi"
print(Name)  # Amit
print(name)  # Ravi
\`\`\`

### 4. Comments
- Comments are used to explain the code and are ignored by Python.
- **Single-line comment:**  
\`\`\`
# This is a comment
\`\`\`
- **Multi-line comment:**  
\`\`\`
"""
This is a
multi-line comment
"""
\`\`\`

### 5. Variables
- Variables **store data** and do not need explicit declaration.
- Example:
\`\`\`
age = 12
name = "Amit"
pi = 3.14
\`\`\`

### 6. Python is Dynamically Typed
- You don’t need to specify variable types. Python figures it out automatically.
- Example:
\`\`\`
x = 10       # int
y = 3.5      # float
name = "Amy" # str
\`\`\`

### 7. Python Statements on the Same Line
- You can write multiple statements in **one line** using a semicolon ";".
- Example:
\`\`\`
x = 5; y = 10; print(x + y)
\`\`\`

### 8. Python Indentation Best Practices
- Use **4 spaces per indent** (recommended by PEP8).
- Never mix tabs and spaces.
- Helps in **readable and maintainable code**.

### 9. First Python Program
\`\`\`
# Print Hello World
print("Hello, Python!")
\`\`\`

You are ready to move on to **variables, data types, and operators** next!
  `
  },

  {
    id: "variables",
    title: "Variables",
    content: `
### What are Variables?
Variables are like **containers** that store data in a program.  
You can store numbers, text, or any other type of information in them.

### Example
\`\`\`
name = "Amit"    # String
age = 10         # Integer
pi = 3.14        # Float
\`\`\`

### Rules for Naming Variables
1. **Cannot start with a number:**  
   \`\`\`
   1name = "Amit"   # ❌ Wrong
   name1 = "Amit"   # ✅ Correct
   \`\`\`
2. **Case-sensitive:**  
   \`\`\`
   Name = "Amit"
   name = "Ravi"
   print(Name)  # Amit
   print(name)  # Ravi
   \`\`\`
3. **Use meaningful names:**  
   \`\`\`
   age = 12          # ✅ Good
   a = 12            # ❌ Not clear
   student_name = "Amit"  # ✅ Clear
   \`\`\`

### Tips
- Use **letters, numbers, and underscores (_)** in variable names.  
- Avoid **special characters** like @, $, %, etc.  
- Start variable names with a **letter or underscore**.  

Now you can use variables to **store and manipulate data** in Python programs!`
  },



  {
    id: "data-types",
    title: "Data Types",
    content: `
### What are Data Types?
A **data type** tells Python what kind of data is stored in a variable.  
Python automatically figures out the type of data you give to a variable.  

### Common Data Types in Python

1. **Integer (int)** – Whole numbers  
\`\`\`
x = 10
y = -5
\`\`\`

2. **Float (float)** – Decimal numbers  
\`\`\`
pi = 3.14
temperature = -2.5
\`\`\`

3. **String (str)** – Text enclosed in quotes  
\`\`\`
name = "Amit"
greeting = 'Hello'
\`\`\`

4. **Boolean (bool)** – True or False values  
\`\`\`
is_raining = True
is_sunny = False
\`\`\`

5. **List (list)** – A collection of items in order  
\`\`\`
fruits = ["apple", "banana", "mango"]
numbers = [1, 2, 3, 4]
\`\`\`

6. **Tuple (tuple)** – Like a list, but **cannot be changed**  
\`\`\`
colors = ("red", "green", "blue")
\`\`\`

7. **Set (set)** – A collection of **unique items**, no order  
\`\`\`
unique_numbers = {1, 2, 3}
\`\`\`

8. **Dictionary (dict)** – Stores data as **key: value pairs**  
\`\`\`
student = {
  "name": "Amit",
  "age": 12,
  "class": 7
}
\`\`\`

### How to Check Data Type
Use the **type()** function:
\`\`\`
x = 10
print(type(x))  # <class 'int'>
\`\`\`

### Tips
- Python automatically detects the type of a variable.  
- You don’t need to **declare the type manually**.  
- Choose the **right data type** for the task to make your program efficient.  

Now you know the **main building blocks of data in Python**!`
  },

  {
    id: "type-casting",
    title: "Type Casting",
    content: `
### What is Type Casting?
**Type Casting** means converting a variable from **one data type to another**.  
This is useful when you need to perform operations between different data types.

### Common Type Casting Functions

1. **int()** – Converts a value to an integer  
\`\`\`
x = int("5")    # string "5" → integer 5
y = int(3.9)    # float 3.9 → integer 3
\`\`\`

2. **float()** – Converts a value to a float (decimal number)  
\`\`\`
x = float("3.14")  # string "3.14" → float 3.14
y = float(5)       # integer 5 → float 5.0
\`\`\`

3. **str()** – Converts a value to a string  
\`\`\`
x = str(10)        # integer 10 → string "10"
y = str(3.5)       # float 3.5 → string "3.5"
\`\`\`

### Why Type Casting is Important
- To perform **mathematical operations** between numbers stored as strings.  
- To display numbers as **text** in print statements.  
- To avoid **errors** when combining different data types.

### Example: Using Type Casting
\`\`\`
num1 = "5"
num2 = 10

# Convert string to integer to add
sum = int(num1) + num2
print(sum)  # Output: 15

# Convert integer to string to print
print("The total is " + str(sum))  # Output: The total is 15
\`\`\`

### Tips
- Always convert **before performing operations**.  
- Avoid converting incompatible types (e.g., "hello" → int will give an error).  

Now you are ready to **take input and output values** in Python!`
  },


  {
    id: "input-output",
    title: "Input & Output",
    content: `
### What is Input & Output?
- **Input** allows the user to give data to the program.  
- **Output** displays information to the user.

---

### Taking Input from User
Use the **input()** function to take input.

\`\`\`
name = input("Enter your name: ")
age = input("Enter your age: ")
\`\`\`

- The program will **pause** and wait for the user to type something.  
- Everything entered is stored as a **string**.  

---

### Displaying Output
Use the **print()** function to show information.

\`\`\`
print("Hello", name)
print("You are", age, "years old")
\`\`\`

- You can print **text**, **numbers**, or both.  
- Multiple items are separated by a **comma**, which adds a space automatically.

---

### Example: Input & Output Together
\`\`\`
# Take input
name = input("Enter your name: ")
age = input("Enter your age: ")

# Show output
print("Welcome", name)
print("Your age is", age)
\`\`\`

---

### Tips
- Convert input to other types if needed:  
\`\`\`
age = int(input("Enter your age: "))  # converts input to integer
\`\`\`
- Use input and print together to make interactive programs.  

Now you are ready to **use operators** to do calculations in Python!`
  },


  {
    id: "operators",
    title: "Operators",
    content: `
### What are Operators?
Operators are symbols that tell Python to perform **specific operations** on values or variables, such as math calculations, comparisons, or logical checks.

---

### Types of Operators

1. **Arithmetic Operators** – for math operations  
\`\`\`
+   # addition
-   # subtraction
*   # multiplication
/   # division
%   # modulo (remainder)
**  # exponent
//  # floor division
\`\`\`

2. **Comparison Operators** – for comparing values  
\`\`\`
==  # equal to
!=  # not equal to
>   # greater than
<   # less than
>=  # greater or equal
<=  # less or equal
\`\`\`

3. **Logical Operators** – combine conditional statements  
\`\`\`
and  # True if both are True
or   # True if at least one is True
not  # reverses True/False
\`\`\`

4. **Assignment Operators** – assign values to variables  
\`\`\`
=   # simple assignment
+=  # add and assign
-=  # subtract and assign
*=  # multiply and assign
/=  # divide and assign
\`\`\`

5. **Membership Operators** – check if value exists in a sequence  
\`\`\`
in       # True if exists
not in   # True if does NOT exist
\`\`\`

6. **Identity Operators** – check if two variables point to the same object  
\`\`\`
is      # True if same object
is not  # True if not the same object
\`\`\`

---

### Example
\`\`\`
a = 10
b = 5

# Arithmetic
print(a + b)   # 15
print(a ** 2)  # 100

# Comparison
print(a > b)   # True

# Logical
print(a > 5 and b < 10)  # True

# Assignment
a += 5
print(a)  # 15
\`\`\`

---

### Tips
- Use operators carefully depending on the type of data (numbers, strings, lists).  
- Logical operators help in making **conditions for decision-making**.  
- Arithmetic and assignment operators are used **everywhere in Python programs**.  

Now you are ready to explore **Strings in Python**!`
  },



  {
    id: "strings",
    title: "Strings",
    content: `
### What are Strings?
Strings are **text** enclosed in **quotes**.  
You can use **double quotes " "** or **single quotes ' '** to create a string.

---

### Example
\`\`\`
name = "Python"
greeting = 'Hello'
\`\`\`

---

### String Indexing
Each character in a string has a **position number (index)** starting from 0.  
You can access characters using these indexes.

\`\`\`
text = "Hello"
print(text[0])   # H (first character)
print(text[1])   # e (second character)
print(text[-1])  # o (last character)
\`\`\`

---

### String Properties
- Strings are **immutable**, meaning you **cannot change a character directly**.  
- Use **concatenation (+)** to join strings and **repetition (*)** to repeat them.

\`\`\`
text = "Hello"
new_text = text + " World"  # Concatenation
print(new_text)             # Hello World

repeat_text = text * 3
print(repeat_text)          # HelloHelloHello
\`\`\`

---

### Tips
- Use **single or double quotes** consistently.  
- Remember: **index starts at 0**.  
- To change a string, create a **new string** using operations or methods.  

Now you are ready to explore **String Methods**!`
  },



  {
    id: "string-methods",
    title: "String Methods",
    content: `
### What are String Methods?
String methods are **built-in functions** in Python that help you **work with text**.  
You can modify, format, and process strings without writing complex code.

---

### Common String Methods

1. **upper()** – Converts string to uppercase  
\`\`\`
text = "hello"
print(text.upper())  # HELLO
\`\`\`

2. **lower()** – Converts string to lowercase  
\`\`\`
text = "HELLO"
print(text.lower())  # hello
\`\`\`

3. **strip()** – Removes spaces from the beginning and end  
\`\`\`
text = "  Python  "
print(text.strip())  # Python
\`\`\`

4. **replace(old, new)** – Replaces old text with new text  
\`\`\`
text = "Amit"
print(text.replace("A", "R"))  # Rmit
\`\`\`

5. **split()** – Splits string into a list by spaces or a separator  
\`\`\`
text = "Hello World"
print(text.split())  # ['Hello', 'World']
\`\`\`

6. **join()** – Joins elements of a list into a string  
\`\`\`
words = ['Hello', 'World']
print(" ".join(words))  # Hello World
\`\`\`

---

### Example
\`\`\`
name = "Amit"
print(name.lower())   # amit
print(name.upper())   # AMIT
\`\`\`

---

### Tips
- Methods **do not change the original string**; they return a **new string**.  
- Use **help(str)** in Python to see all string methods.  
- Combine methods for **powerful string manipulation**:  
\`\`\`
text = "  Hello World  "
print(text.strip().upper())  # HELLO WORLD
\`\`\`

Now you are ready to explore **Lists in Python**!`
  },



  {
    id: "lists",
    title: "Lists",
    content: `
### What are Lists?
Lists are used to **store multiple values** in a single variable.  
You can store numbers, text, or even other lists inside a list.

---

### Creating a List
\`\`\`
fruits = ["apple", "mango", "banana"]
numbers = [1, 2, 3, 4]
mixed = [1, "apple", 3.5, True]
\`\`\`

---

### Features of Lists
- **Ordered** – items have a specific order (index starts from 0)  
- **Changeable** – you can modify, add, or remove items  
- **Allows duplicates** – same item can appear multiple times  

---

### Accessing List Items
Use **indexing** to access items:  
\`\`\`
fruits = ["apple", "mango", "banana"]
print(fruits[0])   # apple
print(fruits[2])   # banana
\`\`\`

- Negative index starts from the **end**:  
\`\`\`
print(fruits[-1])  # banana
\`\`\`

---

### Example: Modifying a List
\`\`\`
fruits = ["apple", "mango", "banana"]

# Change an item
fruits[1] = "orange"

# Add an item
fruits.append("grapes")

# Remove an item
fruits.remove("apple")

print(fruits)  # ['orange', 'banana', 'grapes']
\`\`\`

---

### Tips
- Lists are **very flexible** and widely used in Python programs.  
- Combine lists, slice them, or loop through items for powerful operations.  

Next, we can do **List Methods** in the same polished, structured format.`
  },


  {
    id: "list-methods",
    title: "List Methods",
    content: `
### What are List Methods?
List methods are **built-in functions** that help you **modify and work with lists** easily.

---

### Common List Methods

1. **append(item)** – Adds an item at the end of the list  
\`\`\`
fruits = ["apple", "mango"]
fruits.append("banana")
print(fruits)  # ['apple', 'mango', 'banana']
\`\`\`

2. **insert(index, item)** – Adds an item at a specific position  
\`\`\`
fruits.insert(1, "orange")
print(fruits)  # ['apple', 'orange', 'mango', 'banana']
\`\`\`

3. **remove(item)** – Removes the first occurrence of an item  
\`\`\`
fruits.remove("mango")
print(fruits)  # ['apple', 'orange', 'banana']
\`\`\`

4. **pop()** – Removes and returns the last item  
\`\`\`
last_fruit = fruits.pop()
print(last_fruit)  # banana
print(fruits)      # ['apple', 'orange']
\`\`\`

5. **sort()** – Sorts the list in ascending order  
\`\`\`
nums = [3, 1, 2]
nums.sort()
print(nums)  # [1, 2, 3]
\`\`\`

6. **reverse()** – Reverses the order of the list  
\`\`\`
nums.reverse()
print(nums)  # [3, 2, 1]
\`\`\`

---

### Tips
- Use **append()** to grow your list dynamically.  
- Use **sort()** and **reverse()** for organizing data.  
- Combine list methods to **perform powerful operations** easily.  

Next, we can move on to **Tuples in Python** in the same polished format.`
  },



  {
    id: "tuples",
    title: "Tuples",
    content: `
### What are Tuples?
Tuples are similar to lists, but they are **immutable**, which means once created, you **cannot change their items**.  
They are often used to store data that should **not be modified**.

---

### Creating a Tuple
\`\`\`
colors = ("red", "green", "blue")
numbers = (1, 2, 3, 4)
mixed = (1, "apple", 3.5, True)
\`\`\`

- Use **parentheses ( )** to create tuples.  
- Single-item tuple:  
\`\`\`
single = ("apple",)
\`\`\`  
*(Note the comma!)*

---

### Features of Tuples
- **Ordered** – items have a specific order (index starts from 0)  
- **Unchangeable** – you cannot modify, add, or remove items  
- **Faster than lists** – because they are immutable  

---

### Accessing Tuple Items
\`\`\`
print(colors[0])   # red
print(colors[-1])  # blue
\`\`\`

---

### Example: Tuple Operations
\`\`\`
colors = ("red", "green", "blue")

# Accessing items
print(colors[1])  # green

# Tuples can be concatenated
more_colors = colors + ("yellow", "pink")
print(more_colors)  # ('red', 'green', 'blue', 'yellow', 'pink')
\`\`\`

---

### Tips
- Use tuples when you **don’t want data to change**.  
- Tuples support **indexing and slicing** like lists.  
- They are **faster and safer** for storing constant data.  

Next, we can move on to **Sets in Python**.`
  },


  {
    id: "sets",
    title: "Sets",
    content: `
### What are Sets?
Sets are used to **store unique items**.  
They automatically **remove duplicates** and do not keep items in a specific order.

---

### Creating a Set
\`\`\`
s = {1, 2, 3, 3, 2}
print(s)  # {1, 2, 3}
\`\`\`

- Sets are created using **curly braces { }**.  
- Duplicates are automatically removed.  

---

### Features of Sets
- **Unordered** – items have no specific position  
- **No duplicates** – each item appears only once  
- **Useful for removing duplicates** from lists or data  

---

### Common Set Operations
1. **Add item**  
\`\`\`
s.add(4)
print(s)  # {1, 2, 3, 4}
\`\`\`

2. **Remove item**  
\`\`\`
s.remove(2)
print(s)  # {1, 3, 4}
\`\`\`

3. **Union (combine sets)**  
\`\`\`
a = {1, 2}
b = {2, 3}
print(a | b)  # {1, 2, 3}
\`\`\`

4. **Intersection (common items)**  
\`\`\`
print(a & b)  # {2}
\`\`\`

5. **Difference**  
\`\`\`
print(a - b)  # {1}
\`\`\`

---

### Example: Using Sets
\`\`\`
fruits = {"apple", "banana", "apple"}
print(fruits)  # {'apple', 'banana'}
\`\`\`

---

### Tips
- Sets are **great for storing unique values**.  
- You **cannot access items by index** because sets are unordered.  
- Use sets for **fast membership checking**:  
\`\`\`
print("apple" in fruits)  # True
\`\`\`

Next, we can move on to **Dictionaries in Python**.`
  },


  {
    id: "dictionaries",
    title: "Dictionaries",
    content: `
### What are Dictionaries?
Dictionaries are used to **store data in key–value pairs**.  
Each key is unique and points to a value, like a **real-life dictionary** where a word has a meaning.

---

### Creating a Dictionary
\`\`\`
student = {
  "name": "Amit",
  "age": 12,
  "class": 7
}
\`\`\`

- Keys are **unique**.  
- Values can be **any type** (number, string, list, or even another dictionary).

---

### Accessing Items
\`\`\`
print(student["name"])  # Amit
print(student["age"])   # 12
\`\`\`

- Use the key inside square brackets "[ ]" to get the value.

---

### Modifying a Dictionary
\`\`\`
# Change a value
student["age"] = 13

# Add a new key-value pair
student["grade"] = "A"

# Remove a key-value pair
del student["class"]

print(student)
\`\`\`

---

### Features of Dictionaries
- **Changeable** – you can modify, add, or delete items  
- **No duplicate keys** – each key must be unique  
- **Unordered** – items do not have a specific order (before Python 3.7)  

---

### Example: Looping Through Dictionary
\`\`\`
for key, value in student.items():
    print(key, ":", value)
\`\`\`

---

### Tips
- Dictionaries are **perfect for storing structured data**.  
- Keys can be **strings, numbers, or tuples**.  
- Use **.get(key)** to avoid errors if a key is missing:  
\`\`\`
print(student.get("salary", "Not found"))  # Not found
\`\`\`
`
  },


  {
    id: "conditions",
    title: "Conditions (if/elif/else)",
    content: `
### What are Conditions?
Conditions allow Python to **make decisions**.  
Your program can run certain code **only if a condition is True**.

---

### Syntax
\`\`\`
if condition:
    # runs if condition is True
elif another_condition:
    # runs if first condition is False but this is True
else:
    # runs if all conditions are False
\`\`\`

---

### Example
\`\`\`
x = 10

if x > 5:
    print("Big")
elif x == 5:
    print("Equal")
else:
    print("Small")
\`\`\`

**Output:**  
Big

---

### Notes
- **Indentation matters** – Python uses spaces to define which code belongs to the condition.  
- **Conditions must be True or False** – Python evaluates them to decide what to do.  

---

### Tips
- Use **if** for the first condition, **elif** for extra checks, and **else** as the default.  
- You can combine conditions using **and**, **or**, **not**:  
\`\`\`
if x > 5 and x < 15:
    print("x is between 5 and 15")
\`\`\`

Next, we can move on to **Loops (for/while)** in Python.`
  },


  {
    id: "loops",
    title: "Loops (for/while)",
    content: `
### What are Loops?
Loops are used to **repeat actions multiple times** without writing the same code again.  
Python has two main types: **for loop** and **while loop**.

---

### For Loop
The **for loop** repeats a block of code a fixed number of times.

\`\`\`
for i in range(5):
    print(i)
\`\`\`

**Output:**  
0  
1  
2  
3  
4

- **range(5)** generates numbers from 0 to 4.  
- The loop runs **5 times**.

---

### While Loop
The **while loop** repeats as long as a condition is True.

\`\`\`
x = 0
while x < 5:
    print(x)
    x += 1
\`\`\`

**Output:**  
0  
1  
2  
3  
4

- Increase or decrease a variable inside the loop to avoid **infinite loops**.  

---

### Tips
- Use loops to **avoid repeating code**.  
- You can **nest loops** (a loop inside another loop) for advanced tasks.  
- Combine loops with **conditions** to control the flow.

Next, we can move on to **Break, Continue, and Pass statements** in Python.`
  },



  {
    id: "break-continue-pass",
    title: "Break, Continue, Pass",
    content: `
### What are Break, Continue, and Pass?
These are **control statements** that help manage loops.

---

### Break
**Stops the loop immediately**, even if the condition is not finished.

\`\`\`
for i in range(5):
    if i == 3:
        break
    print(i)
\`\`\`

**Output:**  
0  
1  
2

---

### Continue
**Skips the current iteration** and moves to the next one.

\`\`\`
for i in range(5):
    if i == 3:
        continue
    print(i)
\`\`\`

**Output:**  
0  
1  
2  
4

---

### Pass
**Does nothing**, acts as a **placeholder** when code is required syntactically but you don’t want to execute anything.

\`\`\`
for i in range(5):
    if i == 3:
        pass
    print(i)
\`\`\`

**Output:**  
0  
1  
2  
3  
4

---

### Tips
- Use **break** to exit loops early.  
- Use **continue** to skip certain steps.  
- Use **pass** as a temporary placeholder when planning your code.

Next, we can move on to **Functions** in Python.`
  },


  {
    id: "functions",
    title: "Functions",
    content: `
### What are Functions?
Functions are **reusable blocks of code** that perform a specific task.  
They help make your code **clean, readable, and easy to maintain**.

---

### Creating a Function
\`\`\`
def greet(name):
    print("Hello", name)
\`\`\`

- **def** keyword is used to define a function.  
- **name** is a parameter (input) for the function.

---

### Using a Function
\`\`\`
greet("Amit")  # Output: Hello Amit
\`\`\`

- You can call the function as many times as needed.  

---

### Benefits of Functions
- **Reusability**: Write once, use many times.  
- **Readability**: Makes code easier to understand.  
- **Easier debugging**: Errors are easier to find inside a function.

---

### Tips
- Keep functions **short and focused**.  
- Use **meaningful names** for functions.  
- Functions can also **return values**, which we will see next in **Arguments & Return Values**.`
  },


  {
    id: "arguments-return",
    title: "Arguments & Return Values",
    content: `
### What are Arguments & Return Values?
Functions can **take inputs (arguments)** and **give outputs (return values)**.  
This makes functions more flexible and useful.

---

### Example: Function with Arguments
\`\`\`
def add(a, b):
    return a + b
\`\`\`

- **a, b** are **arguments** (inputs) to the function.  
- **return** sends the result back to the caller.

---

### Using the Function
\`\`\`
result = add(5, 10)
print(result)  # Output: 15
\`\`\`

- The function calculates the sum and returns it.  
- You can store the returned value in a variable.

---

### Notes
- **Arguments** = input values for the function.  
- **Return** = output value from the function.  
- Functions can have **multiple arguments** or **no arguments**.  
- If no **return** is used, the function returns **None** by default.

---

### Tips
- Always use **meaningful argument names**.  
- Use **return values** to pass results to other parts of your program.  
- Combine functions with loops and conditions for advanced tasks.
`
  },


  {
  id: "lambda-functions",
  title: "Lambda Functions",
  content: `
### What are Lambda Functions?
Lambda functions are **small, anonymous functions**.  
They are used for quick tasks without writing a full function using def.

---

### Syntax
\`\`\`
lambda arguments: expression
\`\`\`

- **arguments** → input values  
- **expression** → calculation or operation returned automatically

---

### Example
\`\`\`
square = lambda x: x * x
print(square(5))  # Output: 25
\`\`\`

- Here, **square** is a lambda function that calculates the square of a number.

---

### Notes
- Lambda functions can have **any number of arguments**, but only **one expression**.  
- They are mostly used when a function is needed **briefly**, e.g., inside **map(), filter(), or sort()**.

---

### Tips
- Use lambda functions for **short, simple operations**.  
- For complex logic, use regular **def functions**.  
- They make your code **clean and concise** for quick tasks.

`
},

  {
  id: "modules",
  title: "Modules",
  content: `
### What are Modules?
Modules are **Python files** that contain **functions, variables, or classes**.  
They help you **organize code** and **reuse it in multiple programs**.

---

### Using a Module
\`\`\`
import math
print(math.sqrt(16))  # Output: 4.0
\`\`\`

- **import math** → brings the math module into your program  
- **math.sqrt(16)** → calls the sqrt() function from the math module

---

### Benefits of Modules
- **Organize code** → keeps programs clean and manageable  
- **Reuse code** → use the same module in many programs  
- **Access built-in Python libraries** → math, random, os, sys, and more  

---

### Tips
- Use **import module_name** to include a module.  
- You can also import specific functions:  
\`\`\`
from math import sqrt
print(sqrt(16))  # Output: 4.0
\`\`\`
- You can create your **own modules** by saving Python code in a .py file.  

Next, we can move on to the **Math Module** for Python.`
},


  {
  id: "math-module",
  title: "Math Module",
  content: `
### What is the Math Module?
The **math module** is a built-in Python module that provides **mathematical functions**.  
You can use it to perform calculations quickly without writing complex code.

---

### Example
\`\`\`
import math

print(math.sqrt(16))   # 4.0 → square root
print(math.ceil(4.2))  # 5   → rounds up
print(math.floor(4.8)) # 4   → rounds down
print(math.pow(2, 3))  # 8   → 2 raised to power 3
print(math.pi)          # 3.141592653589793 → value of pi
\`\`\`

---

### Common Functions in Math Module
- **sqrt(x)** → square root of x  
- **ceil(x)** → rounds x up to nearest integer  
- **floor(x)** → rounds x down to nearest integer  
- **pow(x, y)** → x raised to the power y  
- **pi** → mathematical constant π  

---

### Tips
- Always **import math** before using functions.  
- Use math functions instead of writing your own for accurate and fast calculations.  
- Great for **school math problems, engineering calculations, and scientific tasks**.

Next, we can move on to the **Random Module** in Python.`
},


  {
  id: "random-module",
  title: "Random Module",
  content: `
### What is the Random Module?
The **random module** is a built-in Python module that helps generate **random numbers or choices**.  
It is very useful in **games, simulations, and experiments**.

---

### Example
\`\`\`
import random

# Generate a random number between 1 and 10
print(random.randint(1, 10))  

# Pick a random element from a list
print(random.choice([1, 2, 3]))  
\`\`\`

**Output (example):**  
7  
2

---

### Common Random Functions
- **randint(a, b)** → random integer between a and b  
- **choice(list)** → random element from a list  
- **random()** → random float between 0 and 1  
- **shuffle(list)** → randomly shuffles the list  

---

### Tips
- Always **import random** before using its functions.  
- Useful for **games**, like rolling dice or picking a random player.  
- Can also be used in **simulations** and testing code with random inputs.

Next, we can move on to **File Handling** in Python.`
},


  {
  id: "file-handling",
  title: "File Handling",
  content: `
### What is File Handling?
Python can **read from and write to files** on your computer.  
This is useful for saving data or reading information from files.

---

### Opening a File
\`\`\`
f = open("file.txt", "r")   # 'r' → read mode
content = f.read()          # read all content
f.close()                   # close the file
\`\`\`

---

### Writing to a File
\`\`\`
f = open("file.txt", "w")   # 'w' → write mode (overwrites)
f.write("Hello World")      
f.close()
\`\`\`

---

### File Modes
| Mode | Description |
|------|-------------|
| r    | Read (default) |
| w    | Write (overwrites) |
| a    | Append (add to file) |
| r+   | Read & Write |
| rb   | Read in binary mode |
| wb   | Write in binary mode |

---

### Tips
- Always **close the file** after reading or writing.  
- Use **'with open()'** to automatically close files:  
\`\`\`
with open("file.txt", "r") as f:
    content = f.read()
\`\`\`
- Use appropriate **modes** depending on your task.  

Next, we can move on to **Exception Handling** in Python.`
},


  {
  id: "exception-handling",
  title: "Exception Handling",
  content: `
### What is Exception Handling?
Exceptions are **errors that happen while a program is running**.  
Python stops the program if an error occurs unless we handle it.

---

### Try-Except Block
\`\`\`
try:
    x = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
\`\`\`

- **try** → code that might cause an error  
- **except** → code to run if an error occurs  

---

### Finally Block (Optional)
\`\`\`
try:
    x = 10 / 2
except ZeroDivisionError:
    print("Cannot divide by zero")
finally:
    print("This runs always")
\`\`\`

- **finally** block always executes, whether an error occurs or not.

---

### Tips
- Handle **common errors** like division by zero, file not found, etc.  
- Prevents your program from **crashing unexpectedly**.  
- You can have multiple except blocks for different error types.  
`
},

  {
  id: "json-python",
  title: "JSON in Python",
  content: `
### What is JSON?
JSON (JavaScript Object Notation) is a **format to store and exchange data**.  
Python can **read and write JSON** using the built-in **json module**.

---

### Example: Reading JSON
\`\`\`
import json

data = '{"name":"Amit","age":12}'   # JSON string
parsed = json.loads(data)           # convert JSON string to Python dictionary
print(parsed["name"])               # Output: Amit
\`\`\`

---

### Example: Writing JSON
\`\`\`
import json

python_dict = {"name": "Amit", "age": 12}
json_string = json.dumps(python_dict)   # convert Python dictionary to JSON string
print(json_string)                      # Output: '{"name": "Amit", "age": 12}'
\`\`\`

---

### Tips
- Use **json.loads()** to convert JSON string → Python object  
- Use **json.dumps()** to convert Python object → JSON string  
- Very useful for **web APIs, data storage, and exchanging information**  

Next, we can move on to **Python Comments**.`
},

  {
    id: "comments",
    title: "Python Comments",
    content: `Comments are notes in code.

Single-line:
    # This is a comment

Multi-line:
    """
    This is a
    multi-line comment
    """

Comments do not affect code execution.`
  },
  {
  id: "indentation",
  title: "Python Indentation",
  content: `
### What is Indentation?
Python uses **spaces or tabs** to define **blocks of code**.  
Indentation is **very important** because it tells Python which statements belong together.

---

### Example
\`\`\`
if 5 > 2:
    print("Yes")   # this line is inside the if block
print("Done")       # this line is outside the if block
\`\`\`

---

### Wrong Indentation
\`\`\`
if 5 > 2:
print("Yes")  # ❌ SyntaxError: expected an indented block
\`\`\`

---

### Tips
- Use **4 spaces** for each indentation level (recommended)  
- **Do not mix tabs and spaces**  
- Always keep indentation **consistent** to avoid errors
`
},

 {
  id: "type-checking",
  title: "Type Checking",
  content: `
### What is Type Checking?
In Python, every value has a **data type**.  
You can check the type of a variable using the **type()** function.

---

### Example
\`\`\`
x = 10
print(type(x))   # <class 'int'>

name = "Amit"
print(type(name))  # <class 'str'>
\`\`\`

---

### Tips
- Use type checking to **understand what kind of data you are working with**  
- Helpful to **debug errors** and ensure your program behaves correctly  
- Works for all Python data types like int, float, str, bool, list, tuple, dict, etc.
`
},
  {
  id: "keywords",
  title: "Python Keywords",
  content: `
### What are Keywords?
Keywords are **special reserved words** in Python that **have a predefined meaning**.  
You **cannot use keywords as variable names**.

---

### Examples of Keywords
\`\`\`
if, else, elif, while, for, break, continue, pass
import, from, as, def, return, lambda, True, False, None
\`\`\`

---

### Tips
- Use keywords **only as intended by Python**  
- Avoid using them for **variable names** to prevent errors  
- Use **help("keywords")** in Python to see a full list of keywords
`
},

  {
  id: "constants",
  title: "Python Constants",
  content: `
### What are Constants?
Constants are **values that do not change** throughout the program.  

Python does **not have built-in constants**, but by **convention**, we use **ALL_CAPS** for constant names.

---

### Examples
\`\`\`
PI = 3.14
GRAVITY = 9.8
MAX_SCORE = 100
\`\`\`

---

### Tips
- Use **ALL_CAPS** to indicate a constant  
- Avoid changing the value of a constant after defining it  
- Helps make your code **readable** and **maintainable**
`
},
  {
  id: "best-practices",
  title: "Python Best Practices",
  content: `
### Python Best Practices
Following good practices helps you **write clean, readable, and maintainable code**.

---

### Key Practices

1. **Meaningful variable names**  
   Use names that explain the purpose, e.g., \`age\`, \`student_name\`.

2. **Follow PEP8 style guide**  
   Keep your code consistent in **indentation, spacing, and naming**.

3. **Readable and indented code**  
   Proper indentation makes code easy to read.

4. **Comment important sections**  
   Explain what your code does for yourself and others.

5. **Avoid redundant code**  
   Use **functions** to reuse code instead of repeating it.

6. **Test your code often**  
   Run your code frequently to catch errors early.

7. **Use virtual environments for projects**  
   Keeps project dependencies **isolated** and organized.
`
}
];

function basics() {
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
          <h1 className="sidebar-title">JavaScript Basics</h1>
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

export default basics;
