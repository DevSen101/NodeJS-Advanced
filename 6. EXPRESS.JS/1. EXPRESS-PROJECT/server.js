// Import the Express framework
const express = require('express');

// Create an Express application instance
const app = express();

// Define the port number where the server will listen
const PORT = 3000;

// Define a mock array of friends data
const friends = [
  { id: 0, name: 'Bhagat Singh' },
  { id: 1, name: 'Rajguru ji' },
  { id: 2, name: 'Sukhdev ji' },
  { id: 3, name: 'Swami Vivekananda' }
];

// Root route: responds with plain text
app.get('/', (req, res) => {
  res.send('Hello'); // Sends simple text response
});

app.use((req, res, next) => {
  const start = Date.now()
  next();
  const delta = Date.now() - start
  console.log(`${req.method} ${req.url} ${delta}ms `);
})

// /friends route: responds with all friends as JSON
app.get('/friends', (req, res) => {
  res.json(friends); // Converts JS object to JSON and sends it
});

// /friends/:friendsID route: responds with specific friend by ID
app.get('/friends/:friendsID', (req, res) => {
  const friendsID = Number(req.params.friendsID); // Convert route param to number
  const friend = friends[friendsID]; // Get the friend with matching index
  if (friend) {
    res.status(200).json(friend); // If found, send friend data with 200 OK
  } else {
    res.status(404).json({ error: 'Friend does not exist' }); // If not found, send 404
  }
});

// /messages route (GET): responds with simple HTML
app.get('/messages', (req, res) => {
  res.send('<ul><li>Hello dear!</li><li>Coders here!</li></ul>');
});

// /messages route (POST): logs request and responds with confirmation
app.post('/messages', (req, res) => {
  console.log('Updating the messages'); // Logs to terminal
  res.send('Message received'); // Sends back confirmation
});

// Start the server
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
