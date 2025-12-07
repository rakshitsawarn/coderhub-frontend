import React, { useState } from "react";
import "/src/python_css/Basics.css";

const topics = [
  {
    id: "deep-execution-context",
    title: "Deep Execution Context & Memory Model",
    sections: [
      {
        type: "text",
        content: "The execution context in JavaScript determines how code runs internally. Advanced understanding of the execution context helps you understand how variables are stored, how the engine optimizes memory, and why closures and hoisting behave the way they do."
      },

      {
        type: "heading",
        content: "Two Main Areas of JavaScript Memory"
      },
      {
        type: "list",
        items: [
          "1. Stack Memory → Stores execution contexts and primitive values",
          "2. Heap Memory → Stores objects, arrays, functions"
        ]
      },

      {
        type: "heading",
        content: "What Exactly Happens During Code Execution?"
      },
      {
        type: "text",
        content: "JavaScript executes code in two major phases: Creation Phase and Execution Phase. But at the advanced level, this involves memory allocation, reference creation, lexical environment setup, and outer environment linking."
      },

      {
        type: "heading",
        content: "1. Memory Allocation Phase (Creation Phase)"
      },
      {
        type: "list",
        items: [
          "JS allocates memory for variables and functions",
          "Creates the Global Lexical Environment (GLE)",
          "Initializes var = undefined, sets let and const to uninitialized",
          "Stores complete function code in memory",
          "Links the outer environment (global in this case)"
        ]
      },

      {
        type: "heading",
        content: "2. Code Execution Phase"
      },
      {
        type: "text",
        content: "JavaScript runs line-by-line. Each function call creates a new Function Execution Context (FEC), which is pushed onto the call stack."
      },
      {
        type: "code",
        content: `function a(){ console.log("A"); }\nfunction b(){ a(); console.log("B"); }\nb();`
      },

      {
        type: "heading",
        content: "Execution Context Structure (Advanced)"
      },
      {
        type: "list",
        items: [
          "1. Lexical Environment",
          "2. Variable Environment",
          "3. This Binding",
          "4. Outer Environment Reference"
        ]
      },

      {
        type: "heading",
        content: "Lexical Environment"
      },
      {
        type: "text",
        content: "A lexical environment contains identifiers (variables, functions) and references to outer scopes. This is critical for closures because they store lexical environments even after execution."
      },

      {
        type: "code",
        content: `function outer(){\n  let x = 10;\n  function inner(){ console.log(x); }\n  return inner;\n}`
      },

      {
        type: "heading",
        content: "Outer Environment Reference"
      },
      {
        type: "text",
        content: "This reference points to the parent scope. This is how JavaScript builds the scope chain and resolves variables that aren't found locally."
      },

      {
        type: "heading",
        content: "How JavaScript Stores Values (Stack vs Heap)"
      },
      {
        type: "list",
        items: [
          "Primitive values → stored in the stack (number, string, boolean, null, undefined, symbol, bigint)",
          "Reference values → stored in the heap (objects, arrays, functions)"
        ]
      },
      {
        type: "code",
        content: `let a = 10;        // stack\nlet obj = { x: 20 }; // obj stored in heap, reference stored in stack`
      },

      {
        type: "heading",
        content: "Call Stack (Execution Stack)"
      },
      {
        type: "text",
        content: "Stack follows LIFO (Last In, First Out). Each function call pushes a new execution context."
      },

      {
        type: "code",
        content: `function x(){ y(); }\nfunction y(){ console.log("done"); }\nx();`
      },

      {
        type: "heading",
        content: "Memory Optimization by JavaScript Engine"
      },
      {
        type: "list",
        items: [
          "Unused variables are automatically garbage collected",
          "Closures keep referenced variables alive",
          "Functions create hidden classes for optimization",
          "V8 engine allocates memory in consecutive blocks for speed"
        ]
      },

      {
        type: "heading",
        content: "Advanced Example: Execution + Scope Chain"
      },
      {
        type: "code",
        content: `let a = 5;\nfunction first(){\n  let b = 10;\n  function second(){\n    let c = 15;\n    console.log(a, b, c);\n  }\n  second();\n}\nfirst();\n// Output: 5 10 15`
      },
      {
        type: "text",
        content: "Even though c exists only inside second(), b inside first(), and a globally, JavaScript uses the scope chain to find variables."
      },

      {
        type: "heading",
        content: "Execution Context Lifecycle Summary"
      },
      {
        type: "list",
        items: [
          "1. Memory Allocation → variables/functions stored",
          "2. Execution Phase → line by line execution",
          "3. Function Calls → new execution contexts created",
          "4. Execution Context Destroyed → removed from stack",
          "5. Garbage Collection → frees unused memory"
        ]
      },

      {
        type: "heading",
        content: "Why This Topic Matters (Advanced Importance)"
      },
      {
        type: "list",
        items: [
          "Closures depend on lexical environments",
          "Hoisting behavior becomes predictable",
          "Async behavior depends on stack emptiness",
          "Memory leaks occur when closures retain unnecessary environments",
          "Optimization requires understanding memory usage"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What are the two major memory areas in JavaScript?",
          "Q2. What is stored in the heap and what is stored in the stack?",
          "Q3. Explain lexical environment and its role in closures.",
          "Q4. Predict the output:\n\nconsole.log(a);\nlet a = 10;",
          "Q5. What happens internally when a function is invoked?",
          "Q6. Explain outer environment reference with an example.",
          "Q7. How does the engine decide what memory to garbage collect?",
          "Q8. Predict the output and explain why:\n\nfunction test(){\n  var x = 10;\n  return function(){ console.log(x); }\n}\nlet f = test();\nf();",
          "Q9. Why must engines separate stack and heap memory?"
        ]
      }
    ]
  },
  {
    id: "advanced-hoisting-tdz-shadowing",
    title: "Advanced Hoisting, TDZ & Shadowing Internals",
    sections: [
      {
        type: "text",
        content: "Hoisting, the Temporal Dead Zone (TDZ), and variable shadowing are core behaviors of JavaScript’s memory model. At the advanced level, understanding why these behaviors exist requires exploring lexical environments, environment records, and how the JS engine allocates memory before execution."
      },

      {
        type: "heading",
        content: "What Actually Gets Hoisted?"
      },
      {
        type: "list",
        items: [
          "Function Declarations → fully hoisted with complete body",
          "var variables → hoisted and initialized as undefined",
          "let variables → hoisted but uninitialized (TDZ)",
          "const variables → hoisted but uninitialized (must be initialized)",
          "Class declarations → hoisted but uninitialized (strict TDZ)"
        ]
      },

      {
        type: "heading",
        content: "Why Does Hoisting Happen Internally?"
      },
      {
        type: "text",
        content: "During the Memory Allocation Phase, JavaScript creates a Lexical Environment and a Variable Environment. These environments store bindings for variables and functions before executing code line-by-line. This process ensures the engine knows all identifiers before runtime."
      },

      {
        type: "heading",
        content: "Temporal Dead Zone (TDZ) — Deep Explanation"
      },
      {
        type: "text",
        content: "TDZ is the time between variable creation and variable initialization. let and const exist in memory but cannot be accessed until execution reaches their line. This prevents bugs caused by accessing variables too early."
      },
      {
        type: "code",
        content: `console.log(a); // ReferenceError (TDZ)\nlet a = 10;`
      },

      {
        type: "heading",
        content: "Why Does TDZ Exist?"
      },
      {
        type: "list",
        items: [
          "To remove unpredictability in hoisting",
          "To prevent accidental usage of variables before initialization",
          "To make scoping more strict and predictable"
        ]
      },

      {
        type: "heading",
        content: "var vs let/const: Internal Difference"
      },
      {
        type: "text",
        content: "var is stored in the Variable Environment and initialized to undefined immediately. let/const are stored in the Lexical Environment and kept uninitialized."
      },
      {
        type: "code",
        content: `console.log(x);\nvar x = 5;    // undefined\n\nconsole.log(y);\nlet y = 10;   // ReferenceError`
      },

      {
        type: "heading",
        content: "Advanced Example Showing All 3 Behaviors"
      },
      {
        type: "code",
        content: `console.log(a); // undefined\nconsole.log(b); // ReferenceError\nconsole.log(c); // ReferenceError\n\nvar a = 1;\nlet b = 2;\nconst c = 3;`
      },

      {
        type: "heading",
        content: "Shadowing — What Is It?"
      },
      {
        type: "text",
        content: "Shadowing occurs when a variable declared inside a local/block scope has the same name as a variable in an outer scope. The inner variable shadows the outer one."
      },
      {
        type: "code",
        content: `let x = 10;\n{\n  let x = 20; // shadows global x\n  console.log(x); // 20\n}\nconsole.log(x); // 10`
      },

      {
        type: "heading",
        content: "Illegal Shadowing"
      },
      {
        type: "text",
        content: "Illegal shadowing happens when var tries to shadow a let/const variable in the same block scope. This breaks scope rules."
      },
      {
        type: "code",
        content: `let x = 10;\n{\n  var x = 20; // ❌ illegal shadowing\n}\n// SyntaxError`
      },

      {
        type: "heading",
        content: "Legal Shadowing"
      },
      {
        type: "text",
        content: "Shadowing is legal only when block or function boundaries don't conflict with each other."
      },
      {
        type: "code",
        content: `let a = 100;\nfunction test(){\n  var a = 200; // legal shadowing\n  console.log(a);\n}\ntest();\nconsole.log(a);`
      },

      {
        type: "heading",
        content: "Function Hoisting — Advanced Behavior"
      },
      {
        type: "text",
        content: "Function declarations are hoisted with their full body. But function expressions follow variable hoisting rules."
      },
      {
        type: "code",
        content: `sayHello();\nfunction sayHello(){ console.log("Hi"); }\n\n// Works because the entire function is hoisted.`
      },

      {
        type: "heading",
        content: "Function Expression Hoisting"
      },
      {
        type: "code",
        content: `greet(); // TypeError: greet is not a function\n\nvar greet = function(){ console.log("Hello"); };`
      },

      {
        type: "heading",
        content: "Arrow Function Hoisting (Important)"
      },
      {
        type: "text",
        content: "Arrow functions behave like let or const variables and stay in TDZ."
      },
      {
        type: "code",
        content: `console.log(fn); // ReferenceError\nconst fn = () => {};`
      },

      {
        type: "heading",
        content: "Class Hoisting — Very Strict"
      },
      {
        type: "text",
        content: "Classes are hoisted but stay in TDZ until execution reaches their declaration."
      },
      {
        type: "code",
        content: `const obj = new Person(); // ReferenceError\nclass Person { }`
      },

      {
        type: "heading",
        content: "Deep Engine Behavior: Why Let/Const Are in TDZ?"
      },
      {
        type: "list",
        items: [
          "let/const bindings are created in Lexical Environment",
          "They are not allowed to auto-initialize to undefined",
          "TDZ ensures variables cannot be accessed before intended",
          "This avoids unpredictable bugs caused by var hoisting"
        ]
      },

      {
        type: "heading",
        content: "TDZ is NOT About Time — It Is About Position"
      },
      {
        type: "text",
        content: "TDZ does not mean time delay. It simply means you cannot access a variable before its declaration line is executed."
      },
      {
        type: "code",
        content: `let a = 10;\n{\n  // TDZ for 'b' starts here\n  console.log(b); // ReferenceError\n  let b = 20;     // TDZ ends here\n}`
      },

      {
        type: "heading",
        content: "Real-Life Scenario Where TDZ Prevents Bugs"
      },
      {
        type: "code",
        content: `if (condition) {\n  temp = 10; // this would silently create global variable if var was used\n  let temp; // TDZ prevents that\n}`
      },

      {
        type: "heading",
        content: "Summary of Advanced Rules"
      },
      {
        type: "list",
        items: [
          "var is function-scoped and hoisted with undefined",
          "let/const are block-scoped and hoisted but uninitialized",
          "Accessing let/const before declaration → TDZ error",
          "Function declarations are fully hoisted",
          "Function expressions depend on var/let/const",
          "Illegal shadowing occurs when var conflicts with let/const",
          "Class declarations behave like let/const (strict TDZ)"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. Why does JavaScript hoist declarations before execution?",
          "Q2. Explain TDZ using your own words.",
          "Q3. Predict the output:\n\nconsole.log(x);\nvar x = 10;\nconsole.log(y);\nlet y = 20;",
          "Q4. Explain the difference between function declaration and function expression hoisting.",
          "Q5. When does shadowing become illegal?",
          "Q6. Predict the output:\n\nlet a = 5;\n{\n  var a = 10;\n}\nconsole.log(a);",
          "Q7. What is the internal difference between let and var in memory allocation?",
          "Q8. Why are classes kept in TDZ?",
          "Q9. Predict the error:\n\nnum = 10;\nlet num;",
          "Q10. Explain how TDZ helps prevent accidental global variable creation."
        ]
      }
    ]
  },
  {
    id: "deep-closures",
    title: "Deep Closures – Internal Mechanics, Memory Retention & Real Use Cases",
    sections: [
      {
        type: "text",
        content: "Closures are one of the most powerful concepts in JavaScript. A closure is formed when an inner function remembers and continues to access its outer function’s variables even after the outer function has returned. Closures rely heavily on lexical scoping and the internal memory model of JavaScript."
      },

      {
        type: "heading",
        content: "What is a Closure? (Simple Definition)"
      },
      {
        type: "text",
        content: "A closure is created when an inner function captures variables from its outer function's lexical scope and preserves them even after the outer function has finished execution."
      },
      {
        type: "code",
        content: `function outer(){\n  let x = 10;\n  return function inner(){\n    console.log(x);\n  }\n}\nconst fn = outer();\nfn(); // prints 10`
      },

      {
        type: "heading",
        content: "How Closures Work Internally (Deep Explanation)"
      },
      {
        type: "text",
        content: "When a function is created, JavaScript also creates a hidden reference to the lexical environment where it was defined. This reference allows the inner function to access outer variables later, even if the outer function has finished execution."
      },

      {
        type: "heading",
        content: "Internal Memory Model of Closures"
      },
      {
        type: "list",
        items: [
          "1. Outer function creates a lexical environment",
          "2. Inner function stores a reference to this environment",
          "3. Even after outer function returns, its environment is kept alive",
          "4. Garbage collector does NOT delete the environment since it's still referenced"
        ]
      },

      {
        type: "heading",
        content: "Example Showing Memory Retention After Return"
      },
      {
        type: "code",
        content: `function counter(){\n  let count = 0; // stored in lexical environment\n  return function(){\n    count++;\n    console.log(count);\n  }\n}\nconst c = counter();\nc(); // 1\nc(); // 2\nc(); // 3 (count is retained in memory)`
      },

      {
        type: "heading",
        content: "Why Closures Retain Memory"
      },
      {
        type: "text",
        content: "Closures keep the lexical environment alive because the inner function still references variables inside it. JavaScript engine marks those variables as 'in-use'."
      },

      {
        type: "heading",
        content: "Closures & Garbage Collection"
      },
      {
        type: "text",
        content: "If no inner function references the outer variables anymore, the lexical environment becomes eligible for garbage collection."
      },
      {
        type: "code",
        content: `function demo(){\n  let x = 100;\n  return function(){ console.log(x); };\n}\nlet f = demo();\nf = null; // now outer environment can be garbage collected`
      },

      {
        type: "heading",
        content: "Closures Create Private Variables"
      },
      {
        type: "code",
        content: `function createBank(){\n  let balance = 0;\n  return {\n    deposit(amount){ balance += amount; },\n    getBalance(){ return balance; }\n  }\n}\nconst bank = createBank();\nbank.deposit(100);\nconsole.log(bank.getBalance()); // 100`
      },
      {
        type: "text",
        content: "balance cannot be accessed directly — perfect for encapsulation."
      },

      {
        type: "heading",
        content: "Closures in Loops (Common Interview Question)"
      },
      {
        type: "code",
        content: `for (var i = 1; i <= 3; i++){\n  setTimeout(() => console.log(i), 1000);\n}\n// Output: 3 3 3 (closure captured same variable i)`
      },

      {
        type: "heading",
        content: "Fix Using let"
      },
      {
        type: "code",
        content: `for (let i = 1; i <= 3; i++){\n  setTimeout(() => console.log(i), 1000);\n}\n// Output: 1 2 3`
      },

      {
        type: "heading",
        content: "Fix Using Closure Manually"
      },
      {
        type: "code",
        content: `for (var i = 1; i <= 3; i++){\n  ((x) => {\n    setTimeout(() => console.log(x), 1000);\n  })(i);\n}`
      },

      {
        type: "heading",
        content: "Closure in Event Listeners"
      },
      {
        type: "code",
        content: `function setup(){\n  let count = 0;\n  document.getElementById(\"btn\").addEventListener('click', () => {\n    count++;\n    console.log(\"Clicked\", count);\n  });\n}\nsetup();`
      },

      {
        type: "heading",
        content: "Closures in Real Life (Very Practical Uses)"
      },
      {
        type: "list",
        items: [
          "Data encapsulation (private variables)",
          "Memoization (caching values)",
          "Event listeners retaining state",
          "Currying functions",
          "State management in React",
          "Creating factories",
          "Once-functions (functions executed only once)"
        ]
      },

      {
        type: "heading",
        content: "Memoization (Caching Using Closures)"
      },
      {
        type: "code",
        content: `function memoizedAdd(){\n  const cache = {};\n  return function(n){\n    if(cache[n]) return cache[n];\n    console.log('Calculating...');\n    cache[n] = n + 10;\n    return cache[n];\n  }\n}\nconst add = memoizedAdd();\nconsole.log(add(5)); // Calculating... 15\nconsole.log(add(5)); // Cached result 15`
      },

      {
        type: "heading",
        content: "Closures & Currying Example"
      },
      {
        type: "code",
        content: `function sum(a){\n  return function(b){\n    return a + b;\n  }\n}\nconsole.log(sum(5)(10)); // 15`
      },

      {
        type: "heading",
        content: "Common Misconception About Closures"
      },
      {
        type: "list",
        items: [
          "Closures do NOT store copies of variables; they store references",
          "Closures are not created only when returning a function — every function is a closure by default",
          "Closures are lightweight and optimized by modern engines"
        ]
      },

      {
        type: "heading",
        content: "When Closures Can Be Dangerous (Memory Leaks)"
      },
      {
        type: "list",
        items: [
          "Long-running timers referencing large objects",
          "Event listeners capturing unnecessary data",
          "Large lexical environments held by accident",
          "Global closures referencing huge DOM objects"
        ]
      },
      {
        type: "code",
        content: `function leak(){\n  let big = new Array(1000000).fill(\"data\");\n  return () => console.log(big[0]);\n}\nlet x = leak(); // big cannot be garbage collected`
      },

      {
        type: "heading",
        content: "Summary of Closure Mechanics"
      },
      {
        type: "list",
        items: [
          "Closures = function + lexical environment",
          "Variables remain in memory even after function execution",
          "Closures store references, not values",
          "Let/const improve closure behavior in loops",
          "Used heavily in functional programming & React"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. Explain closures in simple words.",
          "Q2. How do closures retain memory internally?",
          "Q3. Predict the output:\n\nfunction x(){ var a = 10; return function(){ console.log(a); } }\nlet y = x();\ny();",
          "Q4. Why does var inside loops cause closure bugs?",
          "Q5. How does memoization use closures?",
          "Q6. Predict the output:\n\nfor(var i=1;i<=3;i++){ setTimeout(()=>console.log(i),1000); }",
          "Q7. Write a counter function using closures that increases every time it is called.",
          "Q8. What is a real-world example of closure usage in web apps?",
          "Q9. Explain why closures can cause memory leaks.",
          "Q10. Write a curry function using closures."
        ]
      }
    ]
  },
  {
    id: "advanced-this-binding",
    title: "Advanced this Binding – Implicit, Explicit, Hard Binding, Arrow Binding & new Binding",
    sections: [
      {
        type: "text",
        content: "The value of `this` in JavaScript depends entirely on HOW a function is called, not where it is written. Understanding all types of `this` binding is crucial for mastering OOP, event handling, callbacks, and frameworks like React and Node.js."
      },

      {
        type: "heading",
        content: "4 Rules That Determine this in JavaScript"
      },
      {
        type: "list",
        items: [
          "1. Default Binding",
          "2. Implicit Binding",
          "3. Explicit Binding",
          "4. new Binding",
          "BONUS: Arrow Functions — Lexical this"
        ]
      },

      {
        type: "heading",
        content: "1. Default Binding"
      },
      {
        type: "text",
        content: "If a function is called without any context, `this` refers to the global object (window in browsers, global in Node). In strict mode, it becomes undefined."
      },
      {
        type: "code",
        content: `function show(){ console.log(this); }\nshow(); // window (or undefined in strict mode)`
      },

      {
        type: "heading",
        content: "2. Implicit Binding"
      },
      {
        type: "text",
        content: "`this` points to the object on the LEFT side of the dot."
      },
      {
        type: "code",
        content: `const user = {\n  name: "Rakshit",\n  show(){ console.log(this.name); }\n};\nuser.show(); // Rakshit`
      },

      {
        type: "heading",
        content: "Losing Implicit Binding (Common Bug)"
      },
      {
        type: "code",
        content: `const obj = { name: "Amit", show(){ console.log(this.name); } };\nconst fn = obj.show;\nfn(); // undefined (lost context)`
      },

      {
        type: "heading",
        content: "3. Explicit Binding (call, apply, bind)"
      },
      {
        type: "text",
        content: "Explicit binding lets you force `this` to point to a specific object."
      },

      {
        type: "heading",
        content: "call()"
      },
      {
        type: "code",
        content: `function greet(){ console.log(this.name); }\ngreet.call({ name: "John" });`
      },

      {
        type: "heading",
        content: "apply() — same but arguments in array"
      },
      {
        type: "code",
        content: `greet.apply({ name: "Amit" });`
      },

      {
        type: "heading",
        content: "bind() — permanent binding"
      },
      {
        type: "code",
        content: `const f = greet.bind({ name: "Ria" });\nf(); // Ria`
      },

      {
        type: "heading",
        content: "4. Hard Binding (Advanced)"
      },
      {
        type: "text",
        content: "Hard binding ensures that a function always uses a particular `this`, no matter how it's called."
      },
      {
        type: "code",
        content: `function show(){ console.log(this.name); }\nconst obj = { name: "Hard" };\nconst hardShow = show.bind(obj);\nhardShow();\nsetTimeout(hardShow, 1000); // Still 'Hard'`
      },

      {
        type: "heading",
        content: "5. new Binding — Highest Priority"
      },
      {
        type: "text",
        content: "When you call a function with `new`, JavaScript creates a new empty object and binds `this` to that object."
      },
      {
        type: "code",
        content: `function Person(name){ this.name = name; }\nconst p = new Person("Amit");\nconsole.log(p.name);`
      },

      {
        type: "heading",
        content: "Order of Priority (VERY IMPORTANT)"
      },
      {
        type: "list",
        items: [
          "1. new Binding (Strongest)",
          "2. Explicit Binding (call, apply, bind)",
          "3. Implicit Binding",
          "4. Default Binding (Weakest)"
        ]
      },

      {
        type: "heading",
        content: "Arrow Functions — Lexical this (NOT Dynamic)"
      },
      {
        type: "text",
        content: "Arrow functions DO NOT have their own this. They inherit `this` from the surrounding lexical scope."
      },
      {
        type: "code",
        content: `const obj = {\n  name: \"JS\",\n  show: () => console.log(this.name)\n};\nobj.show(); // undefined (this refers to global)`
      },

      {
        type: "heading",
        content: "Arrow Functions in Real World — Callbacks"
      },
      {
        type: "code",
        content: `function Person(){\n  this.age = 20;\n  setInterval(() => {\n    this.age++;\n    console.log(this.age); // works correctly due to lexical this\n  }, 1000);\n}\nnew Person();`
      },

      {
        type: "heading",
        content: "this Inside DOM Event Listeners"
      },
      {
        type: "text",
        content: "In normal functions, `this` refers to the HTML element that triggered the event."
      },
      {
        type: "code",
        content: `document.getElementById(\"btn\").addEventListener('click', function(){\n  console.log(this); // the button itself\n});`
      },
      {
        type: "text",
        content: "Arrow functions DO NOT bind `this` to the element."
      },
      {
        type: "code",
        content: `document.getElementById(\"btn\").addEventListener('click', () => {\n  console.log(this); // window\n});`
      },

      {
        type: "heading",
        content: "Tricky Example — Interview Favorite"
      },
      {
        type: "code",
        content: `var name = \"Global\";\nconst obj = {\n  name: \"Obj\",\n  foo: function(){ return this.name; },\n  bar: () => this.name\n};\nconsole.log(obj.foo()); // Obj\nconsole.log(obj.bar()); // Global`
      },

      {
        type: "heading",
        content: "Another Tricky Example (Lost Binding)"
      },
      {
        type: "code",
        content: `const user = {\n  name: \"Amit\",\n  getName(){ return this.name; }\n};\nconst x = user.getName;\nconsole.log(x()); // undefined`
      },

      {
        type: "heading",
        content: "Fix Lost Binding with bind()"
      },
      {
        type: "code",
        content: `const y = user.getName.bind(user);\nconsole.log(y()); // Amit`
      },

      {
        type: "heading",
        content: "Summary Table"
      },
      {
        type: "list",
        items: [
          "Default binding → global object",
          "Implicit binding → object before dot",
          "Explicit binding → call, apply, bind",
          "Hard binding → bind permanently locks this",
          "new binding → binds this to new object",
          "Arrow functions → lexical this"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. Explain implicit and explicit binding with examples.",
          "Q2. Predict the output:\n\nvar a = 10;\nfunction test(){ console.log(this.a); }\ntest();",
          "Q3. Why do arrow functions not have their own this?",
          "Q4. Predict the output:\n\nconst obj = { val: 100, f(){ return this.val; } };\nconst x = obj.f;\nconsole.log(x());",
          "Q5. What is hard binding? Why is bind() special?",
          "Q6. Predict output:\n\nfunction A(){ this.x = 5; }\nconst obj = {}\nA.call(obj);\nconsole.log(obj.x);",
          "Q7. What is the priority order of the 4 this binding rules?",
          "Q8. Write an example that shows lexical this inside a callback.",
          "Q9. Predict:\n\nconst a = { x: 20, f: () => console.log(this.x) };\na.f();",
          "Q10. Explain how new binding works internally."
        ]
      }
    ]
  },
  {
    id: "prototype-internals",
    title: "Prototype Internals, Prototype Chain Mechanics & Deep Inheritance",
    sections: [
      {
        type: "text",
        content: "JavaScript uses prototype-based inheritance, not classical inheritance. Every object has an internal hidden property called [[Prototype]], which forms the foundation of inheritance, method sharing, and memory optimization. Understanding prototypes deeply is essential for mastering JavaScript."
      },

      {
        type: "heading",
        content: "What is [[Prototype]]?"
      },
      {
        type: "text",
        content: "[[Prototype]] is an internal, hidden reference to another object. It is NOT the same as the object's 'prototype' property. JavaScript engines use [[Prototype]] to look up properties and methods along the inheritance chain."
      },
      {
        type: "code",
        content: `const obj = { a: 10 };\nconsole.log(obj.__proto__);`
      },

      {
        type: "heading",
        content: "__proto__ vs prototype (VERY IMPORTANT)"
      },
      {
        type: "list",
        items: [
          "__proto__ → exists on every object; points to its prototype",
          "prototype → exists only on functions; used for constructing new objects"
        ]
      },
      {
        type: "code",
        content: `function User(){}\nconsole.log(User.prototype); // prototype object\n\nconst u = new User();\nconsole.log(u.__proto__); // same object as User.prototype`
      },

      {
        type: "heading",
        content: "Prototype Chain (How JavaScript Searches for Properties)"
      },
      {
        type: "text",
        content: "When accessing a property, JS engine follows a chain:\n1. Check the object itself\n2. If not found, go to its __proto__\n3. Continue walking up the chain\n4. Stop at Object.prototype\n5. If still not found → return undefined"
      },
      {
        type: "code",
        content: `const parent = { x: 10 };\nconst child = Object.create(parent);\nconsole.log(child.x); // 10 (inherited)`
      },

      {
        type: "heading",
        content: "Function Prototype & Constructor Functions"
      },
      {
        type: "text",
        content: "Every function in JavaScript automatically gets a 'prototype' object. This object is used when creating new instances using new."
      },
      {
        type: "code",
        content: `function Person(name){ this.name = name; }\nPerson.prototype.greet = function(){ console.log("Hello", this.name); };\n\nconst p1 = new Person("Rakshit");\np1.greet();`
      },

      {
        type: "heading",
        content: "Why Use Prototype Instead of Putting Methods Inside Constructor?"
      },
      {
        type: "list",
        items: [
          "Prototype methods are shared — not duplicated for each object",
          "Saves memory (especially for thousands of objects)",
          "Supports inheritance naturally",
          "Better performance in JS engines"
        ]
      },

      {
        type: "heading",
        content: "Prototype Pollution (Important Security Warning)"
      },
      {
        type: "text",
        content: "If you modify Object.prototype, every object gets affected. This is called prototype pollution."
      },
      {
        type: "code",
        content: `Object.prototype.hacked = 'yes';\nconsole.log({}.hacked); // yes (DANGEROUS)`
      },

      {
        type: "heading",
        content: "How Inheritance Works in JavaScript (Deep Dive)"
      },
      {
        type: "code",
        content: `function Animal(type){ this.type = type; }\nAnimal.prototype.eat = function(){ console.log(this.type, "eats"); }\n\nfunction Dog(name){ this.name = name; }\nDog.prototype = Object.create(Animal.prototype); // inheritance\nDog.prototype.bark = function(){ console.log(this.name, "barks"); }\n\nconst d = new Dog("Tommy");\nd.eat(); // inherited from Animal\nd.bark();`
      },

      {
        type: "text",
        content: "In the above example:\n- Dog inherits from Animal\n- Dog.prototype.__proto__ = Animal.prototype\n- Instances of Dog can use both bark() and eat()"
      },

      {
        type: "heading",
        content: "Modern ES6 Class Inheritance (Syntactic Sugar)"
      },
      {
        type: "code",
        content: `class Animal {\n  constructor(type){ this.type = type; }\n  eat(){ console.log(this.type, "eats"); }\n}\n\nclass Dog extends Animal {\n  constructor(name){\n    super("Dog");\n    this.name = name;\n  }\n  bark(){ console.log(this.name, "barks"); }\n}\n\nconst d = new Dog("Rocky");\nd.eat();\nd.bark();`
      },

      {
        type: "heading",
        content: "Hidden Properties & Internal Engine Behavior"
      },
      {
        type: "list",
        items: [
          "[[Prototype]] forms the inheritance chain",
          "Accessing deep properties is slower due to chain lookups",
          "Objects may have hidden classes for optimization (V8)",
          "Changing prototype at runtime de-optimizes code"
        ]
      },

      {
        type: "heading",
        content: "Object.create() – Best Way to Create Objects with Custom Prototypes"
      },
      {
        type: "code",
        content: `const human = { species: "human" };\nconst person = Object.create(human);\nperson.name = "Amit";\nconsole.log(person.species); // human`
      },

      {
        type: "heading",
        content: "Setting and Getting Prototype"
      },
      {
        type: "code",
        content: `Object.getPrototypeOf(obj);\nObject.setPrototypeOf(obj, newProto);`
      },

      {
        type: "heading",
        content: "Prototype Chain Lookup Cost (Performance Tip)"
      },
      {
        type: "list",
        items: [
          "Accessing deep prototype properties is slower",
          "Avoid very long prototype chains",
          "Avoid setting prototype dynamically (engine de-optimizes)",
          "Keep frequently accessed methods on the direct prototype"
        ]
      },

      {
        type: "heading",
        content: "Shadowing Properties on Prototype"
      },
      {
        type: "code",
        content: `const proto = { x: 10 };\nconst obj = Object.create(proto);\nobj.x = 20; // shadows proto.x\nconsole.log(obj.x); // 20`
      },
      {
        type: "text",
        content: "Prototype object still has x = 10, but obj shadows it."
      },

      {
        type: "heading",
        content: "Deleting a Property and Falling Back to Prototype"
      },
      {
        type: "code",
        content: `delete obj.x;\nconsole.log(obj.x); // 10 (fallback to prototype)`
      },

      {
        type: "heading",
        content: "Summary of Prototype Internals"
      },
      {
        type: "list",
        items: [
          "Every object has [[Prototype]] for inheritance",
          "Functions have a 'prototype' property used for instances",
          "Prototype chain is used for property lookup",
          "Modifying Object.prototype is dangerous",
          "Inheritance is implemented via prototype chaining",
          "ES6 classes still use prototypes internally"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What is the difference between __proto__ and prototype?",
          "Q2. Predict the output:\n\nconst a = {}; console.log(a.__proto__ === Object.prototype);",
          "Q3. Why does JavaScript use prototype-based inheritance instead of classical inheritance?",
          "Q4. Write an example of inheritance using Object.create().",
          "Q5. Predict:\n\nfunction A(){}\nA.prototype.x = 10;\nconst obj = new A();\nconsole.log(obj.x);",
          "Q6. What is prototype pollution? Why is it dangerous?",
          "Q7. How does ES6 class inheritance work internally?",
          "Q8. Why is setting prototype dynamically a performance problem?",
          "Q9. Explain property shadowing with prototype.",
          "Q10. What happens when a property is deleted from an object that shadows a prototype property?"
        ]
      }
    ]
  },
  {
    id: "advanced-functions",
    title: "Advanced Functions – Currying, Partial Application, Arguments Object, Composition & Higher-Order Functions",
    sections: [
      {
        type: "text",
        content: "Functions in JavaScript are first-class citizens. This means functions can be stored in variables, passed as arguments, returned from functions, and used like any other value. Advanced function techniques power modern libraries, frameworks, and functional programming patterns."
      },

      {
        type: "heading",
        content: "Higher-Order Functions (HOF)"
      },
      {
        type: "text",
        content: "A function is a higher-order function if it takes another function as an argument OR returns a function."
      },
      {
        type: "code",
        content: `function hof(fn){\n  fn();\n}\nhof(() => console.log(\"Hello\"));`
      },

      {
        type: "heading",
        content: "Functions Returning Functions"
      },
      {
        type: "code",
        content: `function greet(msg){\n  return function(name){\n    console.log(msg + \" \" + name);\n  }\n}\nconst gm = greet(\"Good Morning\");\ngm(\"Rakshit\");`
      },

      {
        type: "heading",
        content: "The Arguments Object (Deep)"
      },
      {
        type: "text",
        content: "The arguments object contains all the arguments passed to a function. It is array-like but not a real array."
      },
      {
        type: "code",
        content: `function demo(){\n  console.log(arguments);\n}\ndemo(1, 2, 3);`
      },
      {
        type: "heading",
        content: "Why arguments is not a real array?"
      },
      {
        type: "list",
        items: [
          "It does not have array methods like map, filter",
          "It only has length and numeric indexing",
          "Arrow functions DO NOT have arguments object"
        ]
      },

      {
        type: "heading",
        content: "Spread & Rest — Modern Replacement of arguments"
      },
      {
        type: "code",
        content: `function sum(...nums){\n  return nums.reduce((acc, cur) => acc + cur, 0);\n}\nconsole.log(sum(1,2,3));`
      },

      {
        type: "heading",
        content: "Function Currying (VERY IMPORTANT)"
      },
      {
        type: "text",
        content: "Currying transforms a function with multiple arguments into a chain of functions that take one argument at a time."
      },
      {
        type: "code",
        content: `function sum(a){\n  return function(b){\n    return function(c){\n      return a + b + c;\n    }\n  }\n}\nconsole.log(sum(1)(2)(3)); // 6`
      },

      {
        type: "heading",
        content: "Why is Currying Useful?"
      },
      {
        type: "list",
        items: [
          "Reusability of functions",
          "Reduces code duplication",
          "Allows partial application",
          "Popular in functional programming",
          "Used heavily in React (e.g., event handlers)"
        ]
      },

      {
        type: "heading",
        content: "Partial Application"
      },
      {
        type: "text",
        content: "Partial application fixes some arguments of a function and returns a new function."
      },
      {
        type: "code",
        content: `function multiply(a){\n  return function(b){\n    return a * b;\n  }\n}\nconst double = multiply(2);\nconsole.log(double(5)); // 10`
      },

      {
        type: "heading",
        content: "Currying vs Partial Application (Difference)"
      },
      {
        type: "list",
        items: [
          "Currying → breaks arguments into a chain of single-argument functions",
          "Partial Application → pre-fills some arguments but does not require single arguments only"
        ]
      },

      {
        type: "heading",
        content: "Function Composition"
      },
      {
        type: "text",
        content: "Function composition combines two or more functions such that the output of one becomes the input of another."
      },
      {
        type: "code",
        content: `const compose = (f, g) => (x) => f(g(x));\nconst double = x => x * 2;\nconst square = x => x * x;\n\nconst doubleThenSquare = compose(square, double);\nconsole.log(doubleThenSquare(5)); // (5*2)^2 = 100`
      },

      {
        type: "heading",
        content: "Pipe Function (Reverse of Compose)"
      },
      {
        type: "code",
        content: `const pipe = (...fns) => (value) => fns.reduce((acc, fn) => fn(acc), value);\n\nconst result = pipe(double, square)(5);\nconsole.log(result); // 100`
      },

      {
        type: "heading",
        content: "Pure Functions (Functional Programming)"
      },
      {
        type: "list",
        items: [
          "Same input → same output",
          "No side effects",
          "Do not modify external state"
        ]
      },
      {
        type: "code",
        content: `function add(a,b){ return a + b; } // pure`
      },

      {
        type: "heading",
        content: "Impure Functions"
      },
      {
        type: "code",
        content: `let x = 10;\nfunction addToX(y){ x += y; } // impure — modifies external state`
      },

      {
        type: "heading",
        content: "First-Class Functions (Important Definition)"
      },
      {
        type: "text",
        content: "Functions can be treated like variables: assigned, passed, returned, stored. This makes techniques like currying, callbacks, and functional patterns possible."
      },

      {
        type: "heading",
        content: "Callback Functions"
      },
      {
        type: "code",
        content: `function compute(a, b, operation){\n  return operation(a, b);\n}\nconsole.log(compute(5, 6, (x,y) => x + y));`
      },

      {
        type: "heading",
        content: "Self-Invoking Functions (IIFE)"
      },
      {
        type: "text",
        content: "IIFE runs immediately when defined. Used for creating private scopes."
      },
      {
        type: "code",
        content: `(function(){ console.log(\"IIFE executed\"); })();`
      },

      {
        type: "heading",
        content: "Memoization (Advanced Function Optimization)"
      },
      {
        type: "code",
        content: `function memo(fn){\n  const cache = {};\n  return function(x){\n    if(cache[x]) return cache[x];\n    const result = fn(x);\n    cache[x] = result;\n    return result;\n  }\n}\nconst slowSquare = n => n*n;\nconst fastSquare = memo(slowSquare);\nconsole.log(fastSquare(10));`
      },

      {
        type: "heading",
        content: "Debouncing (Practical Use Case)"
      },
      {
        type: "code",
        content: `function debounce(fn, delay){\n  let timer;\n  return function(...args){\n    clearTimeout(timer);\n    timer = setTimeout(() => fn.apply(this, args), delay);\n  }\n}`
      },

      {
        type: "heading",
        content: "Throttling (Another Real Use Case)"
      },
      {
        type: "code",
        content: `function throttle(fn, wait){\n  let last = 0;\n  return function(...args){\n    const now = Date.now();\n    if(now - last > wait){\n      fn.apply(this, args);\n      last = now;\n    }\n  }\n}`
      },

      {
        type: "heading",
        content: "Summary of Advanced Function Concepts"
      },
      {
        type: "list",
        items: [
          "Higher-order functions enable functional patterns",
          "Currying breaks multi-argument functions into chains",
          "Partial application pre-fills arguments",
          "Composition and pipe combine functions elegantly",
          "arguments object is array-like (NOT real array)",
          "Memoization optimizes expensive operations",
          "Debounce and throttle improve performance"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What is a higher-order function? Give an example.",
          "Q2. Why do arrow functions not have an arguments object?",
          "Q3. Write a curried function to add three numbers.",
          "Q4. What is partial application? How is it different from currying?",
          "Q5. Predict output:\n\nconst add = a => b => a + b;\nconsole.log(add(5)(10));",
          "Q6. Explain memoization with an example.",
          "Q7. What is function composition? Write an example.",
          "Q8. Write a debounce function in your own way.",
          "Q9. Predict:\n\nfunction a(){ console.log(arguments[0]); }\na(10,20);",
          "Q10. What are pure functions? Why are they important in React?"
        ]
      }
    ]
  },
  {
    id: "deep-async-javascript",
    title: "Deep Asynchronous JavaScript – Event Loop, Microtasks, Macrotasks, Promises & Async/Await Internals",
    sections: [
      {
        type: "text",
        content: "JavaScript is single-threaded, meaning it executes one task at a time. To handle async operations like timers, API calls, and events, JavaScript uses an event loop along with callback queues, microtask queues, and Web APIs. Understanding this system is essential for mastering asynchronous behavior in JavaScript."
      },

      {
        type: "heading",
        content: "JavaScript Runtime Components"
      },
      {
        type: "list",
        items: [
          "1. Call Stack",
          "2. Web APIs (Browser/Node APIs)",
          "3. Callback Queue (Macrotask Queue)",
          "4. Microtask Queue (Promise Jobs Queue)",
          "5. Event Loop"
        ]
      },

      {
        type: "heading",
        content: "Call Stack"
      },
      {
        type: "text",
        content: "JavaScript executes code line-by-line in the call stack. Only one function runs at a time."
      },
      {
        type: "code",
        content: `function a(){ b(); }\nfunction b(){ console.log(\"Hello\"); }\na();`
      },

      {
        type: "heading",
        content: "Web APIs (Browser Provided)"
      },
      {
        type: "list",
        items: [
          "setTimeout",
          "DOM Events",
          "fetch()",
          "localStorage",
          "XHR",
          "Timers, intervals, geolocation"
        ]
      },

      {
        type: "heading",
        content: "Event Loop – The Heart of Async JavaScript"
      },
      {
        type: "text",
        content: "The event loop continuously checks if the call stack is empty. If empty, it pushes tasks from queues into the call stack."
      },

      {
        type: "heading",
        content: "Two Types of Queues (VERY IMPORTANT)"
      },
      {
        type: "list",
        items: [
          "Macrotask Queue → setTimeout, setInterval, network callbacks",
          "Microtask Queue → Promise callbacks, queueMicrotask(), MutationObserver"
        ]
      },

      {
        type: "heading",
        content: "Microtasks Run BEFORE Macrotasks"
      },
      {
        type: "code",
        content: `console.log(\"A\");\nsetTimeout(() => console.log(\"B\"));\nPromise.resolve().then(() => console.log(\"C\"));\nconsole.log(\"D\");\n\n// Output: A, D, C, B`
      },

      {
        type: "text",
        content: "Promise callbacks ALWAYS run before setTimeout."
      },

      {
        type: "heading",
        content: "Deep Internal Flow Example"
      },
      {
        type: "code",
        content: `console.log(1);\nsetTimeout(() => console.log(2), 0);\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);\n\n// Output: 1, 4, 3, 2`
      },

      {
        type: "heading",
        content: "Why does 3 come before 2?"
      },
      {
        type: "list",
        items: [
          "Promise callbacks go to Microtask Queue",
          "setTimeout callback goes to Macrotask Queue",
          "Microtasks run first → Promises win"
        ]
      },

      {
        type: "heading",
        content: "Promise Internals (Deep)"
      },
      {
        type: "list",
        items: [
          "Promises have 3 states: pending → fulfilled → rejected",
          "then() and catch() callbacks go into Microtask Queue",
          "Promise jobs execute AFTER current script but BEFORE macrotasks"
        ]
      },
      {
        type: "code",
        content: `console.log(\"Start\");\nPromise.resolve().then(() => console.log(\"Microtask\"));\nconsole.log(\"End\");\n// Output: Start, End, Microtask`
      },

      {
        type: "heading",
        content: "Promise Chaining"
      },
      {
        type: "code",
        content: `Promise.resolve(1)\n  .then(x => x + 1)\n  .then(x => x + 1)\n  .then(console.log); // 3`
      },

      {
        type: "heading",
        content: "Async/Await Internals (Cracked Open)"
      },
      {
        type: "text",
        content: "Async/await is syntactic sugar for Promises. Await pauses execution inside the async function, but does NOT block the entire thread."
      },
      {
        type: "code",
        content: `async function f(){\n  console.log(1);\n  await Promise.resolve();\n  console.log(2);\n}\nf();\nconsole.log(3);\n// Output: 1, 3, 2`
      },

      {
        type: "heading",
        content: "Why does 3 come before 2?"
      },
      {
        type: "text",
        content: "`await` splits the function into two parts:\n1. Everything before await executes immediately\n2. After await → placed into Microtask Queue"
      },

      {
        type: "heading",
        content: "Event Loop Diagram (Text-Based)"
      },
      {
        type: "text",
        content: "1. JS executes global code\n2. Async tasks go to Web APIs\n3. When ready:\n   - Promises → Microtask Queue\n   - Timers/Events → Macrotask Queue\n4. Event loop checks:\n   - Run ALL microtasks\n   - Run ONE macrotask\n5. Repeat"
      },

      {
        type: "heading",
        content: "queueMicrotask() — Highest Priority"
      },
      {
        type: "code",
        content: `console.log(1);\nqueueMicrotask(() => console.log(2));\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);\n// Output: 1, 4, 2, 3`
      },

      {
        type: "heading",
        content: "Long Microtask Queue → Starvation"
      },
      {
        type: "text",
        content: "If microtasks keep adding new microtasks, macrotasks (UI updates, timers) get delayed. This is called starvation."
      },
      {
        type: "code",
        content: `function loop(){\n  Promise.resolve().then(loop);\n}\nloop(); // UI may freeze`
      },

      {
        type: "heading",
        content: "fetch() Behavior (Important)"
      },
      {
        type: "text",
        content: "Fetch is handled by Web APIs. Its response callback goes to the microtask queue — NOT macrotask."
      },
      {
        type: "code",
        content: `console.log(\"Start\");\nfetch(\"https://api\").then(() => console.log(\"Fetch done\"));\nconsole.log(\"End\");`
      },

      {
        type: "heading",
        content: "Async Error Handling"
      },
      {
        type: "code",
        content: `async function f(){\n  try {\n    await Promise.reject(\"Error here\");\n  } catch(e) {\n    console.log(\"Caught:\", e);\n  }\n}\nf();`
      },

      {
        type: "heading",
        content: "Promise.all, Promise.race, Promise.allSettled"
      },
      {
        type: "list",
        items: [
          "Promise.all → fails fast if any promise rejects",
          "Promise.race → returns first settled promise",
          "Promise.allSettled → waits for all promises even if one fails"
        ]
      },

      {
        type: "heading",
        content: "Summary of Async Internals"
      },
      {
        type: "list",
        items: [
          "JavaScript is single-threaded but async via event loop",
          "Microtasks run before macrotasks",
          "Promises always beat setTimeout",
          "await splits execution into a microtask",
          "Long microtask queues can freeze UI",
          "fetch callbacks run as microtasks"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. Explain the difference between microtask and macrotask queues.",
          "Q2. Predict the output:\n\nconsole.log(1);\nsetTimeout(()=>console.log(2));\nPromise.resolve().then(()=>console.log(3));\nconsole.log(4);",
          "Q3. Why does async/await not block the main thread?",
          "Q4. What happens internally when 'await' is encountered?",
          "Q5. Predict the output:\n\nasync function a(){\n console.log(1);\n await null;\n console.log(2);\n}\na();\nconsole.log(3);",
          "Q6. What is microtask starvation?",
          "Q7. What is the difference between Promise.all and Promise.allSettled?",
          "Q8. Predict:\n\nqueueMicrotask(()=>console.log('A'));\nPromise.resolve().then(()=>console.log('B'));\nsetTimeout(()=>console.log('C'),0);",
          "Q9. How does the event loop decide which queue to process first?",
          "Q10. Why is fetch() response placed in the microtask queue?"
        ]
      }
    ]
  },
  {
    id: "deep-error-handling",
    title: "Deep Error Handling – Custom Errors, Error Propagation, Try/Catch Internals & Async Error Handling",
    sections: [
      {
        type: "text",
        content: "Error handling allows us to write safe, predictable, and stable applications. Understanding how errors propagate, how JavaScript handles exceptions internally, and how to build custom error types is essential for professional-level development."
      },

      {
        type: "heading",
        content: "Types of Errors in JavaScript (Deep)"
      },
      {
        type: "list",
        items: [
          "1. SyntaxError – incorrect code structure",
          "2. ReferenceError – accessing undeclared variables",
          "3. TypeError – invalid type operations (e.g., calling non-functions)",
          "4. RangeError – invalid number ranges (e.g., recursion depth)",
          "5. EvalError – errors related to eval function (rare now)",
          "6. URIError – malformed URI handling",
          "7. CustomUserDefinedError – developer-defined errors"
        ]
      },

      {
        type: "heading",
        content: "How JavaScript Handles Errors Internally"
      },
      {
        type: "text",
        content: "When an error occurs inside the execution stack:\n1. JS looks for the nearest try-catch\n2. If found → catch block executes\n3. If not found → stack unwinds\n4. If no handler exists → program crashes (Uncaught Error)"
      },

      {
        type: "heading",
        content: "Basic Try...Catch"
      },
      {
        type: "code",
        content: `try {\n  let x = y + 10; // ReferenceError\n} catch (err) {\n  console.log(\"Caught:\", err.message);\n}`
      },

      {
        type: "heading",
        content: "finally Block (Always Runs)"
      },
      {
        type: "code",
        content: `try {\n  console.log(\"Try block\");\n} catch(e){\n  console.log(\"Catch block\");\n} finally {\n  console.log(\"Finally always runs\");\n}`
      },

      {
        type: "heading",
        content: "Throwing Custom Errors"
      },
      {
        type: "text",
        content: "throw allows you to manually generate an error. Always throw error objects, not strings."
      },
      {
        type: "code",
        content: `function divide(a,b){\n  if(b === 0) throw new Error(\"Cannot divide by zero\");\n  return a/b;\n}\ntry {\n  divide(10,0);\n} catch (e){\n  console.log(e.message);\n}`
      },

      {
        type: "heading",
        content: "Creating Custom Error Classes"
      },
      {
        type: "text",
        content: "Custom error classes help you generate readable, meaningful, domain-specific errors."
      },
      {
        type: "code",
        content: `class ValidationError extends Error {\n  constructor(message){\n    super(message);\n    this.name = \"ValidationError\";\n  }\n}\nfunction checkAge(age){\n  if(age < 18) throw new ValidationError(\"Age must be 18+\");\n}\ntry {\n  checkAge(16);\n} catch(e){\n  console.log(e.name, e.message);\n}`
      },

      {
        type: "heading",
        content: "Error Propagation (Bubble Up Mechanism)"
      },
      {
        type: "text",
        content: "If an error is not handled at one level, it propagates upward until it finds a catch block."
      },
      {
        type: "code",
        content: `function a(){ b(); }\nfunction b(){ c(); }\nfunction c(){ throw new Error(\"Fail\"); }\ntry {\n  a();\n} catch(e){\n  console.log(\"Caught at top:\", e.message);\n}`
      },

      {
        type: "heading",
        content: "Error Propagation Diagram (Text)"
      },
      {
        type: "text",
        content: "c() throws → b() fails → a() fails → caught in try block"
      },

      {
        type: "heading",
        content: "try/catch Does NOT Catch Async Errors (Unless awaited)"
      },
      {
        type: "code",
        content: `try {\n  setTimeout(() => { throw new Error(\"Async error\"); }, 1000);\n} catch(e) {\n  console.log(\"Not caught\"); // won't run\n}`
      },
      {
        type: "text",
        content: "Because the error happens in a new event loop tick, not inside the try block."
      },

      {
        type: "heading",
        content: "Handling Async Errors Using Promises"
      },
      {
        type: "code",
        content: `Promise.reject(\"Oops\").catch(e => console.log(\"Handled:\", e));`
      },

      {
        type: "heading",
        content: "Handling Async Errors with async/await"
      },
      {
        type: "code",
        content: `async function f(){\n  try {\n    await Promise.reject(\"Async fail\");\n  } catch(e) {\n    console.log(\"Caught:\", e);\n  }\n}\nf();`
      },

      {
        type: "heading",
        content: "Error Handling in Promise Chains"
      },
      {
        type: "code",
        content: `Promise.resolve()\n  .then(() => { throw new Error(\"Err 1\"); })\n  .then(() => console.log(\"ok\"))\n  .catch(e => console.log(\"Caught:\", e.message));`
      },

      {
        type: "heading",
        content: "Unhandled Promise Rejections (Important)"
      },
      {
        type: "text",
        content: "If a Promise is rejected and no catch() is attached, it causes an UnhandledPromiseRejection — which can crash Node.js applications."
      },

      {
        type: "heading",
        content: "Graceful Error Handling Pattern"
      },
      {
        type: "code",
        content: `function safePromise(p){\n  return p.then(data => [null, data])\n          .catch(err => [err]);\n}\n\nconst [err, data] = await safePromise(fetch(\"/api\"));`
      },

      {
        type: "heading",
        content: "Retry Logic Example (Advanced)"
      },
      {
        type: "code",
        content: `async function retry(fn, attempts){\n  for(let i=1; i<=attempts; i++){\n    try { return await fn(); }\n    catch(e){ if(i === attempts) throw e; }\n  }\n}`
      },

      {
        type: "heading",
        content: "Finally Block for Resource Cleanup"
      },
      {
        type: "text",
        content: "Used to close database connections, stop timers, remove listeners, etc."
      },
      {
        type: "code",
        content: `try {\n  openDB();\n} catch(e){\n  console.log(e);\n} finally {\n  closeDB();\n}`
      },

      {
        type: "heading",
        content: "Common Error Handling Mistakes"
      },
      {
        type: "list",
        items: [
          "Throwing strings instead of Error objects",
          "Forgetting to return inside catch blocks",
          "Not catching async errors",
          "Adding too many nested try blocks",
          "Ignoring unhandled promise rejections"
        ]
      },

      {
        type: "heading",
        content: "Summary of Deep Error Handling"
      },
      {
        type: "list",
        items: [
          "try/catch handles synchronous errors only",
          "Async errors require .catch or await wrapped in try/catch",
          "Custom errors improve clarity",
          "Errors propagate upward until handled",
          "Unhandled promise rejections can crash apps",
          "finally always runs, used for cleanup tasks"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. Why does try/catch not catch errors thrown in setTimeout?",
          "Q2. Write a custom error class named DatabaseError.",
          "Q3. Predict the output:\n\ntry { throw \"error\"; } catch(e){ console.log(typeof e); }",
          "Q4. What is error propagation? Show with example.",
          "Q5. How do you catch errors in async/await?",
          "Q6. Predict the output:\n\nPromise.reject(\"Oops\"); console.log(\"End\");",
          "Q7. What are unhandled promise rejections and why are they dangerous?",
          "Q8. Why should you throw Error objects instead of strings?",
          "Q9. Write a retry() function that retries an async task 3 times.",
          "Q10. Explain difference between try...catch and .catch() in promises."
        ]
      }
    ]
  },
  {
    id: "memory-management-garbage-collection",
    title: "Memory Management, Garbage Collection & Memory Leaks – Deep Engine Internals",
    sections: [
      {
        type: "text",
        content: "JavaScript automatically allocates and frees memory for you, but understanding how memory is managed under the hood is essential for writing efficient applications and avoiding memory leaks that slow down or crash apps."
      },

      {
        type: "heading",
        content: "Memory Lifecycle in JavaScript"
      },
      {
        type: "list",
        items: [
          "1. Allocate Memory",
          "2. Use Memory",
          "3. Garbage Collection (Free Memory)"
        ]
      },

      {
        type: "heading",
        content: "Where JavaScript Stores Data?"
      },
      {
        type: "list",
        items: [
          "Stack → stores primitive values and function call frames",
          "Heap → stores objects, arrays, functions, closures"
        ]
      },

      {
        type: "heading",
        content: "Stack vs Heap (Deep Explanation)"
      },
      {
        type: "text",
        content: "Stack memory is fast and automatically managed; heap memory is larger and slower due to dynamic allocation."
      },
      {
        type: "code",
        content: `let a = 10;            // stored in stack\nlet obj = { x: 20 };    // stored in heap; pointer stored in stack`
      },

      {
        type: "heading",
        content: "How Garbage Collection Works"
      },
      {
        type: "text",
        content: "JavaScript uses the 'Mark and Sweep' algorithm to automatically detect and delete unused memory."
      },

      {
        type: "heading",
        content: "Mark-and-Sweep Algorithm (V8 Engine)"
      },
      {
        type: "list",
        items: [
          "1. Mark Phase → GC marks all objects reachable from root",
          "2. Sweep Phase → unmarked objects are deleted from memory",
          "Root = global object + currently running functions + closures"
        ]
      },

      {
        type: "heading",
        content: "Reachability Concept (VERY IMPORTANT)"
      },
      {
        type: "text",
        content: "An object is considered 'alive' if it is reachable from the root. If nothing references it, it becomes garbage."
      },
      {
        type: "code",
        content: `let user = { name: \"Amit\" };\nuser = null; // object becomes unreachable → will be garbage collected`
      },

      {
        type: "heading",
        content: "How Closures Affect Memory"
      },
      {
        type: "text",
        content: "Closures keep outer variables alive, preventing garbage collection."
      },
      {
        type: "code",
        content: `function create(){\n  let big = new Array(100000).fill(\"data\");\n  return () => console.log(big[0]);\n}\nlet fn = create(); // big stays in memory\nfn = null;         // now GC can clean it`
      },

      {
        type: "heading",
        content: "Memory Leaks (Common Causes)"
      },
      {
        type: "list",
        items: [
          "1. Unremoved event listeners",
          "2. Forgot-to-clear intervals/timeouts",
          "3. Accidental global variables",
          "4. Closures referencing large data",
          "5. DOM nodes kept in memory after removal"
        ]
      },

      {
        type: "heading",
        content: "Example: Event Listener Memory Leak"
      },
      {
        type: "code",
        content: `function leak(){\n  const btn = document.getElementById(\"btn\");\n  btn.addEventListener('click', () => console.log(\"clicked\"));\n}\n// Removing btn from DOM won't remove the listener automatically → leak`
      },

      {
        type: "heading",
        content: "Fix: Remove Event Listeners"
      },
      {
        type: "code",
        content: `btn.removeEventListener('click', handler);`
      },

      {
        type: "heading",
        content: "Example: Memory Leak from setInterval"
      },
      {
        type: "code",
        content: `setInterval(() => {\n  console.log(\"running...\");\n}, 1000);\n// If never cleared → memory leak`
      },
      {
        type: "text",
        content: "Fix: clearInterval(id)"
      },

      {
        type: "heading",
        content: "Accidental Global Variables (Dangerous!)"
      },
      {
        type: "code",
        content: `function test(){\n  x = 10; // becomes global → stays in memory\n}`
      },

      {
        type: "heading",
        content: "Detached DOM Nodes (Major Browser Leak)"
      },
      {
        type: "text",
        content: "If a DOM node is removed but still referenced in JavaScript, it cannot be garbage collected."
      },
      {
        type: "code",
        content: `let div = document.getElementById(\"box\");\ndiv.remove();\nconsole.log(div); // still in memory because variable references it`
      },

      {
        type: "heading",
        content: "Fix: Remove References"
      },
      {
        type: "code",
        content: `div = null;`
      },

      {
        type: "heading",
        content: "V8 Optimizations for Memory"
      },
      {
        type: "list",
        items: [
          "Uses Generational Garbage Collection (Young/Old space)",
          "Uses Incremental GC to avoid blocking UI",
          "Uses Hidden Classes for faster object access",
          "Optimizes small arrays separately from large arrays"
        ]
      },

      {
        type: "heading",
        content: "Generational Garbage Collection (Deep)"
      },
      {
        type: "list",
        items: [
          "Young Space → objects created recently (frequent GC)",
          "Old Space → long-lived objects (less frequent GC)"
        ]
      },

      {
        type: "heading",
        content: "Memory Leak from Closures (Real Example)"
      },
      {
        type: "code",
        content: `function heavy(){\n  let arr = new Array(500000).fill(\"data\");\n  return function(){ console.log(arr.length); };\n}\nlet fn = heavy(); // arr stays in memory`
      },

      {
        type: "heading",
        content: "Avoiding Memory Leaks"
      },
      {
        type: "list",
        items: [
          "Clean event listeners",
          "Clear intervals and timeouts",
          "Avoid unnecessary global variables",
          "Avoid retaining references to large structures",
          "Nullify references when done",
          "Use WeakMap or WeakSet for temporary storage"
        ]
      },

      {
        type: "heading",
        content: "WeakMap & WeakSet Prevent Memory Leaks"
      },
      {
        type: "code",
        content: `let wm = new WeakMap();\nwm.set({}, \"Hello\");\n// Key object is garbage collectible`
      },

      {
        type: "heading",
        content: "Why Weak Structures Prevent Leaks?"
      },
      {
        type: "text",
        content: "WeakMap keys are weakly referenced → GC can remove them even if they are still inside WeakMap."
      },

      {
        type: "heading",
        content: "Summary of Memory Management"
      },
      {
        type: "list",
        items: [
          "JavaScript uses automatic GC",
          "Mark-and-Sweep removes unreachable objects",
          "Closures can retain memory",
          "Unremoved event listeners cause leaks",
          "Detached DOM nodes prevent GC",
          "WeakMap/WeakSet help avoid leaks"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. Explain stack vs heap memory in JavaScript.",
          "Q2. What is reachability in JavaScript memory management?",
          "Q3. Predict:\n\nlet obj = { a: 10 }; obj = null;",
          "Q4. Why do closures sometimes cause memory leaks?",
          "Q5. What is the mark-and-sweep algorithm?",
          "Q6. Give an example of a memory leak using event listeners.",
          "Q7. Explain why WeakMap helps prevent memory leaks.",
          "Q8. What are detached DOM nodes?",
          "Q9. Why is accidental global variable creation dangerous?",
          "Q10. How does generational garbage collection improve performance?"
        ]
      }
    ]
  },
  {
    id: "javascript-engine-internals",
    title: "JavaScript Engine Internals – V8 Architecture, JIT Compilation, Hidden Classes & Inline Caching",
    sections: [
      {
        type: "text",
        content: "JavaScript engines like V8 (Chrome, Node.js) convert your code into highly optimized machine code. Understanding how engines work helps you write much faster, optimized JavaScript and avoid performance pitfalls."
      },

      {
        type: "heading",
        content: "What is a JavaScript Engine?"
      },
      {
        type: "text",
        content: "A JavaScript Engine reads JS code, parses it, compiles it, optimizes it, and executes it. V8 is the most popular engine, used by Chrome and Node.js."
      },

      {
        type: "heading",
        content: "V8 Engine Architecture Overview"
      },
      {
        type: "list",
        items: [
          "1. Parser → Converts JS code into AST (Abstract Syntax Tree)",
          "2. Ignition Interpreter → Converts AST into bytecode",
          "3. TurboFan Optimizing Compiler → Converts bytecode into optimized machine code",
          "4. Garbage Collector → Cleans unused memory"
        ]
      },

      {
        type: "heading",
        content: "Step 1: Parsing → AST Creation"
      },
      {
        type: "text",
        content: "V8 reads the JavaScript code and converts it into a structured tree called an AST."
      },
      {
        type: "code",
        content: `let a = 10; // Parsed into AST nodes: VariableDeclaration → Identifier → Literal`
      },

      {
        type: "heading",
        content: "Step 2: Bytecode Generation by Ignition"
      },
      {
        type: "text",
        content: "Ignition converts AST into bytecode (a lower-level, fast-to-execute representation)."
      },
      {
        type: "code",
        content: `LOAD_CONST 10\nSTORE_NAME a`
      },

      {
        type: "heading",
        content: "Step 3: Optimization by TurboFan"
      },
      {
        type: "text",
        content: "TurboFan observes code while it runs and optimizes hot functions (frequently executed)."
      },
      {
        type: "list",
        items: [
          "Removes unnecessary checks",
          "Inlines functions",
          "Moves values into CPU registers",
          "Optimizes loops aggressively"
        ]
      },

      {
        type: "heading",
        content: "JIT Compilation (Just-In-Time Compilation)"
      },
      {
        type: "text",
        content: "V8 compiles code at runtime, while the program executes. This allows it to optimize based on actual usage patterns."
      },

      {
        type: "heading",
        content: "Interpreter + Compiler = JIT Engine"
      },
      {
        type: "list",
        items: [
          "Interpreter (Ignition) → starts fast",
          "Compiler (TurboFan) → makes code run faster"
        ]
      },

      {
        type: "heading",
        content: "De-Optimization (When V8 Drops Optimization)"
      },
      {
        type: "text",
        content: "If your code changes its behavior, V8 may throw away optimizations to avoid errors."
      },
      {
        type: "code",
        content: `function test(x){ return x + 10; }\ntest(5);   // optimized\ntest('a'); // de-optimized`
      },

      {
        type: "heading",
        content: "Hidden Classes (VERY IMPORTANT)"
      },
      {
        type: "text",
        content: "V8 internally assigns hidden classes to objects to optimize property access. Similar to classes in C++."
      },
      {
        type: "code",
        content: `function Person(){\n  this.name = \"Amit\";\n  this.age = 21;\n}\nconst p = new Person();`
      },
      {
        type: "text",
        content: "If you always define properties in the same order, V8 keeps one optimized hidden class → faster code."
      },

      {
        type: "heading",
        content: "Hidden Class De-Optimization"
      },
      {
        type: "code",
        content: `const obj = {};\nobj.a = 10;\nobj.b = 20; // HiddenClass#1\n\nconst obj2 = {};\nobj2.b = 20;\nobj2.a = 10; // HiddenClass#2 (different order!)`
      },
      {
        type: "text",
        content: "Different initialization order → multiple hidden classes → slower performance."
      },

      {
        type: "heading",
        content: "Inline Caching (Super Important for Speed)"
      },
      {
        type: "text",
        content: "Inline caching stores information about how objects are accessed. If the same property lookup happens repeatedly, V8 shortcuts the lookup using cached results."
      },
      {
        type: "code",
        content: `function printName(obj){ console.log(obj.name); }\nconst user = { name: \"Amit\" };\nprintName(user);\nprintName(user);\nprintName(user); // inline cache kicks in`
      },

      {
        type: "heading",
        content: "Monomorphic vs Polymorphic Inline Caching"
      },
      {
        type: "list",
        items: [
          "Monomorphic → same hidden class every time → fastest",
          "Polymorphic → different shapes of objects → slower",
          "Megamorphic → too many variations → slowest"
        ]
      },

      {
        type: "heading",
        content: "Example of Losing Inline Cache Optimization"
      },
      {
        type: "code",
        content: `function print(obj){ console.log(obj.x); }\nprint({ x: 1 });\nprint({ x: 2 });\nprint({ y: 3 }); // loses monomorphic optimization`
      },

      {
        type: "heading",
        content: "Why Do Engines Use Hidden Classes?"
      },
      {
        type: "list",
        items: [
          "To make property access predictable",
          "To avoid expensive dictionary lookups",
          "To optimize method inlining",
          "To improve code execution speed drastically"
        ]
      },

      {
        type: "heading",
        content: "Optimizing Loops"
      },
      {
        type: "code",
        content: `for (let i = 0; i < arr.length; i++){\n  // V8 tries to move arr.length into register\n}`
      },

      {
        type: "heading",
        content: "Avoid Things That Break Optimizations"
      },
      {
        type: "list",
        items: [
          "Using delete keyword on objects",
          "Adding properties after object creation",
          "Changing property types frequently",
          "Using try/catch in hot code paths",
          "Using arguments object instead of rest/spread",
          "Mixed-type arrays (numbers + strings)"
        ]
      },

      {
        type: "heading",
        content: "Why delete is slow (De-Optimization)"
      },
      {
        type: "code",
        content: `const obj = { a: 10 };\ndelete obj.a; // forces V8 to switch to dictionary mode`
      },

      {
        type: "heading",
        content: "JIT Optimization Example"
      },
      {
        type: "code",
        content: `function add(a, b){ return a + b; }\nadd(10, 20); // optimized\nadd('a', 'b'); // de-optimized`
      },

      {
        type: "heading",
        content: "Summary of Engine Internals"
      },
      {
        type: "list",
        items: [
          "V8 parses → compiles → optimizes → executes code",
          "Ignition creates bytecode; TurboFan optimizes hot functions",
          "Hidden classes optimize object property access",
          "Inline caching remembers object shapes and speeds up calls",
          "Changing data types or shapes de-optimizes code"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. Explain the difference between Ignition and TurboFan.",
          "Q2. What is JIT compilation?",
          "Q3. What are hidden classes and why do they matter?",
          "Q4. Predict de-optimization:\n\nfunction f(x){ return x + 10 };\nf(5);\nf('a');",
          "Q5. What is inline caching?",
          "Q6. Why does changing property order break optimizations?",
          "Q7. What is the difference between monomorphic and polymorphic caching?",
          "Q8. Why is delete slow in JavaScript?",
          "Q9. How does V8 convert JS into machine code?",
          "Q10. Explain how engines optimize loops."
        ]
      }
    ]
  },
  {
    id: "event-propagation-browser-rendering",
    title: "Event Propagation, DOM Internals, Reflow/Repaint & Browser Rendering Pipeline – Deep Dive",
    sections: [
      {
        type: "text",
        content: "The browser is not just a JavaScript runtime — it is a full rendering engine responsible for interpreting HTML, CSS, JavaScript, and user interactions. Understanding event propagation and the rendering pipeline is essential for building high-performance web applications."
      },

      {
        type: "heading",
        content: "DOM (Document Object Model) – Internal Structure"
      },
      {
        type: "text",
        content: "The DOM is a tree-like structure representing the HTML document. Each element is a node with parent-child relationships."
      },
      {
        type: "code",
        content: `<div>\n  <p>Hello</p>\n</div>`
      },

      {
        type: "heading",
        content: "Event Propagation – 3 Phases"
      },
      {
        type: "list",
        items: [
          "1. Capturing Phase (Event travels from window → root → target parent)",
          "2. Target Phase (Event reaches the actual element)",
          "3. Bubbling Phase (Event travels back up target → root → window)"
        ]
      },

      {
        type: "heading",
        content: "Event Capturing Example"
      },
      {
        type: "code",
        content: `element.addEventListener('click', handler, true); // true → capturing`
      },

      {
        type: "heading",
        content: "Event Bubbling Example (Default)"
      },
      {
        type: "code",
        content: `element.addEventListener('click', handler); // bubbling by default`
      },

      {
        type: "heading",
        content: "Propagation Diagram (Text-Based)"
      },
      {
        type: "text",
        content: "window → document → html → body → parent → child → (target) → parent → body → html → document → window"
      },

      {
        type: "heading",
        content: "Stopping Event Propagation"
      },
      {
        type: "list",
        items: [
          "stopPropagation() – stops moving upward/downward",
          "stopImmediatePropagation() – stops other listeners on same element",
          "preventDefault() – stops default action (form submit, link navigation)"
        ]
      },
      {
        type: "code",
        content: `btn.addEventListener('click', function(e){\n  e.stopPropagation();\n});`
      },

      {
        type: "heading",
        content: "Event Delegation (Very Important)"
      },
      {
        type: "text",
        content: "Instead of adding listeners to multiple child elements, add one listener to the parent and handle events using event.target."
      },
      {
        type: "code",
        content: `document.getElementById('list').addEventListener('click', (event) => {\n  if(event.target.tagName === 'LI'){\n    console.log(\"Clicked:\", event.target.textContent);\n  }\n});`
      },

      {
        type: "heading",
        content: "Why Event Delegation Improves Performance"
      },
      {
        type: "list",
        items: [
          "Reduces total event listeners",
          "Reduces memory usage",
          "Handles dynamically added elements",
          "Faster event management"
        ]
      },

      {
        type: "heading",
        content: "DOM Reflow and Repaint – Browser Rendering Engine Internals"
      },
      {
        type: "text",
        content: "Reflow and Repaint are the most expensive operations in the browser. Optimizing them improves performance significantly."
      },

      {
        type: "heading",
        content: "What is Reflow?"
      },
      {
        type: "text",
        content: "Reflow happens when the browser recalculates positions, layout, size of elements. It occurs when layout-affecting properties change."
      },
      {
        type: "list",
        items: [
          "Reflow triggers:",
          "Changing width/height/margin/padding",
          "Adding/removing DOM elements",
          "Resizing window",
          "Changing font size",
          "Changing element position"
        ]
      },

      {
        type: "heading",
        content: "What is Repaint?"
      },
      {
        type: "text",
        content: "Repaint happens when visual styles change but layout is not affected."
      },
      {
        type: "list",
        items: [
          "Repaint triggers:",
          "Changing color",
          "Background",
          "Visibility",
          "Outline"
        ]
      },

      {
        type: "heading",
        content: "Reflow vs Repaint"
      },
      {
        type: "list",
        items: [
          "Reflow is more expensive than Repaint",
          "Repaint only redraws pixels",
          "Reflow recalculates layout"
        ]
      },

      {
        type: "heading",
        content: "Expensive Operations That Cause Reflow"
      },
      {
        type: "list",
        items: [
          "Changing layout in loops",
          "Reading layout values (offsetHeight, scrollTop)",
          "Setting style properties repeatedly",
          "Adding elements one-by-one to DOM"
        ]
      },

      {
        type: "heading",
        content: "How to Reduce Reflow/Repaint (Optimization Tips)"
      },
      {
        type: "list",
        items: [
          "Batch DOM updates together",
          "Use document fragments",
          "Avoid triggering layouts repeatedly",
          "Use CSS classes instead of inline styles",
          "Use requestAnimationFrame for smooth animations"
        ]
      },

      {
        type: "heading",
        content: "Browser Rendering Pipeline (Deep)"
      },
      {
        type: "list",
        items: [
          "1. HTML Parsing → DOM Tree",
          "2. CSS Parsing → CSSOM Tree",
          "3. DOM + CSSOM → Render Tree",
          "4. Layout (Reflow) → calculates positions",
          "5. Paint (Repaint) → fills pixels",
          "6. Composite Layers → GPU rendering"
        ]
      },

      {
        type: "heading",
        content: "Critical Rendering Path (CRP)"
      },
      {
        type: "list",
        items: [
          "Minimize DOM size",
          "Minimize CSS blocking",
          "Avoid heavy JS before rendering",
          "Use async/defer for scripts"
        ]
      },

      {
        type: "heading",
        content: "Layer Creation in Browsers"
      },
      {
        type: "text",
        content: "Browsers create GPU-composited layers for animation-heavy elements."
      },
      {
        type: "code",
        content: `transform: translateZ(0); // forces GPU layer creation`
      },

      {
        type: "heading",
        content: "Layout Thrashing (Very Dangerous)"
      },
      {
        type: "text",
        content: "Happens when JS repeatedly forces layout recalculation inside loops."
      },
      {
        type: "code",
        content: `for(let i=0;i<1000;i++){\n  element.style.width = element.offsetWidth + 1 + 'px'; // forces layout each time\n}`
      },

      {
        type: "heading",
        content: "Fix: Cache Layout Values"
      },
      {
        type: "code",
        content: `let width = element.offsetWidth;\nfor(let i=0;i<1000;i++){\n  width++;\n}\nelement.style.width = width + 'px';`
      },

      {
        type: "heading",
        content: "Summary of Event & Rendering Internals"
      },
      {
        type: "list",
        items: [
          "Events propagate in capture → target → bubble phases",
          "Event delegation improves performance",
          "Reflow is more expensive than repaint",
          "Browsers build DOM → CSSOM → Render Tree → Layout → Paint",
          "Layout thrashing slows down apps",
          "Minimize DOM updates for better performance"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What are the three phases of event propagation?",
          "Q2. Explain event delegation with an example.",
          "Q3. What triggers reflow, and why is it expensive?",
          "Q4. How is repaint different from reflow?",
          "Q5. Predict the output order of event propagation.",
          "Q6. What is layout thrashing and how can you avoid it?",
          "Q7. Draw the browser rendering pipeline in text.",
          "Q8. How do DOM and CSSOM combine to render a webpage?",
          "Q9. Why should you batch DOM updates together?",
          "Q10. What are compositing layers and why do browsers use them?"
        ]
      }
    ]
  },
  {
    id: "advanced-modules-and-bundlers",
    title: "Advanced Modules – ES Modules vs CommonJS, Bundlers, Tree Shaking & Lazy Loading",
    sections: [
      {
        type: "text",
        content: "Modules allow you to split JavaScript code into separate files for better organization, reusability, and maintainability. Understanding the difference between ES Modules (browser) and CommonJS (Node.js) is essential for modern development."
      },

      {
        type: "heading",
        content: "Why Do We Need Modules?"
      },
      {
        type: "list",
        items: [
          "Avoid global variable pollution",
          "Split code into reusable components",
          "Improve maintainability",
          "Enable code sharing between files",
          "Support bundling & optimizations like tree shaking"
        ]
      },

      {
        type: "heading",
        content: "Types of JavaScript Modules"
      },
      {
        type: "list",
        items: [
          "1. ES Modules (ESM) – Browser + Modern JS",
          "2. CommonJS – Node.js (require/export)",
          "3. UMD – Universal Module Definition (older libraries)",
          "4. AMD – Asynchronous Module Definition (RequireJS)"
        ]
      },

      {
        type: "heading",
        content: "ES Modules (Modern JavaScript)"
      },
      {
        type: "text",
        content: "ES Modules use import/export syntax and are statically analyzed at compile time."
      },
      {
        type: "code",
        content: `// file: math.js\nexport const add = (a,b) => a + b;\nexport default function(){ console.log(\"default export\"); }\n\n// file: app.js\nimport def, { add } from './math.js';\nconsole.log(add(2,3));`
      },

      {
        type: "heading",
        content: "CommonJS (Node.js Classic)"
      },
      {
        type: "code",
        content: `// file: math.js\nmodule.exports.add = (a,b) => a + b;\n\n// file: app.js\nconst { add } = require('./math');\nconsole.log(add(2,3));`
      },

      {
        type: "heading",
        content: "Major Differences: ESM vs CommonJS"
      },
      {
        type: "list",
        items: [
          "ESM: import/export (static)",
          "CJS: require/module.exports (dynamic)",
          "ESM supports tree shaking; CJS does not",
          "CJS loads modules synchronously; ESM loads asynchronously",
          "CJS is executed immediately; ESM is hoisted"
        ]
      },

      {
        type: "heading",
        content: "Static vs Dynamic Loading"
      },
      {
        type: "text",
        content: "ES modules are statically analyzed. This means bundlers like Webpack, Rollup, Vite can detect unused exports → enabling tree shaking."
      },

      {
        type: "heading",
        content: "Named Export vs Default Export"
      },
      {
        type: "code",
        content: `export const PI = 3.14;\nexport default function circle(){ return \"circle\"; }\n\nimport circle, { PI } from './shape.js';`
      },

      {
        type: "heading",
        content: "Module Hoisting (Important)"
      },
      {
        type: "text",
        content: "Imports are hoisted to the top of the file and executed before any other code. This avoids TDZ issues but ensures deterministic execution order."
      },

      {
        type: "heading",
        content: "Module Scope (Very Important)"
      },
      {
        type: "text",
        content: "Each module has its own private scope. Variables inside one module are not visible in another unless exported."
      },

      {
        type: "heading",
        content: "Bundlers: Why Do We Need Them?"
      },
      {
        type: "list",
        items: [
          "Browsers cannot load thousands of files quickly",
          "Bundlers combine multiple JS files into one optimized file",
          "Support non-native features like JSX, TypeScript",
          "Compress and minify code for production"
        ]
      },

      {
        type: "heading",
        content: "Popular Bundlers"
      },
      {
        type: "list",
        items: [
          "Webpack",
          "Vite",
          "Rollup",
          "Parcel",
          "esbuild"
        ]
      },

      {
        type: "heading",
        content: "Tree Shaking (Very Important For Performance)"
      },
      {
        type: "text",
        content: "Tree shaking removes unused code during build time. Works only with ES Modules since imports are static."
      },
      {
        type: "code",
        content: `// file: utils.js\nexport function used(){ console.log(\"used\"); }\nexport function unused(){ console.log(\"unused\"); }\n\n// file: app.js\nimport { used } from './utils.js'; // unused() gets removed`
      },

      {
        type: "heading",
        content: "Why CommonJS Cannot Be Tree-Shaken?"
      },
      {
        type: "text",
        content: "Because require() is dynamic, bundlers cannot predict which exports will be used."
      },

      {
        type: "heading",
        content: "Code Splitting"
      },
      {
        type: "text",
        content: "Instead of bundling everything into one file, bundlers can split code into separate chunks that load only when needed."
      },
      {
        type: "code",
        content: `import('./math.js').then(module => {\n  console.log(module.add(2,3));\n});`
      },

      {
        type: "heading",
        content: "Lazy Loading Modules"
      },
      {
        type: "text",
        content: "Lazy loading means loading a module *only when it is needed*, improving startup time."
      },
      {
        type: "code",
        content: `button.addEventListener('click', async () => {\n  const module = await import('./handler.js');\n  module.process();\n});`
      },

      {
        type: "heading",
        content: "Preloading vs Prefetching (Browser Performance)"
      },
      {
        type: "list",
        items: [
          "preload → load immediately (high priority)",
          "prefetch → download in idle time (low priority for future use)"
        ]
      },

      {
        type: "heading",
        content: "Circular Dependencies (Dangerous!)"
      },
      {
        type: "code",
        content: `// a.js\nimport './b.js';\nconsole.log('A');\n\n// b.js\nimport './a.js';\nconsole.log('B');`
      },
      {
        type: "text",
        content: "Circular imports can cause undefined exports and unexpected errors."
      },

      {
        type: "heading",
        content: "Why Tree Shaking Fails Sometimes?"
      },
      {
        type: "list",
        items: [
          "If side effects exist (modifying global object)",
          "If exports are used dynamically",
          "If CJS modules are used",
          "If import * is used sometimes"
        ]
      },

      {
        type: "heading",
        content: "Side Effects (Important for Bundler Optimization)"
      },
      {
        type: "code",
        content: `console.log(\"Running side effect\"); // cannot be removed`
      },

      {
        type: "heading",
        content: "Package.json field: sideEffects"
      },
      {
        type: "code",
        content: `"sideEffects": false`
      },
      {
        type: "text",
        content: "Tells bundlers it is safe to remove unused code."
      },

      {
        type: "heading",
        content: "Summary of Advanced Modules"
      },
      {
        type: "list",
        items: [
          "ESM is modern, static, async, and supports tree shaking",
          "CommonJS is legacy, dynamic, synchronous",
          "Bundlers optimize, compress, split, and transform code",
          "Lazy loading improves performance",
          "Tree shaking removes dead code",
          "Module hoisting ensures deterministic import order"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What is the difference between ESM and CommonJS?",
          "Q2. Why does tree shaking require ES Modules?",
          "Q3. What are named exports and default exports?",
          "Q4. Explain module hoisting.",
          "Q5. What is lazy loading? Give an example.",
          "Q6. Why are circular dependencies dangerous?",
          "Q7. What is the difference between preload and prefetch?",
          "Q8. Explain why require() is not tree-shakeable.",
          "Q9. What are bundlers and why do we need them?",
          "Q10. What is code splitting and how does it improve performance?"
        ]
      }
    ]
  },
  {
    id: "functional-programming-deep",
    title: "Functional Programming in JavaScript – Deep Concepts & Patterns",
    sections: [
      {
        type: "text",
        content: "Functional Programming (FP) is a programming paradigm where everything is treated as a function and data is immutable. JS supports functional concepts because functions are first-class citizens."
      },

      {
        type: "heading",
        content: "Core Principles of Functional Programming"
      },
      {
        type: "list",
        items: [
          "Immutability",
          "Pure functions",
          "No side effects",
          "First-class & higher-order functions",
          "Function composition",
          "Currying & partial application",
          "Declarative code"
        ]
      },

      {
        type: "heading",
        content: "Pure Functions (Very Important)"
      },
      {
        type: "text",
        content: "A pure function always gives the same output for the same input, and has no side effects."
      },
      {
        type: "code",
        content: `function add(a, b){ return a + b; } // pure`
      },

      {
        type: "heading",
        content: "Impure Function Example"
      },
      {
        type: "code",
        content: `let x = 10;\nfunction addToX(y){ x = x + y; } // impure (modifies external state)`
      },

      {
        type: "heading",
        content: "Immutability"
      },
      {
        type: "text",
        content: "In FP, data should not be changed. Create new data instead of modifying old data."
      },
      {
        type: "code",
        content: `const nums = [1,2,3];\nconst newNums = [...nums, 4];`
      },

      {
        type: "heading",
        content: "Higher-Order Functions"
      },
      {
        type: "code",
        content: `const withLogging = fn => (...args) => {\n  console.log(\"Running\", fn.name);\n  return fn(...args);\n};`
      },

      {
        type: "heading",
        content: "Currying (Deep FP Concept)"
      },
      {
        type: "text",
        content: "Currying transforms multi-argument functions into chains of single-argument functions."
      },
      {
        type: "code",
        content: `const sum = a => b => c => a + b + c;\nsum(1)(2)(3);`
      },

      {
        type: "heading",
        content: "Function Composition"
      },
      {
        type: "code",
        content: `const compose = (f, g) => x => f(g(x));\nconst double = x => x * 2;\nconst square = x => x * x;\ncompose(square, double)(5);`
      },

      {
        type: "heading",
        content: "Declarative vs Imperative Code"
      },
      {
        type: "list",
        items: [
          "Imperative → How to do something (step-by-step)",
          "Declarative → What to do (abstracts steps)"
        ]
      },
      {
        type: "code",
        content: `// Imperative\nlet sum1 = 0;\nfor (let i=0; i<nums.length; i++) sum1 += nums[i];\n\n// Declarative\nconst sum2 = nums.reduce((a,b)=>a+b);`
      },

      {
        type: "heading",
        content: "Recursion (Functional Replacement for Loops)"
      },
      {
        type: "code",
        content: `function factorial(n){ return n === 1 ? 1 : n * factorial(n-1); }`
      },

      {
        type: "heading",
        content: "Functors (Advanced FP)"
      },
      {
        type: "text",
        content: "A functor is a container type that supports map() to transform its value."
      },
      {
        type: "code",
        content: `class Box {\n  constructor(value){ this.value = value; }\n  map(fn){ return new Box(fn(this.value)); }\n}\nconst result = new Box(5).map(x => x+2);`
      },

      {
        type: "heading",
        content: "Monads (VERY ADVANCED FP)"
      },
      {
        type: "text",
        content: "A monad is a functor with a flatMap (chain) method, enabling chaining operations that return containers."
      },
      {
        type: "code",
        content: `class Maybe {\n  constructor(value){ this.value = value; }\n  map(fn){ return this.value ? new Maybe(fn(this.value)) : new Maybe(null); }\n  flatMap(fn){ return this.value ? fn(this.value) : new Maybe(null); }\n}\n`
      },

      {
        type: "heading",
        content: "FP in Real Projects"
      },
      {
        type: "list",
        items: [
          "React uses pure components",
          "Redux uses pure reducers",
          "RxJS uses functional streams",
          "Node.js supports declarative async pipelines"
        ]
      },

      {
        type: "heading",
        content: "Summary"
      },
      {
        type: "list",
        items: [
          "FP emphasizes pure functions, immutability, and declarative style",
          "Currying + composition allow function chaining",
          "Functors & monads represent advanced FP concepts",
          "FP reduces bugs by avoiding side effects"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What is a pure function? Give an example.",
          "Q2. Why is immutability important?",
          "Q3. Write a curried multiply function.",
          "Q4. What is the difference between composition and piping?",
          "Q5. Explain functors in simple terms.",
          "Q6. What is a monad and what problem does it solve?",
          "Q7. Convert an imperative loop into a declarative reduce.",
          "Q8. Why is recursion important in FP?",
          "Q9. What are side effects? Give examples.",
          "Q10. Why does React prefer pure functions?"
        ]
      }
    ]
  },
  {
    id: "javascript-security",
    title: "JavaScript Security – XSS, CSRF, Prototype Pollution, CSP & Secure Coding Practices",
    sections: [
      {
        type: "text",
        content: "Security is critical in JavaScript because the browser runs untrusted code and attackers target JS apps heavily. Understanding security vulnerabilities helps you build safe, production-grade applications."
      },

      {
        type: "heading",
        content: "1. XSS – Cross-Site Scripting (VERY IMPORTANT)"
      },
      {
        type: "text",
        content: "XSS happens when attackers inject malicious JavaScript into web pages. It allows stealing cookies, tokens, passwords."
      },
      {
        type: "code",
        content: `<input value="<script>alert('Hacked')</script>">`
      },
      {
        type: "heading",
        content: "Types of XSS"
      },
      {
        type: "list",
        items: [
          "Stored XSS – malicious script stored in DB",
          "Reflected XSS – script comes via URL",
          "DOM XSS – JS modifies the DOM unsafely"
        ]
      },
      {
        type: "heading",
        content: "Preventing XSS"
      },
      {
        type: "list",
        items: [
          "Escape HTML before rendering",
          "Use textContent instead of innerHTML",
          "Sanitize user input",
          "Enable CSP (Content Security Policy)",
          "Avoid dynamic script injection"
        ]
      },

      {
        type: "heading",
        content: "2. CSRF – Cross-Site Request Forgery"
      },
      {
        type: "text",
        content: "CSRF tricks a user into performing unwanted actions while logged in (e.g., unauthorized money transfer)."
      },
      {
        type: "heading",
        content: "Preventing CSRF"
      },
      {
        type: "list",
        items: [
          "Use CSRF tokens",
          "Use SameSite cookies",
          "Use double-submit cookie pattern",
          "Avoid GET for state-changing operations"
        ]
      },

      {
        type: "heading",
        content: "3. Clickjacking"
      },
      {
        type: "text",
        content: "Attacker loads your website inside an invisible iframe and tricks users into clicking buttons."
      },
      {
        type: "heading",
        content: "Prevention"
      },
      {
        type: "list",
        items: [
          "X-Frame-Options: DENY",
          "CSP: frame-ancestors 'none'"
        ]
      },

      {
        type: "heading",
        content: "4. Prototype Pollution (Important for Node.js)"
      },
      {
        type: "text",
        content: "Prototype pollution occurs when an attacker modifies Object.prototype, impacting all objects."
      },
      {
        type: "code",
        content: `JSON.parse('{ "__proto__": { "admin": true } }');`
      },
      {
        type: "heading",
        content: "Prevention"
      },
      {
        type: "list",
        items: [
          "Validate JSON input",
          "Block __proto__, constructor, prototype keys",
          "Use Object.create(null) for secure maps"
        ]
      },

      {
        type: "heading",
        content: "5. Insecure eval() and Function() Usage"
      },
      {
        type: "text",
        content: "eval executes arbitrary JS → extremely dangerous."
      },
      {
        type: "heading",
        content: "Avoid:"
      },
      {
        type: "code",
        content: `eval(userInput);\nnew Function(userCode)();`
      },

      {
        type: "heading",
        content: "6. Cookie Security"
      },
      {
        type: "list",
        items: [
          "HttpOnly (JS cannot read cookie → protects from XSS)",
          "Secure (sent only over HTTPS)",
          "SameSite (protects from CSRF)"
        ]
      },

      {
        type: "heading",
        content: "7. CSP – Content Security Policy"
      },
      {
        type: "text",
        content: "CSP is a browser feature that blocks unauthorized scripts from running."
      },
      {
        type: "code",
        content: `Content-Security-Policy: default-src 'self'; script-src 'self';`
      },

      {
        type: "heading",
        content: "8. Avoid DOM Injection Vulnerabilities"
      },
      {
        type: "code",
        content: `div.innerHTML = userInput; // DANGEROUS`
      },
      {
        type: "text",
        content: "Use safer alternatives:"
      },
      {
        type: "code",
        content: `div.textContent = userInput;`
      },

      {
        type: "heading",
        content: "9. JWT Security (Important for Backend + Frontend)"
      },
      {
        type: "list",
        items: [
          "Don't store JWT in localStorage (susceptible to XSS)",
          "Use HttpOnly cookies",
          "Set expiration times",
          "Validate JWT signature on backend"
        ]
      },

      {
        type: "heading",
        content: "10. Avoid Hardcoding Secrets in Frontend"
      },
      {
        type: "list",
        items: [
          "API keys should never be in client-side JS",
          "Use environment variables on server",
          "Use backend proxy to hide secrets"
        ]
      },

      {
        type: "heading",
        content: "Summary of JavaScript Security"
      },
      {
        type: "list",
        items: [
          "XSS injects malicious JS → sanitize input",
          "CSRF forces unwanted user actions → use tokens",
          "Clickjacking tricks UI → use X-Frame-Options",
          "Prototype pollution compromises objects → validate keys",
          "CSP restricts script execution",
          "Never use eval with user input",
          "Use HttpOnly + SameSite for cookies"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What is XSS and how do you prevent it?",
          "Q2. Difference between Stored, Reflected, and DOM XSS?",
          "Q3. Why is CSRF dangerous and how do CSRF tokens work?",
          "Q4. How does SameSite cookie help protect from CSRF?",
          "Q5. What is prototype pollution?",
          "Q6. Why is eval dangerous?",
          "Q7. Explain CSP and give an example.",
          "Q8. Why should JWT not be stored in localStorage?",
          "Q9. Explain clickjacking with an example.",
          "Q10. How do you securely sanitize user input before rendering?"
        ]
      }
    ]
  },
  {
    id: "advanced-data-structures",
    title: "Advanced Data Structures – Map, Set, WeakMap, WeakSet, Typed Arrays & ArrayBuffer",
    sections: [
      {
        type: "text",
        content: "JavaScript provides modern data structures designed for performance, memory efficiency, and complex applications like graphics, cryptography, and multi-threading. Understanding these structures helps you build scalable and optimized apps."
      },

      {
        type: "heading",
        content: "1. Map – Key-Value Store with Any Key Type"
      },
      {
        type: "text",
        content: "Map allows keys of any type (objects, functions, arrays). Unlike objects, Map preserves insertion order and has better performance for frequent additions/removals."
      },
      {
        type: "code",
        content: `const map = new Map();\nmap.set('name', 'Rakshit');\nmap.set({ id: 1 }, 'value');\nconsole.log(map.get('name'));`
      },
      {
        type: "heading",
        content: "Why Map is Better than Object?"
      },
      {
        type: "list",
        items: [
          "Keys can be objects",
          "Maintains insertion order",
          "Faster for large datasets",
          "Size property for counting entries"
        ]
      },
      {
        type: "code",
        content: `console.log(map.size);`
      },

      {
        type: "heading",
        content: "2. Set – Collection of Unique Values"
      },
      {
        type: "text",
        content: "Set stores unique values (no duplicates). Useful for filtering duplicates and quick membership checks."
      },
      {
        type: "code",
        content: `const set = new Set([1,2,2,3]);\nconsole.log(set); // 1,2,3`
      },

      {
        type: "heading",
        content: "Set Use Cases"
      },
      {
        type: "list",
        items: [
          "Remove duplicates from arrays",
          "Check if element exists efficiently",
          "Track unique IDs"
        ]
      },
      {
        type: "code",
        content: `const nums = [1,1,2,3];\nconst unique = [...new Set(nums)];`
      },

      {
        type: "heading",
        content: "3. WeakMap – Keys Must Be Objects & Are Weakly Held"
      },
      {
        type: "text",
        content: "WeakMap keys are not prevented from garbage collection. If the key object has no other reference, it disappears automatically."
      },
      {
        type: "code",
        content: `let obj = { user: 'Amit' };\nconst wm = new WeakMap();\nwm.set(obj, 'data');\nobj = null; // garbage collected automatically`
      },
      {
        type: "heading",
        content: "Why WeakMap?"
      },
      {
        type: "list",
        items: [
          "Avoid memory leaks",
          "Useful for private object data",
          "Keys auto-delete when objects are garbage collected"
        ]
      },

      {
        type: "heading",
        content: "4. WeakSet – Weak Object Collection"
      },
      {
        type: "text",
        content: "WeakSet stores objects weakly, so they can be garbage collected. Useful for tracking object existence without preventing GC."
      },
      {
        type: "code",
        content: `let user = { name: 'Rakshit' };\nconst ws = new WeakSet();\nws.add(user);\nuser = null; // removed automatically`
      },

      {
        type: "heading",
        content: "WeakSet Limitations"
      },
      {
        type: "list",
        items: [
          "Only object values allowed",
          "Cannot iterate (no forEach, no size)",
          "Used only for memory-safe tracking"
        ]
      },

      {
        type: "heading",
        content: "5. Typed Arrays (Low-Level Binary Data)"
      },
      {
        type: "text",
        content: "Typed arrays allow handling raw binary data. Used in WebGL, WebAssembly, graphics, crypto, video processing."
      },
      {
        type: "list",
        items: [
          "Int8Array",
          "Uint8Array",
          "Uint8ClampedArray",
          "Int16Array",
          "Int32Array",
          "Float32Array",
          "Float64Array"
        ]
      },
      {
        type: "code",
        content: `const arr = new Int16Array(4);\narr[0] = 500;\nconsole.log(arr);`
      },

      {
        type: "heading",
        content: "Why Typed Arrays?"
      },
      {
        type: "list",
        items: [
          "Fast processing of binary data",
          "Consistent in-memory layout",
          "Used for real-time performance (games, GPUs)"
        ]
      },

      {
        type: "heading",
        content: "6. ArrayBuffer – Raw Binary Memory"
      },
      {
        type: "text",
        content: "ArrayBuffer reserves a fixed block of memory. Typed arrays read/write into that buffer."
      },
      {
        type: "code",
        content: `const buffer = new ArrayBuffer(16); // 16 bytes\nconst view = new Uint8Array(buffer);\nview[0] = 255;`
      },

      {
        type: "heading",
        content: "ArrayBuffer Use Cases"
      },
      {
        type: "list",
        items: [
          "WebAssembly memory",
          "WebGL graphics",
          "File processing",
          "Networking (binary protocols)"
        ]
      },

      {
        type: "heading",
        content: "7. DataView – Flexible Binary Reader"
      },
      {
        type: "text",
        content: "DataView allows reading different data types from the same buffer."
      },
      {
        type: "code",
        content: `const buf = new ArrayBuffer(8);\nconst dv = new DataView(buf);\ndv.setInt16(0, 300);\nconsole.log(dv.getInt16(0));`
      },

      {
        type: "heading",
        content: "Why DataView?"
      },
      {
        type: "list",
        items: [
          "Handles big-endian/little-endian formats",
          "Reads multiple types (int, float) from same buffer",
          "Used in network protocols & binary file parsing"
        ]
      },

      {
        type: "heading",
        content: "8. SharedArrayBuffer & Atomics (Advanced Concurrency)"
      },
      {
        type: "text",
        content: "SharedArrayBuffer allows memory sharing between Web Workers → true multithreading in JS."
      },
      {
        type: "code",
        content: `const shared = new SharedArrayBuffer(4);\nconst intArr = new Int32Array(shared);\nAtomics.store(intArr, 0, 100);`
      },
      {
        type: "heading",
        content: "Use Cases"
      },
      {
        type: "list",
        items: [
          "Parallel processing",
          "High-performance computing",
          "Real-time data sync between threads"
        ]
      },

      {
        type: "heading",
        content: "9. Performance Comparison Table"
      },
      {
        type: "list",
        items: [
          "Object → flexible, slow for large data",
          "Map → fast key-value operations",
          "Set → fast unique collections",
          "WeakMap/WeakSet → memory-safe storage",
          "Typed arrays → fastest for numeric data",
          "ArrayBuffer → low-level memory control"
        ]
      },

      {
        type: "heading",
        content: "Summary"
      },
      {
        type: "list",
        items: [
          "Map and Set offer high performance for large datasets",
          "WeakMap & WeakSet prevent memory leaks",
          "Typed arrays + ArrayBuffer allow low-level binary operations",
          "SharedArrayBuffer enables multi-threading",
          "DataView reads flexible binary formats"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. Why is Map faster than Object for large datasets?",
          "Q2. What is the difference between Set and WeakSet?",
          "Q3. How does WeakMap help prevent memory leaks?",
          "Q4. What is ArrayBuffer used for?",
          "Q5. Why do typed arrays exist when JS already has normal arrays?",
          "Q6. Write code to remove duplicates using Set.",
          "Q7. Explain the difference: Uint8Array vs Float32Array.",
          "Q8. What is the role of DataView?",
          "Q9. How does SharedArrayBuffer enable multi-threading?",
          "Q10. When should you choose Map over Object?"
        ]
      }
    ]
  },
  {
    id: "advanced-networking",
    title: "Advanced Networking in JavaScript – HTTP, CORS, Fetch Internals, WebSockets, SSE, Long Polling",
    sections: [
      {
        type: "text",
        content: "Modern web applications rely heavily on network communication. JavaScript provides multiple techniques to fetch data, interact with APIs, and build real-time apps. Understanding networking deeply is essential for full-stack and frontend developers."
      },

      {
        type: "heading",
        content: "1. HTTP Basics (Very Important)"
      },
      {
        type: "list",
        items: [
          "HTTP is a stateless request-response protocol",
          "Clients (browsers) send requests; servers send responses",
          "Uses methods like GET, POST, PUT, DELETE"
        ]
      },

      {
        type: "heading",
        content: "Common HTTP Methods"
      },
      {
        type: "list",
        items: [
          "GET → Fetch data",
          "POST → Create data",
          "PUT → Replace data",
          "PATCH → Update partially",
          "DELETE → Remove data"
        ]
      },

      {
        type: "heading",
        content: "2. HTTP Request Lifecycle (Internal)"
      },
      {
        type: "text",
        content: "1. Browser prepares request\n2. DNS lookup → finds server IP\n3. TCP connection established\n4. HTTPS handshake (if HTTPS)\n5. Request sent\n6. Server responds with status + headers + body\n7. Browser processes response"
      },

      {
        type: "heading",
        content: "3. Fetch API Internals"
      },
      {
        type: "code",
        content: `fetch('https://api.com/data')\n  .then(res => res.json())\n  .then(data => console.log(data));`
      },
      {
        type: "list",
        items: [
          "Fetch returns a Promise",
          "Response body can be read only once",
          "fetch() does NOT reject on HTTP 4xx or 5xx",
          "fetch() rejects only on network error"
        ]
      },

      {
        type: "heading",
        content: "4. CORS (Cross-Origin Resource Sharing)"
      },
      {
        type: "text",
        content: "CORS is a browser security feature that prevents unauthorized cross-origin requests."
      },
      {
        type: "list",
        items: [
          "Browser blocks request → if server does not allow origin",
          "Server must return: Access-Control-Allow-Origin"
        ]
      },
      {
        type: "code",
        content: `Access-Control-Allow-Origin: https://myapp.com`
      },

      {
        type: "heading",
        content: "What Causes CORS Errors?"
      },
      {
        type: "list",
        items: [
          "Frontend origin ≠ Backend origin",
          "Server missing CORS headers",
          "Invalid HTTP method for preflight",
          "Missing Access-Control-Allow-Headers"
        ]
      },

      {
        type: "heading",
        content: "5. Preflight Request (OPTIONS)"
      },
      {
        type: "text",
        content: "Browser sends OPTIONS request to check if server allows the actual request."
      },
      {
        type: "code",
        content: `Access-Control-Allow-Methods: GET, POST, PUT`
      },

      {
        type: "heading",
        content: "6. REST API Structure"
      },
      {
        type: "code",
        content: `/users → GET (list)\n/users/1 → GET (single)\n/users → POST (create)\n/users/1 → PUT/PATCH (update)\n/users/1 → DELETE`
      },

      {
        type: "heading",
        content: "7. HTTP Headers (Important)"
      },
      {
        type: "list",
        items: [
          "Content-Type",
          "Authorization",
          "Accept",
          "Cookie",
          "Cache-Control",
          "User-Agent"
        ]
      },

      {
        type: "heading",
        content: "8. Authentication → Token-Based"
      },
      {
        type: "code",
        content: `fetch('/profile', {\n  headers: {\n    Authorization: 'Bearer <token>'\n  }\n});`
      },

      {
        type: "heading",
        content: "9. Real-Time Communication Options"
      },
      {
        type: "list",
        items: [
          "Long Polling",
          "Server-Sent Events (SSE)",
          "WebSockets"
        ]
      },

      {
        type: "heading",
        content: "Long Polling"
      },
      {
        type: "text",
        content: "Client repeatedly requests server → server responds when something new happens."
      },
      {
        type: "code",
        content: `async function poll(){\n  const response = await fetch('/updates');\n  const data = await response.json();\n  console.log(data);\n  poll();\n}\npoll();`
      },

      {
        type: "heading",
        content: "10. Server-Sent Events (One-way Streaming)"
      },
      {
        type: "text",
        content: "Server continuously pushes updates to the browser."
      },
      {
        type: "code",
        content: `const sse = new EventSource('/stream');\nsse.onmessage = e => console.log(e.data);`
      },

      {
        type: "heading",
        content: "Use Cases of SSE"
      },
      {
        type: "list",
        items: [
          "Live scores",
          "Stock prices",
          "Notifications",
          "Live dashboards"
        ]
      },

      {
        type: "heading",
        content: "11. WebSockets (Real-Time, Bidirectional)"
      },
      {
        type: "text",
        content: "WebSockets allow full-duplex (two-way) communication between client and server."
      },
      {
        type: "code",
        content: `const socket = new WebSocket('ws://localhost:8080');\nsocket.onmessage = msg => console.log(msg.data);\nsocket.send('Hello server');`
      },

      {
        type: "heading",
        content: "WebSockets vs REST"
      },
      {
        type: "list",
        items: [
          "REST → one request, one response",
          "WebSockets → continuous two-way communication"
        ]
      },

      {
        type: "heading",
        content: "12. HTTP/2 & HTTP/3 (Modern Networking)"
      },
      {
        type: "list",
        items: [
          "Multiplexing → multiple requests in one connection",
          "Header compression",
          "Server push (deprecated but useful concept)",
          "HTTP/3 uses QUIC protocol (UDP-based)"
        ]
      },

      {
        type: "heading",
        content: "13. Fetch Streaming (ReadableStream)"
      },
      {
        type: "text",
        content: "Allows partial reading of large responses (e.g., video streaming)."
      },
      {
        type: "code",
        content: `const res = await fetch('/video');\nconst reader = res.body.getReader();`
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. Explain how fetch() works internally.",
          "Q2. Why do servers need to send CORS headers?",
          "Q3. What causes a CORS preflight request?",
          "Q4. Compare WebSockets vs SSE.",
          "Q5. What is long polling?",
          "Q6. Why does fetch not reject on 404?",
          "Q7. What is HTTP/2 multiplexing?",
          "Q8. What is the Authorization header used for?",
          "Q9. Why is WebSocket good for chat apps?",
          "Q10. How does DNS lookup work?"
        ]
      }
    ]
  },
  {
    id: "javascript-design-patterns",
    title: "JavaScript Design Patterns – Singleton, Factory, Observer, Decorator, Module, Strategy, Prototype",
    sections: [
      {
        type: "text",
        content: "Design patterns are reusable solutions to common software problems. They help structure your code better, improve readability, and follow industry best practices. JavaScript, being flexible and dynamic, supports many classical and modern design patterns."
      },

      {
        type: "heading",
        content: "1. Singleton Pattern"
      },
      {
        type: "text",
        content: "Ensures only one instance of a class exists. Used for configs, DB connections, global services."
      },
      {
        type: "code",
        content: `class Singleton {\n  constructor(){\n    if(Singleton.instance) return Singleton.instance;\n    this.value = 100;\n    Singleton.instance = this;\n  }\n}\nconst a = new Singleton();\nconst b = new Singleton();\nconsole.log(a === b); // true`
      },

      {
        type: "heading",
        content: "2. Factory Pattern"
      },
      {
        type: "text",
        content: "Factory creates objects without exposing creation logic. Useful when creating many similar objects."
      },
      {
        type: "code",
        content: `function userFactory(role){\n  if(role === 'admin') return { canEdit: true };\n  return { canEdit: false };\n}\nconsole.log(userFactory('admin'));`
      },

      {
        type: "heading",
        content: "3. Observer Pattern (Very Important)"
      },
      {
        type: "text",
        content: "Many objects subscribe to one subject, which notifies them when something changes."
      },
      {
        type: "code",
        content: `class Subject {\n  constructor(){ this.observers = []; }\n  subscribe(fn){ this.observers.push(fn); }\n  notify(data){ this.observers.forEach(fn => fn(data)); }\n}\nconst subject = new Subject();\nsubject.subscribe(data => console.log(\"Received:\", data));\nsubject.notify(\"Hello observers\");`
      },
      {
        type: "text",
        content: "Used in: EventEmitter, Redux, RxJS, UI events"
      },

      {
        type: "heading",
        content: "4. Decorator Pattern"
      },
      {
        type: "text",
        content: "Adds new behavior to objects without modifying original code."
      },
      {
        type: "code",
        content: `function addLogging(fn){\n  return function(...args){\n    console.log('Arguments:', args);\n    return fn(...args);\n  }\n}\nconst sum = (a,b)=>a+b;\nconst loggedSum = addLogging(sum);\nloggedSum(4,5);`
      },

      {
        type: "heading",
        content: "5. Module Pattern (Encapsulation)"
      },
      {
        type: "text",
        content: "Encapsulates variables and exposes only public methods."
      },
      {
        type: "code",
        content: `const Counter = (function(){\n  let count = 0;\n  return {\n    increment(){ count++; },\n    get(){ return count; }\n  }\n})();\nCounter.increment();`
      },

      {
        type: "heading",
        content: "6. Strategy Pattern"
      },
      {
        type: "text",
        content: "Defines different algorithms and switches between them dynamically."
      },
      {
        type: "code",
        content: `const strategies = {\n  add: (a,b)=>a+b,\n  multiply: (a,b)=>a*b\n};\nfunction calculate(strategy, a, b){ return strategies[strategy](a,b); }\nconsole.log(calculate('add', 2, 3));`
      },

      {
        type: "heading",
        content: "7. Prototype Pattern"
      },
      {
        type: "text",
        content: "Cloning existing objects instead of creating from scratch."
      },
      {
        type: "code",
        content: `const human = { species: 'human' };\nconst person = Object.create(human);\nperson.name = 'Amit';`
      },

      {
        type: "heading",
        content: "8. Command Pattern (Common in Apps)"
      },
      {
        type: "text",
        content: "Encapsulates actions as objects → undo/redo systems, UI commands."
      },
      {
        type: "code",
        content: `class Command {\n  execute(){ console.log('Executing'); }\n}\nnew Command().execute();`
      },

      {
        type: "heading",
        content: "9. Middleware Pattern (Used in Express, Redux)"
      },
      {
        type: "code",
        content: `const middleware1 = next => action => {\n  console.log('MW1');\n  next(action);\n};`
      },

      {
        type: "heading",
        content: "10. Summary of Design Patterns"
      },
      {
        type: "list",
        items: [
          "Singleton → one instance",
          "Factory → object creation logic",
          "Observer → pub/sub communication",
          "Decorator → add behavior",
          "Module Pattern → encapsulation",
          "Strategy → choose algorithm dynamically",
          "Prototype → cloning via __proto__",
          "Command → encapsulate actions"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What problem does Singleton solve?",
          "Q2. What is the Observer pattern? Give real-world examples.",
          "Q3. Implement a simple Factory for creating cars.",
          "Q4. Why is Decorator useful in functional programming?",
          "Q5. Explain Module pattern using IIFE.",
          "Q6. What is the difference between Strategy and Factory?",
          "Q7. Implement a simple Strategy pattern for sorting.",
          "Q8. When should we use Command pattern?",
          "Q9. Explain Prototype pattern in JavaScript.",
          "Q10. Why are design patterns important for maintainable apps?"
        ]
      }
    ]
  },
  {
    id: "advanced-browser-apis",
    title: "Advanced Browser APIs – Intersection Observer, Mutation Observer, Web Workers, Service Workers, Push API, WebRTC",
    sections: [
      {
        type: "text",
        content: "Modern browsers provide powerful APIs that allow JavaScript to perform tasks like background processing, caching, observing DOM changes, real-time communication, and lazy loading. These APIs improve performance and enable advanced features in modern web apps."
      },

      {
        type: "heading",
        content: "1. Intersection Observer (Lazy Loading Images + Infinite Scroll)"
      },
      {
        type: "text",
        content: "Intersection Observer detects when an element enters or leaves the viewport. Useful for lazy loading, ads visibility, infinite scroll."
      },
      {
        type: "code",
        content: `const observer = new IntersectionObserver((entries)=>{\n  entries.forEach(entry => {\n    if(entry.isIntersecting){\n      console.log('Visible');\n    }\n  });\n});\nobserver.observe(document.querySelector('#target'));`
      },

      {
        type: "heading",
        content: "Use Cases"
      },
      {
        type: "list",
        items: [
          "Lazy loading images",
          "Trigger animations on scroll",
          "Infinite scrolling",
          "Ad visibility tracking"
        ]
      },

      {
        type: "heading",
        content: "2. Mutation Observer (Detect DOM Changes)"
      },
      {
        type: "text",
        content: "Mutation Observer watches DOM changes in real time."
      },
      {
        type: "code",
        content: `const observer = new MutationObserver(mutations => {\n  mutations.forEach(m => console.log(m));\n});\nobserver.observe(document.body, { childList: true, subtree: true });`
      },
      {
        type: "list",
        items: [
          "Detect new elements added dynamically",
          "React to DOM changes",
          "Detect attribute changes",
          "Virtual DOM optimizations"
        ]
      },

      {
        type: "heading",
        content: "3. Web Workers (Multithreading in JS)"
      },
      {
        type: "text",
        content: "Web Workers run JavaScript in background threads. They prevent UI freezing during heavy computations."
      },
      {
        type: "code",
        content: `// worker.js\nself.onmessage = (e) => {\n  self.postMessage(e.data * 2);\n}\n\n// main.js\nconst worker = new Worker('worker.js');\nworker.postMessage(10);\nworker.onmessage = (e) => console.log(e.data);`
      },

      {
        type: "heading",
        content: "Use Cases"
      },
      {
        type: "list",
        items: [
          "Large computations",
          "Image/Video processing",
          "Encryption/Decryption",
          "Machine learning models",
          "Data parsing"
        ]
      },

      {
        type: "heading",
        content: "4. Service Workers (Offline Apps + Caching)"
      },
      {
        type: "text",
        content: "Service workers run in the background and enable offline functionality, caching, push notifications, and PWA."
      },
      {
        type: "code",
        content: `self.addEventListener('fetch', event => {\n  event.respondWith(\n    caches.match(event.request).then(res => res || fetch(event.request))\n  );\n});`
      },

      {
        type: "heading",
        content: "Capabilities of Service Workers"
      },
      {
        type: "list",
        items: [
          "Offline caching",
          "Intercept network requests",
          "Push notifications",
          "Background sync",
          "Used in PWA (Progressive Web Apps)"
        ]
      },

      {
        type: "heading",
        content: "5. Push API (Browser Notifications)"
      },
      {
        type: "code",
        content: `Notification.requestPermission().then(result => {\n  if(result === 'granted'){ new Notification('Hello!'); }\n});`
      },

      {
        type: "heading",
        content: "6. WebRTC (Real-time Audio/Video/Data)"
      },
      {
        type: "text",
        content: "WebRTC allows P2P communication between browsers → used in video calling apps."
      },
      {
        type: "code",
        content: `navigator.mediaDevices.getUserMedia({ video: true })\n  .then(stream => video.srcObject = stream);`
      },

      {
        type: "heading",
        content: "WebRTC Use Cases"
      },
      {
        type: "list",
        items: [
          "Google Meet / Zoom clone",
          "Peer-to-peer file sharing",
          "Live streaming",
          "Real-time games"
        ]
      },

      {
        type: "heading",
        content: "Summary"
      },
      {
        type: "list",
        items: [
          "Intersection Observer → lazy loading + scroll events",
          "Mutation Observer → detects DOM changes",
          "Web Workers → multithreading",
          "Service Workers → offline + caching + PWA",
          "Push API → notifications",
          "WebRTC → real-time audio/video/data"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What is intersection observer and where is it useful?",
          "Q2. Difference between MutationObserver and IntersectionObserver?",
          "Q3. Why do we use Web Workers?",
          "Q4. What is the difference between Service Worker and Web Worker?",
          "Q5. Explain PWA and role of service worker.",
          "Q6. Write code to lazy load an image.",
          "Q7. What is WebRTC and list two use cases.",
          "Q8. Why can't service workers access DOM?",
          "Q9. What is push API used for?",
          "Q10. Explain background sync in service workers."
        ]
      }
    ]
  },
  {
    id: "regex-deep-dive",
    title: "Regular Expressions – Deep Dive into Patterns, Groups, Lookaheads, Lookbehinds, Captures",
    sections: [
      {
        type: "text",
        content: "Regular expressions (regex) are patterns used to match text. They are extremely powerful for validation, searching, cleaning data, parsers, and text processing."
      },

      {
        type: "heading",
        content: "1. Regex Basics"
      },
      {
        type: "code",
        content: `/hello/.test('hello world'); // true`
      },

      {
        type: "heading",
        content: "Common Regex Tokens"
      },
      {
        type: "list",
        items: [
          ". → any character",
          "\\d → digit",
          "\\w → word character",
          "\\s → whitespace",
          "^ → start of string",
          "$ → end of string",
          "+ → one or more",
          "* → zero or more",
          "? → optional"
        ]
      },

      {
        type: "heading",
        content: "2. Flags"
      },
      {
        type: "list",
        items: [
          "g → global",
          "i → case insensitive",
          "m → multiline",
          "s → dot matches newline",
          "u → Unicode",
          "y → sticky"
        ]
      },

      {
        type: "heading",
        content: "3. Character Classes"
      },
      {
        type: "code",
        content: `/[abc]/.test('a'); // true\n/[0-9]/.test('7');`
      },

      {
        type: "heading",
        content: "4. Groups (Capturing)"
      },
      {
        type: "code",
        content: `const regex = /(\\w+)-(\\w+)/;\nconst result = 'hello-world'.match(regex);\nconsole.log(result[1], result[2]);`
      },

      {
        type: "heading",
        content: "5. Non-Capturing Groups"
      },
      {
        type: "code",
        content: `/(?:hello)-world/`
      },

      {
        type: "heading",
        content: "6. Lookaheads"
      },
      {
        type: "text",
        content: "Lookaheads match a pattern only if something comes after it."
      },
      {
        type: "code",
        content: `/\\d+(?=px)/.exec('20px'); // returns 20`
      },

      {
        type: "heading",
        content: "7. Negative Lookahead"
      },
      {
        type: "code",
        content: `/^(?!admin)/.test('user123'); // true`
      },

      {
        type: "heading",
        content: "8. Lookbehinds"
      },
      {
        type: "code",
        content: `/(?<=#)\\w+/.exec('#hello'); // hello`
      },

      {
        type: "heading",
        content: "9. Greedy vs Lazy Matching"
      },
      {
        type: "code",
        content: `/.+/.exec('hello world'); // greedy → whole string\n/.+? /.exec('hello world'); // lazy → 'hello '`
      },

      {
        type: "heading",
        content: "10. Practical Uses"
      },
      {
        type: "list",
        items: [
          "Email validation",
          "Password strength",
          "Remove HTML tags",
          "Extract numbers",
          "Search text"
        ]
      },
      {
        type: "code",
        content: `/<[^>]*>/g // remove HTML tags`
      },

      {
        type: "heading",
        content: "Summary"
      },
      {
        type: "list",
        items: [
          "Regex is powerful for pattern matching",
          "Groups help capture parts of text",
          "Lookaheads & lookbehinds allow context-based matching",
          "Greedy vs lazy affects how much text is captured"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. Write regex to validate email.",
          "Q2. Extract all numbers from a string.",
          "Q3. Write regex for password: 8+ chars, numbers + letters.",
          "Q4. What is the difference between greedy and lazy?",
          "Q5. Write regex to match words that DO NOT start with 'a'.",
          "Q6. Use lookahead to match number followed by 'kg'.",
          "Q7. Use lookbehind to extract text after @.",
          "Q8. Explain difference between capturing and non-capturing groups.",
          "Q9. What does the s flag do?",
          "Q10. Write regex for Indian mobile number."
        ]
      }
    ]
  },
  {
    id: "performance-optimization",
    title: "Performance Optimization in JavaScript – Memory, CPU, Rendering, Caching, Big-O",
    sections: [
      {
        type: "text",
        content: "Performance optimization involves improving how fast JavaScript executes, how quickly the browser renders the page, and how efficiently memory is used. Poor performance leads to slow apps, high CPU usage, and bad user experience."
      },

      {
        type: "heading",
        content: "1. Big-O Complexity (Important For Coding Interviews)"
      },
      {
        type: "list",
        items: [
          "O(1) → constant",
          "O(n) → linear",
          "O(n²) → nested loops",
          "O(log n) → binary search",
          "O(n log n) → sorting algorithms"
        ]
      },

      {
        type: "heading",
        content: "2. Debouncing"
      },
      {
        type: "text",
        content: "Delays execution until the user stops triggering the event."
      },
      {
        type: "code",
        content: `function debounce(fn, delay){\n  let timer;\n  return function(...args){\n    clearTimeout(timer);\n    timer = setTimeout(()=>fn(...args), delay);\n  }\n}`
      },

      {
        type: "heading",
        content: "3. Throttling"
      },
      {
        type: "text",
        content: "Ensures function runs at most once in a specific time interval."
      },
      {
        type: "code",
        content: `function throttle(fn, limit){\n  let flag = true;\n  return function(...args){\n    if(flag){ fn(...args); flag = false;\n      setTimeout(()=> flag = true, limit);\n    }\n  }\n}`
      },

      {
        type: "heading",
        content: "4. Memoization (Cache Results)"
      },
      {
        type: "code",
        content: `function memoize(fn){\n  const cache = {};\n  return function(n){\n    if(cache[n]) return cache[n];\n    return cache[n] = fn(n);\n  }\n}`
      },

      {
        type: "heading",
        content: "5. Minimize DOM Reflows & Repaints"
      },
      {
        type: "list",
        items: [
          "Batch DOM updates",
          "Avoid layout thrashing",
          "Use document fragments",
          "Use CSS classes instead of inline styles"
        ]
      },

      {
        type: "heading",
        content: "6. Use requestAnimationFrame for Animations"
      },
      {
        type: "code",
        content: `function animate(){\n  box.style.left = box.offsetLeft + 1 + 'px';\n  requestAnimationFrame(animate);\n}\nrequestAnimationFrame(animate);`
      },

      {
        type: "heading",
        content: "7. Avoid Blocking the Main Thread"
      },
      {
        type: "list",
        items: [
          "Use Web Workers for heavy computations",
          "Avoid long loops",
          "Break tasks with setTimeout or requestIdleCallback"
        ]
      },

      {
        type: "heading",
        content: "8. Lazy Loading Images & Components"
      },
      {
        type: "text",
        content: "Load only what is visible. Improves page speed."
      },
      {
        type: "code",
        content: `<img loading=\"lazy\" src=\"image.jpg\" />`
      },

      {
        type: "heading",
        content: "9. Code Splitting & Tree Shaking"
      },
      {
        type: "list",
        items: [
          "Remove unused code",
          "Split bundles to avoid huge JS files",
          "Load modules only when needed"
        ]
      },

      {
        type: "heading",
        content: "10. Minimize Memory Leaks"
      },
      {
        type: "list",
        items: [
          "Remove event listeners",
          "Avoid storing large objects in closures",
          "Use WeakMap/WeakSet for temporary references",
          "Clear timers and intervals"
        ]
      },

      {
        type: "heading",
        content: "11. Network Optimization"
      },
      {
        type: "list",
        items: [
          "Use caching headers",
          "Compress responses (gzip/br)",
          "Use CDN",
          "Preload critical resources"
        ]
      },

      {
        type: "heading",
        content: "12. Summary"
      },
      {
        type: "list",
        items: [
          "Use debounce/throttle for event-heavy actions",
          "Use memoization for expensive functions",
          "Optimize DOM interactions",
          "Use lazy loading + code splitting",
          "Avoid blocking main thread"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. Difference between debounce and throttle?",
          "Q2. Why does layout thrashing occur?",
          "Q3. How does memoization improve performance?",
          "Q4. What is the difference between render, reflow, and repaint?",
          "Q5. Explain requestAnimationFrame.",
          "Q6. How does lazy loading improve performance?",
          "Q7. How do you detect memory leaks?",
          "Q8. What are Web Workers used for?",
          "Q9. Write a debounce function manually.",
          "Q10. Why is code splitting necessary in modern apps?"
        ]
      }
    ]
  },
  {
    id: "javascript-engine-internals",
    title: "JavaScript Engine Deep Dive – V8, Ignition, TurboFan, Bytecode, JIT Compilation, Inline Caching",
    sections: [
      {
        type: "text",
        content: "JavaScript engines like V8 (used in Chrome & Node.js) convert your JS code into machine code. Understanding this process is crucial for writing optimized programs."
      },

      {
        type: "heading",
        content: "1. How JS Code Executes Inside V8"
      },
      {
        type: "list",
        items: [
          "Step 1 → Parsing (tokenizer + AST creation)",
          "Step 2 → Interpreter (Ignition) generates bytecode",
          "Step 3 → Profiler identifies hot code",
          "Step 4 → TurboFan (JIT compiler) generates optimized machine code",
          "Step 5 → If assumptions break → deopt (fallback to bytecode)"
        ]
      },

      {
        type: "heading",
        content: "2. Ignition – V8’s Interpreter"
      },
      {
        type: "text",
        content: "Ignition reads JS and outputs bytecode. Bytecode is a compact, low-level instruction set."
      },
      {
        type: "code",
        content: `// Example of bytecode (simplified)\nLdaConstant 0\nStar r1\nAdd r1, r2`
      },

      {
        type: "heading",
        content: "3. TurboFan – V8’s Optimizing Compiler"
      },
      {
        type: "list",
        items: [
          "Takes bytecode from Ignition",
          "Generates highly optimized machine code",
          "Optimizes only hot functions (frequently executed)",
          "Uses speculative optimization"
        ]
      },

      {
        type: "heading",
        content: "4. Deoptimization (Deopt)"
      },
      {
        type: "text",
        content: "If assumptions break (like type changes), TurboFan discards optimized code and reverts to bytecode."
      },
      {
        type: "code",
        content: `function test(a){ return a + 10; }\ntest(5);   // optimized\ntest('x'); // deopt (type change)`
      },

      {
        type: "heading",
        content: "5. Hidden Classes"
      },
      {
        type: "text",
        content: "V8 assigns hidden classes to objects to optimize property access. Changing structure hurts performance."
      },
      {
        type: "code",
        content: `function User(name){ this.name = name; this.age = 20; }\nconst u = new User('Amit');`
      },
      {
        type: "heading",
        content: "Bad Example (Breaks Hidden Classes)"
      },
      {
        type: "code",
        content: `obj.a = 1;\nobj.b = 2;\nobj.c = 3;\n// instead of declaring all in constructor`
      },

      {
        type: "heading",
        content: "6. Inline Caching (IC)"
      },
      {
        type: "text",
        content: "V8 remembers where a property exists in memory → speeds up repeated access."
      },
      {
        type: "code",
        content: `function printName(user){ console.log(user.name); }\nprintName({name:'A'});\nprintName({name:'B'}); // fast due to inline caching`
      },

      {
        type: "heading",
        content: "7. Why Understanding V8 Helps You"
      },
      {
        type: "list",
        items: [
          "Write more performant code",
          "Avoid deoptimization triggers",
          "Reduce memory usage",
          "Optimize heavy loops and functions"
        ]
      },

      {
        type: "heading",
        content: "8. Common Deoptimization Triggers"
      },
      {
        type: "list",
        items: [
          "Changing object shape",
          "Using try/catch inside hot functions",
          "Using arguments object",
          "Modifying prototypes",
          "Switching variable types frequently"
        ]
      },

      {
        type: "heading",
        content: "Summary"
      },
      {
        type: "list",
        items: [
          "Ignition → interpreter generating bytecode",
          "TurboFan → optimized machine code",
          "Inline caching improves repeated access",
          "Hidden classes speed up objects",
          "Type changes cause deoptimization"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. Explain the difference between bytecode and machine code.",
          "Q2. What triggers deoptimization in V8?",
          "Q3. What is inline caching?",
          "Q4. How do hidden classes work?",
          "Q5. Why does changing object shape reduce performance?",
          "Q6. What is speculative optimization?",
          "Q7. Why does arguments object slow down V8?",
          "Q8. Explain V8 execution pipeline.",
          "Q9. What is the role of AST?",
          "Q10. Why are hot functions optimized?"
        ]
      }
    ]
  },
  {
    id: "advanced-error-handling",
    title: "Advanced Error Handling & Debugging – Custom Errors, Async Errors, Logging & Monitoring",
    sections: [
      {
        type: "text",
        content: "Error handling is essential for building reliable JavaScript applications. Understanding sync & async errors, logging, stack traces, and custom error types helps you debug faster and build stable systems."
      },

      {
        type: "heading",
        content: "1. JavaScript Error Types"
      },
      {
        type: "list",
        items: [
          "ReferenceError → using undefined variable",
          "TypeError → invalid type (e.g., x is not a function)",
          "SyntaxError → invalid JavaScript syntax",
          "RangeError → invalid range (e.g., call stack size exceeded)",
          "URIError → malformed URI"
        ]
      },

      {
        type: "heading",
        content: "2. try...catch"
      },
      {
        type: "code",
        content: `try {\n  invalidFunction();\n} catch (err) {\n  console.error(err.message);\n}`
      },

      {
        type: "heading",
        content: "3. Custom Errors"
      },
      {
        type: "code",
        content: `class ValidationError extends Error {\n  constructor(msg){ super(msg); this.name = 'ValidationError'; }\n}\nthrow new ValidationError('Invalid data');`
      },

      {
        type: "heading",
        content: "4. Error Handling in async/await"
      },
      {
        type: "code",
        content: `async function fetchData(){\n  try {\n    const res = await fetch('/api');\n  } catch(e){\n    console.log('Network error');\n  }\n}`
      },

      {
        type: "heading",
        content: "Handling Async Errors Without try/catch"
      },
      {
        type: "code",
        content: `fetch('/api').catch(err => console.error(err));`
      },

      {
        type: "heading",
        content: "5. Global Error Handlers"
      },
      {
        type: "list",
        items: [
          "window.onerror → for sync errors",
          "window.onunhandledrejection → for async promise errors"
        ]
      },
      {
        type: "code",
        content: `window.onerror = (msg, file, line) => console.log('Error:', msg);\nwindow.onunhandledrejection = e => console.log('Promise Error:', e);`
      },

      {
        type: "heading",
        content: "6. Stack Traces"
      },
      {
        type: "text",
        content: "Stack traces show where errors occur in call stack."
      },
      {
        type: "code",
        content: `console.trace('Debug trace');`
      },

      {
        type: "heading",
        content: "7. Logging"
      },
      {
        type: "list",
        items: [
          "console.log → debugging",
          "console.error → errors",
          "console.warn → warnings",
          "console.table → tabular data"
        ]
      },

      {
        type: "heading",
        content: "8. Error Monitoring (Production)"
      },
      {
        type: "list",
        items: [
          "Sentry",
          "LogRocket",
          "New Relic",
          "Datadog"
        ]
      },

      {
        type: "heading",
        content: "9. Error Boundaries (React)"
      },
      {
        type: "text",
        content: "React uses error boundaries to catch component-level errors."
      },
      {
        type: "code",
        content: `class Boundary extends React.Component{\n  componentDidCatch(error){ console.log(error); }\n}`
      },

      {
        type: "heading",
        content: "10. Graceful Error Recovery"
      },
      {
        type: "list",
        items: [
          "Show fallback UI",
          "Retry failed requests",
          "Store errors for debugging",
          "Avoid app crashes"
        ]
      },

      {
        type: "heading",
        content: "Summary"
      },
      {
        type: "list",
        items: [
          "Use custom errors for clarity",
          "Async errors must be caught explicitly",
          "Global handlers catch unexpected errors",
          "Stack traces help debugging",
          "Use logging tools in production"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What is the difference between ReferenceError and TypeError?",
          "Q2. Create a custom LoginError class.",
          "Q3. What does window.onunhandledrejection do?",
          "Q4. How do you catch errors in async/await?",
          "Q5. Why are error boundaries needed in React?",
          "Q6. How do you debug using stack traces?",
          "Q7. Explain synchronous vs asynchronous errors.",
          "Q8. What are the best tools for monitoring errors?",
          "Q9. Why should production apps handle errors gracefully?",
          "Q10. Write try/catch around a JSON.parse operation."
        ]
      }
    ]
  },
  {
    id: "javascript-testing",
    title: "JavaScript Testing – Unit Tests, Integration Tests, Jest, Mocha, Mocks & TDD",
    sections: [
      {
        type: "text",
        content: "Testing ensures that your code works correctly, prevents regressions, and gives confidence during development. JavaScript has many testing frameworks for different use cases."
      },

      {
        type: "heading",
        content: "1. Types of Tests"
      },
      {
        type: "list",
        items: [
          "Unit Tests → smallest pieces of functionality",
          "Integration Tests → multiple modules working together",
          "End-to-End Tests → full user interaction (Cypress, Playwright)",
          "Snapshot Tests → UI consistency"
        ]
      },

      {
        type: "heading",
        content: "2. Jest (Most Popular Testing Framework)"
      },
      {
        type: "code",
        content: `test('adds 2 + 3 = 5', () => {\n  expect(2 + 3).toBe(5);\n});`
      },

      {
        type: "heading",
        content: "3. Mocking Functions"
      },
      {
        type: "code",
        content: `const fetchData = jest.fn(() => 'data');\nexpect(fetchData()).toBe('data');`
      },

      {
        type: "heading",
        content: "4. Testing Async Functions"
      },
      {
        type: "code",
        content: `test('async test', async () => {\n  const res = await fetchUser();\n  expect(res.name).toBe('Amit');\n});`
      },

      {
        type: "heading",
        content: "5. Mocha + Chai"
      },
      {
        type: "code",
        content: `const { expect } = require('chai');\ndescribe('Math', () => {\n  it('adds numbers', () => {\n    expect(2 + 2).to.equal(4);\n  });\n});`
      },

      {
        type: "heading",
        content: "6. Test Coverage"
      },
      {
        type: "text",
        content: "Coverage tools show what percentage of your code is tested."
      },
      {
        type: "code",
        content: `jest --coverage`
      },

      {
        type: "heading",
        content: "7. TDD – Test Driven Development"
      },
      {
        type: "list",
        items: [
          "Write failing test",
          "Write code to pass the test",
          "Refactor code",
          "Repeat"
        ]
      },

      {
        type: "heading",
        content: "8. Snapshot Testing (React)"
      },
      {
        type: "code",
        content: `expect(renderer.create(<Button/>).toJSON()).toMatchSnapshot();`
      },

      {
        type: "heading",
        content: "9. CI/CD Test Automation"
      },
      {
        type: "list",
        items: [
          "GitHub Actions",
          "GitLab CI",
          "Jenkins",
          "CircleCI"
        ]
      },

      {
        type: "heading",
        content: "10. Summary"
      },
      {
        type: "list",
        items: [
          "Jest is most widely used",
          "Unit tests test small pieces",
          "Integration tests test combined modules",
          "Mocking isolates behavior",
          "Coverage helps measure test quality",
          "TDD improves design structure"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What is the difference between unit and integration tests?",
          "Q2. Write a Jest test for a sum function.",
          "Q3. How do you mock an API call in Jest?",
          "Q4. What does test coverage measure?",
          "Q5. Explain TDD cycle.",
          "Q6. What problems do mocks solve?",
          "Q7. Write a Jest async test.",
          "Q8. What is snapshot testing?",
          "Q9. Why do we use CI/CD for testing?",
          "Q10. Compare Jest with Mocha."
        ]
      }
    ]
  },
  {
    id: "webassembly-lowlevel-js",
    title: "WebAssembly & Low-Level JavaScript – WASM, Memory Model, Linear Memory, JS Interoperability",
    sections: [
      {
        type: "text",
        content: "WebAssembly (WASM) is a low-level binary format that runs at near-native speed inside the browser. It is used for high-performance applications like games, video editors, cryptography, machine learning, and simulations."
      },

      {
        type: "heading",
        content: "1. What is WebAssembly?"
      },
      {
        type: "list",
        items: [
          "A portable, fast binary instruction format",
          "Runs inside browsers alongside JS",
          "Created for high-performance tasks",
          "Supported by all modern browsers"
        ]
      },

      {
        type: "heading",
        content: "2. Why Use WASM?"
      },
      {
        type: "list",
        items: [
          "Faster than JavaScript (closer to machine code)",
          "Ideal for compute-heavy operations",
          "Allows using C/C++/Rust inside browsers",
          "Predictable memory layout (linear memory)"
        ]
      },

      {
        type: "heading",
        content: "3. How WASM Works Internally"
      },
      {
        type: "text",
        content: "WASM uses a low-level stack machine with linear memory and typed operations. It avoids dynamic features to stay fast."
      },

      {
        type: "heading",
        content: "4. Linear Memory"
      },
      {
        type: "text",
        content: "WASM’s memory is a continuous block of bytes (ArrayBuffer). JS can read/write to it using TypedArrays."
      },
      {
        type: "code",
        content: `const memory = new WebAssembly.Memory({initial: 1});\nconst view = new Uint8Array(memory.buffer);`
      },

      {
        type: "heading",
        content: "5. WebAssembly Module Structure"
      },
      {
        type: "list",
        items: [
          "Code section → compiled instructions",
          "Memory section → linear memory",
          "Import/export section → JS ↔ WASM functions",
          "Table section → function pointers"
        ]
      },

      {
        type: "heading",
        content: "6. Running WASM in JavaScript"
      },
      {
        type: "code",
        content: `WebAssembly.instantiateStreaming(fetch('module.wasm'))\n  .then(res => res.instance.exports.run());`
      },

      {
        type: "heading",
        content: "7. Calling JavaScript From WASM"
      },
      {
        type: "code",
        content: `// JS function exported to WASM\nconst imports = {\n  env: {\n    log: (x) => console.log('WASM:', x)\n  }\n};`
      },

      {
        type: "heading",
        content: "8. Practical Use Cases"
      },
      {
        type: "list",
        items: [
          "Video and audio processing",
          "Game engines",
          "3D rendering",
          "Machine learning inference",
          "Cryptography & hashing",
          "CAD tools in browser"
        ]
      },

      {
        type: "heading",
        content: "9. Limitations of WASM"
      },
      {
        type: "list",
        items: [
          "No direct DOM access (must go through JS)",
          "Harder to debug than JS",
          "Not ideal for small/simple functions",
          "Manual memory management in some languages"
        ]
      },

      {
        type: "heading",
        content: "10. Summary"
      },
      {
        type: "list",
        items: [
          "WASM is for high-performance tasks",
          "JS handles UI & dynamic behavior",
          "Linear memory ensures predictable speed",
          "Works with C/C++/Rust",
          "JS ↔ WASM communication uses imports/exports"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. Why is WebAssembly faster than JavaScript?",
          "Q2. What is linear memory in WASM?",
          "Q3. Can WASM directly manipulate the DOM?",
          "Q4. Name two real-world applications of WASM.",
          "Q5. How does JS communicate with WebAssembly?",
          "Q6. Why is WASM good for game engines?",
          "Q7. What types of problems is WASM NOT suitable for?",
          "Q8. Explain how WASM loads in the browser.",
          "Q9. What languages can compile to WASM?",
          "Q10. Why does WASM use a stack machine model?"
        ]
      }
    ]
  },
  {
    id: "advanced-async-patterns",
    title: "Advanced Async Patterns – Scheduling, Microtasks, Macrotasks, Offloading, Event Loop Internals",
    sections: [
      {
        type: "text",
        content: "JavaScript's async system is much deeper than callbacks, promises, and async/await. Advanced async patterns help build responsive, non-blocking, high-performance apps."
      },

      {
        type: "heading",
        content: "1. Event Loop Internals (Deep)"
      },
      {
        type: "list",
        items: [
          "Call Stack",
          "Web APIs / Platform APIs",
          "Task Queue (Macrotasks)",
          "Microtask Queue (Promises / MutationObserver)",
          "Rendering Pipeline"
        ]
      },

      {
        type: "heading",
        content: "2. Macrotasks"
      },
      {
        type: "list",
        items: [
          "setTimeout",
          "setInterval",
          "setImmediate (Node.js)",
          "I/O tasks",
          "MessageChannel"
        ]
      },

      {
        type: "heading",
        content: "3. Microtasks"
      },
      {
        type: "list",
        items: [
          "Promises",
          "queueMicrotask",
          "MutationObserver"
        ]
      },
      {
        type: "code",
        content: `console.log('1');\nqueueMicrotask(()=>console.log('micro')); \nconsole.log('2');`
      },

      {
        type: "heading",
        content: "4. Starvation Problem"
      },
      {
        type: "text",
        content: "If too many microtasks run continuously, rendering is blocked."
      },
      {
        type: "code",
        content: `function loop(){\n  queueMicrotask(loop);\n}\nloop(); // browser frozen`
      },

      {
        type: "heading",
        content: "5. Cooperative Scheduling"
      },
      {
        type: "text",
        content: "Break heavy tasks into chunks so UI remains responsive."
      },
      {
        type: "code",
        content: `function bigTask(){\n  for(let i=0;i<10000;i++){\n    // heavy work\n    if(i % 100 === 0){\n      setTimeout(()=>bigTask(),0);\n      return;\n    }\n  }\n}`
      },

      {
        type: "heading",
        content: "6. requestIdleCallback (Use Idle Time)"
      },
      {
        type: "text",
        content: "Runs low-priority tasks during browser idle periods."
      },
      {
        type: "code",
        content: `requestIdleCallback(deadline => {\n  while(deadline.timeRemaining() > 0){\n    console.log('Doing background work');\n  }\n});`
      },

      {
        type: "heading",
        content: "7. MessageChannel (Microtask Alternative)"
      },
      {
        type: "code",
        content: `const mc = new MessageChannel();\nmc.port1.onmessage = () => console.log('task');\nmc.port2.postMessage('run');`
      },

      {
        type: "heading",
        content: "8. Offloading Work to Web Workers"
      },
      {
        type: "list",
        items: [
          "CPU-heavy operations",
          "ML inference",
          "Compression/decompression",
          "Parsing large files"
        ]
      },

      {
        type: "heading",
        content: "9. Async Iterators"
      },
      {
        type: "code",
        content: `async function* stream(){\n  yield await fetch('/1');\n  yield await fetch('/2');\n}`
      },

      {
        type: "heading",
        content: "10. Summary"
      },
      {
        type: "list",
        items: [
          "Microtasks run before macrotasks",
          "Too many microtasks cause starvation",
          "requestIdleCallback helps background tasks",
          "Web Workers offload heavy CPU work",
          "Cooperative scheduling prevents UI freezing"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. Difference between microtask and macrotask?",
          "Q2. Why can too many microtasks freeze UI?",
          "Q3. What is cooperative scheduling?",
          "Q4. How does requestIdleCallback work?",
          "Q5. Why does await create microtasks?",
          "Q6. What are async iterators used for?",
          "Q7. What is MessageChannel and why use it?",
          "Q8. When should you use Web Workers?",
          "Q9. Explain starvation in event loop context.",
          "Q10. Write code using queueMicrotask()."
        ]
      }
    ]
  },
  {
    id: "javascript-security-advanced",
    title: "Advanced JavaScript Security – CSP Level 3, Trusted Types, Sandboxing, iframe Security, Prototype Pollution Defense",
    sections: [
      {
        type: "text",
        content: "Modern applications face sophisticated security attacks. Advanced mechanisms like CSP, Trusted Types, sandboxing, and prototype pollution defense help secure apps at scale."
      },

      {
        type: "heading",
        content: "1. CSP Level 3 (Content Security Policy)"
      },
      {
        type: "text",
        content: "CSP prevents XSS by blocking unauthorized scripts, styles, and resources."
      },
      {
        type: "code",
        content: `Content-Security-Policy: default-src 'self'; script-src 'self' https://apis.google.com; object-src 'none';`
      },
      {
        type: "list",
        items: [
          "Blocks inline scripts",
          "Blocks remote scripts unless allowed",
          "Prevents eval()",
          "Prevents mixed content",
          "Controls iframe sources"
        ]
      },

      {
        type: "heading",
        content: "2. Trusted Types (Prevents DOM XSS)"
      },
      {
        type: "text",
        content: "Trusted Types ensure DOM APIs like innerHTML only accept sanitized, trusted inputs."
      },
      {
        type: "code",
        content: `policy = trustedTypes.createPolicy('default', {\n  createHTML: str => sanitize(str)\n});\n\nel.innerHTML = policy.createHTML(userInput);`
      },

      {
        type: "heading",
        content: "3. iframe Sandboxing"
      },
      {
        type: "code",
        content: `<iframe src=\"evil.html\" sandbox=\"allow-scripts\"></iframe>`
      },
      {
        type: "list",
        items: [
          "Prevents form submission",
          "Blocks navigation",
          "Blocks script execution (unless allowed)",
          "Forces secure isolation"
        ]
      },

      {
        type: "heading",
        content: "4. Preventing Prototype Pollution"
      },
      {
        type: "list",
        items: [
          "Block __proto__, constructor, prototype keys",
          "Use Object.create(null)",
          "Validate JSON deeply"
        ]
      },
      {
        type: "code",
        content: `if(key === '__proto__') throw Error('blocked');`
      },

      {
        type: "heading",
        content: "5. Secure DOM Handling"
      },
      {
        type: "list",
        items: [
          "Never use innerHTML with user data",
          "Use DOMPurify or Trusted Types",
          "Escape special characters",
          "Use textContent instead"
        ]
      },

      {
        type: "heading",
        content: "6. Sandboxed Scripts"
      },
      {
        type: "text",
        content: "Using sandboxed iframes or Web Workers to isolate untrusted code environments."
      },

      {
        type: "heading",
        content: "7. Secure JSON Handling"
      },
      {
        type: "code",
        content: `JSON.parse(input, (key, value) => {\n  if(key === '__proto__') return undefined;\n  return value;\n});`
      },

      {
        type: "heading",
        content: "8. Strict Mode"
      },
      {
        type: "code",
        content: `"use strict";\n// prevents silent errors`
      },

      {
        type: "heading",
        content: "9. Helmet (Node.js Security Middleware)"
      },
      {
        type: "text",
        content: "Helmet adds security headers including CSP, HSTS, X-Frame-Options."
      },

      {
        type: "heading",
        content: "10. Summary"
      },
      {
        type: "list",
        items: [
          "CSP blocks unauthorized scripts",
          "Trusted Types stop DOM XSS",
          "iframes can be sandboxed for isolation",
          "Prototype pollution must be prevented",
          "textContent is safer than innerHTML"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What does CSP protect against?",
          "Q2. How do Trusted Types prevent DOM XSS?",
          "Q3. What does sandbox=\"\" do in iframes?",
          "Q4. Why is prototype pollution dangerous?",
          "Q5. How do you block __proto__ in JSON?",
          "Q6. Why is innerHTML unsafe?",
          "Q7. What does Helmet do?",
          "Q8. Difference between CSP and Trusted Types?",
          "Q9. How do you sanitize user input securely?",
          "Q10. How do iframes improve security?"
        ]
      }
    ]
  },
  {
    id: "build-tools-performance",
    title: "Build Tools & Performance – Webpack, Vite, Rollup, Babel, Minification, Tree Shaking",
    sections: [
      {
        type: "text",
        content: "Build tools transform your modern JavaScript application into optimized code for browsers. They bundle, minify, transpile, compress, and improve app performance significantly."
      },

      {
        type: "heading",
        content: "1. Why Do We Need Build Tools?"
      },
      {
        type: "list",
        items: [
          "Browsers don't understand JSX or TypeScript",
          "To bundle many modules into few optimized files",
          "To compress and minify code",
          "To remove unused code (tree shaking)",
          "To support older browsers (transpiling)",
          "To improve performance and reduce load time"
        ]
      },

      {
        type: "heading",
        content: "2. Webpack – The Most Powerful Bundler"
      },
      {
        type: "text",
        content: "Webpack takes modules and assets and bundles them into optimized output files."
      },
      {
        type: "code",
        content: `module.exports = {\n  entry: './src/index.js',\n  output: { filename: 'bundle.js' },\n  loaders: [ { test: /\\.js$/, use: 'babel-loader' } ]\n}`
      },

      {
        type: "heading",
        content: "Key Webpack Features"
      },
      {
        type: "list",
        items: [
          "Code splitting",
          "Tree shaking",
          "Loaders (css-loader, babel-loader)",
          "Plugins (HTMLWebpackPlugin, MiniCssExtractPlugin)",
          "Asset optimization"
        ]
      },

      {
        type: "heading",
        content: "3. Vite – Modern, Lightning Fast Dev Server"
      },
      {
        type: "list",
        items: [
          "Uses ES modules directly in browser",
          "No bundling required in dev mode",
          "Extremely fast hot module replacement (HMR)",
          "Uses Rollup in production mode"
        ]
      },
      {
        type: "code",
        content: `npm create vite@latest myapp`
      },

      {
        type: "heading",
        content: "Why Vite is Faster Than Webpack?"
      },
      {
        type: "list",
        items: [
          "No bundling during development",
          "Lazy transformation (loads files only when needed)",
          "ESBuild used for dependency pre-bundling"
        ]
      },

      {
        type: "heading",
        content: "4. Rollup – Best for Libraries"
      },
      {
        type: "text",
        content: "Rollup creates small, optimized bundles with excellent tree shaking."
      },
      {
        type: "list",
        items: [
          "Outputs ESM, CJS, UMD formats",
          "Used by many libraries like React, Vue, D3",
          "Smaller bundle size than Webpack"
        ]
      },

      {
        type: "heading",
        content: "5. Babel – JavaScript Transpiler"
      },
      {
        type: "text",
        content: "Babel converts modern JS (ES6+) into browser-compatible ES5."
      },
      {
        type: "code",
        content: `\"presets\": [\"@babel/preset-env\"]`
      },

      {
        type: "heading",
        content: "6. Minification & Compression"
      },
      {
        type: "list",
        items: [
          "Removes whitespace and comments",
          "Shortens variable names",
          "Removes dead code",
          "Gzip/Brotli compression further reduces file size"
        ]
      },

      {
        type: "heading",
        content: "7. Tree Shaking"
      },
      {
        type: "text",
        content: "Tree shaking removes unused exports. Works best with ES modules."
      },
      {
        type: "code",
        content: `export function used(){}\nexport function unused(){} // removed during build`
      },

      {
        type: "heading",
        content: "8. Code Splitting"
      },
      {
        type: "code",
        content: `import('./dashboard.js').then(module => module.show());`
      },

      {
        type: "heading",
        content: "9. Performance Best Practices"
      },
      {
        type: "list",
        items: [
          "Use Vite for fast dev",
          "Use caching + CDN",
          "Split vendor vs app bundle",
          "Lazy load heavy components",
          "Preload critical resources"
        ]
      },

      {
        type: "heading",
        content: "10. Summary"
      },
      {
        type: "list",
        items: [
          "Webpack → most powerful",
          "Vite → fastest dev tool",
          "Rollup → best for libraries",
          "Babel → transpiling",
          "Tree shaking + minification → smaller bundle"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. Why do we need build tools?",
          "Q2. Difference between Webpack and Vite?",
          "Q3. Why does Rollup produce smaller bundles?",
          "Q4. What does Babel do?",
          "Q5. Explain tree shaking.",
          "Q6. What is code splitting?",
          "Q7. Why is Vite faster during development?",
          "Q8. What is minification?",
          "Q9. When should you use Rollup?",
          "Q10. Explain ESBuild and its role in Vite."
        ]
      }
    ]
  },
  {
    id: "nodejs-internals",
    title: "Node.js Internals – Event Loop, Libuv, Streams, Buffer, Clustering, Thread Pool",
    sections: [
      {
        type: "text",
        content: "Node.js is built on Chrome’s V8 engine and Libuv. It enables server-side JavaScript with high concurrency and non-blocking I/O."
      },

      {
        type: "heading",
        content: "1. Node.js Architecture"
      },
      {
        type: "list",
        items: [
          "V8 → executes JavaScript",
          "Libuv → handles event loop & thread pool",
          "Bindings → bridge between JS & C++",
          "C++ Core → filesystem, networking"
        ]
      },

      {
        type: "heading",
        content: "2. Event Loop in Node.js (Different from Browser)"
      },
      {
        type: "list",
        items: [
          "Timers phase",
          "I/O callbacks",
          "Idle/Prepare",
          "Poll",
          "Check",
          "Close callbacks"
        ]
      },

      {
        type: "heading",
        content: "3. Thread Pool (for Heavy Tasks)"
      },
      {
        type: "text",
        content: "Node has a 4-thread pool for CPU-heavy operations (crypto, fs, compression)."
      },
      {
        type: "code",
        content: `const crypto = require('crypto');\ncrypto.pbkdf2('pass','salt',10000,512,'sha512',()=>console.log('Done'));`
      },

      {
        type: "heading",
        content: "4. Streams (Very Important)"
      },
      {
        type: "list",
        items: [
          "Readable Stream",
          "Writable Stream",
          "Transform Stream",
          "Duplex Stream"
        ]
      },
      {
        type: "code",
        content: `const fs = require('fs');\nfs.createReadStream('file.txt').pipe(fs.createWriteStream('copy.txt'));`
      },

      {
        type: "heading",
        content: "5. Buffers (Binary Data)"
      },
      {
        type: "code",
        content: `const buf = Buffer.from('hello');\nconsole.log(buf);`
      },

      {
        type: "heading",
        content: "6. Libuv – Heart of Node.js"
      },
      {
        type: "list",
        items: [
          "Manages thread pool",
          "Handles event loop",
          "Performs async operations",
          "Provides cross-platform compatibility"
        ]
      },

      {
        type: "heading",
        content: "7. Cluster Mode (Scaling CPU Cores)"
      },
      {
        type: "text",
        content: "Node is single-threaded but can use all CPU cores via clustering."
      },
      {
        type: "code",
        content: `const cluster = require('cluster');\nif(cluster.isMaster){ cluster.fork(); cluster.fork(); }`
      },

      {
        type: "heading",
        content: "8. Child Processes"
      },
      {
        type: "code",
        content: `const { exec } = require('child_process');\nexec('ls', (err, output) => console.log(output));`
      },

      {
        type: "heading",
        content: "9. Node.js Bottlenecks"
      },
      {
        type: "list",
        items: [
          "Blocking synchronous functions",
          "Long CPU tasks",
          "Large JSON parsing",
          "Too many open connections"
        ]
      },

      {
        type: "heading",
        content: "10. Summary"
      },
      {
        type: "list",
        items: [
          "Node uses V8 + Libuv",
          "Event loop manages async tasks",
          "Thread pool executes heavy operations",
          "Streams improve I/O performance",
          "Buffers handle binary data",
          "Cluster mode scales CPU usage"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What is Libuv?",
          "Q2. Explain Node.js event loop phases.",
          "Q3. What is thread pool in Node?",
          "Q4. Why are streams better than reading entire files?",
          "Q5. What is the purpose of Buffer?",
          "Q6. How does clustering improve performance?",
          "Q7. Difference between setImmediate and setTimeout?",
          "Q8. Why is Node single-threaded?",
          "Q9. What operations use thread pool?",
          "Q10. How do child processes help Node scale?"
        ]
      }
    ]
  },
  {
    id: "frontend-integration-advanced",
    title: "Advanced Frontend Integration – React Internals, Virtual DOM, Reconciliation, Hooks, State Management, Performance",
    sections: [
      {
        type: "text",
        content: "Modern frontend frameworks like React rely heavily on advanced JavaScript concepts. Understanding how React interacts with JavaScript internals makes you a strong frontend developer."
      },

      {
        type: "heading",
        content: "1. Virtual DOM (VDOM)"
      },
      {
        type: "text",
        content: "The Virtual DOM is a lightweight representation of the real DOM. React updates the VDOM first → computes differences → updates only required parts of the real DOM."
      },
      {
        type: "code",
        content: `const vdom = { type: 'div', props: { children: 'Hello' } };`
      },

      {
        type: "heading",
        content: "2. Reconciliation (Diffing Algorithm)"
      },
      {
        type: "list",
        items: [
          "Compares old VDOM with new VDOM",
          "Updates only changed nodes",
          "Keys help identify list items efficiently",
          "React uses O(n) diffing algorithm"
        ]
      },

      {
        type: "heading",
        content: "3. React Fiber Architecture (Very Important)"
      },
      {
        type: "text",
        content: "Fiber is React’s new reconciler that breaks rendering work into chunks for smoother UI updates."
      },
      {
        type: "list",
        items: [
          "Enables time-slicing",
          "Prioritizes updates (urgent vs non-urgent)",
          "Enables concurrent rendering"
        ]
      },

      {
        type: "heading",
        content: "4. Hooks Internals (useState, useEffect)"
      },
      {
        type: "code",
        content: `let state = useState(0);\nuseEffect(() => console.log('mounted'), []);`
      },
      {
        type: "list",
        items: [
          "Hooks rely on call order",
          "Cannot be conditional",
          "React maintains an internal pointer to hook positions"
        ]
      },

      {
        type: "heading",
        content: "5. State Management"
      },
      {
        type: "list",
        items: [
          "Context API",
          "Redux",
          "Zustand",
          "Jotai",
          "Recoil"
        ]
      },

      {
        type: "heading",
        content: "6. Rendering Optimization"
      },
      {
        type: "list",
        items: [
          "React.memo() → memoize components",
          "useCallback() → memoize functions",
          "useMemo() → memoize values",
          "Lazy loading components",
          "Suspense for large dependencies"
        ]
      },

      {
        type: "heading",
        content: "7. Concurrent Mode Concepts"
      },
      {
        type: "list",
        items: [
          "Interruptible rendering",
          "Priority-based updates",
          "Transitions",
          "useDeferredValue"
        ]
      },

      {
        type: "heading",
        content: "8. Server-Side Rendering (SSR)"
      },
      {
        type: "text",
        content: "SSR renders React components on server → sends HTML → improves SEO & load performance."
      },

      {
        type: "heading",
        content: "9. Client-Side Hydration"
      },
      {
        type: "text",
        content: "Browser attaches event listeners to SSR-generated HTML and converts it into interactive React components."
      },

      {
        type: "heading",
        content: "10. Summary"
      },
      {
        type: "list",
        items: [
          "Virtual DOM prevents expensive DOM operations",
          "Reconciliation efficiently updates UI",
          "Fiber allows concurrent rendering",
          "Hooks rely on predictable order",
          "Memoization prevents unnecessary re-renders"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. How does Virtual DOM improve performance?",
          "Q2. Why are keys important in lists?",
          "Q3. Explain React Fiber.",
          "Q4. Why can't hooks run conditionally?",
          "Q5. When should you use useMemo?",
          "Q6. Difference between SSR and CSR?",
          "Q7. What is hydration?",
          "Q8. How does React decide what to re-render?",
          "Q9. What does React.memo do?",
          "Q10. Explain time-slicing in React."
        ]
      }
    ]
  },
  {
    id: "graphql-deep-dive",
    title: "GraphQL Deep Dive – Queries, Mutations, Subscriptions, Resolvers, Schema Design, Apollo",
    sections: [
      {
        type: "text",
        content: "GraphQL is a query language for APIs that gives clients exactly the data they request — nothing more, nothing less. It is strongly typed, efficient, and designed for modern applications."
      },

      {
        type: "heading",
        content: "1. Why GraphQL?"
      },
      {
        type: "list",
        items: [
          "Avoids under-fetching and over-fetching",
          "Single endpoint for all data",
          "Strong type system",
          "Perfect for complex UIs",
          "Great with microservices"
        ]
      },

      {
        type: "heading",
        content: "2. GraphQL Schema (Brain of the API)"
      },
      {
        type: "code",
        content: `type User {\n  id: ID!\n  name: String!\n  age: Int\n}\n\ntype Query {\n  getUser(id: ID!): User\n}`
      },

      {
        type: "heading",
        content: "3. Queries (Read Data)"
      },
      {
        type: "code",
        content: `query {\n  getUser(id: 1) {\n    name\n    age\n  }\n}`
      },

      {
        type: "heading",
        content: "4. Mutations (Write Data)"
      },
      {
        type: "code",
        content: `mutation {\n  createUser(name: \"Amit\", age: 21) {\n    id\n  }\n}`
      },

      {
        type: "heading",
        content: "5. Subscriptions (Real-Time Data)"
      },
      {
        type: "code",
        content: `subscription {\n  userCreated {\n    name\n    age\n  }\n}`
      },

      {
        type: "heading",
        content: "6. Resolvers"
      },
      {
        type: "text",
        content: "Resolvers connect your schema to actual data (database/API)."
      },
      {
        type: "code",
        content: `const resolvers = {\n  Query: {\n    getUser: (_, { id }) => db.users.find(u => u.id == id)\n  },\n  Mutation: {\n    createUser: (_, data) => db.users.push(data)\n  }\n}`
      },

      {
        type: "heading",
        content: "7. Apollo Server Example"
      },
      {
        type: "code",
        content: `const server = new ApolloServer({ typeDefs, resolvers });\nserver.listen();`
      },

      {
        type: "heading",
        content: "8. Apollo Client (Frontend)"
      },
      {
        type: "code",
        content: `const { data } = useQuery(GET_USER);`
      },

      {
        type: "heading",
        content: "9. GraphQL Caching"
      },
      {
        type: "list",
        items: [
          "Apollo Client Normalized Cache",
          "Redis caching on server",
          "HTTP caching (limited)"
        ]
      },

      {
        type: "heading",
        content: "10. Best Practices"
      },
      {
        type: "list",
        items: [
          "Avoid deeply nested queries",
          "Use dataloaders to prevent N+1 queries",
          "Add input validation in mutations",
          "Use proper pagination (cursor-based)"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. Why does GraphQL solve over-fetching?",
          "Q2. Write a GraphQL query to fetch user id + name.",
          "Q3. What are resolvers?",
          "Q4. What is the role of Apollo Client?",
          "Q5. Explain GraphQL subscriptions.",
          "Q6. Difference between REST and GraphQL?",
          "Q7. What problem does dataloader solve?",
          "Q8. Write a mutation to update a user's age.",
          "Q9. What is schema stitching?",
          "Q10. Explain cursor-based pagination."
        ]
      }
    ]
  },
  {
    id: "microfrontends-architecture",
    title: "Microfrontends Architecture – Module Federation, Routing, Communication, Isolation",
    sections: [
      {
        type: "text",
        content: "Microfrontends split a large frontend application into multiple smaller independently deployable apps. Each team owns a feature end-to-end."
      },

      {
        type: "heading",
        content: "1. Why Microfrontends?"
      },
      {
        type: "list",
        items: [
          "Teams work independently",
          "Faster development",
          "Different frameworks in the same app",
          "Independent deployments",
          "Better scalability"
        ]
      },

      {
        type: "heading",
        content: "2. Architecture Approaches"
      },
      {
        type: "list",
        items: [
          "Build-time integration",
          "Run-time integration (Module Federation)",
          "Iframe-based isolation",
          "Edge-side includes"
        ]
      },

      {
        type: "heading",
        content: "3. Module Federation (Webpack 5)"
      },
      {
        type: "code",
        content: `new ModuleFederationPlugin({\n  name: 'app1',\n  exposes: { './Button': './src/Button' }\n});`
      },
      {
        type: "list",
        items: [
          "Load remote components at runtime",
          "Share React dependencies",
          "Version conflict handling"
        ]
      },

      {
        type: "heading",
        content: "4. Routing in Microfrontends"
      },
      {
        type: "list",
        items: [
          "Single SPA",
          "Module Federation + custom router",
          "Micro-app routers communicating via events"
        ]
      },

      {
        type: "heading",
        content: "5. Communication Between Microfrontends"
      },
      {
        type: "list",
        items: [
          "Custom events",
          "Global state (Redux store shared)",
          "PostMessage (iframe communication)",
          "Event bus pattern"
        ]
      },

      {
        type: "heading",
        content: "6. Deployment Strategies"
      },
      {
        type: "list",
        items: [
          "One repo per microfrontend",
          "Mono-repo with Nx/Turborepo",
          "Independent CI/CD pipelines"
        ]
      },

      {
        type: "heading",
        content: "7. Challenges"
      },
      {
        type: "list",
        items: [
          "Shared dependencies causing version conflicts",
          "Consistent design system",
          "Cross-app authentication",
          "Performance overhead of multiple bundles"
        ]
      },

      {
        type: "heading",
        content: "8. Best Practices"
      },
      {
        type: "list",
        items: [
          "Use Module Federation for runtime sharing",
          "Limit shared dependencies",
          "Create common UI library",
          "Use custom events for communication"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What are microfrontends and why are they used?",
          "Q2. Explain Module Federation.",
          "Q3. How do microfrontends communicate?",
          "Q4. Why is iframe communication sometimes used?",
          "Q5. What problems arise from shared dependencies?",
          "Q6. What is SingleSPA?",
          "Q7. Name two deployment patterns for microfrontends.",
          "Q8. Why is UI consistency difficult?",
          "Q9. What is an event bus?",
          "Q10. Difference between build-time and run-time integration?"
        ]
      }
    ]
  },
  {
    id: "advanced-typescript-js",
    title: "Advanced TypeScript + JavaScript Integration – Generics, Utility Types, Decorators, Type Inference",
    sections: [
      {
        type: "text",
        content: "TypeScript adds static typing to JavaScript, improving code safety, scalability, and IDE support. Advanced TS features help build large, maintainable systems."
      },

      {
        type: "heading",
        content: "1. Generics"
      },
      {
        type: "code",
        content: `function identity<T>(value: T): T {\n  return value;\n}`
      },
      {
        type: "list",
        items: [
          "Reusable type-safe functions",
          "Used heavily in React, Redux Toolkit"
        ]
      },

      {
        type: "heading",
        content: "2. Type Narrowing"
      },
      {
        type: "code",
        content: `function print(x: string | number){\n  if(typeof x === 'string') console.log(x.toUpperCase());\n}`
      },

      {
        type: "heading",
        content: "3. Mapped Types"
      },
      {
        type: "code",
        content: `type Optional<T> = { [K in keyof T]?: T[K] };`
      },

      {
        type: "heading",
        content: "4. Utility Types"
      },
      {
        type: "list",
        items: [
          "Partial<T>",
          "Required<T>",
          "Readonly<T>",
          "Pick<T,K>",
          "Omit<T,K>",
          "Record<K,T>"
        ]
      },

      {
        type: "heading",
        content: "5. Decorators (Advanced)"
      },
      {
        type: "code",
        content: `function Log(target, name, descriptor){\n  console.log('Method:', name);\n}`
      },

      {
        type: "heading",
        content: "6. Type Inference"
      },
      {
        type: "code",
        content: `let a = 10; // inferred as number`
      },

      {
        type: "heading",
        content: "7. Intersection & Union Types"
      },
      {
        type: "code",
        content: `type A = { name: string } & { age: number }`
      },

      {
        type: "heading",
        content: "8. Working with JavaScript Libraries"
      },
      {
        type: "list",
        items: [
          "DefinitelyTyped (@types/ packages)",
          "Type declaration merging",
          "JS Doc annotations for JS → TS inference"
        ]
      },

      {
        type: "heading",
        content: "9. TS + React Integration"
      },
      {
        type: "code",
        content: `function Button({label}: {label: string}){ return <button>{label}</button>; }`
      },

      {
        type: "heading",
        content: "10. Best Practices"
      },
      {
        type: "list",
        items: [
          "Prefer type over interface for modern code",
          "Use generics for reusable components",
          "Avoid any — use unknown instead",
          "Use strict mode",
          "Use utility types to simplify code"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What are generics and why useful?",
          "Q2. Write a generic function for an array reverse.",
          "Q3. Difference between type and interface?",
          "Q4. What does Partial<T> do?",
          "Q5. What is type narrowing?",
          "Q6. Explain mapped types.",
          "Q7. What are decorators used for?",
          "Q8. Why avoid any?",
          "Q9. What are union and intersection types?",
          "Q10. Write a React component with TypeScript props."
        ]
      }
    ]
  },
  {
    id: "websockets-realtime-systems",
    title: "WebSockets & Real-Time Systems – Socket.IO, Pub/Sub, Event-Driven Scaling",
    sections: [
      {
        type: "text",
        content: "WebSockets enable two-way, real-time communication between client and server. Unlike HTTP, which is request-response based, WebSockets maintain a persistent connection."
      },

      {
        type: "heading",
        content: "1. Why WebSockets?"
      },
      {
        type: "list",
        items: [
          "Two-way communication",
          "Low latency",
          "No repeated HTTP requests",
          "Used for chat, live updates, gaming"
        ]
      },

      {
        type: "heading",
        content: "2. WebSocket Lifecycle"
      },
      {
        type: "list",
        items: [
          "Client sends upgrade request",
          "Server accepts and upgrades to WebSocket protocol",
          "Persistent TCP connection established",
          "Messages exchanged in both directions"
        ]
      },

      {
        type: "heading",
        content: "3. Native WebSocket API"
      },
      {
        type: "code",
        content: `const ws = new WebSocket('ws://localhost:3000');\nws.onmessage = (msg) => console.log(msg.data);\nws.send('hello');`
      },

      {
        type: "heading",
        content: "4. Socket.IO (Most Popular Library)"
      },
      {
        type: "text",
        content: "Socket.IO simplifies WebSockets and adds auto-reconnect, rooms, namespaces, fallbacks, and event-based communication."
      },
      {
        type: "code",
        content: `io.on('connection', socket => {\n  socket.emit('welcome', 'Hello client');\n  socket.on('msg', data => console.log(data));\n});`
      },

      {
        type: "heading",
        content: "5. Rooms & Namespaces"
      },
      {
        type: "list",
        items: [
          "Rooms → group clients (chat rooms)",
          "Namespaces → separate logic (/admin, /users)"
        ]
      },

      {
        type: "heading",
        content: "6. Scaling WebSocket Apps"
      },
      {
        type: "list",
        items: [
          "Redis Pub/Sub",
          "Kafka",
          "NATS",
          "Load balancers with sticky sessions"
        ]
      },

      {
        type: "heading",
        content: "Redis Pub/Sub Example"
      },
      {
        type: "code",
        content: `publisher.publish('updates', JSON.stringify({ msg: 'Hello' }));`
      },

      {
        type: "heading",
        content: "7. Event-Driven Architecture (EDA)"
      },
      {
        type: "list",
        items: [
          "Producers send events",
          "Consumers subscribe",
          "Loose coupling between services",
          "High scalability for distributed apps"
        ]
      },

      {
        type: "heading",
        content: "8. Common Use Cases"
      },
      {
        type: "list",
        items: [
          "Chat applications",
          "Live dashboards",
          "Stock market tickers",
          "Collaborative apps (Google Docs style)",
          "Online gaming"
        ]
      },

      {
        type: "heading",
        content: "9. Best Practices"
      },
      {
        type: "list",
        items: [
          "Use Redis adapter for scaling Socket.IO",
          "Use heartbeat pings",
          "Implement reconnection logic",
          "Use authentication tokens in handshake",
          "Avoid sending large payloads frequently"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. Difference between HTTP and WebSockets?",
          "Q2. What problems do rooms solve?",
          "Q3. Why are sticky sessions needed?",
          "Q4. Explain Pub/Sub architecture.",
          "Q5. How does Socket.IO auto-reconnect?",
          "Q6. Why are WebSockets good for gaming?",
          "Q7. What is a WebSocket handshake?",
          "Q8. Write simple WebSocket client/server code.",
          "Q9. How does Redis help in scaling?",
          "Q10. What is the difference between rooms and namespaces?"
        ]
      }
    ]
  },
  {
    id: "advanced-api-design",
    title: "Advanced API Design – REST Best Practices, Rate Limiting, Pagination, Versioning, Caching",
    sections: [
      {
        type: "text",
        content: "API design is crucial for scalable backend systems. REST APIs must be consistent, secure, efficient, and maintainable across teams and microservices."
      },

      {
        type: "heading",
        content: "1. REST API Best Practices"
      },
      {
        type: "list",
        items: [
          "Use nouns, not verbs (/users not /getUsers)",
          "Use plural resources",
          "Use proper HTTP methods (GET, POST, PUT, DELETE)",
          "Use status codes correctly",
          "Document everything (OpenAPI/Swagger)"
        ]
      },

      {
        type: "heading",
        content: "2. Versioning APIs"
      },
      {
        type: "list",
        items: [
          "URL versioning → /api/v1/users",
          "Header versioning → Accept-Version: v1",
          "Rollback-friendly"
        ]
      },

      {
        type: "heading",
        content: "3. Pagination Techniques"
      },
      {
        type: "list",
        items: [
          "Offset Pagination → ?page=2&limit=20",
          "Cursor Pagination → ?cursor=abc123 (best for large data)",
          "Keyset Pagination"
        ]
      },

      {
        type: "heading",
        content: "4. Rate Limiting"
      },
      {
        type: "text",
        content: "Prevents abuse, protects servers, and ensures fair usage."
      },
      {
        type: "list",
        items: [
          "Fixed window",
          "Sliding window",
          "Token bucket",
          "Leaky bucket"
        ]
      },
      {
        type: "code",
        content: `app.use(rateLimit({ windowMs: 60000, max: 100 }));`
      },

      {
        type: "heading",
        content: "5. Caching Strategies"
      },
      {
        type: "list",
        items: [
          "HTTP caching (Cache-Control, ETag)",
          "Redis caching",
          "Client-side caching",
          "CDN caching"
        ]
      },
      {
        type: "code",
        content: `res.set('Cache-Control', 'public, max-age=3600');`
      },

      {
        type: "heading",
        content: "6. Validation"
      },
      {
        type: "list",
        items: [
          "Joi",
          "Yup",
          "Zod",
          "Custom validators"
        ]
      },
      {
        type: "code",
        content: `const schema = Joi.object({ name: Joi.string().min(3).required() });`
      },

      {
        type: "heading",
        content: "7. Error Handling"
      },
      {
        type: "code",
        content: `res.status(400).json({ error: 'Invalid data' });`
      },

      {
        type: "heading",
        content: "8. Logging"
      },
      {
        type: "list",
        items: [
          "Winston",
          "Morgan",
          "Elastic Stack",
          "Datadog, New Relic"
        ]
      },

      {
        type: "heading",
        content: "9. Security Best Practices"
      },
      {
        type: "list",
        items: [
          "Validate all inputs",
          "Use HTTPS only",
          "Rotate API keys",
          "Block SQL injection (ORM validation)",
          "Add rate limiting + WAF"
        ]
      },

      {
        type: "heading",
        content: "10. Summary"
      },
      {
        type: "list",
        items: [
          "REST must be consistent",
          "Version APIs early",
          "Use pagination for large data",
          "Use caching to reduce load",
          "Rate limiting protects from abuse",
          "Validation prevents broken data"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. Why is URL versioning common?",
          "Q2. Difference between offset and cursor pagination?",
          "Q3. Explain token bucket rate limiting.",
          "Q4. Write REST endpoint for updating a product.",
          "Q5. What is ETag used for?",
          "Q6. Why must APIs use HTTPS?",
          "Q7. How does Redis help with caching?",
          "Q8. What is a good format for API errors?",
          "Q9. How do you document an API?",
          "Q10. Write validation for an email field."
        ]
      }
    ]
  },
  {
    id: "advanced-security-auth",
    title: "Advanced Security – JWT, OAuth2, Refresh Tokens, CSRF, Token Rotation",
    sections: [
      {
        type: "text",
        content: "Authentication & security are critical in modern applications. JWT, OAuth2, token rotation, CSRF protection, and secure cookie handling are essential skills."
      },

      {
        type: "heading",
        content: "1. JWT – JSON Web Tokens"
      },
      {
        type: "text",
        content: "JWTs are signed tokens used for authentication. They contain user data in the payload."
      },
      {
        type: "code",
        content: `jwt.sign({ id: 1 }, 'secret', { expiresIn: '15m' });`
      },

      {
        type: "heading",
        content: "Structure of JWT"
      },
      {
        type: "list",
        items: [
          "Header → algorithm info",
          "Payload → data",
          "Signature → verifies token integrity"
        ]
      },

      {
        type: "heading",
        content: "2. OAuth2 (Google, GitHub, Facebook Login)"
      },
      {
        type: "list",
        items: [
          "Authorization Code Flow (most secure)",
          "Implicit Flow",
          "Refresh Token Flow",
          "Client Credentials Flow"
        ]
      },

      {
        type: "heading",
        content: "3. Refresh Tokens"
      },
      {
        type: "text",
        content: "Access tokens expire fast; refresh tokens are long-lived and used to get new access tokens."
      },
      {
        type: "code",
        content: `POST /refresh → returns new access token`
      },

      {
        type: "heading",
        content: "4. Token Rotation"
      },
      {
        type: "list",
        items: [
          "Each refresh token is single-use",
          "If it is reused → account compromised",
          "Enhances security"
        ]
      },

      {
        type: "heading",
        content: "5. CSRF Protection"
      },
      {
        type: "text",
        content: "CSRF attacks trick authenticated users into sending unwanted requests."
      },
      {
        type: "list",
        items: [
          "Use SameSite cookies",
          "Use CSRF tokens",
          "Use double-submit cookies"
        ]
      },

      {
        type: "heading",
        content: "6. Secure Cookie Settings"
      },
      {
        type: "list",
        items: [
          "httpOnly: true → JS cannot access",
          "secure: true → only HTTPS",
          "sameSite: strict/lax",
          "expires/maxAge → limit validity"
        ]
      },

      {
        type: "heading",
        content: "7. Storing Tokens Securely"
      },
      {
        type: "list",
        items: [
          "Access tokens → memory",
          "Refresh tokens → httpOnly cookies",
          "Never store JWT in localStorage (XSS vulnerable)"
        ]
      },

      {
        type: "heading",
        content: "8. Password Hashing"
      },
      {
        type: "code",
        content: `bcrypt.hash(password, 10);`
      },

      {
        type: "heading",
        content: "9. Brute Force Protection"
      },
      {
        type: "list",
        items: [
          "Rate limiting",
          "Account lockout",
          "CAPTCHA",
          "IP throttling"
        ]
      },

      {
        type: "heading",
        content: "10. Summary"
      },
      {
        type: "list",
        items: [
          "JWT → stateless authentication",
          "Refresh tokens → long-lived tokens",
          "Token rotation prevents replay attacks",
          "CSRF tokens protect cookie-based auth",
          "Use httpOnly + secure cookies"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. Why should tokens not be stored in localStorage?",
          "Q2. What is token rotation?",
          "Q3. Explain OAuth2 Authorization Code Flow.",
          "Q4. What is the purpose of a refresh token?",
          "Q5. How do CSRF tokens work?",
          "Q6. What does httpOnly cookie prevent?",
          "Q7. Why are JWTs stateless?",
          "Q8. How do you detect refresh token theft?",
          "Q9. What is SameSite cookie used for?",
          "Q10. Why is password hashing necessary?"
        ]
      }
    ]
  },
  {
    id: "distributed-systems-js",
    title: "Distributed Systems for JavaScript Engineers – Load Balancing, Queues, CAP, Event-Driven Patterns",
    sections: [
      {
        type: "text",
        content: "Distributed systems power modern backend infrastructures. Understanding load balancing, message queues, consistency models, and distributed communication is essential for scalable JS applications."
      },

      {
        type: "heading",
        content: "1. Why Distributed Systems?"
      },
      {
        type: "list",
        items: [
          "Handle millions of users",
          "Scale horizontally across servers",
          "Fault tolerance (no single point of failure)",
          "High performance and availability"
        ]
      },

      {
        type: "heading",
        content: "2. Load Balancing"
      },
      {
        type: "list",
        items: [
          "Round Robin",
          "Least Connections",
          "IP Hash",
          "Weighted Load Balancing"
        ]
      },
      {
        type: "code",
        content: `NGINX example:\nupstream app {\n  server node1 weight=2;\n  server node2;\n}`
      },

      {
        type: "heading",
        content: "3. Message Queues (Async Communication)"
      },
      {
        type: "text",
        content: "Queues help distribute tasks asynchronously and decouple services."
      },
      {
        type: "list",
        items: [
          "RabbitMQ",
          "Kafka",
          "SQS",
          "BullMQ (Redis-based)"
        ]
      },
      {
        type: "code",
        content: `queue.add('email-job', { userId: 1 });`
      },

      {
        type: "heading",
        content: "4. Pub/Sub Model"
      },
      {
        type: "list",
        items: [
          "Publisher sends messages",
          "Subscribers listen",
          "Useful for real-time notifications"
        ]
      },

      {
        type: "heading",
        content: "5. CAP Theorem"
      },
      {
        type: "list",
        items: [
          "Consistency → all nodes see same data",
          "Availability → system always responds",
          "Partition Tolerance → system survives network splits"
        ]
      },
      {
        type: "text",
        content: "A distributed system can only strongly guarantee **2 out of 3**."
      },

      {
        type: "heading",
        content: "Examples"
      },
      {
        type: "list",
        items: [
          "CP System → MongoDB (old versions), HBase",
          "AP System → Cassandra, DynamoDB",
          "CA (rare) → Single node SQL databases"
        ]
      },

      {
        type: "heading",
        content: "6. Consistency Models"
      },
      {
        type: "list",
        items: [
          "Strong consistency",
          "Eventual consistency",
          "Read-your-write consistency",
          "Causal consistency"
        ]
      },

      {
        type: "heading",
        content: "7. Distributed Caching"
      },
      {
        type: "list",
        items: [
          "Redis Cluster",
          "Memcached",
          "CDNs"
        ]
      },

      {
        type: "heading",
        content: "8. Fault Tolerance Patterns"
      },
      {
        type: "list",
        items: [
          "Replication",
          "Leader election",
          "Heartbeats",
          "Circuit breakers"
        ]
      },

      {
        type: "heading",
        content: "9. Event-Driven Architecture"
      },
      {
        type: "list",
        items: [
          "Producers emit events",
          "Consumers react asynchronously",
          "Loose coupling between services",
          "Highly scalable"
        ]
      },

      {
        type: "heading",
        content: "10. Summary"
      },
      {
        type: "list",
        items: [
          "Distributed systems scale horizontally",
          "CAP theorem guides trade-offs",
          "Queues handle async workloads",
          "Event-driven systems improve decoupling",
          "Load balancers distribute traffic"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What problem do message queues solve?",
          "Q2. Explain CAP theorem with examples.",
          "Q3. What is the difference between pub/sub and queues?",
          "Q4. Why is horizontal scaling preferred?",
          "Q5. What is eventual consistency?",
          "Q6. What is a heartbeat in distributed systems?",
          "Q7. Why use Redis cluster?",
          "Q8. Explain least-connections load balancing.",
          "Q9. What is circuit breaking?",
          "Q10. What is leader election?"
        ]
      }
    ]
  },
  {
    id: "performance-profiling",
    title: "JavaScript Performance Profiling – DevTools, Lighthouse, Memory, Flamegraphs",
    sections: [
      {
        type: "text",
        content: "Profiling helps identify performance bottlenecks in JavaScript code, rendering, and memory usage. DevTools, Lighthouse, and WebPageTest are essential tools."
      },

      {
        type: "heading",
        content: "1. Chrome DevTools Performance Panel"
      },
      {
        type: "list",
        items: [
          "Record CPU usage",
          "View flamecharts",
          "Identify long tasks",
          "Find reflows and repaint issues"
        ]
      },

      {
        type: "heading",
        content: "2. Flamegraphs"
      },
      {
        type: "text",
        content: "A flamegraph visualizes function execution time. Wider bars = slower code."
      },

      {
        type: "heading",
        content: "3. Lighthouse Profiling"
      },
      {
        type: "list",
        items: [
          "Performance score",
          "SEO score",
          "Accessibility",
          "Best practices",
          "PWA readiness"
        ]
      },

      {
        type: "heading",
        content: "4. Web Vitals"
      },
      {
        type: "list",
        items: [
          "LCP → Largest Contentful Paint",
          "FID → First Input Delay",
          "CLS → Cumulative Layout Shift"
        ]
      },

      {
        type: "heading",
        content: "5. WebPageTest"
      },
      {
        type: "list",
        items: [
          "Filmstrip view",
          "Waterfall charts",
          "Real device testing",
          "Network throttling"
        ]
      },

      {
        type: "heading",
        content: "6. Memory Profiling"
      },
      {
        type: "list",
        items: [
          "Heap snapshots",
          "Detect memory leaks",
          "Track detached DOM nodes",
          "Event listener debugging"
        ]
      },

      {
        type: "heading",
        content: "7. Rendering Performance"
      },
      {
        type: "list",
        items: [
          "Avoid layout thrashing",
          "Use will-change for animations",
          "Batch DOM reads/writes",
          "Use requestAnimationFrame"
        ]
      },

      {
        type: "heading",
        content: "8. Network Performance"
      },
      {
        type: "list",
        items: [
          "Code splitting",
          "Lazy loading",
          "Compression (gzip, Brotli)",
          "HTTP/2 multiplexing",
          "Caching headers"
        ]
      },

      {
        type: "heading",
        content: "9. Identifying Bottlenecks"
      },
      {
        type: "list",
        items: [
          "Large JS bundles",
          "Blocking the main thread",
          "Re-renders in React",
          "Inefficient loops",
          "Unnecessary API calls"
        ]
      },

      {
        type: "heading",
        content: "10. Summary"
      },
      {
        type: "list",
        items: [
          "DevTools helps find JS + rendering slowdowns",
          "Memory profiling detects leaks",
          "Web Vitals measure UX performance",
          "Lighthouse gives actionable insights",
          "WebPageTest shows real network behavior"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What is a flamegraph?",
          "Q2. What are LCP, FID, CLS?",
          "Q3. How do you detect memory leaks?",
          "Q4. What is a heap snapshot?",
          "Q5. Why use requestAnimationFrame?",
          "Q6. What slows down the main thread?",
          "Q7. Why use code splitting?",
          "Q8. What is layout thrashing?",
          "Q9. How does Lighthouse work?",
          "Q10. Why is HTTP/2 faster than HTTP/1.1?"
        ]
      }
    ]
  },
  {
    id: "advanced-architecture-patterns",
    title: "Advanced Architecture – Clean Architecture, Hexagonal Architecture, Event Sourcing, CQRS",
    sections: [
      {
        type: "text",
        content: "Large-scale systems require architectures that ensure maintainability, testability, flexibility, and long-term scalability."
      },

      {
        type: "heading",
        content: "1. Clean Architecture"
      },
      {
        type: "list",
        items: [
          "Entities (business rules)",
          "Use cases (application logic)",
          "Interfaces (controllers, presenters)",
          "Infrastructure (DB, frameworks)"
        ]
      },
      {
        type: "text",
        content: "Flow: **Outer layers depend on inner layers**, never the opposite."
      },

      {
        type: "heading",
        content: "2. Hexagonal Architecture (Ports & Adapters)"
      },
      {
        type: "list",
        items: [
          "Domain → core logic",
          "Ports → interfaces",
          "Adapters → controllers, DB drivers, UI"
        ]
      },

      {
        type: "heading",
        content: "Hexagonal Benefits"
      },
      {
        type: "list",
        items: [
          "Easily replace databases",
          "Multiple UIs (mobile + web) on same domain",
          "Highly testable"
        ]
      },

      {
        type: "heading",
        content: "3. CQRS (Command Query Responsibility Segregation)"
      },
      {
        type: "list",
        items: [
          "Write operations (commands) handled separately",
          "Read operations (queries) optimized for speed",
          "Independent scaling"
        ]
      },

      {
        type: "heading",
        content: "4. Event Sourcing"
      },
      {
        type: "text",
        content: "Instead of storing the final state, store **all events** that happened."
      },
      {
        type: "code",
        content: `events = [\n  { type: 'UserCreated', data: {...} },\n  { type: 'NameUpdated', data: {...} }\n]`
      },

      {
        type: "heading",
        content: "Event Sourcing Benefits"
      },
      {
        type: "list",
        items: [
          "Audit logs",
          "Replay system to restore state",
          "Perfect for financial systems",
          "Works well with CQRS"
        ]
      },

      {
        type: "heading",
        content: "5. Combining CQRS + Event Sourcing"
      },
      {
        type: "text",
        content: "Commands create events → events update read models."
      },

      {
        type: "heading",
        content: "6. When to Use Advanced Architecture?"
      },
      {
        type: "list",
        items: [
          "Large teams",
          "Complex business rules",
          "Multiple UIs (web + app)",
          "High scalability requirements"
        ]
      },

      {
        type: "heading",
        content: "7. Real-World Examples"
      },
      {
        type: "list",
        items: [
          "Clean Architecture → enterprise apps",
          "Hexagonal → DDD systems",
          "CQRS → banking, online gaming",
          "Event Sourcing → Blockchains, ledger systems"
        ]
      },

      {
        type: "heading",
        content: "8. Summary"
      },
      {
        type: "list",
        items: [
          "Clean Architecture → separation of layers",
          "Hexagonal → ports/adapters pattern",
          "CQRS → split reads and writes",
          "Event Sourcing → store events, not state"
        ]
      },

      {
        type: "heading",
        content: "Practice Questions"
      },
      {
        type: "list",
        items: [
          "Q1. What problem does Clean Architecture solve?",
          "Q2. Why is Hexagonal Architecture testable?",
          "Q3. Explain ports and adapters.",
          "Q4. What is event sourcing?",
          "Q5. Why do CQRS commands not return data?",
          "Q6. Where is event sourcing used?",
          "Q7. Explain dependency inversion in Clean Architecture.",
          "Q8. How do CQRS and Event Sourcing complement each other?",
          "Q9. When should you avoid event sourcing?",
          "Q10. Why separate read/write models?"
        ]
      }
    ]
  }


];

function Advance_js() {
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
          <h1 className="sidebar-title">Advance JavaScript</h1>
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

export default Advance_js;