const promiseOne = new Promise((resolve, reject) => 
setTimeout(resolve, 3000))

const promiseTwo = new Promise((resolve, reject) => 
setTimeout(reject, 3000))

Promise.all([promiseOne, promiseTwo]).then(data => console.log(data)).catch(e => console.log(`Something went wrong ${e}`))

Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data)).catch(e => console.log(`Something went wrong ${e}`))

/*
Promise.all() takes an array of promises and returns a single promise that 
1. Resolves when all promises succed OR
2. Rejected immediatly when any one of them fails

so if any one fails the whole operation fails immediatly
you lose successfull results from other promises
not ideal when u want to handel both success and failure results together

--------------------------------------------------------------------

Promise.allsettled() waits for all promises to finish whether fulfilled or rejected
and then gives you the status of result of each.

so No error throw here
you get complete info about which succeded and which failed 
*/