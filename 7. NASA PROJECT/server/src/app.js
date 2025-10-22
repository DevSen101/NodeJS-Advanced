const express = require('express');    // Import Express
const cors = require('cors')           //Import Cors
const path = require('path')
const morgan = require('morgan')


const planetsRouter = require('./routes/planets/planets.router')
const app = express();                  // Create Express app

app.use(cors({
 origin: 'http://localhost:3000',        //Add Cors Middleware
}))

app.use(morgan('combined'))

app.use(express.json());                // Middleware to parse JSON request bodies
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(planetsRouter)
app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, '..', 'public'))
})


module.exports = app;                   // Export app for use in server.js
