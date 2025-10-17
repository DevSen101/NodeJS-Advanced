const path = require('path')

function getmessages(req, res){
  // res.send('<ul><li>Hello dear!</li><li>Coders here!</li></ul>'); // Send HTML
  res.sendFile(path.join(__dirname,'..' ,'/public' ,'ram.jpg'))
}

function postMessage(req, res){
  console.log('Updating the messages'); // Log
  res.send('Message received'); // Confirmation
}

module.exports = {
 getmessages,
 postMessage
}