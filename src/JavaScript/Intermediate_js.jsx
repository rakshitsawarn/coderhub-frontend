import React from "react";
import { Link } from "react-router-dom";


const Intermediate_js = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "left", lineHeight: 1.6 }}>
      {/* Profile Circle */}
      <Link to="/pages/profile" className="profile-circle">
        <div className="profile-avatar">
          <span className="profile-text">👤</span>
        </div>
        <div className="profile-status"></div>
      </Link>
      <h1 style={{ textAlign: "center", color: "#0b5fff" }}>
        🚀 JavaScript — Complete Intermediate (Very Detailed, Simple English)
      </h1>

      <p>
        Ye guide intermediate JavaScript ka **full** content hai — simple
        language mein, bahut examples ke saath, step-by-step. Agar koi beginner
        (class 3) ya working professional ye padh lega — dono ko concepts
        clear ho jayenge.
      </p>

      <hr />

      {/* 1. Scope, Hoisting, Lexical Scope */}
      <h2>1. Scope, Hoisting, Lexical Scope</h2>

      <h3>1.1 What is Scope?</h3>
      <p>
        <b>Scope</b> batata hai ki variable ya function code ke kis part mein
        accessible (use) kiya ja sakta hai. Socho ek kamra (room) jahan kuch
        cheezein rakhi hain — wahi cheezein usi kamre mein use ho sakti hain.
      </p>

      <h4>Types of scope</h4>
      <ul>
        <li><b>Global scope:</b> Jo variable file ke bahar declare hua, wo pure page mein accessible.</li>
        <li><b>Function scope:</b> Jo variable function ke andar declare hua, wo sirf usi function ke andar use hota.</li>
        <li><b>Block scope:</b> Curly braces {`{ }`} ke andar jo <code>let</code> ya <code>const</code> se banega, wo us block tak limited rahega.</li>
      </ul>

      <h4>Example:</h4>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`// Global scope
let globalVar = "I am global";

function test() {
  // function scope
  let functionVar = "I am inside function";
  console.log(globalVar);   // Works
  console.log(functionVar); // Works
  if (true) {
    // block scope
    let blockVar = "I am in block";
    const blockConst = 5;
    console.log(blockVar); // Works
  }
  // console.log(blockVar); // Error: blockVar not defined (outside block)
}

test();
// console.log(functionVar); // Error: functionVar not defined (outside function)`}
      </pre>

      <h3>1.2 Hoisting</h3>
      <p>
        JavaScript execution se pehle, declarations ko "top" par le aata hai —
        ise <b>hoisting</b> kehte hain. Note: sirf declarations hoist hote hain,
        assignments (values) nahi.
      </p>

      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`console.log(a); // undefined (declaration hoisted)
var a = 5;

// But with let/const:
console.log(b); // ReferenceError (can't access before initialization)
let b = 10;`}
      </pre>

      <p>
        Summary: <code>var</code> declarations hoist karke <code>undefined</code>
        deti hain; <code>let</code> / <code>const</code> temporal dead zone mein
        hoti hain (use se pehle error).
      </p>

      <h3>1.3 Lexical Scope</h3>
      <p>
        <b>Lexical scope</b> ka matlab: function ka behavior us position pe based
        hota hai jahan wo likha gaya hai, na ki jahan se call kiya gaya. Isi se
        closures bante hain.
      </p>

      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`function outer() {
  let x = 10;
  function inner() {
    console.log(x); // inner can access x because of lexical scope
  }
  return inner;
}

const fn = outer();
fn(); // 10`}
      </pre>

      <hr />

      {/* 2. Closures */}
      <h2>2. Closures — (Bahut important)</h2>
      <p>
        <b>Closure</b> tab hota hai jab inner function outer function ke variables
        ko yaad rakhta hai, even after outer function ended. Ye private data,
        function factories, aur counters banane mein kaam aata hai.
      </p>

      <h4>Simple example — counter:</h4>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`function createCounter() {
  let count = 0; // private to createCounter
  return function () { // inner function is a closure
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3`}
      </pre>

      <p>
        Yahan <code>count</code> createCounter ke scope mein tha, par inner
        function usko access karke badha raha hai — ye hi closure hai.
      </p>

      <h4>Use-cases of closures (short list)</h4>
      <ul>
        <li>Private variables / data encapsulation</li>
        <li>Function factories (functions returning functions)</li>
        <li>Memoization / caching results</li>
        <li>Callbacks that need access to original context</li>
      </ul>

      <hr />

      {/* 3. Functions — types and details */}
      <h2>3. Functions — Full Detail</h2>

      <h3>3.1 Function declaration (named)</h3>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5`}
      </pre>

      <p>
        Function declarations are hoisted — tum inko call kar sakte ho before
        declaration too (because of hoisting).
      </p>

      <h3>3.2 Function expression (anonymous or named stored in variable)</h3>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`const sub = function (a, b) {
  return a - b;
};

