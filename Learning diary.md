# Lappeenrannan teknillinen yliopisto
# School of Business and Management

## Sofware Development Skills

### Douglas Locklin, <Insert student number here>

# LEARNING DIARY, Full-Stack 2020-21 MODULE
    
# Course goal
This course's stated aims are to give me "an edge in the jobmarket by providing tools for creating unique projects" and to help me to "find my passion as a software developer." These "official" goals are less relevant for me, a student of non-traditional age. I want to be an self-employed entrepreneur and my passion springs from the solutions I want to create. Learning these technologies is merely a stepping stone for prototyping an app that ultimately will be developed by a team led by a "real" CTO.
    
I have concerns about the fact that there are older videos associated with ths course, and the video lessons sometimes refer to older software versions. The [example app code](https://github.com/avophile/meanauthapp) has not been updated since 2018.

# Notes on Node.js Crash course segment

# Table of contents <a name="top"></a>
1. [Objective](#objective)
2. [Precursors](#precursors)
    1. [Node.js Crash Course suggested precursors](#nodecrashprecursors)
    2. [Suggested JavaScript precursors in Node docs](#nodedocsprecursors)
    3. [Asyncronous concepts](#asynchronous)
3. [Why Use Node?](#why)
4. [What's Node Used For?](#why)
5. [Node.js features](#features)
    1. [Runtime vs. framework](#runvsframe)
    2. [Non-blocking I/O](#nonblock)
    3. [Node Package Manager](#npm)
    4. [The Event Loop](#eventloop)
    5. [The Call Stack](#callstack)
    6. [Asynchronous](#asynchronous)
    7. [Message Queue](#messagequeue)
    8. [Job Queue](#jobqueue)

## Objective <a name="objective"></a> 
[back to top](#top)

We will follow Traversy Media's Node.js Crash Course [video](https://www.youtube.com/watch?v=fBNz5xF-Kx4) and learn Node.js fundamentals including modules such as [Path](https://nodejs.org/dist/latest-v14.x/docs/api/path.html), [URL](https://nodejs.org/dist/latest-v14.x/docs/api/url.html), [File System](https://nodejs.org/dist/latest-v14.x/docs/api/fs.html) (fs), and [events](https://nodejs.org/dist/latest-v14.x/docs/api/events.html). 
Additionally we'll learn how to create an HTTP server from scratch without [Express](https://expressjs.com/) and deploy it to [Heroku](https://www.heroku.com/).

Node.js is a JavaScript runtime environment written in C++.

Q: Do I need to know C++ to be an expert in Node.js? 

It runs on your machine as a service or a runtime, not in the browser. 

## Precursors <a name="precursors"></a>
[back to top](#top)

### Node.js Crash Course suggested precursors <a name="nodecrashprecursors"></a>
[back to top](#top)

* HTTP (status codes, headers, etc.) 
* JSON (for when Node is used for REST APIs and microservices)
* Arrow Functions, Promises -> ES6+ (ECMAScript is a standard that web browsers follow while interpreting Javascript.)
* Model View Controller (MVC) Pattern

### Suggested JavaScript precursors in [Node docs](https://nodejs.dev/learn/how-much-javascript-do-you-need-to-know-to-use-nodejs) <a name="nodedocsprecursors"></a>
[back to top](#top)

* Lexical Structure
* Expressions
* Types
* Variables
* Functions
* [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
* [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* Loops
* [Scopes](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
* Arrays
* [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
* Semicolons
* Strict Mode
* ECMAScript 6, 2016, 2017

### Asyncronous concepts <a name="asyncronous"></a>
[back to top](#top)

* Asynchronous programming and callbacks
* Timers
* [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [Async and Await](https://nodejs.dev/learn/modern-asynchronous-javascript-with-async-and-await)
* [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
* The Event Loop

## Why use Node.js? <a name="why"></a>
[back to top](#top)

- Fast, efficient and highly scalable
- Event driven, runs on a single thread (loop?), has a non-blocking I/O model
- Popular with startups 
- Same language on both front and back ends when used with JavaScript frameworks like React Vue Angular
    
## What types of projects are best use cases for Node.js? <a name="what"></a>
[back to top](#top)
    
* REST API & Microservices
* Real Time Services (Chat, live updates)
* CRUD apps (Blogs, shopping carts, social networks)
* Tools and Utilities

## Node.js features <a name="features"></a>
[back to top](#top)

### Runtime vs. framework <a name="runvsframe"></a>
What is a runtime?

Resources consulted:

https://en.wikipedia.org/wiki/Runtime_system?wprov=sfti1

https://stackoverflow.com/questions/3900549/what-is-runtime

https://www.google.com/amp/s/www.freecodecamp.org/news/what-exactly-is-node-js-ae36e97449f5/amp/

https://youtu.be/8aGhZQkoFbQ

Allows JavaScript to run on the server.

### Non-blocking I/O <a name="nonblock"></a>
[back to top](#top)
- Asynchronous non-blocking on a single thread capable of holding 10s of thousands of connections held in the event loop
- Optimizes throughput and scalabilty
- Not goood for CPU intensive apps
- Good for real time services, CRUD apps, tools and utilities

**How it works:**

- Event or process triggers an event or process
- Firing a callback
- Events run in the loop 
- triggers 

### Node Package Manager [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) <a name="npm"></a> 
[back to top](#top)

NPM installs third party packages as dependencies: frameworks, libraries, other tools.

Node commands:
- npm init
- npm install express
- npm install -g nodemon (installs globally)

REPL (read eval print loop) allows Javascript to work in terminal 

Notes from the demo in the video are included in the Node_Crash_Course folder.

**Note: to make demo work we have to revert to Node v. 12**

See also: [Yarn](https://yarnpkg.com/getting-started)

### [Event loop](https://nodejs.dev/learn/the-nodejs-event-loop) <a name="eventloop"></a>
    
![Node Event Loop](https://github.com/avophile/LUT_FullStack_2021_Doug_Locklin/blob/main/Resources/Node.js-Event-Loop-1.png?raw=true)
    Image retrieved from https://www.tutorialandexample.com/node-js-event-loop/

In general, in most browsers there is an event loop for every browser tab, to make every process isolated and avoid a web page with infinite loops or heavy processing to block your entire browser.

The environment manages multiple concurrent event loops, to handle API calls for example. Web Workers run in their own event loop as well.

You mainly need to be concerned that your code will run on a single event loop, and write code with this thing in mind to avoid blocking it.

### The call stack <a name="callstack"></a>
[back to top](#top)

The call stack is a LIFO (Last In, First Out) stack.

The event loop continuously checks the call stack to see if there's any function that needs to run.

While doing so, it adds any function call it finds to the call stack and executes each one in order.

### Asynchronous <a name="asynchronous"></a>
[back to top](#top)

How to defer a function until the stack is clear:

The use case of setTimeout(() => {}, 0) is to call a function, but execute it once every other function in the code has executed.

### The Message Queue <a name="messagequeue"></a>
[back to top](#top)

When setTimeout() is called, the Browser or Node.js starts the timer. Once the timer expires, in this case immediately as we put 0 as the timeout, the callback function is put in the Message Queue.

The Message Queue is also where user-initiated events like click or keyboard events, or fetch responses are queued before your code has the opportunity to react to them. Or also DOM events like onLoad.

The loop gives priority to the call stack, and it first processes everything it finds in the call stack, and once there's nothing in there, it goes to pick up things in the message queue.

We don't have to wait for functions like setTimeout, fetch or other things to do their own work, because they are provided by the browser, and they live on their own threads. 
For example, if you set the setTimeout timeout to 2 seconds, you don't have to wait 2 seconds - the wait happens elsewhere.

### Job Queue <a name="jobqueue"></a> 
[back to top](#top)

ECMAScript 2015 introduced the concept of the Job Queue, which is used by Promises (also introduced in ES6/ES2015). It's a way to execute the result of an async function as soon as possible, rather than being put at the end of the call stack.

Promises that resolve before the current function ends will be executed right after the current function.


    
# Notes on MongoDB Crash course [video](https://www.youtube.com/watch?v=-56x56UppqQ) segment

# Table of contents <a name="top2"></a>
1. [Objective](#objective2)
2. [What is MongoDB?](#mongodb)
    1. [MongoDB Crash Course suggested precursors](#nodecrashprecursors2)
    2. [Suggested JavaScript precursors in MongoDB docs](#nodedocsprecursors2)
3. [Advantages of MongoDB](#advantages2)



## Objective <a name="objective2"></a> 
[back to contents](#top2)

We will follow Traversy Media's MongoDB Crash Course [video](https://www.youtube.com/watch?v=-56x56UppqQ) and learn MongoDB fundamentals including [xxxx](https://xxxx), [xxxx](https://xxxx),

## What is MongoDB? <a name="#mongodb"></a>
[back to contents](#top2)
    
MongoDB is a NoSQL (Not only SQL) database. Databases like SQL, Oracle, etc. are relational databases with strict data models. MongoDB stores data in collections of documents in BSON which that resembles JSON objects key:value pairs. Every document has a unique object ID.
    
## Advantages of MongoDB <a name="advantages2"></a>
[back to top](#top2)

    -Scalable
    -built in replication an sharding
    -performant, fast
    -flexible data structure
   
## MongoDB tools<a name="tools2"></a>
[back to top](#top2)

    -Mongo Shell
    -Compass
    -Atlas
    -xxxxx
    
# MongoDB Cheat Sheet
Retrieved from: https://gist.github.com/bradtraversy/f407d642bdc3b31681bc7e56d95485b6

## Show All Databases

```
show dbs
```

## Show Current Database

```
db
```

## Create Or Switch Database

```
use acme
```

## Drop

```
db.dropDatabase()
```

## Create Collection

```
db.createCollection('posts')
```

## Show Collections

```
show collections
```

## Insert Row

```
db.posts.insert({
  title: 'Post One',
  body: 'Body of post one',
  category: 'News',
  tags: ['news', 'events'],
  user: {
    name: 'John Doe',
    status: 'author'
  },
  date: Date()
})
```

## Insert Multiple Rows

```
db.posts.insertMany([
  {
    title: 'Post Two',
    body: 'Body of post two',
    category: 'Technology',
    date: Date()
  },
  {
    title: 'Post Three',
    body: 'Body of post three',
    category: 'News',
    date: Date()
  },
  {
    title: 'Post Four',
    body: 'Body of post three',
    category: 'Entertainment',
    date: Date()
  }
])
```

## Get All Rows

```
db.posts.find()
```

## Get All Rows Formatted

```
db.posts.find().pretty()
```

## Find Rows

```
db.posts.find({ category: 'News' })
```

## Sort Rows

```
# asc
db.posts.find().sort({ title: 1 }).pretty()
# desc
db.posts.find().sort({ title: -1 }).pretty()
```

## Count Rows

```
db.posts.find().count()
db.posts.find({ category: 'news' }).count()
```

## Limit Rows

```
db.posts.find().limit(2).pretty()
```

## Chaining

```
db.posts.find().limit(2).sort({ title: 1 }).pretty()
```

## Foreach

```
db.posts.find().forEach(function(doc) {
  print("Blog Post: " + doc.title)
})
```

## Find One Row

```
db.posts.findOne({ category: 'News' })
```

## Find Specific Fields

```
db.posts.find({ title: 'Post One' }, {
  title: 1,
  author: 1
})
```

## Update Row

```
db.posts.update({ title: 'Post Two' },
{
  title: 'Post Two',
  body: 'New body for post 2',
  date: Date()
},
{
  upsert: true
})
```

## Update Specific Field

```
db.posts.update({ title: 'Post Two' },
{
  $set: {
    body: 'Body for post 2',
    category: 'Technology'
  }
})
```

## Increment Field (\$inc)

```
db.posts.update({ title: 'Post Two' },
{
  $inc: {
    likes: 5
  }
})
```

## Rename Field

```
db.posts.update({ title: 'Post Two' },
{
  $rename: {
    likes: 'views'
  }
})
```

## Delete Row

```
db.posts.remove({ title: 'Post Four' })
```

## Sub-Documents

```
db.posts.update({ title: 'Post One' },
{
  $set: {
    comments: [
      {
        body: 'Comment One',
        user: 'Mary Williams',
        date: Date()
      },
      {
        body: 'Comment Two',
        user: 'Harry White',
        date: Date()
      }
    ]
  }
})
```

## Find By Element in Array (\$elemMatch)

```
db.posts.find({
  comments: {
     $elemMatch: {
       user: 'Mary Williams'
       }
    }
  }
)
```

## Add Index

```
db.posts.createIndex({ title: 'text' })
```

## Text Search

```
db.posts.find({
  $text: {
    $search: "\"Post O\""
    }
})
```

## Greater & Less Than

```
db.posts.find({ views: { $gt: 2 } })
db.posts.find({ views: { $gte: 7 } })
db.posts.find({ views: { $lt: 7 } })
db.posts.find({ views: { $lte: 7 } })
```

## At this point I broke from the course material to delve further into databases and data architecture. 

After reviewing many different frameworks, API management tools and PaaS offerings, I decided to attempt to implement a variety of databases: a normal MongoDB instance, plus a graph database with both databases managed through [ArongoDB](https://cloud.arangodb.com/home)'s query language: [AQL](https://www.arangodb.com/docs/stable/aql/).
    
ArongoDB is native multi-model database, supporting key/value, document and graph models. ArangoDB of course offers a cloud-based service for ArangoDB called [OASIS](https://cloud.arangodb.com/home), with fully hosted, managed, & monitored cluster deployments of any size, with enterprise-grade security.
    
During this process, I installed [nvs]() to facilitate switching between versions of node. Of course, since computers, I had to [uninstall](https://stackoverflow.com/questions/20711240/how-to-completely-remove-node-js-from-windows) all previous versions of Node and their attendent files, [adjust](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.1) my execution policies, then install [chocolatey](https://chocolatey.org/) to install nvs.
    
## nvs
    
To add the latest version of node:
```
$ nvs add latest
```
Or to add the latest LTS version of node:
```
$ nvs add lts
```
Then run the `nvs use` command to add a version of node to your PATH for the current shell:
```
$ nvs use lts
PATH += ~/.nvs/node/6.9.1/x64
```
To add it to PATH permanently, use `nvs link`:
```
$ nvs link lts
```

## Command reference
Command | Description
------- | -----------
`nvs help <command>`             | Get detailed help for a command
`nvs install`                    | Initialize your profile for using NVS
`nvs uninstall`                  | Remove NVS from profile and environment
`nvs --version`                  | Display the NVS tool version
`nvs add [version]`              | Download and extract a node version
`nvs rm <version>`               | Remove a node version
`nvs migrate <fromver> [tover]`  | Migrate global modules
`nvs upgrade [fromver]`          | Upgrade to latest patch of major version
`nvs use [version]`              | Use a node version in the current shell
`nvs auto [on/off]`              | Automatically switch based on cwd
`nvs run <ver> <js> [args...]`   | Run a script using a node version
`nvs exec <ver> <exe> [args...]` | Run an executable using a node version
`nvs which [version]`            | Show the path to a node version binary
`nvs ls [filter]`                | List local node versions
`nvs ls-remote [filter]`         | List node versions available to download
`nvs link [version]`             | Link a version as the default
`nvs unlink [version]`           | Remove links to a default version
`nvs alias [name] [value]`       | Set or recall aliases for versions
`nvs remote [name] [value]`      | Set or recall download base URIs

A version or filter consists of a complete or partial semantic version number or version label  ("lts", "latest", "Argon", etc.), optionally preceded by a remote name, optionally followed by an architecture, separated by slashes. Examples: "lts", "4.6.0", "6/x86", "node/6.7/x64".

[Refer to the docs](./doc) for more details about each command.

## Interactive menus
When invoked with no parameters, `nvs` displays an interactive menu for switching and downloading node versions.

![nvs menu](https://github.com/jasongin/nvs/releases/download/v0.8.0/nvs-menu.gif)

*NVS uses [**console-menu**](https://github.com/jasongin/console-menu), a module originally written for this project then published separately.*

## VS Code support
Visual Studio Code can use NVS to select a node version to use when launching or debugging. In `launch.json` (in the folder `.vscode` located on the project's root folder), add a `"runtimeArgs"` attribute with an NVS version string and a `"runtimeExecutable"` attribute that refers to `nvs.cmd` (Windows) or `nvs` (Mac, Linux). (You may need to specify an absolute path such as `"${env:HOME}/.nvs/nvs"` if NVS is not in VS Code's PATH.)

Example: Configure `launch.json` so VS Code uses NVS to launch node version 6.10:
```json
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${file}",
      "args": [ ],
      "runtimeArgs": [ "6.10" ],
      "windows": { "runtimeExecutable": "nvs.cmd" },
      "osx": { "runtimeExecutable": "nvs" },
      "linux": { "runtimeExecutable": "nvs" }
    },
  ]
```

Or, remove the version string from `"runtimeArgs"` to get the version from a `.node-version` file in the project directory. For more details, see the [NVS VS Code documentation](doc/VSCODE.md) or run `nvs help vscode`.

## Configurable remotes
The `nvs remote` command allows configuration of multiple named download locations. NVS manages versions from different remote locations separately, so there is no risk of version collisions. By default there is a single remote pointing to Node.js official releases:
```
$ nvs remote
default  node
node     https://nodejs.org/dist/
```
This makes it possible to get builds from other sources. The following command sequence adds a remote entry for nightly builds, lists nightly builds, and adds a build:
```
$ nvs remote add nightly https://nodejs.org/download/nightly/
$ nvs lsr nightly/13
nightly/13.1.1-nightly20191120c7c566023f
...
$ nvs add nightly/13
```

Other remote sources are supported, for example:
```
nvs remote add iojs https://iojs.org/dist/
nvs remote add chakracore https://nodejs.org/download/chakracore-release/
```

## Aliases
An alias refers to a combination of a remote name and a semantic version. (Processor architectures are not aliased.) When setting an alias, the remote name may be omitted, in which case the alias refers to the default remote. An alias may be used in place of a version string in any of the other commands.
```
$ nvs alias myalias 6.7.0
$ nvs alias
myalias default/6.7.0
$ nvs run myalias --version
v6.7.0
$ nvs which myalias
~/.nvs/node/6.7.0/x64/bin/node
$ nvs which myalias/32
~/.nvs/node/6.7.0/x86/bin/node
```
[An alias may also refer to a local directory](doc/ALIAS.md#aliasing-directories), enabling NVS to switch to a local private build of node.

## Automatic switching per directory
In either Bash or PowerShell, NVS can automatically switch the node version in the current shell as you change directories. This function is disabled by default; to enable it run `nvs auto on`. Afterward, whenever you `cd` or `pushd` under a directory containing a `.node-version` or an [`.nvmrc`](https://github.com/nvm-sh/nvm#nvmrc) file then NVS will automatically switch the node version accordingly, downloading a new version if necessary. When you `cd` out to a directory with no `.node-version` or `.nvmrc` file anywhere above it, then the default (linked) version is restored, if any.
```
~$ nvs link 6.9.1
~/.nvs/default -> ~/.nvs/node/6.9.1/x64
~$ nvs use
PATH += ~/.nvs/default/bin
~$ nvs auto on
~$ cd myproject
PATH -= ~/.nvs/default/bin
PATH += ~/.nvs/node/4.6.1/x64/bin
~/myproject$ cd ..
PATH -= ~/.nvs/node/4.6.1/x64/bin
PATH += ~/.nvs/default/bin
```
*This feature is not available in Windows Command Prompt. Use PowerShell instead.*

## Manual switching using `.node-version`
If your shell isn't compatible with automatic switching or you'd prefer to switch manually but still take advantage of any `.node-version` or `.nvmrc` files, you can run `nvs use` with the version `auto` or just run `nvs auto`.

```
$ nvs use auto
```

is equivalent to

```
$ nvs auto
```
