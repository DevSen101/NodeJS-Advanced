// finally - As name suggest it's allow us to do something after a promise has finished

const urls = [
 'https://swapi.co/api/people/1',
 'https://swapi.co/api/people/2',
 'https://swapi.co/api/people/3',
 'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => {
 return fetch(url).then(res => res.json())
})).then(array => {
 console.log('1', array[0]);
 console.log('1', array[1]);
 console.log('1', array[2]);
 console.log('1', array[3]);
}).catch(err => console.log('OOps something wrong here!', err))
.finally(() => console.log('finally always run whether .then() run or .catch()')) // doesn't receive anything as a input/argument