console.log(sub(5, 2)); // 3`}
      </pre>

      <p>
        Function expressions are not hoisted in the same way as declarations — a
        variable gets hoisted but it is undefined until assignment.
      </p>

      <h3>3.3 Arrow functions (ES6)</h3>
      <p>Shorter syntax. Important notes: no own <code>this</code>, cannot be used as constructor.</p>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // 20

// Single argument no parens:
const square = x => x * x;`}
      </pre>

      <h4>Arrow function vs normal function — this behavior</h4>
      <p>
        Arrow functions <b>lexically</b> bind <code>this</code> (they use this
        from surrounding scope). Normal functions get <code>this</code> depending
        on how they are called.
      </p>

      <h3>3.4 Parameters: default, rest, arguments</h3>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`// Default parameters
function greet(name = "Guest") {
  console.log("Hello " + name);
}
greet(); // Hello Guest

// Rest parameter (collects remaining args into array)
function sum(...nums) {
  return nums.reduce((s, n) => s + n, 0);
}
console.log(sum(1,2,3,4)); // 10

// 'arguments' object (array-like) available in regular functions (not in arrow)
function showArgs() {
  console.log(arguments);
}
showArgs(1,2,3); // {0:1, 1:2, 2:3}`
        }
      </pre>

      <h3>3.5 Higher-order functions</h3>
      <p>
        Functions which take other functions as arguments or return functions.
      </p>

      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`// Example: function returning function
function multiplyBy(n) {
  return function(x) {
    return x * n;
  }
}

const double = multiplyBy(2);
console.log(double(5)); // 10`}
      </pre>

      <h3>3.6 Callbacks</h3>
      <p>
        A callback is simply a function passed to another function to be called
        later. Asynchronous operations commonly use callbacks.
      </p>

      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`function fetchData(callback) {
  setTimeout(() => {
    callback("Data from server");
  }, 1000);
}

fetchData(function(result) {
  console.log(result); // runs after 1 second
});`}
      </pre>

      <p>
        Note: callbacks can lead to "callback hell" if nested deeply — that's
        when Promises / async-await help.
      </p>

      <hr />

      {/* 4. Arrays — comprehensive */}
      <h2>4. Arrays — Full Coverage</h2>
      <p>Arrays store ordered lists. Index starts at 0.</p>

      <h3>4.1 Creating and accessing</h3>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`const arr = [1, "two", true, [3,4]];
console.log(arr[0]); // 1
console.log(arr.length); // 4`}
      </pre>

      <h3>4.2 Mutating methods (change array)</h3>
      <ul>
        <li><code>push()</code> — add to end</li>
        <li><code>pop()</code> — remove from end</li>
        <li><code>shift()</code> — remove from start</li>
        <li><code>unshift()</code> — add to start</li>
        <li><code>splice()</code> — add/remove at index</li>
        <li><code>sort()</code> — sort in place</li>
      </ul>

      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`let nums = [3,1,4];
nums.push(2); // [3,1,4,2]
nums.splice(1, 1); // removes 1 element at index 1 -> [3,4,2]
nums.sort(); // [2,3,4] (string sort by default)`}
      </pre>

      <h3>4.3 Non-mutating methods (return new array/value)</h3>
      <ul>
        <li><code>map()</code> — transform each element</li>
        <li><code>filter()</code> — pick elements that pass test</li>
        <li><code>reduce()</code> — reduce to single value</li>
        <li><code>slice()</code> — extract subarray (no change)</li>
        <li><code>concat()</code> — join arrays</li>
        <li><code>find(), findIndex()</code> — find first match</li>
        <li><code>includes()</code> — check presence</li>
      </ul>

      <h4>map / filter / reduce examples</h4>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`const numbers = [1,2,3,4,5];

// map: create new array
const squares = numbers.map(n => n * n); // [1,4,9,16,25]

// filter: keep even numbers
const evens = numbers.filter(n => n % 2 === 0); // [2,4]

// reduce: sum
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15`}
      </pre>

      <h3>4.4 Iteration methods — forEach, for...of</h3>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`numbers.forEach((n, idx) => console.log(idx, n)); // no return, just side effects

for (const n of numbers) {
  console.log(n); // simple way to loop arrays
}`}
      </pre>

      <h3>4.5 Advanced array tricks</h3>
      <p>Flatten, unique, chunk, groupBy — common helpers:</p>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`// Flatten one level
const nested = [1, [2,3], [4, [5]]];
const flat1 = nested.flat(1); // [1,2,3,4,[5]]
// Unique
const dup = [1,2,2,3];
const unique = [...new Set(dup)]; // [1,2,3]`}
      </pre>

      <hr />

      {/* 5. Objects — deep */}
      <h2>5. Objects — Deep Understanding</h2>
      <p>Objects = key-value pairs. Keys are strings or symbols.</p>

      <h3>5.1 Create and access</h3>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`const person = {
  name: "Asha",
  age: 25,
  greet: function() {
    console.log("Hi " + this.name);
  }
};

console.log(person.name); // "Asha"
person.greet(); // "Hi Asha"`
        }
      </pre>

      <h3>5.2 Dot vs Bracket notation</h3>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`console.log(person.name);     // dot
console.log(person['age']);   // bracket

// bracket needed when key is dynamic:
const key = 'name';
console.log(person[key]);`}
      </pre>

      <h3>5.3 Property descriptors (writable, enumerable, configurable)</h3>
      <p>
        Object properties have metadata. Use <code>Object.getOwnPropertyDescriptor</code>
        to see it, or <code>Object.defineProperty</code> to set it.
      </p>

      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`const obj = {};
Object.defineProperty(obj, 'x', {
  value: 42,
  writable: false, // can't change
  enumerable: true,
  configurable: false
});
console.log(obj.x); // 42
// obj.x = 100; // no change (writable false)`}
      </pre>

      <h3>5.4 Cloning objects (shallow vs deep)</h3>
      <p>
        <b>Shallow copy:</b> copies top-level properties; nested objects still
        share references. <br />
        <b>Deep copy:</b> recursively copies everything so no shared references.
      </p>

      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`// Shallow copy (spread)
const p1 = { name: 'Asha', meta: { age: 25 } };
const p2 = { ...p1 };
p2.name = 'Anu';
p2.meta.age = 30;
console.log(p1.meta.age); // 30 -> because nested object shared (shallow)

// Deep copy (simple way if no functions/Date/Symbol)
const deep = JSON.parse(JSON.stringify(p1));`}
      </pre>

      <p>
        Note: JSON method fails for functions, Date, undefined, Symbol. For robust deep clone use libraries (lodash) or write recursive clone handling types.
      </p>

      <h3>5.5 Merging objects</h3>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`const a = {x:1, y:2};
const b = {y:10, z:3};
const merged = {...a, ...b}; // {x:1, y:10, z:3} (b overwrites a)`}
      </pre>

      <hr />

      {/* 6. this keyword */}
      <h2>6. <code>this</code> keyword (Every context explained)</h2>
      <p>
        <code>this</code> means "owner" or "current context". Its value depends
        on how function is called.
      </p>

      <h4>Rules summary</h4>
      <ol>
        <li>In global scope (non-strict) <code>this</code> = window (browser).</li>
        <li>Inside a regular function called as method (<code>obj.fn()</code>), <code>this</code> = object before dot.</li>
        <li>Inside a plain function call (<code>fn()</code>), <code>this</code> = undefined in strict mode, otherwise window.</li>
        <li>Constructor function (with <code>new</code>): <code>this</code> = new instance.</li>
        <li>Arrow functions: <code>this</code> is lexically inherited (from surrounding scope).</li>
        <li>You can set <code>this</code> explicitly with <code>call</code>, <code>apply</code>, or <code>bind</code>.</li>
      </ol>

      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`const obj = {
  name: 'Raju',
  say: function() { console.log(this.name); }
};
obj.say(); // 'Raju'

function standalone() {
  console.log(this);
}
standalone(); // undefined (strict) or window (non-strict)

const arrow = () => console.log(this);
arrow(); // this inherited from outer scope`}
      </pre>

      <hr />

      {/* 7. Prototypes & Prototype Chain */}
      <h2>7. Prototypes and Prototype Chain</h2>
      <p>
        JavaScript uses prototype-based inheritance. Every object has an internal
        link to a prototype object. If property not found on object, JS looks up
        prototype chain.
      </p>

      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log('Hi ' + this.name);
};

