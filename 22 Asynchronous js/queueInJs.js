//1 Callback queue - Task Queue
setTimeout(() => {console.log('1', 'is the loneliest numkber')}, 0)
setTimeout(() => {console.log('2', 'can be as bad as one')}, 10)

//2 Job Queue - Microtask Queue
Promise.resolve('hi').then((data) => console.log('2', data))

// 3
console.log('3','is a crowd');




/**
 * 🧠 JavaScript Event Loop – Short Notes

1️⃣ Call Stack
• Executes synchronous code line by line.
• Example: console.log()
• Runs first before any asynchronous task.

2️⃣ Callback Queue (Macro Task Queue / Task Queue)
• Stores callbacks from:
  - setTimeout()
  - setInterval()
  - setImmediate() (Node.js)
  - DOM events
• Executes after all synchronous and microtasks complete.
• Event loop picks one macro task → runs it → then checks microtasks again.

3️⃣ Microtask Queue (Job Queue)
• Contains high-priority async callbacks like:
  - Promise.then(), Promise.catch(), Promise.finally()
  - process.nextTick() (Node.js)
• Runs immediately after synchronous code, before any setTimeout.

4️⃣ Event Loop Execution Order
1. Run all synchronous code (Call Stack)
2. Run all microtasks (Promises, nextTick)
3. Run one macro task (setTimeout, setInterval)
4. Repeat the cycle

5️⃣ Example Code
setTimeout(() => console.log('1', 'is the loneliest number'), 0);
setTimeout(() => console.log('2', 'can be as bad as one'), 10);
Promise.resolve('hi').then(data => console.log('2', data));
console.log('3', 'is a crowd');

6️⃣ Execution Order
3 is a crowd                // synchronous
2 hi                        // microtask (Promise)
1 is the loneliest number   // first setTimeout
2 can be as bad as one      // second setTimeout

7️⃣ Summary Table
Type | Queue Name | Examples | When It Runs
-----|-------------|-----------|---------------
Synchronous | Call Stack | console.log() | Immediately
Asynchronous (High Priority) | Microtask Queue | Promise.then() | After sync code
Asynchronous (Normal Priority) | Callback Queue / Macro Task Queue | setTimeout() | After microtasks

✅ In short:
Sync → Microtasks → Macrotasks → Repeat

 */