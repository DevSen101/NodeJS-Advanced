const express = require('express');    // Import Express
const cors = require('cors')           //Import Cors
const path = require('path')
const morgan = require('morgan')


const planetsRouter = require('./routes/planets/planets.router')
const launchesRouter = require('./routes/launches/launches.router')
const app = express();                  // Create Express app

app.use(cors({
 origin: 'http://localhost:3000',        //Add Cors Middleware
}))

app.use(morgan('combined'))              //Middleware to log some information as per client requests

app.use(express.json());                // Middleware to parse JSON request bodies
app.use(express.static(path.join(__dirname, '..', 'public')))    //Middleware to serve static file

app.use(planetsRouter)
app.use(launchesRouter)

app.get('/', (req, res) => {  
 res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})


module.exports = app;                   // Export app for use in server.js