const p = new Person('Neha');
p.greet(); // works via prototype`}
      </pre>

      <p>
        ES6 <code>class</code> syntax is sugar over prototype system (below).
      </p>

      <hr />

      {/* 8. Classes (OOP) */}
      <h2>8. Classes (ES6) — OOP in JS</h2>
      <p>
        <code>class</code> is nicer syntax over prototype functions. Use it for
        constructors, methods, inheritance.
      </p>

      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

const d = new Dog('Bingo');
d.speak(); // Bingo barks.`}
      </pre>

      <p>
        <b>Note:</b> Methods defined in class are on prototype, not per-instance.
      </p>

      <hr />

      {/* 9. Modules (import/export) */}
      <h2>9. Modules — import & export (ES6)</h2>
      <p>
        Modules help split code into files. Use <code>export</code> to expose,
        <code>import</code> to use.
      </p>

      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`// lib.js
export function add(a,b) { return a+b; }
export const pi = 3.14;

// main.js
import { add, pi } from './lib.js';
console.log(add(2,3), pi);`}
      </pre>

      <p>Default export:</p>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`// math.js
export default function cube(x) { return x*x*x; }

// main.js
import cube from './math.js';
console.log(cube(3));`}
      </pre>

      <hr />

      {/* 10. Promises, async/await, event loop */}
      <h2>10. Asynchronous JavaScript — Promises, Async/Await, Event Loop</h2>

      <h3>10.1 What is async JS?</h3>
      <p>
        Async means things happen later — like fetching data from server. JS
        gives Promises, callbacks, and async/await to work with async code.
      </p>

      <h3>10.2 Promises</h3>
      <p>
        A Promise represents a future value. It can be <b>pending</b>,{" "}
        <b>fulfilled</b>, or <b>rejected</b>.
      </p>

      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`// Create a promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) resolve("Done");
    else reject("Error");
  }, 1000);
});

// Use it
p.then(result => console.log(result))
 .catch(err => console.log(err));`}
      </pre>

      <h3>10.3 Promise chaining and Promise.all</h3>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`fetch('/data1')
  .then(res => res.json())
  .then(data => fetch('/data2'))
  .then(res => res.json())
  .then(data2 => console.log(data2))
  .catch(err => console.log('Error', err));

// Promise.all
Promise.all([fetch(url1), fetch(url2)])
  .then(([r1, r2]) => Promise.all([r1.json(), r2.json()]))
  .then(([d1, d2]) => console.log(d1, d2));`}
      </pre>

      <h3>10.4 async / await (syntactic sugar)</h3>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`async function getData() {
  try {
    const res = await fetch('/data');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log('Error', err);
  }
}
getData();`}
      </pre>

      <h3>10.5 Event loop, Call stack, Microtask vs Macrotask</h3>
      <p>
        Simple picture:
      </p>
      <ul>
        <li>JS runs in single thread — there is a call stack where functions run.</li>
        <li>When asynchronous things happen (timers, fetch), browser registers callbacks in task queues.</li>
        <li><b>Macrotasks</b> (tasks): setTimeout, setInterval, I/O callbacks.</li>
        <li><b>Microtasks</b>: Promise callbacks (<code>.then</code>), <code>queueMicrotask</code>. These run before next macrotask after current script end.</li>
      </ul>

      <h4>Example to understand ordering:</h4>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`console.log('script start');

setTimeout(() => console.log('timeout'), 0);

Promise.resolve().then(() => console.log('promise'));

console.log('script end');

// Output:
// script start
// script end
// promise   (microtask)
// timeout   (macrotask)`}
      </pre>

      <hr />

      {/* 11. Error handling & debugging */}
      <h2>11. Error handling & debugging</h2>
      <h3>11.1 try / catch / finally</h3>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`try {
  // code that may throw
  JSON.parse("invalid json");
} catch (err) {
  console.error("Parsing failed:", err.message);
} finally {
  console.log("Always runs");
}`}
      </pre>

      <h3>11.2 Throw custom errors</h3>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  divide(1, 0);
} catch (e) {
  console.log(e.message);
}`}
      </pre>

      <h3>11.3 Debugging tips</h3>
      <ul>
        <li>Use <code>console.log</code>, <code>console.table</code>, <code>console.error</code>.</li>
        <li>Use browser DevTools (breakpoints, watch expressions).</li>
        <li>Read stack traces: they show where error happened.</li>
        <li>Use linters (ESLint) to catch mistakes early.</li>
      </ul>

      <hr />

      {/* 12. Iterators & Generators */}
      <h2>12. Iterators & Generators</h2>
      <p>
        Iterators allow custom iteration (object with <code>next()</code>).
        Generators (function*) simplify writing iterators.
      </p>

      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`// Generator example
