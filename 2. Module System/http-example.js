// const http = require('https')   //require the http module.

// const { request } = require('https')  // more advanced js now we dont need to html.request .  

const { get } = require('https')         //http and https provides us Get function same as request. but in this we dont need to call req.end().

// const req = http.request('https://www.google.com', (res) => {  
 // const req = request('https://www.google.com', (res) => { 
get('https://www.google.com', (res) => {


//https is more secure way because its encrypt the data when it sent b/w our machine and google servers.
 //the response we passed into the function is the result that we just specified and the way we get data back from our response is on() function.
 
 res.on('data', (chunk) =>{                  //first argument it takes is event and second is a listener. like in this case 'data' parameter has a parameter for a chunk of data returned by that event.
 console.log(chunk);
 })  

 res.on('end', () =>{                        //second we have a end parameter which is called when there is no data coming from the request. it will not take anything as a arg
  console.log('No More Data');

 })

})

// req.end()  // we always needs to do this because the end function cause of request to be sent.
