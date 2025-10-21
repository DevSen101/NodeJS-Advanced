/*
1. Parallel - Execute all promise or run fetch call parallely all at the same time.
2. Sequencial - Run all dependent to each other first one then second one if first 
one succed then third one if second one succed.
3. Race - run all at once one which come first run that and ignore rest of them.
*/

const promisify = (item, delay) =>{
 new Promise((resolve) => 
 setTimeout(() => 
 resolve(item), delay));
}

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
 
// console.log(a(), b(), c());             //till here i simply make a function and called them returning three undefined.


// this is parallel 
async function parallel(){
 const promises =[a(), b(), c()]
 const[outputA, outputB, outputC] =await Promise.all(promises)
 return `parallel is done ${outputA} ${outputB} ${outputC}`
}

// parallel().then(console.log)

// this is race
async function race(){
 const promises = [a(), b(), c()]
 const winner = Promise.race(promises); // Js provide us .race method to do this stuff
 return `Winner is ${winner}`;
}
// race().then(console.log)


// this is sequence
async function sequence(){
 const outputA = await a(); //pause and wait untill a() returns and store it in outputA
 const outputB = await b(); //pause and wait untill b() returns and store it in outputB
 const outputC = await c(); //pause and wait untill c() returns and store it in outputC
 return `sequence is done ${outputA} ${outputB} ${outputC}`
}
// sequence().then(console.log)


// now if we race among all of them
sequence().then(console.log) //run one by one, wait for second execution untill first return
parallel().then(console.log) //executes all promises parallely
race().then(console.log)     //return firstone and ignore rest.

// so race() > parallel() > sequence()