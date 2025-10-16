// Import the Express framework
const express = require('express')

// Create an Express application instance
const app = express()

// Define the port number the server will listen on
const PORT = 3000;

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello') // Send plain text as the response
})

// Define a route for "/friends"
app.get('/friends', (req, res) => {
  res.send({ id: 1, name: 'Swami Vivekananda' }) // Send JSON data as response
})

// Define a route for "/messages" (GET request)
app.get('/messages', (req, res) => {
  res.send('<ul><li>Hello dear!</li><li>Coders here!</li></ul>') // Send simple HTML as response
})

// Define a route for "/messages" (POST request)
app.post('/messages', (req, res) => {
  console.log('updating the messages'); // Print message in terminal when a POST request is made
  res.send('Message received'); // Send back a confirmation response
})

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
})
