const express = require('express'); // Import Express
const friendController = require('./controllers/friends.controller')
const messageController = require('./controllers/messages.controller')

const app = express(); // Create Express app

const PORT = 3000; // Port number

app.get('/', (req, res) => {
  res.send('Hello'); // Root route: send plain text
});

app.use((req, res, next) => {
  const start = Date.now(); 
  next(); // Move to next middleware/route
  console.log(`${req.method} ${req.url} ${Date.now() - start}ms`); // Log request info
});

app.use(express.json())

app.post('/friends', friendController.postFriend)

app.get('/friends', friendController.getFriends);

app.get('/friends/:friendsID', friendController.getFriend);

app.get('/messages', messageController.getmessages);

app.post('/messages', messageController.postMessage);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Start server
});
