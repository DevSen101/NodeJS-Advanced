const express = require('express');    // Import Express
const cors = require('cors')           //Import Cors

const planetsRouter = require('./routes/planets/planets.router')
const app = express();                  // Create Express app

app.use(cors({
 origin: 'http://localhost:3000',
}))
app.use(express.json());                // Middleware to parse JSON request bodies
app.use(planetsRouter)

module.exports = app;                   // Export app for use in server.js
