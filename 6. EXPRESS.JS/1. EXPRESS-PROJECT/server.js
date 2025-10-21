// Import required modules
const express = require('express');
const path = require('path');

// Import route handlers
const messagesRouter = require('./routes/messages.router');
const friendRouter = require('./routes/friends.router');

// Initialize Express app
const app = express();

app.set('view engine' , 'hbs')
app.set('views', path.join(__dirname, 'views'))

const PORT = 3000; // Define port number

// Root route
// app.get('/', (req, res) => {
//   res.send('Hello');
// });

// Custom logger middleware
app.use((req, res, next) => {
  const start = Date.now();      // Track start time
  next();                        // Pass control to next middleware
  const duration = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${duration}ms`);
});

// Middleware to parse incoming JSON data
app.use(express.json());

// Serve static files from 'public' folder at '/site' path
app.use('/site', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'My server page',
    caption:'Let\'s do it!'
  })
})

// Use modular routers
app.use('/friends', friendRouter);
app.use('/messages', messagesRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
