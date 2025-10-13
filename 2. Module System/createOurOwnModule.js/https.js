const { send } = require('./request')
const { read } = require('./response')
// import { send } from './request.mjs'
// import { read } from './response.mjs'
function makeRequest(url, data){
 send(url, data);
 return read();
}

const responseData = makeRequest('https://www.google.com', 'hello')
console.log(responseData);