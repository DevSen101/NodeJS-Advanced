const http = require('http'); // Import Node.js HTTP module
const PORT = 3000; // Define port number for server

const server = http.createServer((req, res) => { // Create server with request and response
  res.writeHead(200, { 
   'Content-Type': 'application/json' 
  }); // Set status 200 and JSON header
  res.end(JSON.stringify({ id: '1', name: 'dev sen' })); // Send JSON data and end response
});

server.listen(PORT, () => { // Start server and listen on defined port
  console.log(`Server listening on port ${PORT}`); // Log message when server starts
});
