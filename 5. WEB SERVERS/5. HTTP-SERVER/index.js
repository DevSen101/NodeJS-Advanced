// Import Node.js HTTP module
const http = require('http');

// Define port number for server
const PORT = 3000;

// Create server instance
const server = http.createServer();

// Listen for incoming requests
server.on('request', (req, res) => {

  // Route: /friends
  if (req.url === '/friends') {
    res.statusCode = 200; // Success status
    res.setHeader('Content-Type', 'application/json'); // Response type: JSON

    // Send JSON response
    res.end(JSON.stringify({
      id: '1',
      name: 'Dev Sen'
    }));
  }

  // Route: /messages
  else if (req.url === '/messages') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); // Response type: HTML

    // Send simple HTML response
    res.write('<html>');
    res.write('<body>');
    res.write('<ul>');
    res.write('<li>Hii There</li>');
    res.write('<li>Dev here, how’s you?</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  }
  // For any other route
  else {
    res.statusCode = 404; // Not Found
    res.end('404 Not Found');
  }
});

// Start server and listen on defined port
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
