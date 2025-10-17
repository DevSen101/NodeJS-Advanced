const express = require('express'); // Import Express
const messagesRouter = require('./routes/messages.router')
const friendRouter = require('./routes/friends.router')

const app = express(); // Create Express app

const PORT = 3000; // Port number

app.get('/', (req, res) => {
  res.send('Hello'); // Root route: send plain text
});

app.use((req, res, next) => {
  const start = Date.now(); 
  next(); // Move to next middleware/route
  console.log(`${req.method} ${req.baseUrl} ${req.url} ${Date.now() - start}ms`); // Log request info
});

app.use(express.json())

app.use('/friends', friendRouter)
app.use('/messages', messagesRouter)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Start server
});
