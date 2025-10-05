const promise = new Promise((resolve, reject) => {
 if(true){
  resolve('stuff worked!')
 }else{
  reject('Error here!')
 }
})

// promise.then(result => console.log(result)); //.then run when promise is resolved successfully or fullfilled.
// promise.catch(error => console.log(error));   //.catch run when promise is rejected.


//.then() chaining 

// promise
//        .then(result => result + '!')
//        .then(result2 => {               
//         console.log(result2)
//        });



// promise
//        .then(result => result + '!')
//        .then(result2 => {                  
//               throw new Error('Boom!')      .catch() is like global safety net for our promise chain It catches when (1) promise got rejected (2) .then() throw any Error... (3) it runs only when is there any error before it       
//         console.log(result2)
//        })
//        .catch(() => console.log('error!'))

// --------------------------------------------------------
// Promise.all()  

const promise2 = new Promise((resolve, reject) => {
       setTimeout(resolve, 100, 'Hii')
})

const promise3 = new Promise((resolve, reject) => {
       setTimeout(resolve, 1000, 'Brother')
})

const promise4 = new Promise((resolve, reject) => {
       setTimeout(resolve, 5000, 'Promise Here!')
})

Promise.all([promise, promise2,promise3, promise4])
.then(values => console.log(values)) 
// Give result when all promise resolved or rejected

// --------Real World Example--------------

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