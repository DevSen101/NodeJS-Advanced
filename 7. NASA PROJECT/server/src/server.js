const http = require('http');           // Import Node HTTP module
const app = require('./app');           // Import Express app

const PORT = process.env.PORT || 8000;  // Set port

const server = http.createServer(app);  // Create HTTP server with Express app

server.listen(PORT, () => console.log(`✅ Server listening on PORT ${PORT}...`)); // Start server