function* idGen() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
const gen = idGen();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2`}
      </pre>

      <hr />

      {/* 13. Symbol, Set, Map, WeakMap, WeakSet */}
      <h2>13. Symbol, Set, Map, WeakMap, WeakSet</h2>
      <h3>13.1 Symbol</h3>
      <p>Unique identifier. Good for private object keys.</p>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`const id = Symbol('id');
const obj = {};
obj[id] = 123;
console.log(obj[id]); // 123`}
      </pre>

      <h3>13.2 Set</h3>
      <p>Unique collection of values.</p>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`const s = new Set([1,2,2,3]);
console.log([...s]); // [1,2,3]`}
      </pre>

      <h3>13.3 Map</h3>
      <p>Key-value map, keys can be anything.</p>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`const m = new Map();
m.set('a', 1);
m.set(2, 'two');
console.log(m.get('a')); // 1`}
      </pre>

      <h3>13.4 WeakMap & WeakSet</h3>
      <p>
        WeakMap keys must be objects. They don't prevent garbage collection —
        used for private data where you don't want memory leaks.
      </p>

      <hr />

      {/* 14. Type coercion, equality, truthy/falsy */}
      <h2>14. Type conversion, equality, truthy & falsy</h2>

      <h3>14.1 == vs ===</h3>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`0 == '0' // true  (loose equality converts types)
0 === '0' // false (strict equality checks type too)`}
      </pre>

      <p>
        Always prefer <code>===</code> to avoid surprising coercions.
      </p>

      <h3>14.2 Truthy and falsy values</h3>
      <p>
        Falsy values: <code>false, 0, -0, 0n, "", null, undefined, NaN</code>.
        All others are truthy.
      </p>

      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`if ("") console.log("will not run");
if ("hello") console.log("runs");`}
      </pre>

      <h3>14.3 Type conversion functions</h3>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`Number("123") // 123
String(123)   // "123"
Boolean(0)    // false
+ "45"        // 45 (unary +)`}
      </pre>

      <hr />

      {/* 15. JSON */}
      <h2>15. JSON (JavaScript Object Notation)</h2>
      <p>
        Format to store/share data. Use <code>JSON.stringify()</code> to convert
        object to string, and <code>JSON.parse()</code> to convert string to
        object.
      </p>

      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`const obj = {name: 'Me', age: 20};
const json = JSON.stringify(obj);
console.log(json); // '{"name":"Me","age":20}'

const parsed = JSON.parse(json);
console.log(parsed.name); // 'Me'`}
      </pre>

      <hr />

      {/* 16. localStorage, sessionStorage, cookies */}
      <h2>16. Web Storage — localStorage & sessionStorage</h2>
      <p>
        <b>localStorage:</b> stores data persistently (until user clears it).
        <b>sessionStorage:</b> stores data for current tab session only.
      </p>

      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`// Save
localStorage.setItem('name', 'Asha');

// Read
const name = localStorage.getItem('name');

// Remove
localStorage.removeItem('name');

// Save object
localStorage.setItem('user', JSON.stringify({name:'Asha'}));
const user = JSON.parse(localStorage.getItem('user'));`}
      </pre>

      <hr />

      {/* 17. DOM manipulation & Events (intermediate) */}
      <h2>17. DOM Manipulation & Events (Detailed)</h2>
      <p>
        DOM = document structure. JS can select, change, create, remove elements.
      </p>

      <h3>17.1 Selecting elements</h3>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`document.getElementById('id');
document.getElementsByClassName('cls'); // HTMLCollection
document.getElementsByTagName('p'); // HTMLCollection
document.querySelector('.btn'); // first matching
document.querySelectorAll('.btn'); // NodeList (iterateable)`}
      </pre>

      <h3>17.2 Creating/updating elements</h3>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`const div = document.createElement('div');
div.textContent = 'Hello';
div.classList.add('card');
document.body.appendChild(div);

// change
div.style.color = 'red';
div.setAttribute('data-id', '123');`}
      </pre>

      <h3>17.3 Events & event delegation</h3>
      <p>
        Use <code>addEventListener</code>. For many similar elements, use
        event-delegation (attach listener to parent).
      </p>

      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`// direct
button.addEventListener('click', () => { console.log('clicked'); });

// delegate
document.querySelector('#list').addEventListener('click', (e) => {
  if (e.target && e.target.matches('li.item')) {
    console.log('item clicked', e.target.textContent);
  }
});`}
      </pre>

      <h3>17.4 Forms & validation (basic)</h3>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`form.addEventListener('submit', (e) => {
  e.preventDefault(); // stop page refresh
  const name = form.querySelector('input[name="name"]').value;
  if (!name) {
    alert('Enter name');
  }
});`}
      </pre>

      <hr />

      {/* 18. fetch API and AJAX */}
      <h2>18. fetch API (HTTP requests)</h2>
      <p>
        Use <code>fetch()</code> to get data from servers. It returns a Promise.
      </p>

      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => {
    if (!res.ok) throw new Error('Network response not ok');
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error(err));`}
      </pre>

      <p>
        With async/await:
      </p>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`async function getPost() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
