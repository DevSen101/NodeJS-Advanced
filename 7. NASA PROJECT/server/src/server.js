const http = require('http');           // Import Node HTTP module
const app = require('./app');           // Import Express app
const  { loadPlanetsData } = require('./models/planets.model');
const { mongoConnect } = require('./services/mongo');

const PORT = process.env.PORT || 8000;  // Set 



const server = http.createServer(app);  // Create HTTP server with Express app

async function startServer(){ 
 await mongoConnect()
 await loadPlanetsData()

server.listen(PORT, () => console.log(`✅ Server listening on PORT ${PORT}...`)); // Start server
}

startServer();

