import React, { useState } from "react";
import "/src/python_css/Advanced.css";

const topics = [
  {
    id: "metaclasses",
    title: "Metaclasses",
    content: `
### Python Metaclasses
- Metaclasses define how classes are created. A class is an instance of its metaclass.
- Use metaclasses to modify class creation: inject methods, validate attributes, register subclasses.

**Key methods:** \`__new__(mcls, name, bases, dct)\`, \`__init__(cls, name, bases, dct)\`.

**Example:**
\`\`\`python
class Meta(type):
    def __new__(mcls, name, bases, dct):
        print("Creating class", name)
        dct.setdefault("hello", lambda self: f"Hello from {name}")
        return super().__new__(mcls, name, bases, dct)

class MyClass(metaclass=Meta):
    pass

print(MyClass().hello())  # Hello from MyClass
\`\`\`

**When to use:** framework hooks, auto-registration, enforcing class invariants. Use sparingly — metaclasses add complexity.
`
  },

  {
    id: "descriptors",
    title: "Descriptors",
    content: `
### Descriptors
- Objects that manage attribute access via \`__get__\`, \`__set__\`, and \`__delete__\`.
- Property is a simple descriptor; descriptors provide reusable attribute logic.

**Example:**
\`\`\`python
class Typed:
    def __init__(self, name, typ):
        self.name = name
        self.typ = typ
    def __get__(self, obj, objtype=None):
        return obj.__dict__.get(self.name)
    def __set__(self, obj, value):
        if not isinstance(value, self.typ):
            raise TypeError("Expected " + str(self.typ))
        obj.__dict__[self.name] = value

class Person:
    age = Typed("age", int)

p = Person()
p.age = 30
print(p.age)
\`\`\`

**Use cases:** validation, lazy attributes, computed attributes, ORM field definitions.
`
  },

  {
    id: "coroutines-async",
    title: "Coroutines & Async (Advanced)",
    content: `
### Asynchronous Programming (asyncio deep dive)
- \`async/await\` builds coroutines for non-blocking I/O.
- Understand event loop, tasks, futures, cancellation, and concurrency primitives (Lock, Queue).
- Use \`asyncio.create_task\`, \`gather\`, and \`wait\` for concurrent coroutines.

**Example (tasks + cancellation):**
\`\`\`python
import asyncio

async def worker(name):
    try:
        await asyncio.sleep(2)
        print(name, "done")
    except asyncio.CancelledError:
        print(name, "cancelled")
        raise

async def main():
    t = asyncio.create_task(worker("A"))
    await asyncio.sleep(0.5)
    t.cancel()
    try:
        await t
    except asyncio.CancelledError:
        print("task finished as cancelled")

asyncio.run(main())
\`\`\`

**Advanced tips:** avoid blocking calls (use run_in_executor for CPU-bound), use timeouts, prefer \`asyncio.Queue\` for pipelines, consider \`uvloop\` for performance.
`
  },

  {
    id: "concurrency-gil",
    title: "Concurrency, Threading, Multiprocessing & GIL",
    content: `
### Concurrency & the GIL
- CPython has a Global Interpreter Lock (GIL) that prevents true parallel execution of Python bytecode in threads.
- Use threads for I/O-bound tasks; use multiprocessing or native extensions for CPU-bound tasks.
- \`concurrent.futures\` offers high-level \`ThreadPoolExecutor\` and \`ProcessPoolExecutor\`.

**Example (concurrent.futures):**
\`\`\`python
from concurrent.futures import ThreadPoolExecutor, as_completed
import time

def iotask(n):
    time.sleep(1)
    return n*2

with ThreadPoolExecutor(max_workers=4) as ex:
    futures = [ex.submit(iotask, i) for i in range(8)]
    for fut in as_completed(futures):
        print(fut.result())
\`\`\`

**Notes:** monitor memory when using processes; use shared memory / Queues for IPC.
`
  },

  {
    id: "cpython-internals-bytecode",
    title: "CPython Internals & Bytecode",
    content: `
### CPython Internals & Bytecode
- Python code is compiled to bytecode (.pyc) and executed by the CPython VM.
- Use \`dis\` to inspect bytecode and understand performance hotspots.
- Knowing internals helps write faster code and debug subtle behavior.

**Example (disassembling):**
\`\`\`python
import dis

def f(x):
    return x + 1

dis.dis(f)
\`\`\`

**Advanced topics:** frame objects, evaluation loop, reference counting, interned strings, object headers.
`
  },

  {
    id: "c-extensions-cython",
    title: "C Extensions, Cython & cffi",
    content: `
### Extending Python with C / Cython / cffi
- Use C extensions or Cython to speed up CPU-bound code or access low-level APIs.
- \`ctypes\` and \`cffi\` allow calling C libraries from Python without compiling CPython extensions.

**Cython example (pseudo):**
\`\`\`
# example.pyx
cdef int add(int a, int b):
    return a + b
\`\`\`

**ctypes example:**
\`\`\`python
from ctypes import CDLL, c_int
lib = CDLL("libmylib.so")
lib.add.argtypes = (c_int, c_int)
lib.add.restype = c_int
print(lib.add(2,3))
\`\`\`

**When to use:** heavy numeric loops, tight inner loops, bindings to existing C libraries.
`
  },

  {
    id: "memory-management",
    title: "Memory Management & Garbage Collection",
    content: `
### Memory Management & Garbage Collection
- CPython uses reference counting + cyclic garbage collector for unreachable cycles.
- Tools: \`gc\` module, \`weakref\` for avoiding ref cycles, \`__slots__\` to reduce per-instance memory.

**Examples:**
\`\`\`python
import gc, weakref

class A:
    pass

a = A()
r = weakref.ref(a)
print(r())   # <A instance>
del a
gc.collect()
print(r())   # None
\`\`\`

**Tips:** avoid long-lived reference cycles; use resource pools carefully; profile memory with \`tracemalloc\`.
`
  },

  {
    id: "memory-profiling",
    title: "Memory Profiling & Optimization",
    content: `
### Memory Profiling & Optimization
- Use \`tracemalloc\`, \`memory_profiler\`, \`objgraph\` to find leaks and heavy allocations.
- Prefer generators, streaming, and iterators for big data.
- Use \`__slots__\` and small immutable objects where appropriate.

**tracemalloc example:**
\`\`\`python
import tracemalloc

tracemalloc.start()
# allocate objects
snapshot = tracemalloc.take_snapshot()
for stat in snapshot.statistics('lineno')[:5]:
    print(stat)
\`\`\`
`
  },

  {
    id: "profiling-debugging",
    title: "Profiling & Debugging (Advanced)",
    content: `
### Profiling & Debugging
- Measure CPU/time with \`cProfile\`, microbench with \`timeit\`.
- Use statistical profilers (e.g., py-spy) for production without instrumentation.
- Use \`pdb\`, \`breakpoint()\`, and IDE debuggers. For async code, use \`aiomonitor\`/debug tools.

**cProfile example:**
\`\`\`python
import cProfile, pstats

def work():
    sum(range(1000000))

prof = cProfile.Profile()
prof.runcall(work)
pstats.Stats(prof).sort_stats('cumtime').print_stats(10)
\`\`\`
`
  },

  {
    id: "advanced-iterators-itertools",
    title: "Advanced Iterators & Itertools",
    content: `
### Advanced Iterators & itertools
- Use \`itertools\` for efficient combinatorics, streaming, and pipelines.
- Know when to use \`islice\`, \`chain\`, \`tee\`, \`groupby\`, \`accumulate\`.

**Example:**
\`\`\`python
from itertools import islice, chain, accumulate, groupby

data = chain(range(3), range(3,6))
print(list(islice(data, 4)))

for k, g in groupby([1,1,2,2,3], key=lambda x:x):
    print(k, list(g))
\`\`\`
`
  },

  {
    id: "ast-codegen",
    title: "AST, Code Generation & Runtime Modification",
    content: `
### AST & Code Generation
- Python exposes AST (abstract syntax tree) via \`ast\` module. You can analyze/modify and compile AST.
- Useful for linters, code transformers, or domain-specific languages.

**Example:**
\`\`\`python
import ast, astor

src = "x = 1 + 2"
tree = ast.parse(src)
print(ast.dump(tree, include_attributes=False))
# Modify tree, then compile/exec
\`\`\`

**Caution:** executing generated code carries security risks. Sanitize inputs.
`
  },

  {
    id: "importlib-packaging",
    title: "Import System & Advanced Packaging",
    content: `
### Import System & Packaging
- \`importlib\` exposes the import machinery; you can write custom loaders/finders.
- Packaging: \`pyproject.toml\`, wheels (.whl), PEP 517/518 modern workflows.

**Example (importlib basic):**
\`\`\`python
import importlib
m = importlib.import_module('math')
print(m.sqrt(16))
\`\`\`

**Packaging tips:** prefer wheels for distribution, pin exact versions for reproducible builds, use virtual environments.
`
  },

  {
    id: "security-sandboxing",
    title: "Security, Sandboxing & Safe Execution",
    content: `
### Security Considerations
- Never unpickle data from untrusted sources — \`pickle\` can execute arbitrary code.
- Running untrusted code requires sandboxing (containers, separate processes, seccomp).
- Validate inputs, use least privilege, sanitize shell/command args (avoid \`os.system\` with interpolation).

**Unsafe example to avoid:**
\`\`\`python
import pickle
data = pickle.loads(untrusted_bytes)  # dangerous!
\`\`\`
`
  },

  {
    id: "slots-dataclasses-attrs",
    title: "Memory Efficient Classes: __slots__, dataclasses, attrs",
    content: `
### \`__slots__\`, dataclasses & attrs
- \`__slots__\` reduces memory by preventing per-instance \`__dict__\` (useful for millions of small objects).
- \`dataclasses\` (PEP 557) simplify boilerplate for classes with fields.
- \`attrs\` is a third-party, richer alternative.

**Examples:**
\`\`\`python
from dataclasses import dataclass

@dataclass
class Point:
    x: int
    y: int

class S:
    __slots__ = ('x','y')
    def __init__(self,x,y):
        self.x, self.y = x, y
\`\`\`
`
  },

  {
    id: "typing-advanced",
    title: "Advanced Typing: Generics, Protocols, TypeVar",
    content: `
### Advanced Type Hints & Static Typing
- Use \`typing\` for \`TypeVar\`, \`Generic\`, \`Protocol\`, \`TypedDict\`, and \`Literal\`.
- Static tools: mypy, pyright; they help catch errors before runtime.

**Example:**
\`\`\`python
from typing import TypeVar, Generic, Protocol, List

T = TypeVar('T')

class SupportsClose(Protocol):
    def close(self) -> None: ...

class Resource(Generic[T]):
    def __init__(self, value: T):
        self.value = value

def takes_closeable(x: SupportsClose) -> None:
    x.close()
\`\`\`
`
  },

  {
    id: "networking-highlevel",
    title: "Advanced Networking & Async Networking",
    content: `
### Networking (Low & High Level)
- Low-level: \`socket\` module for TCP/UDP.
- High-level async: \`aiohttp\`, \`asyncio\` streams, websockets.
- Know TLS/SSL basics and connection pooling (requests.Session or aiohttp.ClientSession).

**Asyncio streams example:**
\`\`\`python
import asyncio

async def handle(reader, writer):
    data = await reader.read(100)
    writer.write(b'OK')
    await writer.drain()
    writer.close()

async def main():
    server = await asyncio.start_server(handle, '127.0.0.1', 8888)
    await server.serve_forever()

# asyncio.run(main())
\`\`\`
`
  },

  {
    id: "performance-optimization",
    title: "Performance Optimization & Micro-optimizations",
    content: `
### Performance Optimization
- Profile first; avoid premature optimization.
- Common tips: use local variables, avoid global lookups, use built-ins and library functions, use list/dict comprehensions, minimize attribute access.
- Consider vectorized libraries (NumPy) for numeric heavy work.

**Micro-optimization example:**
\`\`\`python
# slower
for i in range(len(a)):
    x = a[i]

# faster
it = iter(a)
for x in it:
    ...
\`\`\`
`
  },

  {
    id: "advanced-patterns",
    title: "Advanced Patterns: CQRS, Event Sourcing, Plugins",
    content: `
### Advanced Architecture & Patterns
- Plugin systems: use entry points or importlib to load plugins dynamically.
- Patterns: Observer, Strategy, Command, and pipeline patterns are common in large apps.
- Use message queues (RabbitMQ, Kafka) for decoupling and scaling.

**Plugin (entry point) concept:**
\`\`\`toml
# pyproject.toml (example)
[project.entry-points."myapp.plugins"]
plugin1 = "mypkg.plugin:PluginClass"
\`\`\`
`
  },

  {
    id: "advanced-tools",
    title: "Advanced Tooling: linters, formatters, CI/CD",
    content: `
### Tooling & Workflow
- Linters: flake8, pylint; formatters: black, isort.
- Type checkers: mypy, pyright.
- CI/CD: run tests, linters, build wheels; consider reproducible builds and caching.
- Use pre-commit hooks to enforce style and checks locally.

**Example (.github/workflows/test.yml snippet):**
\`\`\`yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-python@v4
        with: python-version: '3.11'
      - run: pip install -r requirements.txt
      - run: pytest -q
\`\`\`
`
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
