import React, { useState } from "react";
import "../python_css/Basics.css";

const topics = [
  {
    id: "execution-context",
    title: "Execution Context & Call Stack",
    sections: [
      {
        type: "text",
        content: "JavaScript uses an execution environment called the Execution Context to run code. Understanding this is the foundation of how JS works behind the scenes. It explains why hoisting happens, how functions run, and how the call stack manages execution."
      },

      {
        type: "heading",
        content: "What is an Execution Context?"
      },
      {
        type: "text",
        content: "It is a box or container where JavaScript code is evaluated and executed. Every time a JS file runs or a function is called, a new execution context is created."
      },

      {
        type: "heading",
        content: "Types of Execution Context"
      },
      {
        type: "list",
        items: [
          "Global Execution Context (GEC) – created when a JS program starts.",
          "Function Execution Context (FEC) – created whenever a function is called.",
          "Eval Execution Context – created when eval() is used (rare and not recommended)."
        ]
      },

      {
        type: "heading",
        content: "Two Phases Inside Every Execution Context"
      },
      {
        type: "list",
        items: [
          "1. Memory Creation Phase (Creation Phase)",
          "2. Code Execution Phase"
        ]
      },

      {
        type: "heading",
        content: "1. Memory Creation Phase"
      },
      {
        type: "text",
        content: "In this phase, JavaScript allocates memory for variables and functions before running the code line-by-line. This is why hoisting exists."
      },
      {
        type: "list",
        items: [
          "Variables declared with var are assigned undefined.",
          "Variables declared with let and const are hoisted but kept in the Temporal Dead Zone (TDZ).",
          "Functions declared using function keyword are stored entirely in memory."
        ]
      },
      {
        type: "code",
        content: `console.log(a); // undefined\nconsole.log(b); // Error (TDZ)\nvar a = 10;\nlet b = 20;`
      },

      {
        type: "heading",
        content: "2. Code Execution Phase"
      },
      {
        type: "text",
        content: "JavaScript runs the code line by line and assigns actual values to variables. It also executes function calls and expressions."
      },

      {
        type: "heading",
        content: "Global Execution Context (GEC)"
      },
      {
        type: "text",
        content: "This is the base execution context. It is created only once. It also sets up the global object (window in browsers, global in Node.js) and the 'this' keyword."
      },

      {
        type: "heading",
        content: "Function Execution Context (FEC)"
      },
      {
        type: "text",
        content: "Created every time a function is called. It has its own memory creation phase and execution phase. Also has an arguments object and local variables."
      },
      {
        type: "code",
        content: `function add(a, b) {\n  return a + b;\n}\nadd(5, 10);`
      },

      {
        type: "heading",
        content: "Call Stack"
      },
      {
        type: "text",
        content: "JavaScript uses a stack (Last In, First Out) to manage execution contexts. The global context is at the bottom, and each function call creates a new context pushed on top."
      },
      {
        type: "code",
        content: `function a(){ console.log("A"); }\nfunction b(){ a(); console.log("B"); }\nb();\n\n// Call Stack Flow:\n// push(GEC)\n// push(b())\n// push(a())\n// pop(a())\n// pop(b())\n// end`
      },

      {
        type: "heading",
        content: "Why Understanding Execution Context Matters?"
      },
      {
        type: "list",
        items: [
          "It explains hoisting clearly.",
          "Helps understand how 'this' works.",
          "Explains why let/const behave differently from var.",
          "Helps debug asynchronous behavior.",
          "Makes understanding closures easier."
        ]
      },

      {
        type: "heading",
        content: "Interview-Level Example"
      },
      {
        type: "code",
        content: `console.log(x);\nvar x = 10;\nfunction test() {\n  console.log(x);\n  var x = 20;\n}\ntest();\n\n// Output:\n// undefined  (global x hoisted)\n// undefined  (local x hoisted inside test)`
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What are the two phases of an execution context?",
          "Q2. Why does JavaScript show undefined for var variables before initialization?",
          "Q3. What is the Temporal Dead Zone (TDZ)?",
          "Q4. Explain the difference between GEC and FEC with an example.",
          "Q5. Describe how the call stack works when nested functions are executed.",
          "Q6. Predict the output:\n\nconsole.log(a);\nvar a = 5;\nfunction fun(){ console.log(a); var a = 10; }\nfun();",
          "Q7. Why is understanding the execution context important for understanding closures?"
        ]
      }
    ]
  },

  {
    id: "hoisting",
    title: "Hoisting",
    sections: [
      {
        type: "text",
        content: "Hoisting is one of the most misunderstood concepts in JavaScript. It is the default behavior where variable and function declarations are moved to the top of their scope during the memory creation phase of the execution context. Understanding hoisting helps you avoid bugs and write predictable code."
      },

      {
        type: "heading",
        content: "What is Hoisting?"
      },
      {
        type: "text",
        content: "Before executing any code, JavaScript scans the entire scope and allocates memory for variable and function declarations. This makes it possible to call functions before they are written and reference variables before they are assigned (with limitations)."
      },

      {
        type: "heading",
        content: "How Variables Are Hoisted"
      },
      {
        type: "list",
        items: [
          "var → Hoisted and initialized with undefined",
          "let → Hoisted but not initialized (kept in the TDZ)",
          "const → Hoisted but not initialized (must be assigned immediately)"
        ]
      },

      {
        type: "heading",
        content: "Hoisting with var"
      },
      {
        type: "code",
        content: `console.log(a); // undefined\nvar a = 10;`
      },
      {
        type: "text",
        content: "Variables declared with var are moved to the top and assigned undefined during memory creation. That is why you don't get an error."
      },

      {
        type: "heading",
        content: "Hoisting with let and const (Temporal Dead Zone)"
      },
      {
        type: "code",
        content: `console.log(b); // ReferenceError\nlet b = 20;`
      },
      {
        type: "text",
        content: "The variable exists in memory but cannot be accessed until execution reaches its declaration. This restricted zone is the Temporal Dead Zone (TDZ)."
      },

      {
        type: "heading",
        content: "Function Hoisting"
      },
      {
        type: "list",
        items: [
          "Function Declarations → Fully hoisted (can be called before defined)",
          "Function Expressions → Not hoisted like declarations",
          "Arrow Functions → Behave like let/const variables (not hoisted)"
        ]
      },

      {
        type: "heading",
        content: "Function Declaration Hoisting"
      },
      {
        type: "code",
        content: `greet(); // Hello\n\nfunction greet() {\n  console.log("Hello");\n}`
      },
      {
        type: "text",
        content: "Function declarations are stored entirely in memory during the memory phase, so they can be called before appearing in the code."
      },

      {
        type: "heading",
        content: "Function Expression Hoisting"
      },
      {
        type: "code",
        content: `sayHello(); // TypeError or ReferenceError\n\nvar sayHello = function() {\n  console.log("Hello");\n};`
      },
      {
        type: "text",
        content: "Here, sayHello is hoisted as undefined (because of var), but the function is not assigned yet. Calling it before assignment leads to an error."
      },

      {
        type: "heading",
        content: "Arrow Function Hoisting"
      },
      {
        type: "code",
        content: `hello(); // ReferenceError\n\nlet hello = () => console.log("Hello");`
      },
      {
        type: "text",
        content: "Arrow functions using let or const remain in TDZ until the code reaches them."
      },

      {
        type: "heading",
        content: "Why Does Hoisting Happen?"
      },
      {
        type: "list",
        items: [
          "JavaScript needs to allocate memory before executing code.",
          "Execution Context creation phase handles all declarations first.",
          "It allows functions to be used before they appear in the code (useful in modular design)."
        ]
      },

      {
        type: "heading",
        content: "Real-Life Example of Hoisting Issue"
      },
      {
        type: "code",
        content: `var x = 5;\nif (true) {\n  console.log(x); // undefined (var is function-scoped)\n  var x = 10;\n}\nconsole.log(x); // 10`
      },
      {
        type: "text",
        content: "This happens because var gets hoisted to the function/global scope, not the block."
      },

      {
        type: "heading",
        content: "Hoisting in Functions Inside Functions"
      },
      {
        type: "code",
        content: `function outer() {\n  console.log(a); // undefined\n  var a = 20;\n\n  function inner() {\n    console.log(a); // 20 (from outer scope)\n  }\n  inner();\n}\nouter();`
      },

      {
        type: "heading",
        content: "Summary Table"
      },
      {
        type: "list",
        items: [
          "var → Hoisted, initialized as undefined",
          "let → Hoisted, not initialized (TDZ)",
          "const → Hoisted, not initialized, must have a value",
          "function declaration → Fully hoisted",
          "function expression (var) → hoisted as undefined",
          "arrow function → not accessible before initialization"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What is hoisting in JavaScript and why does it occur?",
          "Q2. Explain the difference between hoisting of var vs let/const.",
          "Q3. What is the Temporal Dead Zone (TDZ)?",
          "Q4. Predict the output:\n\nconsole.log(a);\nlet a = 10;",
          "Q5. Predict the output:\n\nsay();\nvar say = function() {\n  console.log('Hello');\n};",
          "Q6. Predict the output:\n\ngreet();\nfunction greet() { console.log('Hi'); }",
          "Q7. Why are arrow functions not hoisted like normal functions?",
          "Q8. Explain how hoisting relates to the Execution Context."
        ]
      }
    ]
  },

  {
    id: "scope",
    title: "Scope",
    sections: [
      {
        type: "text",
        content: "Scope determines where variables and functions are accessible in your code. Understanding scope is essential for writing clean, bug-free, and memory-efficient JavaScript. JavaScript uses lexical scoping, meaning scope is determined by where code is written, not where it is executed."
      },

      {
        type: "heading",
        content: "What is Scope?"
      },
      {
        type: "text",
        content: "Scope defines the current context of execution — the set of variables, functions, and objects that you can access. When you try to use a variable, JavaScript checks whether it exists within the current scope and, if not, looks outward."
      },

      {
        type: "heading",
        content: "Types of Scope in JavaScript"
      },
      {
        type: "list",
        items: [
          "Global Scope",
          "Function Scope",
          "Block Scope",
          "Lexical Scope"
        ]
      },

      {
        type: "heading",
        content: "Global Scope"
      },
      {
        type: "text",
        content: "A variable is in the global scope if it is declared outside of all functions and blocks. It can be accessed from anywhere in the program."
      },
      {
        type: "code",
        content: `var x = 10;\nfunction test() {\n  console.log(x); // 10\n}\ntest();`
      },

      {
        type: "heading",
        content: "Function Scope"
      },
      {
        type: "text",
        content: "Variables declared inside a function (using var, let, or const) exist only within that function. They cannot be accessed outside the function."
      },
      {
        type: "code",
        content: `function demo() {\n  var a = 20;\n  console.log(a); // 20\n}\nconsole.log(a); // Error`
      },

      {
        type: "heading",
        content: "Block Scope"
      },
      {
        type: "text",
        content: "Variables declared using let and const inside a block {} are only accessible within that block. This is useful for reducing accidental variable leakage."
      },
      {
        type: "code",
        content: `{\n  let a = 5;\n  const b = 10;\n}\nconsole.log(a); // Error\nconsole.log(b); // Error`
      },

      {
        type: "heading",
        content: "var is NOT Block Scoped"
      },
      {
        type: "code",
        content: `if (true) {\n  var x = 100;\n}\nconsole.log(x); // 100 (var ignores block scope)`
      },
      {
        type: "text",
        content: "This behavior of var is a common source of bugs, which is why let and const are preferred."
      },

      {
        type: "heading",
        content: "Lexical Scope (Static Scope)"
      },
      {
        type: "text",
        content: "Lexical scope means a function's scope is determined by where it is written in code, not where it is called. Inner functions can access variables from outer functions."
      },
      {
        type: "code",
        content: `function outer() {\n  let x = 10;\n  function inner() {\n    console.log(x); // 10\n  }\n  inner();\n}\nouter();`
      },

      {
        type: "heading",
        content: "Scope Chain"
      },
      {
        type: "text",
        content: "When a variable is not found in the current scope, JavaScript moves outward step-by-step until it finds the variable or reaches global scope. This chain of searching is called the scope chain."
      },
      {
        type: "code",
        content: `let a = 1;\nfunction first() {\n  let b = 2;\n  function second() {\n    let c = 3;\n    console.log(a, b, c); // 1 2 3\n  }\n  second();\n}\nfirst();`
      },

      {
        type: "heading",
        content: "Shadowing"
      },
      {
        type: "text",
        content: "Shadowing occurs when a variable in an inner scope has the same name as one in an outer scope. The inner variable temporarily 'shadows' the outer one."
      },
      {
        type: "code",
        content: `let x = 10;\nfunction test() {\n  let x = 20;\n  console.log(x); // 20 (inner x shadows outer x)\n}\ntest();\nconsole.log(x); // 10`
      },

      {
        type: "heading",
        content: "Illegal Shadowing"
      },
      {
        type: "text",
        content: "Shadowing becomes illegal when var shadows a let/const variable in the same scope because var breaks block rules."
      },
      {
        type: "code",
        content: `let x = 10;\n{\n  var x = 20; // Error\n}`
      },

      {
        type: "heading",
        content: "Real-World Example of Scope Usage"
      },
      {
        type: "code",
        content: `function createUser(name) {\n  const prefix = 'User:';\n  return prefix + name; // Using lexical variables\n}\nconsole.log(createUser('Rakshit'));`
      },
      {
        type: "text",
        content: "Here, prefix remains accessible inside the returned value because of lexical scoping."
      },

      {
        type: "heading",
        content: "Why Understanding Scope Matters?"
      },
      {
        type: "list",
        items: [
          "Helps avoid variable conflicts",
          "Prevents memory leaks",
          "Improves debugging skills",
          "Makes closures easier to understand",
          "Helps write modular, cleaner code"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What is the difference between global scope and function scope?",
          "Q2. Explain why var is not block-scoped with an example.",
          "Q3. What is lexical scope? Give a real code example.",
          "Q4. Predict the output:\n\nlet a = 5;\nfunction test() {\n  console.log(a);\n  let a = 10;\n}\ntest();",
          "Q5. What is the scope chain in JavaScript?",
          "Q6. What is variable shadowing? When does it become illegal?",
          "Q7. Predict the output:\n\nvar x = 1;\n{\n  let x = 2;\n  console.log(x);\n}\nconsole.log(x);",
          "Q8. How does scope help in understanding closures?"
        ]
      }
    ]
  },
  {
    id: "closures",
    title: "Closures",
    sections: [
      {
        type: "text",
        content: "Closures are one of the most important and powerful concepts in JavaScript. A closure is formed when an inner function remembers and accesses variables from its outer function—even after the outer function has finished executing. Closures enable data privacy, state management, and powerful programming patterns used in real-world applications."
      },

      {
        type: "heading",
        content: "What is a Closure?"
      },
      {
        type: "text",
        content: "A closure is created when a function (inner function) retains access to its lexical scope (variables from the outer function) even after the outer function has returned. This works because of JavaScript’s lexical scoping and how the execution context stores references."
      },

      {
        type: "heading",
        content: "Simple Example of Closure"
      },
      {
        type: "code",
        content: `function outer() {\n  let x = 10;\n  function inner() {\n    console.log(x);\n  }\n  return inner;\n}\n\nconst fn = outer();\nfn(); // 10`
      },
      {
        type: "text",
        content: "Here, inner() still remembers x, even though outer() has finished executing."
      },

      {
        type: "heading",
        content: "How Closures Work Internally"
      },
      {
        type: "list",
        items: [
          "When a function is created, it keeps a reference to its lexical environment.",
          "JavaScript does NOT copy the values — it remembers the variables.",
          "Even after the outer function finishes, its variables remain in memory if they are referenced by inner functions."
        ]
      },

      {
        type: "heading",
        content: "Closures for Data Privacy (Encapsulation)"
      },
      {
        type: "code",
        content: `function counter() {\n  let count = 0;\n  return function() {\n    count++;\n    console.log(count);\n  };\n}\n\nconst c1 = counter();\nc1(); // 1\nc1(); // 2`
      },
      {
        type: "text",
        content: "The variable count is private. It cannot be modified from outside. Only the returned function can access or change it. This is how secure data can be stored inside functions."
      },

      {
        type: "heading",
        content: "Closures in Real Applications"
      },
      {
        type: "list",
        items: [
          "Used in event listeners to remember previous values",
          "Helps create private variables",
          "Used in functions like once(), debounce(), throttle()",
          "Used in React’s functional components to preserve state",
          "Used in module design patterns"
        ]
      },

      {
        type: "heading",
        content: "Closures Fixing setTimeout in Loops"
      },
      {
        type: "code",
        content: `for (var i = 1; i <= 3; i++) {\n  setTimeout(function() {\n    console.log(i);\n  }, 1000);\n}\n// Output: 4 4 4 (because var is not block scoped)`

      },
      {
        type: "text",
        content: "Using a closure fixes this problem."
      },
      {
        type: "code",
        content: `for (var i = 1; i <= 3; i++) {\n  (function(n) {\n    setTimeout(function() {\n      console.log(n);\n    }, 1000);\n  })(i);\n}\n// Output: 1 2 3`
      },

      {
        type: "heading",
        content: "Closures as Function Factories"
      },
      {
        type: "code",
        content: `function makeMultiplier(num) {\n  return function(x) {\n    return num * x;\n  };\n}\n\nconst double = makeMultiplier(2);\nconst triple = makeMultiplier(3);\n\nconsole.log(double(5)); // 10\nconsole.log(triple(5)); // 15`
      },
      {
        type: "text",
        content: "Each returned function remembers a different value of num."
      },

      {
        type: "heading",
        content: "Closures with Event Listeners"
      },
      {
        type: "code",
        content: `function setup() {\n  let count = 0;\n  document.getElementById("btn").addEventListener("click", function() {\n    count++;\n    console.log("Clicked", count, "times");\n  });\n}\nsetup();`
      },
      {
        type: "text",
        content: "Even after setup() finishes, the event listener still remembers count."
      },

      {
        type: "heading",
        content: "Memory Leak Warning"
      },
      {
        type: "text",
        content: "Closures can sometimes cause memory leaks because they keep variables in memory even after they are no longer needed. Developers must be careful when creating closures inside loops or holding references unnecessarily."
      },

      {
        type: "heading",
        content: "Advantages of Closures"
      },
      {
        type: "list",
        items: [
          "Provide data privacy",
          "Help maintain state between function calls",
          "Allow creation of factory functions",
          "Enable powerful functional programming patterns"
        ]
      },

      {
        type: "heading",
        content: "Disadvantages of Closures"
      },
      {
        type: "list",
        items: [
          "May cause memory leaks if not used properly",
          "Hard to debug for beginners",
          "Overuse can make code confusing"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What is a closure in JavaScript? Explain in simple words.",
          "Q2. Why do closures exist? How are they related to lexical scoping?",
          "Q3. Predict the output:\n\nfunction x() {\n  let a = 5;\n  return function() {\n    console.log(a);\n  };\n}\nconst y = x();\ny();",
          "Q4. How do closures help in creating private variables?",
          "Q5. Predict the output:\n\nfor (var i = 1; i <= 3; i++) {\n  setTimeout(() => console.log(i), 1000);\n}",
          "Q6. Rewrite Q5 using closures so that output is 1 2 3.",
          "Q7. Give a real-world example where closures can be used in web development.",
          "Q8. Explain why closures can sometimes lead to memory leaks."
        ]
      }
    ]
  },
  {
    id: "this-keyword",
    title: "The this Keyword",
    sections: [
      {
        type: "text",
        content: "`this` is one of the most misunderstood concepts in JavaScript because its value depends on HOW a function is called, not where it is written. Understanding `this` is essential for object-oriented programming, event handling, and working with classes in JavaScript."
      },

      {
        type: "heading",
        content: "What is this?"
      },
      {
        type: "text",
        content: "`this` refers to the object that is executing the current function. Its value is determined at runtime based on the calling context."
      },

      {
        type: "heading",
        content: "Rules for this in JavaScript"
      },
      {
        type: "list",
        items: [
          "`this` in Global Scope",
          "`this` inside Functions",
          "`this` inside Objects (Methods)",
          "Arrow Function `this`",
          "`this` with call(), apply(), bind()",
          "`this` inside Classes",
          "`this` in Event Listeners"
        ]
      },

      {
        type: "heading",
        content: "1. this in Global Scope"
      },
      {
        type: "text",
        content: "In global scope, `this` refers to the global object. In browsers it is `window`, in Node.js it is `{}` or the global object."
      },
      {
        type: "code",
        content: `console.log(this); // window (browser)`
      },

      {
        type: "heading",
        content: "2. this Inside a Regular Function"
      },
      {
        type: "text",
        content: "`this` depends on how the function is called. By default (non-strict mode), regular functions use the global object as `this`."
      },
      {
        type: "code",
        content: `function show() {\n  console.log(this);\n}\nshow(); // window (in browser)`
      },

      {
        type: "heading",
        content: "Strict Mode Changes this"
      },
      {
        type: "code",
        content: `"use strict";\nfunction test() {\n  console.log(this);\n}\ntest(); // undefined`
      },

      {
        type: "heading",
        content: "3. this Inside an Object (Method)"
      },
      {
        type: "text",
        content: "When a function is called using an object, `this` refers to THAT object."
      },
      {
        type: "code",
        content: `const user = {\n  name: "Rakshit",\n  greet() {\n    console.log(this.name);\n  }\n};\nuser.greet(); // Rakshit`
      },

      {
        type: "heading",
        content: "4. Losing this Reference"
      },
      {
        type: "text",
        content: "When a method is stored in a variable, its `this` is lost (defaults to global object or undefined)."
      },
      {
        type: "code",
        content: `const obj = {\n  name: "JS",\n  show() { console.log(this.name); }\n};\n\nconst fn = obj.show;\nfn(); // undefined`
      },

      {
        type: "heading",
        content: "5. Arrow Function this"
      },
      {
        type: "text",
        content: "Arrow functions do NOT have their own `this`. They take `this` from their surrounding (lexical) scope. This makes them ideal for callbacks."
      },
      {
        type: "code",
        content: `const obj = {\n  name: "JavaScript",\n  show: () => {\n    console.log(this.name);\n  }\n};\nobj.show(); // undefined (this → global)`
      },
      {
        type: "text",
        content: "Arrow functions should NOT be used as object methods because their `this` does not point to the object."
      },

      {
        type: "heading",
        content: "Correct Use of Arrow Function this"
      },
      {
        type: "code",
        content: `function Person() {\n  this.age = 20;\n  setTimeout(() => {\n    console.log(this.age); // 20 (inherits from Person)\n  }, 1000);\n}\nnew Person();`
      },

      {
        type: "heading",
        content: "6. call(), apply(), bind()"
      },
      {
        type: "text",
        content: "These methods allow you to manually set the value of `this`."
      },

      {
        type: "heading",
        content: "call()"
      },
      {
        type: "code",
        content: `function greet(age) {\n  console.log(this.name, age);\n}\n\ngreet.call({ name: "Amit" }, 21);`
      },

      {
        type: "heading",
        content: "apply()"
      },
      {
        type: "code",
        content: `greet.apply({ name: "Ria" }, [25]);`
      },

      {
        type: "heading",
        content: "bind()"
      },
      {
        type: "code",
        content: `const fn = greet.bind({ name: "John" }, 30);\nfn();`
      },
      {
        type: "text",
        content: "bind() returns a NEW function with permanently bound `this`."
      },

      {
        type: "heading",
        content: "7. this Inside a Class"
      },
      {
        type: "code",
        content: `class User {\n  constructor(name) {\n    this.name = name;\n  }\n  show() {\n    console.log(this.name);\n  }\n}\n\nconst u = new User("Rakshit");\nu.show(); // Rakshit`
      },

      {
        type: "heading",
        content: "8. this in Event Listeners"
      },
      {
        type: "text",
        content: "Inside event listeners, `this` refers to the HTML element that received the event."
      },
      {
        type: "code",
        content: `document.getElementById("btn").addEventListener("click", function() {\n  console.log(this); // <button>\n});`
      },
      {
        type: "text",
        content: "Arrow functions DO NOT bind `this` to the element."
      },
      {
        type: "code",
        content: `document.getElementById("btn").addEventListener("click", () => {\n  console.log(this); // window\n});`
      },

      {
        type: "heading",
        content: "Summary Table"
      },
      {
        type: "list",
        items: [
          "`this` in global scope → global object",
          "`this` in regular function → depends on caller",
          "`this` in method → object before dot",
          "Arrow function → inherits from outer scope",
          "call/apply/bind → manually set this",
          "this in classes → instance of the class",
          "this in events → element that triggered event"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What determines the value of `this` in JavaScript?",
          "Q2. Why do arrow functions not have their own `this`?",
          "Q3. Predict the output:\n\nconst obj = { name: 'A', show() { console.log(this.name); } };\nconst fn = obj.show;\nfn();",
          "Q4. Predict the output:\n\nfunction test() {\n  console.log(this);\n}\ntest();",
          "Q5. How do call(), apply(), and bind() differ?",
          "Q6. Why should arrow functions not be used as object methods?",
          "Q7. Predict the output:\n\nclass Car {\n  constructor(name) {\n    this.name = name;\n  }\n  show = () => console.log(this.name);\n}\nconst c = new Car('BMW');\nsetTimeout(c.show, 500);",
          "Q8. How does this behave inside event listeners?"
        ]
      }
    ]
  },
  {
    id: "advanced-arrays",
    title: "Advanced Arrays",
    sections: [
      {
        type: "text",
        content: "Arrays in JavaScript are extremely powerful. They come with built-in higher-order functions (HOFs) that make data manipulation easier, cleaner, and more efficient. These methods help avoid loops and enable a functional programming style used in modern development."
      },

      {
        type: "heading",
        content: "What Are Higher-Order Functions?"
      },
      {
        type: "text",
        content: "Higher-order functions are functions that accept other functions as arguments or return functions. Array methods like map(), filter(), and reduce() are built-in higher-order functions."
      },

      {
        type: "heading",
        content: "Common Advanced Array Methods"
      },
      {
        type: "list",
        items: [
          "map() – transform elements",
          "filter() – select elements based on condition",
          "reduce() – reduce array to a single value",
          "some() – check if any item matches condition",
          "every() – check if all items match condition",
          "find() – return the first matching element",
          "findIndex() – return the index of first matching element",
          "sort() – sort values (with custom compare functions)"
        ]
      },

      {
        type: "heading",
        content: "map() – Transformation"
      },
      {
        type: "text",
        content: "map() creates a NEW array by applying a function to each element. It does NOT change the original array."
      },
      {
        type: "code",
        content: `const nums = [1, 2, 3];\nconst squares = nums.map(n => n * 2);\nconsole.log(squares); // [2, 4, 6]`
      },

      {
        type: "heading",
        content: "filter() – Select Based on Condition"
      },
      {
        type: "text",
        content: "filter() creates a NEW array containing elements that meet a condition."
      },
      {
        type: "code",
        content: `const nums = [10, 20, 30, 40];\nconst result = nums.filter(n => n > 20);\nconsole.log(result); // [30, 40]`
      },

      {
        type: "heading",
        content: "reduce() – Reduce to a Single Value"
      },
      {
        type: "text",
        content: "reduce() processes the array and returns a single output (sum, product, object, etc.)."
      },
      {
        type: "code",
        content: `const nums = [1, 2, 3, 4];\nconst sum = nums.reduce((acc, curr) => acc + curr, 0);\nconsole.log(sum); // 10`
      },

      {
        type: "heading",
        content: "some() – At Least One Match?"
      },
      {
        type: "code",
        content: `const scores = [45, 90, 75];\nconsole.log(scores.some(s => s > 80)); // true`
      },

      {
        type: "heading",
        content: "every() – All Must Match"
      },
      {
        type: "code",
        content: `const marks = [80, 85, 90];\nconsole.log(marks.every(m => m >= 80)); // true`
      },

      {
        type: "heading",
        content: "find() – Get First Matching Element"
      },
      {
        type: "code",
        content: `const users = [\n  { id: 1, name: 'Amit' },\n  { id: 2, name: 'Rakshit' }\n];\n\nconst user = users.find(u => u.id === 2);\nconsole.log(user.name); // Rakshit`
      },

      {
        type: "heading",
        content: "findIndex() – Get Index of First Matching Element"
      },
      {
        type: "code",
        content: `const nums = [10, 20, 30];\nconsole.log(nums.findIndex(n => n === 20)); // 1`
      },

      {
        type: "heading",
        content: "sort() – Sorting Arrays"
      },
      {
        type: "text",
        content: "sort() sorts values lexicographically by default, which causes issues with numbers."
      },
      {
        type: "code",
        content: `const arr = [10, 5, 40, 25];\nconsole.log(arr.sort()); // [10, 25, 40, 5] (WRONG for numbers)`
      },
      {
        type: "heading",
        content: "Correct Sorting with Compare Function"
      },
      {
        type: "code",
        content: `const arr = [10, 5, 40, 25];\narr.sort((a, b) => a - b);\nconsole.log(arr); // [5, 10, 25, 40]`
      },

      {
        type: "heading",
        content: "Chaining Array Methods"
      },
      {
        type: "code",
        content: `const nums = [1, 2, 3, 4, 5];\nconst result = nums\n  .filter(n => n % 2 === 0)\n  .map(n => n * 10)\n  .reduce((a, b) => a + b, 0);\n\nconsole.log(result); // 60`
      },

      {
        type: "heading",
        content: "Arrays and Immutability"
      },
      {
        type: "list",
        items: [
          "map(), filter(), reduce() → return new arrays",
          "push(), pop(), splice() → mutate original array",
          "Prefer non-mutating methods in React and functional programming"
        ]
      },

      {
        type: "heading",
        content: "Real-World Uses of Advanced Arrays"
      },
      {
        type: "list",
        items: [
          "Filtering API data (products, users, posts)",
          "Transforming database responses",
          "Building dashboards (map + reduce)",
          "Search functionality (filter + find)",
          "Sorting e-commerce products",
          "Processing financial data"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What is a higher-order function? Give two examples from arrays.",
          "Q2. What is the difference between map() and forEach()?",
          "Q3. Predict the output:\n\n[1, 2, 3].map(n => n * n)",
          "Q4. Write a filter() function to get even numbers from an array.",
          "Q5. What does reduce() return? Give an example.",
          "Q6. Predict the output:\n\n[10, 5, 2].sort()",
          "Q7. Rewrite Q6 using a correct compare function.",
          "Q8. How does find() differ from filter()?",
          "Q9. Solve:\n\nUse chaining to double all even numbers in [2, 3, 6, 7, 8] and return their sum."
        ]
      }
    ]
  },
  {
    id: "advanced-objects",
    title: "Advanced Objects",
    sections: [
      {
        type: "text",
        content: "Objects are the backbone of JavaScript. They allow you to structure data, build complex systems, and use modern features like destructuring, spread/rest, property descriptors, and immutability. Understanding advanced object concepts is essential for backend, React, Node.js, and modern JS development."
      },

      {
        type: "heading",
        content: "Object Destructuring"
      },
      {
        type: "text",
        content: "Destructuring allows you to extract values from objects into variables in a clean and readable way."
      },
      {
        type: "code",
        content: `const user = { name: 'Rakshit', age: 21 };\nconst { name, age } = user;\nconsole.log(name, age); // Rakshit 21`
      },

      {
        type: "heading",
        content: "Nested Object Destructuring"
      },
      {
        type: "code",
        content: `const person = {\n  name: 'Amit',\n  address: { city: 'Delhi', pincode: 110001 }\n};\n\nconst { address: { city } } = person;\nconsole.log(city); // Delhi`
      },

      {
        type: "heading",
        content: "Array Destructuring"
      },
      {
        type: "code",
        content: `const arr = [10, 20, 30];\nconst [a, b] = arr;\nconsole.log(a, b); // 10 20`
      },

      {
        type: "heading",
        content: "Rest Operator (...)"
      },
      {
        type: "text",
        content: "Rest collects the remaining properties into another object or array."
      },
      {
        type: "code",
        content: `const user = { name: 'John', age: 25, city: 'Mumbai' };\nconst { name, ...rest } = user;\nconsole.log(rest); // { age: 25, city: 'Mumbai' }`
      },

      {
        type: "heading",
        content: "Spread Operator (...)"
      },
      {
        type: "text",
        content: "Spread expands the elements of arrays or objects. Commonly used for cloning or merging."
      },
      {
        type: "code",
        content: `const obj1 = { a: 1, b: 2 };\nconst obj2 = { ...obj1, c: 3 };\nconsole.log(obj2); // { a: 1, b: 2, c: 3 }`
      },

      {
        type: "heading",
        content: "Object.freeze()"
      },
      {
        type: "text",
        content: "Freeze makes an object immutable — you cannot add, remove, or modify properties."
      },
      {
        type: "code",
        content: `const obj = { a: 10 };\nObject.freeze(obj);\nobj.a = 20;\nconsole.log(obj.a); // 10`
      },

      {
        type: "heading",
        content: "Object.seal()"
      },
      {
        type: "text",
        content: "Seal allows modifying existing properties but not adding or deleting new ones."
      },
      {
        type: "code",
        content: `const obj = { a: 10 };\nObject.seal(obj);\nobj.a = 20;  // allowed\nobj.b = 30;  // not allowed\nconsole.log(obj); // { a: 20 }`
      },

      {
        type: "heading",
        content: "Property Attributes"
      },
      {
        type: "text",
        content: "Each property in an object has a descriptor that defines three main attributes:"
      },
      {
        type: "list",
        items: [
          "writable — can the value be changed?",
          "enumerable — will it show up in loops?",
          "configurable — can the property be deleted or modified?"
        ]
      },
      {
        type: "heading",
        content: "Viewing Property Descriptors"
      },
      {
        type: "code",
        content: `const obj = { a: 10 };\nconsole.log(Object.getOwnPropertyDescriptor(obj, 'a'));`
      },

      {
        type: "heading",
        content: "Defining Custom Property Descriptors"
      },
      {
        type: "code",
        content: `const obj = {};\nObject.defineProperty(obj, 'secret', {\n  value: 42,\n  writable: false,\n  enumerable: false,\n  configurable: false\n});\nconsole.log(obj.secret); // 42`
      },

      {
        type: "heading",
        content: "Optional Chaining (?.)"
      },
      {
        type: "text",
        content: "Prevents errors when accessing deeply nested properties that may not exist."
      },
      {
        type: "code",
        content: `const user = {};\nconsole.log(user.address?.city); // undefined (no error)`
      },

      {
        type: "heading",
        content: "Nullish Coalescing (??)"
      },
      {
        type: "text",
        content: "Provides a fallback value only if the left side is null or undefined."
      },
      {
        type: "code",
        content: `let age = null;\nconsole.log(age ?? 18); // 18`
      },

      {
        type: "heading",
        content: "Object Iteration Methods"
      },
      {
        type: "list",
        items: [
          "Object.keys(obj) → returns keys",
          "Object.values(obj) → returns values",
          "Object.entries(obj) → returns key-value pairs"
        ]
      },
      {
        type: "code",
        content: `const obj = { a: 1, b: 2 };\nconsole.log(Object.entries(obj)); // [['a',1], ['b',2]]`
      },

      {
        type: "heading",
        content: "Merging Objects"
      },
      {
        type: "code",
        content: `const a = { x: 1 };\nconst b = { y: 2 };\nconst c = { ...a, ...b };\nconsole.log(c); // { x: 1, y: 2 }`
      },

      {
        type: "heading",
        content: "Cloning Objects"
      },
      {
        type: "text",
        content: "Shallow copy (spread operator):"
      },
      {
        type: "code",
        content: `const obj1 = { a: 1 };\nconst obj2 = { ...obj1 };\nobj2.a = 99;\nconsole.log(obj1.a); // 1`
      },

      {
        type: "heading",
        content: "Deep Copy (structuredClone)"
      },
      {
        type: "code",
        content: `const obj1 = { a: { b: 10 } };\nconst obj2 = structuredClone(obj1);\nobj2.a.b = 99;\nconsole.log(obj1.a.b); // 10`
      },

      {
        type: "heading",
        content: "Enhanced Object Literals (ES6)"
      },
      {
        type: "text",
        content: "ES6 made creating objects easier and cleaner."
      },
      {
        type: "code",
        content: `const name = 'Amit';\nconst age = 20;\nconst user = {\n  name,\n  age,\n  greet() {\n    console.log('Hello', this.name);\n  }\n};`
      },

      {
        type: "heading",
        content: "Real-Life Uses of Advanced Objects"
      },
      {
        type: "list",
        items: [
          "Creating configuration objects for APIs",
          "React props/state updates",
          "Cloning and merging server responses",
          "Handling complex nested data structures",
          "Creating private variables using descriptors",
          "Functional programming patterns"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What is the difference between rest and spread operators?",
          "Q2. How do you freeze an object? What are its limitations?",
          "Q3. Predict the output:\n\nconst user = { a: 1 };\nObject.seal(user);\nuser.a = 10;\nuser.b = 20;\nconsole.log(user);",
          "Q4. Explain writable, enumerable, and configurable attributes.",
          "Q5. What will Object.keys({ a:1, b:2 }) return?",
          "Q6. Predict the output:\n\nconst obj = { a: { b: 5 } };\nconst clone = { ...obj };\nclone.a.b = 20;\nconsole.log(obj.a.b);",
          "Q7. What is optional chaining and when should it be used?",
          "Q8. Write an example using Object.defineProperty().",
          "Q9. How does nullish coalescing differ from logical OR (||)?"
        ]
      }
    ]
  },
  {
    id: "es6-features",
    title: "ES6+ Features",
    sections: [
      {
        type: "text",
        content: "ES6 (ECMAScript 2015) introduced major improvements to JavaScript, making it more powerful, readable, and developer-friendly. The features introduced in ES6+ are now standard in modern JS development, used in React, Node.js, backend APIs, and everyday coding."
      },

      {
        type: "heading",
        content: "1. let and const"
      },
      {
        type: "text",
        content: "`let` and `const` replace `var` because they provide block scope and avoid hoisting-related bugs."
      },
      {
        type: "code",
        content: `let x = 10;\nconst y = 20;\nx = 15; // allowed\ny = 30; // error: cannot reassign const`
      },

      {
        type: "heading",
        content: "Temporal Dead Zone (TDZ)"
      },
      {
        type: "text",
        content: "`let` and `const` are hoisted but not initialized, so accessing them before declaration results in an error."
      },
      {
        type: "code",
        content: `console.log(a); // ReferenceError\nlet a = 10;`
      },

      {
        type: "heading",
        content: "2. Template Literals"
      },
      {
        type: "text",
        content: "Template literals allow multi-line strings and variable interpolation using backticks (`)."
      },
      {
        type: "code",
        content: `const name = "Rakshit";\nconsole.log(\`Hello, \${name}!\`);`
      },

      {
        type: "heading",
        content: "3. Default Parameters"
      },
      {
        type: "text",
        content: "Default function parameters make functions safer by avoiding undefined arguments."
      },
      {
        type: "code",
        content: `function greet(name = "Guest") {\n  console.log("Hello", name);\n}\n\ngreet(); // Hello Guest`
      },

      {
        type: "heading",
        content: "4. Spread Operator (...)"
      },
      {
        type: "text",
        content: "Spread expands iterable values into individual elements. Used for copying and merging arrays/objects."
      },
      {
        type: "code",
        content: `const arr1 = [1, 2];\nconst arr2 = [...arr1, 3, 4];\nconsole.log(arr2); // [1, 2, 3, 4]`
      },

      {
        type: "heading",
        content: "5. Rest Operator (...)"
      },
      {
        type: "text",
        content: "Rest collects multiple elements into a single array or object."
      },
      {
        type: "code",
        content: `function sum(...nums) {\n  return nums.reduce((a, b) => a + b);\n}\nconsole.log(sum(1, 2, 3)); // 6`
      },

      {
        type: "heading",
        content: "6. Arrow Functions"
      },
      {
        type: "text",
        content: "Arrow functions are shorter and do not have their own `this`, `arguments`, or `prototype`."
      },
      {
        type: "code",
        content: `const add = (a, b) => a + b;\nconsole.log(add(2, 3)); // 5`
      },

      {
        type: "heading",
        content: "Arrow Function Implicit Return"
      },
      {
        type: "code",
        content: `const double = n => n * 2;\nconsole.log(double(4)); // 8`
      },

      {
        type: "heading",
        content: "7. Enhanced Object Literals"
      },
      {
        type: "text",
        content: "Allows shorter syntax when variable names and property names are the same."
      },
      {
        type: "code",
        content: `const name = "Amit";\nconst age = 21;\nconst user = { name, age, greet() { console.log("Hi"); } };`
      },

      {
        type: "heading",
        content: "8. Modules (import/export)"
      },
      {
        type: "text",
        content: "Modules allow splitting code into reusable, maintainable files."
      },
      {
        type: "code",
        content: `// file1.js\nexport const name = "Rakshit";\nexport function greet() { console.log("Hello!"); }\n\n// file2.js\nimport { name, greet } from './file1.js';`
      },

      {
        type: "heading",
        content: "Default Export"
      },
      {
        type: "code",
        content: `// file1.js\nexport default function greet() { console.log("Hello!"); }\n\n// file2.js\nimport greet from './file1.js';`
      },

      {
        type: "heading",
        content: "9. Promises (Modern Async Handling)"
      },
      {
        type: "text",
        content: "Promises make asynchronous code more readable and avoid callback hell."
      },
      {
        type: "code",
        content: `const p = new Promise((resolve, reject) => {\n  resolve("Done");\n});\n\np.then(msg => console.log(msg));`
      },

      {
        type: "heading",
        content: "10. async/await"
      },
      {
        type: "text",
        content: "async/await allows writing asynchronous code that looks synchronous."
      },
      {
        type: "code",
        content: `async function fetchData() {\n  const res = await fetch('https://api.com');\n  console.log(res);\n}`
      },

      {
        type: "heading",
        content: "11. Classes (ES6 Syntax)"
      },
      {
        type: "text",
        content: "Makes object creation cleaner but still uses prototype under the hood."
      },
      {
        type: "code",
        content: `class User {\n  constructor(name) { this.name = name; }\n  greet() { console.log('Hello', this.name); }\n}\nconst u = new User('Amit');\nu.greet();`
      },

      {
        type: "heading",
        content: "12. Optional Chaining (?.)"
      },
      {
        type: "code",
        content: `const user = {};\nconsole.log(user.profile?.name); // undefined`
      },

      {
        type: "heading",
        content: "13. Nullish Coalescing (??)"
      },
      {
        type: "code",
        content: `let age = null;\nconsole.log(age ?? 18); // 18`
      },

      {
        type: "heading",
        content: "14. Spread with Objects"
      },
      {
        type: "code",
        content: `const obj1 = { a: 1 };\nconst obj2 = { ...obj1, b: 2 };\nconsole.log(obj2); // { a: 1, b: 2 }`
      },

      {
        type: "heading",
        content: "Why ES6+ is Important?"
      },
      {
        type: "list",
        items: [
          "Modern React and Node.js rely on ES6+ heavily",
          "Cleaner syntax reduces bugs",
          "Improves performance in async code",
          "Makes developers more productive",
          "Enables modular and scalable app architecture"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What is the difference between var, let, and const?",
          "Q2. Explain template literals with an example.",
          "Q3. What is the difference between spread and rest?",
          "Q4. Predict the output:\n\nconsole.log(10 ?? 5);\nconsole.log(null ?? 5);",
          "Q5. Rewrite a normal function into an arrow function:\n\nfunction add(a, b) { return a + b; }",
          "Q6. What are ES6 modules? Give import and export examples.",
          "Q7. Predict the output:\n\nconst obj = { a: 1 };\nconst copy = { ...obj };\ncopy.a = 99;\nconsole.log(obj.a);",
          "Q8. Write an async function that fetches data using await.",
          "Q9. Why do classes still use prototypes behind the scenes?"
        ]
      }
    ]
  },
  {
    id: "async-js",
    title: "Asynchronous JavaScript",
    sections: [
      {
        type: "text",
        content: "JavaScript is a single-threaded language, meaning it can execute only one task at a time. But modern applications need to fetch data, wait for timers, handle user events, etc. Asynchronous JavaScript allows long-running tasks to run without blocking the main thread. It uses mechanisms like callbacks, promises, async/await, and the event loop."
      },

      {
        type: "heading",
        content: "Why Do We Need Asynchronous JavaScript?"
      },
      {
        type: "list",
        items: [
          "To avoid blocking the main thread",
          "To handle slow operations (API calls, DB queries)",
          "To manage timers like setTimeout",
          "To build responsive UIs",
          "To prevent freezing or lagging apps"
        ]
      },

      {
        type: "heading",
        content: "JavaScript Execution Model"
      },
      {
        type: "text",
        content: "JavaScript uses a combination of the Call Stack, Web APIs, Callback Queue, and Event Loop to manage asynchronous operations."
      },

      {
        type: "heading",
        content: "The Event Loop (Most Important)"
      },
      {
        type: "text",
        content: "The event loop constantly checks the call stack. If it is empty, it pushes callbacks or promise handlers from their respective queues into the stack for execution."
      },

      {
        type: "heading",
        content: "How Asynchronous Code Works (Flow)"
      },
      {
        type: "list",
        items: [
          "1. JS encounters async function (setTimeout, fetch, etc.)",
          "2. It sends the task to Web APIs (browser handles them)",
          "3. After completion, callback goes to Callback Queue or Microtask Queue",
          "4. Event Loop checks if Call Stack is empty",
          "5. Moves the task from the queue to the Call Stack",
          "6. Executes the callback"
        ]
      },

      {
        type: "heading",
        content: "Microtask Queue vs Macrotask Queue"
      },
      {
        type: "text",
        content: "Microtasks have higher priority than macrotasks."
      },
      {
        type: "list",
        items: [
          "Microtask Queue → Promise callbacks, MutationObserver",
          "Macrotask Queue → setTimeout, setInterval, DOM events"
        ]
      },
      {
        type: "code",
        content: `console.log("Start");\n\nsetTimeout(() => console.log("Timeout"), 0);\nPromise.resolve().then(() => console.log("Promise"));\n\nconsole.log("End");\n\n// Output:\n// Start\n// End\n// Promise\n// Timeout`
      },

      {
        type: "heading",
        content: "Callbacks"
      },
      {
        type: "text",
        content: "Functions passed as arguments to be executed later are called callbacks. They were the earliest solution for async programming."
      },
      {
        type: "code",
        content: `function fetchData(callback) {\n  setTimeout(() => {\n    callback("Data received");\n  }, 1000);\n}\n\nfetchData(msg => console.log(msg));`
      },

      {
        type: "heading",
        content: "Callback Hell (Big Issue)"
      },
      {
        type: "code",
        content: `setTimeout(() => {\n  console.log("Step 1");\n  setTimeout(() => {\n    console.log("Step 2");\n    setTimeout(() => {\n      console.log("Step 3");\n    }, 1000);\n  }, 1000);\n}, 1000);`
      },
      {
        type: "text",
        content: "This creates deeply nested code that is hard to read and debug. Promises were introduced to fix this problem."
      },

      {
        type: "heading",
        content: "Promises"
      },
      {
        type: "text",
        content: "A promise represents the result of an async operation. It can be in one of three states: pending, fulfilled, or rejected."
      },
      {
        type: "code",
        content: `const p = new Promise((resolve, reject) => {\n  resolve("Success");\n});\n\np.then(result => console.log(result));`
      },

      {
        type: "heading",
        content: "Promise Chaining"
      },
      {
        type: "code",
        content: `function step1() {\n  return Promise.resolve("Step 1");\n}\nfunction step2() {\n  return Promise.resolve("Step 2");\n}\n\nstep1()\n  .then(res => {\n    console.log(res);\n    return step2();\n  })\n  .then(res => console.log(res));`
      },

      {
        type: "heading",
        content: "catch() and finally()"
      },
      {
        type: "code",
        content: `Promise.reject("Error")\n  .catch(err => console.log(err))\n  .finally(() => console.log("Done"));`
      },

      {
        type: "heading",
        content: "async / await"
      },
      {
        type: "text",
        content: "async/await makes asynchronous code look synchronous. It is built on top of promises."
      },
      {
        type: "code",
        content: `async function getData() {\n  const result = await Promise.resolve("Hello World");\n  console.log(result);\n}\ngetData();`
      },

      {
        type: "heading",
        content: "Error Handling in async/await"
      },
      {
        type: "code",
        content: `async function fetchData() {\n  try {\n    const res = await Promise.reject("API failed");\n  } catch (err) {\n    console.log("Error:", err);\n  }\n}\nfetchData();`
      },

      {
        type: "heading",
        content: "Parallel Async Operations (Promise.all)"
      },
      {
        type: "code",
        content: `Promise.all([\n  Promise.resolve(1),\n  Promise.resolve(2),\n  Promise.resolve(3)\n]).then(values => console.log(values));`
      },

      {
        type: "heading",
        content: "Real-Life Use Cases of Async JS"
      },
      {
        type: "list",
        items: [
          "Fetching data from APIs",
          "Reading files in Node.js",
          "Timers (setTimeout, setInterval)",
          "User actions like clicks, scrolls",
          "Animation and rendering tasks",
          "Database queries"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. Why does JavaScript need asynchronous programming?",
          "Q2. Explain the event loop in simple terms.",
          "Q3. What is the difference between microtask queue and macrotask queue?",
          "Q4. Predict the output:\n\nconsole.log('A');\nsetTimeout(() => console.log('B'), 0);\nPromise.resolve().then(() => console.log('C'));\nconsole.log('D');",
          "Q5. Rewrite a callback-based function using promises.",
          "Q6. What are the three states of a promise?",
          "Q7. Predict the output:\n\nasync function test() {\n  return 'Hello';\n}\ntest().then(console.log);",
          "Q8. Write an async/await function that fetches data and handles errors.",
          "Q9. When would you use Promise.all()?",
          "Q10. What is callback hell and how do promises solve it?"
        ]
      }
    ]
  },
  {
    id: "error-handling",
    title: "Error Handling",
    sections: [
      {
        type: "text",
        content: "Error handling is the process of catching and managing errors so an application does not crash unexpectedly. JavaScript provides multiple tools such as try...catch, throw, and custom errors to help developers write reliable and robust programs."
      },

      {
        type: "heading",
        content: "Types of Errors in JavaScript"
      },
      {
        type: "list",
        items: [
          "Syntax Error – mistakes in code structure",
          "Reference Error – using undeclared variables",
          "Type Error – invalid operations on values/types",
          "Range Error – invalid number ranges",
          "Custom Errors – manually thrown errors"
        ]
      },

      {
        type: "heading",
        content: "What is try...catch?"
      },
      {
        type: "text",
        content: "try...catch allows you to handle errors gracefully. Code inside try is executed, and if an error occurs, catch handles it without crashing the program."
      },
      {
        type: "code",
        content: `try {\n  let x = y + 10; // y is not defined\n} catch (error) {\n  console.log("Error occurred:", error.message);\n}`
      },

      {
        type: "heading",
        content: "finally Block"
      },
      {
        type: "text",
        content: "finally executes whether an error occurs or not. Useful for cleanup tasks like closing files or stopping timers."
      },
      {
        type: "code",
        content: `try {\n  console.log("Inside try");\n} catch (e) {\n  console.log("Error");\n} finally {\n  console.log("Always runs");\n}`
      },

      {
        type: "heading",
        content: "Throwing Errors"
      },
      {
        type: "text",
        content: "You can manually throw errors using throw. This helps enforce rules or validate user input."
      },
      {
        type: "code",
        content: `function divide(a, b) {\n  if (b === 0) {\n    throw new Error("Cannot divide by zero");\n  }\n  return a / b;\n}\n\ntry {\n  console.log(divide(10, 0));\n} catch (e) {\n  console.log(e.message);\n}`
      },

      {
        type: "heading",
        content: "Creating Custom Errors"
      },
      {
        type: "text",
        content: "You can create your own error classes for more readable and structured error handling."
      },
      {
        type: "code",
        content: `class ValidationError extends Error {\n  constructor(message) {\n    super(message);\n    this.name = "ValidationError";\n  }\n}\n\nfunction checkAge(age) {\n  if (age < 18) {\n    throw new ValidationError("User is underaged");\n  }\n  return "Access granted";\n}\n\ntry {\n  console.log(checkAge(16));\n} catch (e) {\n  console.log(e.name + ": " + e.message);\n}`
      },

      {
        type: "heading",
        content: "Error Handling in async/await"
      },
      {
        type: "code",
        content: `async function fetchData() {\n  try {\n    let data = await fetch("invalid-url");\n  } catch (error) {\n    console.log("Error:", error.message);\n  }\n}\nfetchData();`
      },

      {
        type: "heading",
        content: "Promise Error Handling"
      },
      {
        type: "code",
        content: `Promise.reject("Something went wrong")\n  .catch(err => console.log("Caught:", err));`
      },

      {
        type: "heading",
        content: "Best Practices for Error Handling"
      },
      {
        type: "list",
        items: [
          "Use try...catch for risky code (API calls, JSON parsing).",
          "Never throw strings. Always throw Error objects.",
          "Use custom errors for better debugging.",
          "Add meaningful error messages.",
          "Use finally for cleanup tasks.",
          "Validate input before processing.",
          "Handle promise rejections with catch().",
          "Always catch errors in async functions."
        ]
      },

      {
        type: "heading",
        content: "Common Error Handling Use Cases"
      },
      {
        type: "list",
        items: [
          "Form validation",
          "API request failures",
          "Invalid user inputs",
          "File reading errors (Node.js)",
          "Database connection issues"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What is the purpose of try...catch?",
          "Q2. When does the finally block run?",
          "Q3. Create a function that throws an error if the input is not a number.",
          "Q4. Predict the output:\n\ntry {\n  console.log(a);\n} catch (e) {\n  console.log('Error caught');\n}",
          "Q5. What is the difference between throw and return?",
          "Q6. Write an example of custom error class.",
          "Q7. How do you handle errors in async/await?",
          "Q8. Predict the output:\n\nPromise.reject('Oops').catch(msg => console.log(msg));",
          "Q9. Why should you avoid throwing plain strings in errors?",
          "Q10. Explain a real-world scenario where error handling is necessary."
        ]
      }
    ]
  },
  {
    id: "advanced-dom",
    title: "Advanced DOM",
    sections: [
      {
        type: "text",
        content: "The DOM (Document Object Model) is a tree-like structure representing HTML elements in a webpage. JavaScript interacts with the DOM to create dynamic and interactive user experiences. Advanced DOM concepts like event bubbling, delegation, and dynamic rendering are essential for modern frontend development."
      },

      {
        type: "heading",
        content: "What is the DOM?"
      },
      {
        type: "text",
        content: "DOM is a programming interface that allows JavaScript to read, create, update, and delete HTML elements. Every element becomes a node in a tree structure."
      },

      {
        type: "heading",
        content: "Selecting DOM Elements"
      },
      {
        type: "code",
        content: `document.getElementById("title");\ndocument.querySelector(".btn");\ndocument.querySelectorAll("p");`
      },

      {
        type: "heading",
        content: "Modifying Elements"
      },
      {
        type: "code",
        content: `const el = document.getElementById("title");\nel.textContent = "New Text";\nel.style.color = "red";`
      },

      {
        type: "heading",
        content: "Creating and Inserting Elements"
      },
      {
        type: "code",
        content: `const div = document.createElement("div");\ndiv.textContent = "Hello World";\ndocument.body.appendChild(div);`
      },

      {
        type: "heading",
        content: "Removing Elements"
      },
      {
        type: "code",
        content: `const el = document.getElementById("item");\nel.remove();`
      },

      {
        type: "heading",
        content: "Event Listeners"
      },
      {
        type: "text",
        content: "Event listeners allow JavaScript to react to user actions such as clicks, keypress, mouseover, etc."
      },
      {
        type: "code",
        content: `document.getElementById("btn").addEventListener("click", () => {\n  console.log("Button clicked!");\n});`
      },

      {
        type: "heading",
        content: "Event Bubbling"
      },
      {
        type: "text",
        content: "Event bubbling means events move from the innermost target element up through its parent elements."
      },
      {
        type: "code",
        content: `<div id="parent">\n  <button id="child">Click Me</button>\n</div>\n\n<script>\ndocument.getElementById("parent").addEventListener("click", () => {\n  console.log("Parent clicked");\n});\n\ndocument.getElementById("child").addEventListener("click", () => {\n  console.log("Child clicked");\n});\n</script>`
      },
      {
        type: "text",
        content: "When you click the button:\nChild clicked → Parent clicked"
      },

      {
        type: "heading",
        content: "Event Capturing"
      },
      {
        type: "text",
        content: "Capturing is the opposite of bubbling. Events travel from the top (document) down to the target."
      },
      {
        type: "code",
        content: `element.addEventListener("click", handler, true); // true enables capture`
      },

      {
        type: "heading",
        content: "Event Delegation (VERY IMPORTANT)"
      },
      {
        type: "text",
        content: "Event delegation allows you to attach a single event listener to a parent element instead of each child."
      },
      {
        type: "code",
        content: `document.getElementById("list").addEventListener("click", (event) => {\n  if (event.target.tagName === "LI") {\n    console.log("Clicked:", event.target.textContent);\n  }\n});`
      },
      {
        type: "text",
        content: "This technique improves performance and is widely used in frameworks like React and Vue."
      },

      {
        type: "heading",
        content: "Dynamic DOM Manipulation"
      },
      {
        type: "code",
        content: `const list = document.getElementById("list");\nconst li = document.createElement("li");\nli.textContent = "New Item";\nlist.appendChild(li);`
      },

      {
        type: "heading",
        content: "Changing Attributes"
      },
      {
        type: "code",
        content: `const link = document.querySelector("a");\nlink.setAttribute("href", "https://google.com");\nlink.setAttribute("target", "_blank");`
      },

      {
        type: "heading",
        content: "Working with Classes"
      },
      {
        type: "code",
        content: `element.classList.add("active");\nelement.classList.remove("hidden");\nelement.classList.toggle("dark-mode");`
      },

      {
        type: "heading",
        content: "Form Handling"
      },
      {
        type: "text",
        content: "Handling forms is essential for login, signup, search boxes, etc."
      },
      {
        type: "code",
        content: `document.getElementById("form").addEventListener("submit", (e) => {\n  e.preventDefault(); // stops page refresh\n  const value = document.getElementById("input").value;\n  console.log("Form Submitted:", value);\n});`
      },

      {
        type: "heading",
        content: "Input Events"
      },
      {
        type: "code",
        content: `document.getElementById("input").addEventListener("input", (e) => {\n  console.log(e.target.value);\n});`
      },

      {
        type: "heading",
        content: "Real-Life Uses of Advanced DOM Concepts"
      },
      {
        type: "list",
        items: [
          "Dynamically updating content (React-like behavior)",
          "Rendering product lists in e-commerce apps",
          "Creating dropdowns, modals, sliders",
          "Handling search filters",
          "Validating forms in real-time",
          "Building interactive dashboards"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What is event bubbling? Explain with an example.",
          "Q2. What is event delegation? Why is it useful?",
          "Q3. Predict the output:\n\n<div id='a'><div id='b'></div></div>\nClick on #b → Which logs first: parent or child?",
          "Q4. Write code to add a new list item when a button is clicked.",
          "Q5. Difference between event capturing and bubbling?",
          "Q6. How do you prevent default form submission?",
          "Q7. Explain the use of classList with examples.",
          "Q8. Write code to listen to input changes and display them live.",
          "Q9. What are the benefits of using querySelector over getElementById?"
        ]
      }
    ]
  }
];

// export default topics;

function Intermediate_js() {
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
          <h1 className="sidebar-title">Intermediate JavaScript</h1>
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

export default Intermediate_js;