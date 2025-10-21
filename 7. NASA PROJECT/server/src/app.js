// Import the Express framework
const express = require('express');

// Create an instance of an Express application
// This 'app' object will be used to define routes and middleware
const app = express();

// Built-in middleware to parse incoming JSON request bodies
// Without this, req.body will be undefined for JSON payloads
app.use(express.json());

// Export the 'app' instance so it can be used in other files (like server.js)
module.exports = app;
