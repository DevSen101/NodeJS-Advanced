// Import Node's built-in HTTP module
// It allows us to create a low-level HTTP server manually
const http = require('http');

// Import the Express app (exported from app.js)
// Express apps are request-handling functions that can be used with http.createServer()
const app = require('./app');

// Define the port number
// Use environment variable if available, otherwise default to 8000
const PORT = process.env.PORT || 8000;

// Create an HTTP server and pass the Express app as the request handler
// This means every incoming request will be handled by our Express middleware and routes
const server = http.createServer(app);

// Start the server and begin listening on the defined port
// The callback runs once the server starts successfully
server.listen(PORT, () => {
  console.log(`✅ Server is listening on PORT ${PORT}...`);
});