getPost();`}
      </pre>

      <hr />

      {/* 19. Generators, Iterators (advanced intermediate) */}
      <h2>19. Generators & Iterators (detail)</h2>
      <p>
        Iterators give <code>next()</code> values. Many built-in objects are
        iterable (arrays, strings), and generators help create custom iterables.
      </p>

      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`function* gen() {
  yield 1;
  yield 2;
  return 3;
}
const g = gen();
console.log(g.next()); // {value:1, done:false}
console.log(g.next()); // {value:2, done:false}
console.log(g.next()); // {value:3, done:true}`}
      </pre>

      <hr />

      {/* 20. Advanced function patterns: curry, memoize, debounce, throttle */}
      <h2>20. Advanced function patterns</h2>

      <h3>20.1 Currying (convert f(a,b) into f(a)(b))</h3>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`function curryAdd(a) {
  return function(b) {
    return a + b;
  }
}
console.log(curryAdd(2)(3)); // 5`}
      </pre>

      <h3>20.2 Memoization (cache results)</h3>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`function memoize(fn) {
  const cache = {};
  return function(arg) {
    if (cache[arg]) return cache[arg];
    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
}

const fib = memoize(function(n) {
  if (n < 2) return n;
  return fib(n-1) + fib(n-2);
});
console.log(fib(20));`}
      </pre>

      <h3>20.3 Debounce</h3>
      <p>Delay function until user stops calling it (e.g., search input).</p>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// usage
