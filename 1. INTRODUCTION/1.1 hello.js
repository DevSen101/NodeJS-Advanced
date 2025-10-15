// learn about process.argv which return the array of our command line commands
// const mission = 'learn';
const mission = process.argv[2]  //if i write node hello.js learn so it will return 'Time to write some node code!'

if(mission == 'learn'){
 console.log('Time to write some node code!');
}else{
 console.log(`is ${mission} really more fun!`);  
}