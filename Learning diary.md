**Notes on Node.js Crash course segment:**

**Objective:**
You will learn Node.js fundamentals including modules such as path, url, fs, events. 
Additionally you'll create an HTTP server from scratch without Express and deploy it to Heroku.

Node.js is a JavaScript runtime environment written in C++.
Q: Do I need to know C++ to be an expert in Node.js? 

It runs on your machine as a service or a runtime, not in the browser. 


Runtime vs. framework
What is a runtime?

Resources consulted:

https://en.wikipedia.org/wiki/Runtime_system?wprov=sfti1

https://stackoverflow.com/questions/3900549/what-is-runtime

https://www.google.com/amp/s/www.freecodecamp.org/news/what-exactly-is-node-js-ae36e97449f5/amp/

https://youtu.be/8aGhZQkoFbQ

Allows JavaScript to run on the server.

**Node.js suggested precursors:**

HTTP (status codes, headers, etc.) 
JSON (for when Node is used for REST APIs and microservices)
Arrow Functions, Promises -> ES6+ (ECMAScript is a standard that web browsers follow while interpreting Javascript.)
Model View Controller (MVC) Pattern

**Suggested JavaScript precursors in Node docs:**

Lexical Structure
Expressions
Types
Variables
Functions
this
Arrow Functions
Loops
Scopes
Arrays
Template Literals
Semicolons
Strict Mode
ECMAScript 6, 2016, 2017

**Also, know these asyncronous concepts:**

Asynchronous programming and callbacks
Timers
Promises
Async and Await
Closures
The Event Loop

WHY USE NODE?

Fast, efficient and highly scalable
Event driven, runs on a single thread (loop?), has a non-blocking I/O model
Popular with startups 
Same language on both front and back ends when used with JavaScript frameworks like React Vue Angular

Non-blocking I/O
Asynchronous non-blocking on a single thread capable of holding 10s of thousands of connections hedl in the event loop
optomizing throughput and scalabilty
Not goood for CPU intensive apps
good for reL TIMWE SERVICES, cruD apPSS
tOOLS AND UTLITIES

Event or process triggers an event or process
Firing a callback
Events run in the loop 
triggers 

NPM installs third party packages as dependencies: frameworks, libraries, other tools

Node commands:
npm init
npm install express
npm install -g nodemon (installs globally)

REPL read eval print loop allows Javasctipt to work in terminal 

Notes from the demo in the video are included in the Node_Crash_Course folder.

Note: to make demo work we have to revert to Node v. 12

















**Asynchronous**

How to defer a function until the stack is clear:

The use case of setTimeout(() => {}, 0) is to call a function, but execute it once every other function in the code has executed.

The Message Queue
When setTimeout() is called, the Browser or Node.js starts the timer. Once the timer expires, in this case immediately as we put 0 as the timeout, the callback function is put in the Message Queue.

The Message Queue is also where user-initiated events like click or keyboard events, or fetch responses are queued before your code has the opportunity to react to them. Or also DOM events like onLoad.

The loop gives priority to the call stack, and it first processes everything it finds in the call stack, and once there's nothing in there, it goes to pick up things in the message queue.

We don't have to wait for functions like setTimeout, fetch or other things to do their own work, because they are provided by the browser, and they live on their own threads. 
For example, if you set the setTimeout timeout to 2 seconds, you don't have to wait 2 seconds - the wait happens elsewhere.

ECMAScript 2015 introduced the concept of the Job Queue, which is used by Promises (also introduced in ES6/ES2015). It's a way to execute the result of an async function as soon as possible, rather than being put at the end of the call stack.

Promises that resolve before the current function ends will be executed right after the current function.
