/**----------async-await------------
 * 
 * is built on top of Promise.
 * function that returns a Promise.
 * just make our Async code easier to read 'readable'
 * is Syntactic sugar underneath the hood of Promise.
 * Syntactic sugar is something which do same thing but it has different syntax to make our code look prettier, readabl
 *  
 */


// Take a example of promise
movePlayer(100, 'Right')
.then(() => movePlayer(400, 'Left'))
.then(() => movePlayer(100, 'Right'))
.then(() => movePlayer(400, 'Left'))

// Now Write it in aync-await syntax
async function playerStart(){         //Hey! JavaScript this is an Async function
 await movePlayer(100, 'Right');      //.then() here we have await
 await movePlayer(400, 'Left');       //await keyword says pause it untill i have something fot you
 await movePlayer(100, 'Right');      //we don't need to chaining it like a .then
 let fourthMove = await movePlayer(400, 'Left');       //we it run like await untill first function complete then next move then next move then next we can also store it in a variable which make it cool.
}


// ---------------Real world Ex--------------------
      //here i am fetching API 
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))

      // see it in aync-await
async function fetchUsers(){
 const response = await fetch('https://jsonplaceholder.typicode.com/users')
 const data = await response.json();
 console.log(data);
}      

// -------------------------------------------------------

//remember  this in Promise class
 const urls = [
       'https://jsonplaceholder.typicode.com/users',
       'https://jsonplaceholder.typicode.com/posts',
       'https://jsonplaceholder.typicode.com/albums'
 ]

 Promise.all(urls.map(url => {
       return fetch(url)
       .then(res => res.json())
 })).then(results => {
       console.log(results[0])
       console.log(results[1])
       console.log(results[2])
 })
//now see how to impliment this in async-await

const getData = async function(){
 try {
 const [ users, posts, albums ] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
 console.log('users :', users);
 console.log('users :', posts);
 console.log('users :', albums); 
 } catch (err) {
  console.log('oops', err);
 }
 
}