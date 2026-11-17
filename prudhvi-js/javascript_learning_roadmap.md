# JavaScript Learning Roadmap: Fundamentals to Advanced

A structured path to build strong JavaScript fundamentals and progress
toward professional frontend engineering, React, TypeScript, and
full-stack development.

## Learning Strategy

For every concept, follow this sequence:

1.  **What is it?** Understand the definition.
2.  **Why does it exist?** Identify the problem it solves.
3.  **How does it work internally?** Understand the mechanism.
4.  **Code examples:** Write examples yourself.
5.  **Predict the output:** Test your understanding before running the
    code.
6.  **Real-world application:** Identify where the concept is used in
    applications.

------------------------------------------------------------------------

## Stage 1 --- JavaScript Fundamentals

**Goal:** Build a reliable foundation in the language.

-   Variables: `var`, `let`, and `const`
-   Data types
-   Primitive vs. reference types
-   Type conversion and type coercion
-   Operators and expressions
-   Conditional statements: `if`, `else`, `switch`
-   Loops: `for`, `while`, `do...while`, `for...of`, `for...in`
-   Functions and parameters
-   Scope basics
-   Arrays
-   Objects

**Practice projects** - Calculator - To-do list - Form validation -
Array-based student management program

## Stage 2 --- Core JavaScript

**Goal:** Understand how JavaScript code is evaluated and how functions
behave.

-   Execution context
-   Call stack
-   Hoisting
-   Temporal Dead Zone (TDZ)
-   Lexical scope
-   Scope chain
-   Closures
-   The `this` keyword
-   Arrow functions vs. regular functions
-   Higher-order functions
-   Callback functions
-   Destructuring
-   Spread and rest operators
-   Optional chaining
-   Nullish coalescing

## Stage 3 --- Advanced JavaScript

**Goal:** Understand object behavior, asynchronous programming, and
language features.

-   Prototypes
-   Prototype chain
-   Prototypal inheritance
-   Constructor functions
-   Classes and inheritance
-   `call()`, `apply()`, and `bind()`
-   Event loop
-   Microtasks vs. macrotasks
-   Promises
-   Promise chaining
-   `async` / `await`
-   Error handling
-   Generators and iterators
-   Symbols
-   Maps and Sets
-   WeakMaps and WeakSets
-   Modules: ES Modules and CommonJS

**Practice projects** - Implement a simplified Promise-like utility -
Build a custom event emitter - Build a real-time chat application -
Implement asynchronous task handling

## Stage 4 --- JavaScript Runtime and Browser Internals

**Goal:** Understand how JavaScript interacts with the browser and
runtime.

-   JavaScript engine fundamentals
-   V8 engine architecture
-   Memory allocation
-   Garbage collection
-   Stack vs. heap memory
-   DOM manipulation
-   DOM traversal
-   Event propagation
-   Event bubbling and capturing
-   Event delegation
-   Browser rendering pipeline
-   Reflow and repaint
-   Web APIs
-   LocalStorage and SessionStorage
-   Cookies
-   Fetch API
-   AbortController

**Practice projects** - Weather application using an API - Search and
filtering interface - Shopping cart - Debounced search - Infinite
scrolling

## Stage 5 --- Expert JavaScript Patterns

**Goal:** Write reusable, maintainable, and efficient JavaScript.

-   Functional programming
-   Pure functions
-   Immutability
-   Currying
-   Function composition
-   Debouncing and throttling
-   Memoization
-   Module pattern
-   Factory pattern
-   Observer pattern
-   Pub/Sub pattern
-   Proxy and Reflect
-   Property descriptors
-   Custom iterators
-   Custom event systems

## Stage 6 --- Production-Level JavaScript

**Goal:** Prepare for real-world application development and
professional workflows.

-   TypeScript fundamentals
-   Object-oriented vs. functional design
-   Performance optimization
-   Memory leak detection
-   Debugging with Chrome DevTools
-   Unit testing with Vitest or Jest
-   API integration
-   HTTP and REST fundamentals
-   WebSockets
-   Security fundamentals: XSS and CSRF
-   Code splitting
-   Lazy loading
-   Build tools: Vite and Webpack
-   ESLint and Prettier

**Capstone project ideas** - Video streaming frontend - Reusable
component architecture - API caching system - Performance-optimized
React application

------------------------------------------------------------------------

## High-Priority Concepts to Master Deeply

These concepts deserve extra attention because they connect many parts
of JavaScript and are especially useful when learning React.

1.  Execution context --- understand how JavaScript executes code.
2.  Closures --- understand retained lexical state and common React
    patterns.
3.  Event loop --- understand asynchronous execution.
4.  `this` --- understand how function-call context affects behavior.
5.  Prototypes --- understand object inheritance and property lookup.
6.  Promises --- understand asynchronous operations and API workflows.
7.  Scope chain --- understand variable accessibility.
8.  Memory management --- understand allocation, garbage collection, and
    leaks.
9.  Higher-order functions --- understand functional programming
    patterns.
10. Event delegation --- understand efficient DOM event handling.

------------------------------------------------------------------------

## Suggested 12-Week Study Plan

This is an approximate schedule. Spend more time on topics that are not
yet clear.

  Weeks    Focus
  -------- ---------------------------------------------
  1--2     Fundamentals and scope
  3--4     Execution context, closures, and `this`
  5--6     Objects, prototypes, and OOP
  7--8     Event loop, Promises, and async programming
  9--10    Browser internals and DOM
  11--12   Advanced patterns and projects

## Recommended Study Routine

For each study session:

-   Learn one concept at a time.
-   Write small examples without copying.
-   Predict code output before executing it.
-   Change the examples and observe how behavior changes.
-   Solve a few exercises.
-   Build or improve a small project.
-   Explain the concept in your own words.

## Stage 1 Checklist

Use this checklist to track the first stage:

-   [ ] Variables: `var`, `let`, and `const`
-   [ ] Data types
-   [ ] Primitive vs. reference types
-   [ ] Type conversion and coercion
-   [ ] Operators and expressions
-   [ ] Conditional statements
-   [ ] Loops
-   [ ] Functions
-   [ ] Scope basics
-   [ ] Arrays
-   [ ] Objects

## Important Recommendation

Master execution context, lexical scope, closures, `this`, prototypes,
and the event loop before going deep into React. Understanding these
concepts makes JavaScript behavior---and many React patterns---much
easier to reason about.

**Main principle:** Do not rush through the roadmap. Aim to explain each
concept, predict its behavior, and implement it independently before
moving on.
