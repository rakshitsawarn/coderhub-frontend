import React, { useState } from "react";
import "/src/JavaScript CSS/interview_questions_js.css";
import { Link } from "react-router-dom";


const Interview_Questions_js = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const questions = [
    {
      q: "What is JavaScript?",
      a: "JavaScript is a lightweight, interpreted programming language used to create dynamic and interactive web content.",
      difficulty: "Easy",
      category: "Core JavaScript"
    },
    {
      q: "Who developed JavaScript and when?",
      a: "JavaScript was developed by Brendan Eich in 1995 while working at Netscape.",
      difficulty: "Easy",
      category: "Core JavaScript"
    },
    {
      q: "Is JavaScript a compiled or interpreted language?",
      a: "JavaScript is an interpreted language, but modern engines use Just-In-Time (JIT) compilation for better performance.",
      difficulty: "Easy",
      category: "Core JavaScript"
    },
    {
      q: "What are the data types in JavaScript?",
      a: "Primitive types: String, Number, Boolean, Undefined, Null, Symbol, BigInt. Non-primitive: Object.",
      difficulty: "Easy",
      category: "Data Types"
    },
    {
      q: "What is the difference between '==' and '===' in JavaScript?",
      a: "'==' checks equality after type conversion, whereas '===' checks equality without type conversion.",
      difficulty: "Easy",
      category: "Operators"
    },
    {
      q: "What is NaN in JavaScript?",
      a: "NaN stands for 'Not-a-Number' and represents a value that is not a legal number.",
      difficulty: "Easy",
      category: "Numbers"
    },
    {
      q: "How can you check if a value is NaN?",
      a: "You can use the global isNaN() function or Number.isNaN() for strict checking.",
      difficulty: "Easy",
      category: "Numbers"
    },
    {
      q: "What is the use of typeof operator?",
      a: "typeof is used to determine the data type of a given variable or expression.",
      difficulty: "Easy",
      category: "Operators"
    },
    {
      q: "What are variables in JavaScript?",
      a: "Variables are containers for storing data values, declared using var, let, or const.",
      difficulty: "Easy",
      category: "Variables"
    },
    {
      q: "What is the difference between var, let, and const?",
      a: "'var' has function scope, 'let' and 'const' have block scope. 'const' values cannot be reassigned.",
      difficulty: "Easy",
      category: "Variables"
    },
    {
      q: "What is hoisting in JavaScript?",
      a: "Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before execution.",
      difficulty: "Medium",
      category: "Core JavaScript"
    },
    {
      q: "What are template literals?",
      a: "Template literals are strings enclosed in backticks (`) allowing embedded expressions using ${}.",
      difficulty: "Easy",
      category: "Strings"
    },
    {
      q: "What is null in JavaScript?",
      a: "Null is a special value that represents the intentional absence of any object value.",
      difficulty: "Easy",
      category: "Data Types"
    },
    {
      q: "What is undefined in JavaScript?",
      a: "A variable that has been declared but not assigned a value has the value undefined.",
      difficulty: "Easy",
      category: "Data Types"
    },
    {
      q: "What are truthy and falsy values?",
      a: "Truthy values evaluate to true in a boolean context; falsy values include 0, '', null, undefined, NaN, and false.",
      difficulty: "Easy",
      category: "Conditionals"
    },
    {
      q: "Explain implicit and explicit type conversion.",
      a: "Implicit conversion is done automatically by JS; explicit is done manually using functions like Number(), String().",
      difficulty: "Medium",
      category: "Type Conversion"
    },
    {
      q: "What are objects in JavaScript?",
      a: "Objects are collections of key-value pairs where keys are strings and values can be any data type.",
      difficulty: "Easy",
      category: "Objects"
    },
    {
      q: "How do you create an object in JavaScript?",
      a: "Using object literal {}, Object.create(), or class constructors.",
      difficulty: "Easy",
      category: "Objects"
    },
    {
      q: "What are arrays in JavaScript?",
      a: "Arrays are ordered collections of values that can hold any data type.",
      difficulty: "Easy",
      category: "Arrays"
    },
    {
      q: "How do you check if a variable is an array?",
      a: "Use Array.isArray(variable).",
      difficulty: "Easy",
      category: "Arrays"
    },
    {
      q: "What is the difference between slice() and splice()?",
      a: "slice() returns a shallow copy without modifying the array, splice() changes the original array.",
      difficulty: "Medium",
      category: "Arrays"
    },
    {
      q: "What is a function in JavaScript?",
      a: "A function is a reusable block of code designed to perform a particular task.",
      difficulty: "Easy",
      category: "Functions"
    },
    {
      q: "What are function expressions?",
      a: "A function stored in a variable, optionally anonymous, called using the variable name.",
      difficulty: "Easy",
      category: "Functions"
    },
    {
      q: "What are arrow functions?",
      a: "Arrow functions provide a concise syntax and do not have their own this binding.",
      difficulty: "Medium",
      category: "Functions"
    },
    {
      q: "What is the purpose of return statement?",
      a: "It specifies the value a function should return when it completes execution.",
      difficulty: "Easy",
      category: "Functions"
    },
    {
      q: "What is a callback function?",
      a: "A callback is a function passed into another function as an argument to be executed later.",
      difficulty: "Medium",
      category: "Functions"
    },
    {
      q: "What is scope in JavaScript?",
      a: "Scope defines where variables and functions are accessible in code.",
      difficulty: "Medium",
      category: "Scope"
    },
    {
      q: "What is global scope?",
      a: "Variables defined outside any function or block have global scope and are accessible anywhere.",
      difficulty: "Easy",
      category: "Scope"
    },
    {
      q: "What is block scope?",
      a: "Block scope restricts variables declared with let or const to the block they are defined in.",
      difficulty: "Easy",
      category: "Scope"
    },
    {
      q: "What is function scope?",
      a: "Function scope restricts variables declared with var to the function where they are defined.",
      difficulty: "Easy",
      category: "Scope"
    },
    {
      q: "What is a closure in JavaScript?",
      a: "A closure is a function that remembers the variables from its outer scope even after that scope has closed.",
      difficulty: "Hard",
      category: "Functions"
    },
    {
      q: "What are IIFEs?",
      a: "Immediately Invoked Function Expressions run immediately after being defined using ()().",
      difficulty: "Medium",
      category: "Functions"
    },
    {
      q: "What are default parameters?",
      a: "Default parameters allow functions to use default values when no argument is passed.",
      difficulty: "Easy",
      category: "Functions"
    },
    {
      q: "What is an event loop in JavaScript?",
      a: "The event loop handles asynchronous callbacks by pushing them from the task queue to the call stack when it's free.",
      difficulty: "Hard",
      category: "Async JS"
    },
    {
      q: "What is the call stack?",
      a: "The call stack keeps track of function calls in a program and executes them in a LIFO order.",
      difficulty: "Medium",
      category: "Core JavaScript"
    },
    {
      q: "What is the difference between synchronous and asynchronous code?",
      a: "Synchronous code runs line by line; asynchronous code executes independently via callbacks, promises, or async/await.",
      difficulty: "Medium",
      category: "Async JS"
    },
    {
      q: "What is JSON?",
      a: "JSON (JavaScript Object Notation) is a lightweight data format for storing and exchanging data.",
      difficulty: "Easy",
      category: "Data Handling"
    },
    {
      q: "How do you parse JSON in JavaScript?",
      a: "Use JSON.parse() to convert JSON string to object, and JSON.stringify() to convert object to string.",
      difficulty: "Easy",
      category: "Data Handling"
    },
    {
      q: "What is the difference between null and undefined?",
      a: "null is an assigned value meaning 'no value', undefined means a variable has been declared but not assigned.",
      difficulty: "Easy",
      category: "Data Types"
    },
    {
      q: "What is the use of 'this' keyword?",
      a: "'this' refers to the object that owns the function executing the code.",
      difficulty: "Medium",
      category: "OOP"
    },
    {
      q: "What is the difference between shallow and deep copy?",
      a: "Shallow copy copies references of nested objects; deep copy copies all levels of data.",
      difficulty: "Medium",
      category: "Objects"
    },
    {
      q: "What is destructuring in JavaScript?",
      a: "Destructuring allows unpacking values from arrays or properties from objects into distinct variables.",
      difficulty: "Medium",
      category: "ES6"
    },
    {
      q: "What are spread and rest operators?",
      a: "Spread (...) expands elements; rest (...) collects multiple elements into an array.",
      difficulty: "Medium",
      category: "ES6"
    },
    {
      q: "What are the main types of errors in JavaScript?",
      a: "SyntaxError, ReferenceError, TypeError, RangeError, and EvalError.",
      difficulty: "Medium",
      category: "Error Handling"
    },
    {
      q: "How do you handle exceptions in JavaScript?",
      a: "Using try...catch...finally blocks or promises' .catch() method.",
      difficulty: "Medium",
      category: "Error Handling"
    },
    {
      q: "What is 'use strict' in JavaScript?",
      a: "A directive that enables strict mode, catching silent errors and preventing unsafe actions.",
      difficulty: "Medium",
      category: "Core JavaScript"
    },
    {
      q: "What is event bubbling?",
      a: "Event bubbling is when an event propagates from the innermost element to outer elements.",
      difficulty: "Medium",
      category: "Events"
    },
    {
      q: "What is event capturing?",
      a: "Event capturing is the opposite of bubbling, where events propagate from the outermost to the target element.",
      difficulty: "Medium",
      category: "Events"
    },
    {
      q: "What are higher-order functions?",
      a: "Functions that take other functions as arguments or return functions as results.",
      difficulty: "Hard",
      category: "Functions"
    },
    {
      q: "What are pure functions?",
      a: "Pure functions always produce the same output for the same input and have no side effects.",
      difficulty: "Hard",
      category: "Functions"
    },
    {
      q: "What is currying in JavaScript?",
      a: "Currying transforms a function with multiple arguments into a series of functions with one argument each.",
      difficulty: "Hard",
      category: "Functions"
    },

    {
      q: "What is prototypal inheritance in JavaScript?",
      a: "Prototypal inheritance means objects can inherit properties and methods from other objects via the prototype chain.",
      difficulty: "Medium",
      category: "OOP"
    },
    {
      q: "What is a prototype chain?",
      a: "The prototype chain is the mechanism by which JavaScript objects inherit features from one another.",
      difficulty: "Medium",
      category: "OOP"
    },
    {
      q: "How do you create a class in JavaScript?",
      a: "Using the ES6 'class' keyword which acts as syntactic sugar over JavaScript’s prototype-based inheritance.",
      difficulty: "Easy",
      category: "OOP"
    },
    {
      q: "What is the difference between a class and a constructor function?",
      a: "Classes are a cleaner syntax introduced in ES6, while constructor functions were used earlier to create objects.",
      difficulty: "Medium",
      category: "OOP"
    },
    {
      q: "What is the 'super' keyword used for?",
      a: "It is used to call the constructor or methods of a parent class in derived classes.",
      difficulty: "Medium",
      category: "OOP"
    },
    {
      q: "What is encapsulation in JavaScript?",
      a: "Encapsulation is bundling data and methods that operate on that data within a single unit (class or object).",
      difficulty: "Medium",
      category: "OOP"
    },
    {
      q: "What is abstraction in JavaScript?",
      a: "Abstraction hides complex implementation details and exposes only necessary functionality.",
      difficulty: "Medium",
      category: "OOP"
    },
    {
      q: "What is polymorphism in JavaScript?",
      a: "Polymorphism allows objects to share the same interface while having different implementations.",
      difficulty: "Medium",
      category: "OOP"
    },
    {
      q: "What is inheritance in JavaScript?",
      a: "Inheritance is a mechanism where one object can access properties and methods of another object.",
      difficulty: "Easy",
      category: "OOP"
    },
    {
      q: "What are getters and setters?",
      a: "Getters and setters allow you to define object accessors for reading and writing property values.",
      difficulty: "Medium",
      category: "OOP"
    },
    {
      q: "What is the difference between call(), apply(), and bind()?",
      a: "call() and apply() invoke functions immediately with a given 'this', while bind() returns a new bound function.",
      difficulty: "Hard",
      category: "Functions"
    },
    {
      q: "What is the 'new' keyword used for?",
      a: "The 'new' keyword creates an instance of a user-defined object type or class with a constructor.",
      difficulty: "Easy",
      category: "OOP"
    },
    {
      q: "What is functional programming?",
      a: "Functional programming focuses on writing pure functions, avoiding shared state, and using immutability.",
      difficulty: "Hard",
      category: "Functional Programming"
    },
    {
      q: "What are first-class functions?",
      a: "JavaScript treats functions as first-class citizens, meaning they can be stored in variables and passed as arguments.",
      difficulty: "Easy",
      category: "Functions"
    },
    {
      q: "What is a pure function?",
      a: "A function that produces the same output for the same input and has no side effects.",
      difficulty: "Medium",
      category: "Functions"
    },
    {
      q: "What is memoization?",
      a: "Memoization is an optimization technique that stores previously computed results to avoid recomputation.",
      difficulty: "Hard",
      category: "Performance"
    },
    {
      q: "What is the difference between deep and shallow cloning in JavaScript?",
      a: "Shallow copy copies references for nested objects; deep copy clones all nested levels.",
      difficulty: "Medium",
      category: "Objects"
    },
    {
      q: "How can you deep clone an object in JavaScript?",
      a: "Using JSON.parse(JSON.stringify(obj)) or structuredClone() in modern JS.",
      difficulty: "Medium",
      category: "Objects"
    },
    {
      q: "What are constructor functions?",
      a: "Constructor functions are used to create multiple objects with similar properties using the 'new' keyword.",
      difficulty: "Easy",
      category: "OOP"
    },
    {
      q: "What is a static method in a class?",
      a: "Static methods belong to the class itself rather than instances and are called using ClassName.method().",
      difficulty: "Medium",
      category: "OOP"
    },
    {
      q: "What is the difference between class declaration and class expression?",
      a: "Class declarations are hoisted while class expressions can be anonymous and assigned to variables.",
      difficulty: "Medium",
      category: "OOP"
    },
    {
      q: "What is the difference between arrow functions and regular functions?",
      a: "Arrow functions don’t have their own 'this', 'arguments', or 'prototype'.",
      difficulty: "Medium",
      category: "Functions"
    },
    {
      q: "What are default parameters in functions?",
      a: "They allow you to assign default values to parameters if no argument is passed.",
      difficulty: "Easy",
      category: "Functions"
    },
    {
      q: "What is recursion in JavaScript?",
      a: "Recursion is when a function calls itself until a base condition is met.",
      difficulty: "Medium",
      category: "Functions"
    },
    {
      q: "What are arrow functions best suited for?",
      a: "They are best for short callbacks or when you need lexical scoping of 'this'.",
      difficulty: "Easy",
      category: "Functions"
    },
    {
      q: "What are higher-order functions?",
      a: "Functions that take other functions as arguments or return them as output.",
      difficulty: "Medium",
      category: "Functional Programming"
    },
    {
      q: "What is the difference between map(), filter(), and reduce()?",
      a: "map() transforms elements, filter() removes unwanted ones, reduce() combines values into a single result.",
      difficulty: "Medium",
      category: "Arrays"
    },
    {
      q: "How does forEach() differ from map()?",
      a: "forEach() executes a function for each element but returns undefined, while map() returns a new array.",
      difficulty: "Easy",
      category: "Arrays"
    },
    {
      q: "What is the difference between for...in and for...of?",
      a: "for...in iterates over object keys; for...of iterates over iterable values like arrays or strings.",
      difficulty: "Medium",
      category: "Loops"
    },
    {
      q: "What is a symbol in JavaScript?",
      a: "A Symbol is a unique and immutable primitive value often used as an object property key.",
      difficulty: "Medium",
      category: "ES6"
    },
    {
      q: "How do you define constants in JavaScript?",
      a: "Using the 'const' keyword for variables whose values cannot be reassigned.",
      difficulty: "Easy",
      category: "Variables"
    },
    {
      q: "What is variable shadowing?",
      a: "Variable shadowing occurs when a variable declared within a certain scope has the same name as one in an outer scope.",
      difficulty: "Medium",
      category: "Scope"
    },
    {
      q: "What is temporal dead zone?",
      a: "It's the time between variable declaration and initialization where accessing it throws a ReferenceError.",
      difficulty: "Hard",
      category: "Scope"
    },
    {
      q: "What are generators in JavaScript?",
      a: "Generators are special functions that can pause and resume execution using the yield keyword.",
      difficulty: "Hard",
      category: "Functions"
    },
    {
      q: "What are iterators in JavaScript?",
      a: "Iterators are objects that define a sequence and return a value on each iteration via the next() method.",
      difficulty: "Hard",
      category: "Iterators"
    },
    {
      q: "What is the difference between forEach() and for loop?",
      a: "forEach() is a method on arrays; for loop is more flexible and can be used with any iterable.",
      difficulty: "Easy",
      category: "Loops"
    },
    {
      q: "What are callback hells?",
      a: "Callback hell occurs when multiple nested callbacks make code hard to read and maintain.",
      difficulty: "Medium",
      category: "Async JS"
    },
    {
      q: "How can callback hell be avoided?",
      a: "By using Promises or async/await to handle asynchronous operations more cleanly.",
      difficulty: "Medium",
      category: "Async JS"
    },
    {
      q: "What are the different ways to define functions in JavaScript?",
      a: "Function declaration, function expression, arrow function, and constructor Function().",
      difficulty: "Easy",
      category: "Functions"
    },
    {
      q: "What is event delegation?",
      a: "A technique where you use a single event listener on a parent element to handle events on its children.",
      difficulty: "Medium",
      category: "Events"
    },
    {
      q: "What is the difference between pass by value and pass by reference?",
      a: "Primitive types are passed by value, while objects and arrays are passed by reference.",
      difficulty: "Medium",
      category: "Core JavaScript"
    },
    {
      q: "What are anonymous functions?",
      a: "Functions without a name, often used in callbacks or assigned to variables.",
      difficulty: "Easy",
      category: "Functions"
    },
    {
      q: "What is a self-invoking function?",
      a: "A function that runs immediately after it is defined using (function(){})().",
      difficulty: "Medium",
      category: "Functions"
    },
    {
      q: "What is function hoisting?",
      a: "In JavaScript, function declarations are hoisted, meaning they can be used before they are defined.",
      difficulty: "Medium",
      category: "Functions"
    },
    {
      q: "What is lexical scoping?",
      a: "Lexical scoping means variables are resolved based on their location in the source code.",
      difficulty: "Medium",
      category: "Scope"
    },
    {
      q: "What is garbage collection in JavaScript?",
      a: "The process of automatically freeing memory that is no longer in use by removing unreachable objects.",
      difficulty: "Medium",
      category: "Memory Management"
    },
    {
      q: "How does JavaScript handle memory leaks?",
      a: "JavaScript relies on garbage collection but leaks can occur via global variables or forgotten closures.",
      difficulty: "Hard",
      category: "Memory Management"
    },
    {
      q: "What are WeakMap and WeakSet?",
      a: "WeakMap and WeakSet are collections that hold weak references to keys and values, preventing memory leaks.",
      difficulty: "Hard",
      category: "ES6"
    },
    {
      q: "What is immutability?",
      a: "Immutability means data cannot be modified after creation; new copies are created instead.",
      difficulty: "Hard",
      category: "Functional Programming"
    },
    {
      q: "What is the purpose of Object.freeze()?",
      a: "Object.freeze() prevents modification of existing properties and addition of new ones.",
      difficulty: "Medium",
      category: "Objects"
    },
    {
      q: "What is Object.seal() in JavaScript?",
      a: "Object.seal() prevents adding or removing properties but allows modification of existing ones.",
      difficulty: "Medium",
      category: "Objects"
    },

    {
      q: "What is destructuring in JavaScript?",
      a: "Destructuring allows unpacking values from arrays or properties from objects into distinct variables.",
      difficulty: "Easy",
      category: "ES6"
    },
    {
      q: "What is the spread operator?",
      a: "The spread operator (...) expands arrays or objects into individual elements or properties.",
      difficulty: "Easy",
      category: "ES6"
    },
    {
      q: "What is the rest parameter?",
      a: "The rest parameter collects multiple arguments into an array, represented by (...args).",
      difficulty: "Medium",
      category: "ES6"
    },
    {
      q: "What is the difference between spread and rest operators?",
      a: "Spread expands elements, while rest collects multiple elements into a single array.",
      difficulty: "Medium",
      category: "ES6"
    },
    {
      q: "What are template literals?",
      a: "Template literals use backticks (`) to allow string interpolation and multiline strings.",
      difficulty: "Easy",
      category: "ES6"
    },
    {
      q: "What is the difference between var, let, and const?",
      a: "var is function-scoped and hoisted, let and const are block-scoped; const cannot be reassigned.",
      difficulty: "Easy",
      category: "Variables"
    },
    {
      q: "What is a promise in JavaScript?",
      a: "A Promise represents the eventual completion or failure of an asynchronous operation.",
      difficulty: "Medium",
      category: "Async JS"
    },
    {
      q: "What are the possible states of a Promise?",
      a: "Pending, Fulfilled, and Rejected.",
      difficulty: "Easy",
      category: "Async JS"
    },
    {
      q: "What is async/await in JavaScript?",
      a: "Async/await syntax allows asynchronous code to be written in a synchronous manner.",
      difficulty: "Medium",
      category: "Async JS"
    },
    {
      q: "What is the difference between synchronous and asynchronous code?",
      a: "Synchronous code runs sequentially, asynchronous code allows non-blocking execution.",
      difficulty: "Easy",
      category: "Async JS"
    },
    {
      q: "What are modules in JavaScript?",
      a: "Modules allow code to be organized and reused using 'export' and 'import' keywords.",
      difficulty: "Medium",
      category: "Modules"
    },
    {
      q: "What is tree shaking?",
      a: "Tree shaking removes unused code during the bundling process for optimized builds.",
      difficulty: "Hard",
      category: "Performance"
    },
    {
      q: "What is dynamic import in JavaScript?",
      a: "Dynamic import() allows you to load modules on demand instead of at the start.",
      difficulty: "Medium",
      category: "Modules"
    },
    {
      q: "What is the difference between default and named exports?",
      a: "Default exports export one main value, named exports export multiple specific values.",
      difficulty: "Easy",
      category: "Modules"
    },
    {
      q: "What is a Set in JavaScript?",
      a: "Set is a collection of unique values where duplicates are not allowed.",
      difficulty: "Easy",
      category: "ES6"
    },
    {
      q: "What is a Map in JavaScript?",
      a: "Map holds key-value pairs and remembers the original insertion order of the keys.",
      difficulty: "Medium",
      category: "ES6"
    },
    {
      q: "What is the difference between Map and Object?",
      a: "Objects have string keys only, while Maps can have keys of any type and maintain order.",
      difficulty: "Medium",
      category: "ES6"
    },
    {
      q: "What are WeakMap and WeakSet used for?",
      a: "They hold weak references to objects to prevent memory leaks.",
      difficulty: "Hard",
      category: "Memory Management"
    },
    {
      q: "What is the difference between shallow copy and deep copy in arrays?",
      a: "Shallow copy copies references of nested objects, deep copy creates new copies for all levels.",
      difficulty: "Medium",
      category: "Arrays"
    },
    {
      q: "How can you merge two arrays in JavaScript?",
      a: "Using the spread operator [...arr1, ...arr2] or concat() method.",
      difficulty: "Easy",
      category: "Arrays"
    },
    {
      q: "What are tagged template literals?",
      a: "They allow custom processing of template literals by passing them through a function.",
      difficulty: "Hard",
      category: "ES6"
    },
    {
      q: "What is Symbol.iterator?",
      a: "Symbol.iterator defines the default iteration behavior for an object.",
      difficulty: "Hard",
      category: "Iterators"
    },
    {
      q: "What is a closure scope chain?",
      a: "The scope chain defines how variables are resolved within nested closures.",
      difficulty: "Hard",
      category: "Scope"
    },
    {
      q: "What is Object.assign() used for?",
      a: "It copies properties from one or more source objects to a target object.",
      difficulty: "Easy",
      category: "Objects"
    },
    {
      q: "What are ES6 modules advantages?",
      a: "They improve modularity, reusability, and maintainability of code.",
      difficulty: "Easy",
      category: "Modules"
    },
    {
      q: "What is the difference between == and ===?",
      a: "== checks equality with type coercion, === checks strict equality without type coercion.",
      difficulty: "Easy",
      category: "Core JS"
    },
    {
      q: "What is type coercion in JavaScript?",
      a: "Type coercion is automatic conversion between different types, like string to number.",
      difficulty: "Medium",
      category: "Core JS"
    },
    {
      q: "What is NaN in JavaScript?",
      a: "NaN stands for 'Not-a-Number' and indicates an invalid numeric operation result.",
      difficulty: "Easy",
      category: "Core JS"
    },
    {
      q: "How do you check if a value is NaN?",
      a: "Use Number.isNaN(value) to check strictly for NaN.",
      difficulty: "Easy",
      category: "Core JS"
    },
    {
      q: "What is the difference between null and undefined?",
      a: "null is an assigned value representing 'nothing', undefined means a variable is declared but not assigned.",
      difficulty: "Easy",
      category: "Core JS"
    },
    {
      q: "What is the typeof operator?",
      a: "It returns the type of a variable, such as 'string', 'object', or 'undefined'.",
      difficulty: "Easy",
      category: "Core JS"
    },
    {
      q: "What is the difference between slice() and splice()?",
      a: "slice() returns a shallow copy without altering the array; splice() modifies the original array.",
      difficulty: "Medium",
      category: "Arrays"
    },
    {
      q: "What are optional chaining and nullish coalescing operators?",
      a: "Optional chaining (?.) avoids errors on null/undefined, nullish coalescing (??) provides default values.",
      difficulty: "Medium",
      category: "ES11"
    },
    {
      q: "What is event bubbling?",
      a: "Event bubbling means an event starts at the target element and bubbles up to its ancestors.",
      difficulty: "Medium",
      category: "Events"
    },
    {
      q: "What is event capturing?",
      a: "Event capturing is the opposite of bubbling, where the event is caught on the way down.",
      difficulty: "Medium",
      category: "Events"
    },
    {
      q: "How can you prevent event bubbling?",
      a: "Using event.stopPropagation() method.",
      difficulty: "Easy",
      category: "Events"
    },
    {
      q: "What is event.preventDefault() used for?",
      a: "It prevents the default action associated with an event from occurring.",
      difficulty: "Easy",
      category: "Events"
    },
    {
      q: "What is JSON?",
      a: "JSON (JavaScript Object Notation) is a lightweight format for data interchange.",
      difficulty: "Easy",
      category: "JSON"
    },
    {
      q: "How can you parse JSON data?",
      a: "Using JSON.parse() to convert JSON strings into JavaScript objects.",
      difficulty: "Easy",
      category: "JSON"
    },
    {
      q: "How do you convert an object to JSON?",
      a: "Using JSON.stringify(object).",
      difficulty: "Easy",
      category: "JSON"
    },
    {
      q: "What is the difference between localStorage and sessionStorage?",
      a: "localStorage persists data with no expiration, sessionStorage clears data after the tab closes.",
      difficulty: "Easy",
      category: "Web Storage"
    },
    {
      q: "What is IndexedDB?",
      a: "IndexedDB is a low-level API for storing large amounts of structured data on the client-side.",
      difficulty: "Hard",
      category: "Web Storage"
    },
    {
      q: "What is service worker in JavaScript?",
      a: "A service worker runs in the background and enables offline caching and push notifications.",
      difficulty: "Hard",
      category: "PWA"
    },
    {
      q: "What are web workers?",
      a: "Web Workers allow background script execution without blocking the main thread.",
      difficulty: "Medium",
      category: "Performance"
    },
    {
      q: "What is the difference between microtasks and macrotasks?",
      a: "Microtasks have higher priority and execute before macrotasks in the event loop.",
      difficulty: "Hard",
      category: "Event Loop"
    },
    {
      q: "What is the Event Loop?",
      a: "The Event Loop handles execution of asynchronous code in JavaScript by managing call stack and task queue.",
      difficulty: "Hard",
      category: "Async JS"
    },
    {
      q: "What is the call stack?",
      a: "The call stack keeps track of function calls in the order they need to be executed.",
      difficulty: "Medium",
      category: "Execution Context"
    },
    {
      q: "What is the heap in JavaScript?",
      a: "The heap is a region in memory where objects are stored.",
      difficulty: "Medium",
      category: "Memory Management"
    },
    {
      q: "What are microtasks in JavaScript?",
      a: "Microtasks are asynchronous callbacks scheduled to run after the current stack but before rendering.",
      difficulty: "Hard",
      category: "Event Loop"
    },
    {
      q: "What is the difference between microtask queue and callback queue?",
      a: "Microtask queue has higher priority; callbacks from Promises go there, while others go to callback queue.",
      difficulty: "Hard",
      category: "Event Loop"
    },
    {
      q: "What are async iterators?",
      a: "Async iterators allow asynchronous iteration using for await...of syntax.",
      difficulty: "Hard",
      category: "Async JS"
    },
    {
      q: "What are dynamic imports used for?",
      a: "To load JavaScript modules on demand instead of at page load.",
      difficulty: "Medium",
      category: "Modules"
    },
    {
      q: "What is optional chaining operator used for?",
      a: "It allows safe property access without throwing errors when encountering null or undefined.",
      difficulty: "Medium",
      category: "ES11"
    },

    {
      q: "What is the DOM?",
      a: "The Document Object Model (DOM) is a programming interface for HTML and XML documents, representing the page so that programs can manipulate it.",
      difficulty: "Easy",
      category: "DOM"
    },
    {
      q: "How can you select an element in the DOM?",
      a: "You can use methods like getElementById(), querySelector(), or querySelectorAll().",
      difficulty: "Easy",
      category: "DOM"
    },
    {
      q: "What is the difference between innerText and innerHTML?",
      a: "innerText returns visible text content; innerHTML returns all HTML markup inside an element.",
      difficulty: "Medium",
      category: "DOM"
    },
    {
      q: "How do you create a new DOM element?",
      a: "Use document.createElement('tagName') and append it using appendChild() or append().",
      difficulty: "Easy",
      category: "DOM"
    },
    {
      q: "What is the difference between append() and appendChild()?",
      a: "append() can add text or multiple nodes, while appendChild() only accepts a single node.",
      difficulty: "Medium",
      category: "DOM"
    },
    {
      q: "How can you remove an element from the DOM?",
      a: "Use element.remove() or parentNode.removeChild(element).",
      difficulty: "Easy",
      category: "DOM"
    },
    {
      q: "What is event delegation in JavaScript?",
      a: "Event delegation allows handling events at a parent level instead of adding listeners to individual child elements.",
      difficulty: "Medium",
      category: "Events"
    },
    {
      q: "What is the difference between target and currentTarget in an event?",
      a: "target is the element that triggered the event, currentTarget is the element the listener is attached to.",
      difficulty: "Medium",
      category: "Events"
    },
    {
      q: "What are custom events in JavaScript?",
      a: "Custom events allow you to create and dispatch your own events using CustomEvent().",
      difficulty: "Hard",
      category: "Events"
    },
    {
      q: "What is the use of addEventListener()?",
      a: "It attaches an event handler to an element without overwriting existing event handlers.",
      difficulty: "Easy",
      category: "Events"
    },
    {
      q: "How can you detect a browser or device type in JavaScript?",
      a: "By checking the navigator.userAgent property.",
      difficulty: "Medium",
      category: "Browser APIs"
    },
    {
      q: "What are cookies?",
      a: "Cookies are small pieces of data stored on the client side for session tracking and user preferences.",
      difficulty: "Easy",
      category: "Web Storage"
    },
    {
      q: "How do you set and get cookies in JavaScript?",
      a: "Use document.cookie to read and write cookies.",
      difficulty: "Medium",
      category: "Web Storage"
    },
    {
      q: "What is the difference between localStorage and cookies?",
      a: "localStorage stores larger data persistently; cookies have size limits and are sent with HTTP requests.",
      difficulty: "Medium",
      category: "Web Storage"
    },
    {
      q: "What is the difference between sessionStorage and localStorage?",
      a: "sessionStorage clears data after the browser tab closes; localStorage persists data indefinitely.",
      difficulty: "Easy",
      category: "Web Storage"
    },
    {
      q: "What is the Fetch API?",
      a: "The Fetch API provides a modern interface for making HTTP requests, returning Promises.",
      difficulty: "Medium",
      category: "Browser APIs"
    },
    {
      q: "How do you handle errors in async/await?",
      a: "By wrapping await statements inside try...catch blocks.",
      difficulty: "Medium",
      category: "Error Handling"
    },
    {
      q: "What is the purpose of try...catch?",
      a: "It handles runtime errors gracefully without breaking program flow.",
      difficulty: "Easy",
      category: "Error Handling"
    },
    {
      q: "What is the finally block used for?",
      a: "finally executes after try/catch regardless of success or failure, often used for cleanup.",
      difficulty: "Easy",
      category: "Error Handling"
    },
    {
      q: "What are syntax errors in JavaScript?",
      a: "Syntax errors occur when code violates JavaScript language rules and fails to parse.",
      difficulty: "Easy",
      category: "Error Handling"
    },
    {
      q: "What are runtime errors?",
      a: "Runtime errors occur while executing code that is syntactically correct but fails due to logic or environment issues.",
      difficulty: "Medium",
      category: "Error Handling"
    },
    {
      q: "What is event propagation?",
      a: "Event propagation defines the order in which event handlers are called—capturing, target, and bubbling phases.",
      difficulty: "Medium",
      category: "Events"
    },
    {
      q: "What are web APIs?",
      a: "Web APIs are browser-provided interfaces like DOM, Fetch, and Geolocation used to interact with the environment.",
      difficulty: "Easy",
      category: "Browser APIs"
    },
    {
      q: "What is the Geolocation API?",
      a: "The Geolocation API retrieves the user's geographical location with permission.",
      difficulty: "Medium",
      category: "Browser APIs"
    },
    {
      q: "What are timers in JavaScript?",
      a: "Timers like setTimeout() and setInterval() execute code after a delay or at regular intervals.",
      difficulty: "Easy",
      category: "Timers"
    },
    {
      q: "What is the difference between setTimeout() and setInterval()?",
      a: "setTimeout() runs code once after a delay; setInterval() repeats code at regular intervals.",
      difficulty: "Easy",
      category: "Timers"
    },
    {
      q: "How do you clear a timeout or interval?",
      a: "Use clearTimeout(id) or clearInterval(id).",
      difficulty: "Easy",
      category: "Timers"
    },
    {
      q: "What is requestAnimationFrame()?",
      a: "requestAnimationFrame() tells the browser to perform an animation before the next repaint.",
      difficulty: "Hard",
      category: "Performance"
    },
    {
      q: "What are memory leaks in JavaScript?",
      a: "Memory leaks occur when memory is not released after use, often due to unreferenced objects remaining in scope.",
      difficulty: "Hard",
      category: "Performance"
    },
    {
      q: "How can you improve JavaScript performance?",
      a: "By minimizing DOM access, using debouncing, caching results, and avoiding global variables.",
      difficulty: "Medium",
      category: "Performance"
    },
    {
      q: "What is lazy loading?",
      a: "Lazy loading delays loading of non-critical resources until they are needed.",
      difficulty: "Medium",
      category: "Performance"
    },
    {
      q: "What are WebSockets?",
      a: "WebSockets provide full-duplex communication between client and server in real-time.",
      difficulty: "Hard",
      category: "Browser APIs"
    },
    {
      q: "What is CORS?",
      a: "Cross-Origin Resource Sharing (CORS) controls access between resources on different origins for security.",
      difficulty: "Medium",
      category: "Security"
    },
    {
      q: "What is same-origin policy?",
      a: "It restricts scripts on one origin from interacting with content from another origin for security.",
      difficulty: "Medium",
      category: "Security"
    },
    {
      q: "What are service workers?",
      a: "Service workers act as a proxy between web apps and the network, enabling offline support and caching.",
      difficulty: "Hard",
      category: "PWA"
    },
    {
      q: "What is the purpose of the Cache API?",
      a: "Cache API allows storing network requests and responses for offline use.",
      difficulty: "Medium",
      category: "PWA"
    },
    {
      q: "What is a Web Manifest?",
      a: "A JSON file describing a PWA's metadata such as icons, theme color, and start URL.",
      difficulty: "Medium",
      category: "PWA"
    },
    {
      q: "What is the difference between window and document objects?",
      a: "window represents the browser window; document represents the loaded HTML page.",
      difficulty: "Easy",
      category: "Browser Objects"
    },
    {
      q: "What is the BOM?",
      a: "The Browser Object Model (BOM) provides browser-specific objects like window, navigator, screen, and history.",
      difficulty: "Medium",
      category: "Browser Objects"
    },
    {
      q: "How can you redirect a page in JavaScript?",
      a: "By setting window.location.href or using window.location.assign().",
      difficulty: "Easy",
      category: "Browser Objects"
    },
    {
      q: "What is the difference between history.pushState() and location.href?",
      a: "pushState() changes the URL without reloading the page; location.href reloads it.",
      difficulty: "Medium",
      category: "Browser Objects"
    },
    {
      q: "What is the purpose of the navigator object?",
      a: "It provides information about the browser and operating system, like userAgent or language.",
      difficulty: "Easy",
      category: "Browser Objects"
    },
    {
      q: "What is the screen object in JavaScript?",
      a: "The screen object provides information about the user's display, such as width and height.",
      difficulty: "Easy",
      category: "Browser Objects"
    },
    {
      q: "How can you detect if JavaScript is enabled or disabled in the browser?",
      a: "Using the <noscript> tag to show fallback content when JS is disabled.",
      difficulty: "Easy",
      category: "Browser Basics"
    },
    {
      q: "What is web accessibility?",
      a: "Web accessibility ensures that websites are usable by people with disabilities using proper ARIA roles and semantics.",
      difficulty: "Medium",
      category: "Web Concepts"
    },
    {
      q: "What is the difference between client-side and server-side rendering?",
      a: "Client-side rendering renders pages in the browser using JavaScript; server-side rendering pre-renders on the server.",
      difficulty: "Medium",
      category: "Rendering"
    },
    {
      q: "What are meta tags used for in HTML and JavaScript?",
      a: "Meta tags define metadata like viewport, charset, or SEO information for web pages.",
      difficulty: "Easy",
      category: "Web Concepts"
    },
    {
      q: "What is responsive design?",
      a: "Responsive design makes web pages adapt to different screen sizes using media queries and flexible layouts.",
      difficulty: "Easy",
      category: "Web Concepts"
    },
    {
      q: "What are content security policies (CSP)?",
      a: "CSPs help prevent XSS and data injection attacks by controlling resource loading policies.",
      difficulty: "Hard",
      category: "Security"
    },
    {
      q: "What is XSS (Cross-Site Scripting)?",
      a: "XSS is an attack where malicious scripts are injected into trusted websites, compromising user data.",
      difficulty: "Hard",
      category: "Security"
    },
    {
      q: "How can you prevent XSS attacks in JavaScript?",
      a: "By sanitizing user input, escaping HTML, and enforcing content security policies.",
      difficulty: "Hard",
      category: "Security"
    },

    {
      q: "What is a Promise in JavaScript?",
      a: "A Promise is an object that represents the eventual completion or failure of an asynchronous operation.",
      difficulty: "Medium",
      category: "Asynchronous JS"
    },
    {
      q: "What are the possible states of a Promise?",
      a: "Pending, Fulfilled, and Rejected.",
      difficulty: "Easy",
      category: "Asynchronous JS"
    },
    {
      q: "What is async/await in JavaScript?",
      a: "Async/await is syntactic sugar over Promises that allows writing asynchronous code in a synchronous manner.",
      difficulty: "Medium",
      category: "Asynchronous JS"
    },
    {
      q: "How does async/await handle errors?",
      a: "By wrapping the await call in a try/catch block.",
      difficulty: "Medium",
      category: "Asynchronous JS"
    },
    {
      q: "Can you use await outside an async function?",
      a: "No, await can only be used inside async functions, except in top-level await in ES2022 modules.",
      difficulty: "Medium",
      category: "Asynchronous JS"
    },
    {
      q: "What is the event loop in JavaScript?",
      a: "The event loop continuously checks the call stack and callback queue to execute asynchronous code.",
      difficulty: "Medium",
      category: "Asynchronous JS"
    },
    {
      q: "What is the call stack?",
      a: "The call stack stores execution contexts of function calls in a LIFO order.",
      difficulty: "Easy",
      category: "Asynchronous JS"
    },
    {
      q: "What is the callback queue?",
      a: "The callback queue holds callback functions waiting to be executed after the call stack is empty.",
      difficulty: "Medium",
      category: "Asynchronous JS"
    },
    {
      q: "What is the microtask queue?",
      a: "The microtask queue stores promise callbacks and executes them before the callback queue.",
      difficulty: "Medium",
      category: "Asynchronous JS"
    },
    {
      q: "What is the difference between process.nextTick and setImmediate?",
      a: "process.nextTick executes before the next event loop iteration, setImmediate executes after the current poll phase.",
      difficulty: "Hard",
      category: "Asynchronous JS"
    },
    {
      q: "What are Web Workers?",
      a: "Web Workers allow running JavaScript code in background threads for parallel execution.",
      difficulty: "Medium",
      category: "Web APIs"
    },
    {
      q: "What is a Service Worker?",
      a: "A Service Worker is a background script that handles caching and offline access in web apps.",
      difficulty: "Medium",
      category: "Web APIs"
    },
    {
      q: "What is a Fetch API?",
      a: "Fetch API provides a modern way to make network requests, returning Promises instead of callbacks.",
      difficulty: "Easy",
      category: "Web APIs"
    },
    {
      q: "How do you cancel a fetch request?",
      a: "By using AbortController and calling controller.abort().",
      difficulty: "Medium",
      category: "Web APIs"
    },
    {
      q: "What is the difference between Promise.all and Promise.allSettled?",
      a: "Promise.all rejects if any promise fails, while Promise.allSettled waits for all promises and reports results.",
      difficulty: "Medium",
      category: "Asynchronous JS"
    },
    {
      q: "What is Promise.race?",
      a: "Promise.race returns the result of the first settled promise, whether fulfilled or rejected.",
      difficulty: "Medium",
      category: "Asynchronous JS"
    },
    {
      q: "What is Promise.any?",
      a: "Promise.any resolves with the first fulfilled promise or rejects if all fail.",
      difficulty: "Medium",
      category: "Asynchronous JS"
    },
    {
      q: "Explain the concept of throttling in JS.",
      a: "Throttling limits the number of times a function is executed over time.",
      difficulty: "Medium",
      category: "Performance Optimization"
    },
    {
      q: "Explain the concept of debouncing in JS.",
      a: "Debouncing ensures a function runs only after a specified delay since the last call.",
      difficulty: "Medium",
      category: "Performance Optimization"
    },
    {
      q: "What is lazy loading?",
      a: "Lazy loading delays the loading of resources until they are needed.",
      difficulty: "Medium",
      category: "Performance Optimization"
    },
    {
      q: "What is memoization?",
      a: "Memoization caches the results of expensive function calls for reuse.",
      difficulty: "Medium",
      category: "Performance Optimization"
    },
    {
      q: "What is Web Storage API?",
      a: "It provides localStorage and sessionStorage for storing key-value pairs in the browser.",
      difficulty: "Easy",
      category: "Web APIs"
    },
    {
      q: "What is localStorage?",
      a: "localStorage allows persistent storage of data with no expiration date.",
      difficulty: "Easy",
      category: "Web APIs"
    },
    {
      q: "What is sessionStorage?",
      a: "sessionStorage stores data for the duration of a page session.",
      difficulty: "Easy",
      category: "Web APIs"
    },
    {
      q: "What is IndexedDB?",
      a: "IndexedDB is a low-level API for storing large amounts of structured data in the browser.",
      difficulty: "Medium",
      category: "Web APIs"
    },
    {
      q: "What is a cookie?",
      a: "Cookies store small pieces of data on the client side, often used for sessions and tracking.",
      difficulty: "Easy",
      category: "Web APIs"
    },
    {
      q: "Difference between localStorage and cookies?",
      a: "localStorage is larger and not sent with HTTP requests, while cookies are smaller and sent to the server.",
      difficulty: "Medium",
      category: "Web APIs"
    },
    {
      q: "What is CORS?",
      a: "CORS (Cross-Origin Resource Sharing) is a security feature that restricts cross-origin HTTP requests.",
      difficulty: "Medium",
      category: "Security"
    },
    {
      q: "How do you handle CORS errors?",
      a: "By setting appropriate Access-Control-Allow-Origin headers on the server.",
      difficulty: "Medium",
      category: "Security"
    },
    {
      q: "What is CSRF?",
      a: "Cross-Site Request Forgery is an attack where unauthorized commands are sent from a trusted user.",
      difficulty: "Medium",
      category: "Security"
    },
    {
      q: "What is XSS?",
      a: "Cross-Site Scripting allows attackers to inject malicious scripts into trusted web applications.",
      difficulty: "Medium",
      category: "Security"
    },
    {
      q: "How to prevent XSS attacks?",
      a: "By sanitizing user inputs and using Content Security Policy (CSP).",
      difficulty: "Medium",
      category: "Security"
    },
    {
      q: "What is a module bundler?",
      a: "A tool like Webpack or Parcel that bundles multiple JS files into one for optimization.",
      difficulty: "Medium",
      category: "Tooling"
    },
    {
      q: "What is tree shaking?",
      a: "Tree shaking removes unused code during bundling to reduce file size.",
      difficulty: "Medium",
      category: "Tooling"
    },
    {
      q: "What is transpilation?",
      a: "Converting modern JS code (ES6+) into backward-compatible versions using tools like Babel.",
      difficulty: "Medium",
      category: "Tooling"
    },
    {
      q: "What is code splitting?",
      a: "Code splitting divides code into smaller bundles loaded on demand.",
      difficulty: "Medium",
      category: "Performance Optimization"
    },
    {
      q: "What is polyfilling?",
      a: "Polyfills are scripts that replicate modern JS features in older browsers.",
      difficulty: "Medium",
      category: "Compatibility"
    },
    {
      q: "What is dynamic import?",
      a: "Dynamic import allows loading JS modules conditionally at runtime using import().",
      difficulty: "Medium",
      category: "Modules"
    },
    {
      q: "What is the difference between default and named exports?",
      a: "Default exports export one main value; named exports export multiple values by name.",
      difficulty: "Easy",
      category: "Modules"
    },
    {
      q: "What are WeakMap and WeakSet used for?",
      a: "They store objects without preventing garbage collection of keys.",
      difficulty: "Medium",
      category: "Data Structures"
    },
    {
      q: "What is the Reflect API?",
      a: "Reflect provides methods for interceptable JavaScript operations, complementing Proxy.",
      difficulty: "Hard",
      category: "Advanced JS"
    },
    {
      q: "What is a Proxy in JS?",
      a: "Proxy allows you to intercept and redefine fundamental operations on objects.",
      difficulty: "Hard",
      category: "Advanced JS"
    },
    {
      q: "What are Symbols?",
      a: "Symbols are unique and immutable data types used as object property keys.",
      difficulty: "Medium",
      category: "Advanced JS"
    },
    {
      q: "What are generators?",
      a: "Generators are special functions that can pause and resume execution using yield.",
      difficulty: "Hard",
      category: "Advanced JS"
    },
    {
      q: "What are iterators?",
      a: "Iterators provide a way to access elements of a collection sequentially using next().",
      difficulty: "Medium",
      category: "Advanced JS"
    },
    {
      q: "What is BigInt?",
      a: "BigInt allows representing integers larger than Number.MAX_SAFE_INTEGER.",
      difficulty: "Medium",
      category: "Advanced JS"
    },
    {
      q: "What is Optional Chaining?",
      a: "Optional chaining (?.) allows safe access to deeply nested object properties.",
      difficulty: "Easy",
      category: "ES2020"
    },
    {
      q: "What is Nullish Coalescing?",
      a: "The nullish coalescing operator (??) returns the right operand if the left is null or undefined.",
      difficulty: "Easy",
      category: "ES2020"
    },
    {
      q: "What is Temporal API?",
      a: "The Temporal API provides modern date/time handling to replace the Date object.",
      difficulty: "Hard",
      category: "ES2023"
    },
    {
      q: "What is top-level await?",
      a: "Top-level await allows using await outside async functions in ES modules.",
      difficulty: "Medium",
      category: "ES2022"
    },
    {
      q: "How can you optimize a large JavaScript application?",
      a: "By using lazy loading, code splitting, caching, and performance profiling.",
      difficulty: "Hard",
      category: "Performance Optimization"
    },
    {
      q: "How do you handle memory leaks in JS?",
      a: "By using weak references, removing event listeners, and profiling memory usage.",
      difficulty: "Hard",
      category: "Memory Management"
    },
    {
      q: "What is the purpose of requestIdleCallback?",
      a: "It allows running background tasks when the browser is idle.",
      difficulty: "Medium",
      category: "Performance Optimization"
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
          JavaScript <span className="highlight-interview">Interview Questions</span>
        </h1>
        <p className="interview-subtitle">
          Essential JavaScript questions covering all fundamental concepts for interview success
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

export default Interview_Questions_js;