window.addEventListener('resize', debounce(() => {
  console.log('Resized');
}, 300));`}
      </pre>

      <h3>20.4 Throttle</h3>
      <p>Run at most once in given time interval (e.g., scroll handler).</p>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`function throttle(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}`}
      </pre>

      <hr />

      {/* 21. Misc intermediate topics */}
      <h2>21. Miscellaneous Intermediate Topics</h2>

      <h3>21.1 Optional chaining & Nullish coalescing</h3>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`const user = { profile: { name: 'Me' } };
console.log(user?.profile?.name); // 'Me'
console.log(user?.info?.age); // undefined

const val = null ?? 'default'; // 'default' (null or undefined triggers)
`}
      </pre>

      <h3>21.2 Date parsing and formatting (Intl)</h3>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`const d = new Date();
console.log(d.toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' }));`}
      </pre>

      <h3>21.3 Performance tips (intermediate)</h3>
      <ul>
        <li>Avoid unnecessary DOM reads/writes in loops (batch updates).</li>
        <li>Use <code>documentFragment</code> when appending many nodes.</li>
        <li>Avoid memory leaks — remove event listeners when not needed.</li>
        <li>Use debouncing/throttling for frequent events.</li>
      </ul>

      <hr />

      {/* 22. Big worked example tying many concepts */}
      <h2>22. Big Example — Student Grade System (Full, explained)</h2>
      <p>
        Yeh example arrays, objects, functions, map/filter/reduce, template
        literals, try/catch, and DOM interactions dikhata hai.
      </p>

      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`// Data
const students = [
  { id: 1, name: 'Aarav', marks: [85, 92, 78] },
  { id: 2, name: 'Priya', marks: [95, 88, 90] },
  { id: 3, name: 'Kunal', marks: [65, 70, 72] }
];

// Helper: average
function average(arr) {
  return arr.reduce((s, n) => s + n, 0) / arr.length;
}

// Process students to add avg and grade
const processed = students.map(s => {
  const avg = average(s.marks);
  let grade;
  if (avg >= 90) grade = 'A+';
  else if (avg >= 80) grade = 'A';
  else if (avg >= 70) grade = 'B';
  else grade = 'C';
  return { ...s, avg, grade };
});

// Find topper
const topper = processed.reduce((top, s) => s.avg > top.avg ? s : top, processed[0]);

// Render (console)
processed.forEach(s => {
  console.log(\`\${s.name} -> Avg: \${s.avg.toFixed(2)}, Grade: \${s.grade}\`);
});
console.log('Topper:', topper.name);`}
      </pre>

      <hr />

      {/* 23. Exercises & small solved problems */}
      <h2>23. Exercises (solved) — practice</h2>

      <h4>Exercise 1: Remove duplicates from array</h4>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`// Solution using Set
const arr = [1,2,2,3,4,4,5];
const unique = [...new Set(arr)];
console.log(unique); // [1,2,3,4,5]`}
      </pre>

      <h4>Exercise 2: Flatten nested array (one level)</h4>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`const nested = [1, [2,3], [4,5]];
const flat = nested.flat(1);
console.log(flat); // [1,2,3,4,5]`}
      </pre>

      <h4>Exercise 3: Memoized Fibonacci (fast)</h4>
      <pre style={{ background: "#f6f6f6", padding: "0.8rem" }}>
        {`const memoFib = (function() {
  const cache = {};
  return function fib(n) {
    if (n < 2) return n;
    if (cache[n]) return cache[n];
    cache[n] = fib(n-1) + fib(n-2);
    return cache[n];
  };
})();

console.log(memoFib(40)); // fast compared to naive recursion`}
      </pre>

      <hr />

      {/* 24. Checklist — what you must now know (summary) */}
      <h2>24. Checklist — Things you now know (intermediate)</h2>
      <ul>
        <li>Scope, hoisting, lexical scope, closures</li>
        <li>Functions: declarations, expressions, arrow functions, parameters</li>
        <li>Higher-order functions, callbacks, this keyword</li>
        <li>Arrays: map, filter, reduce, forEach, find, flat</li>
        <li>Objects: creation, descriptors, cloning, merging</li>
        <li>Prototypes, prototype chain, classes and inheritance</li>
        <li>Promises, async/await, event loop, microtask vs macrotask</li>
        <li>Fetch API, JSON, localStorage/sessionStorage</li>
        <li>Generators, iterators, symbols, Set/Map/WeakMap</li>
        <li>Type coercion, equality checks, truthy/falsy</li>
        <li>Error handling, debugging tips, performance tips</li>
      </ul>

      <hr />

      {/* 25. Next steps */}
      <h2>25. Where to go next (advanced topics)</h2>
      <p>
        After mastering intermediate, move to:
      </p>
      <ul>
        <li>Advanced async (streams, web workers)</li>
        <li>Design patterns (module / observer / pub-sub)</li>
        <li>Memory leaks & optimization</li>
        <li>Proxies, Reflect API</li>
        <li>TypeScript (types on top of JS)</li>
        <li>Frameworks: React/Vue/Angular — component design</li>
        <li>Node.js backend, streams, clustering</li>
      </ul>

      <hr />

      <p style={{ fontWeight: "bold" }}>
        Agar tum chaho, main isko aur bhi expand kar sakta hoon — har section ke
        liye exercises, quizzes, visual diagrams, aur small projects bana kar.
        Bol de — main next kar dunga:
      </p>
      <ol>
        <li>Split into separate pages (readable ebook format)</li>
        <li>Add interactive code editors (run examples in browser)</li>
        <li>Make Advanced JS file in same detailed style</li>
      </ol>

      <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
        Done — ye file intermediate JS ka full, detailed guide hai in simple
        English with many examples. Agar chahiye toh ab main <b>Advanced JS</b>{" "}
        waale component par shuru karta hoon — bol do.
      </p>
    </div>
  );
};

export default Intermediate_js;
