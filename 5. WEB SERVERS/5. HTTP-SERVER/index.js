const http = require('http'); // Import built-in HTTP module to create a web server

const PORT = 3000; // Define the port number where the server will run

const server = http.createServer(); // Create an HTTP server instance

// Mock data representing a list of friends
const friends = [
  { id: '0', name: 'Nikola Tesla' },
  { id: '1', name: 'Sir Isaac Newton' },
  { id: '2', name: 'Albert Einstein' },
  { id: '3', name: 'Thomas Alva Edison' }
];

// Register an event listener for incoming HTTP requests
server.on('request', (req, res) => {
  const items = req.url.split('/'); // Split the request URL into parts (e.g., /friends/2)

  // -------------------- POST /friends --------------------
  if (req.method === 'POST' && items[1] === 'friends') {
    req.on('data', (data) => { // Listen for incoming request body data
      const friend = data.toString(); // Convert binary buffer to string
      console.log('Request : ', friend); // Log received data
      friends.push(JSON.parse(friend)); // Parse JSON string and add new friend to the array
    });
    req.pipe(res); // Send back the same data as a response
  }

  // -------------------- GET /friends or /friends/:id --------------------
  else if (req.method === 'GET' && items[1] === 'friends') {
    res.statusCode = 200; // Set HTTP status to OK (200)
    res.setHeader('Content-Type', 'application/json'); // Specify JSON response format

    if (items.length === 3) { // If URL is /friends/:id (e.g., /friends/2)
      const friendIndex = Number(items[2]); // Convert ID to number
      res.end(JSON.stringify(friends[friendIndex])); // Respond with that specific friend's data
    } else {
      res.end(JSON.stringify(friends)); // Otherwise, respond with the full list
    }
  }

  // -------------------- GET /messages --------------------
  else if (req.method === 'GET' && items[1] === 'messages') {
    res.statusCode = 200; // OK status
    res.setHeader('Content-Type', 'text/html'); // Specify HTML response format
    res.write('<html><body><ul>'); // Begin HTML content
    res.write('<li>Hii There</li>'); // First message
    res.write('<li>Dev here, how’s you?</li>'); // Second message
    res.write('</ul></body></html>'); // End HTML content
    res.end(); // End the response
  }

  // -------------------- Unknown Routes --------------------
  else {
    res.statusCode = 404; // Not found
    res.end('404 Not Found'); // Return an error message
  }
});

// Start the server and listen on the defined port
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
