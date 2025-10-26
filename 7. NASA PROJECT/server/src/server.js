const http = require('http');           // Import Node HTTP module
const app = require('./app');           // Import Express app
const mongoose = require('mongoose')
const  { loadPlanetsData } = require('./models/planets.model')

const PORT = process.env.PORT || 8000;  // Set 

const MONGO_URL = 'mongodb+srv://NASA_API_db_user:phwayVzNwzTsHOK8@cluster0.v70snnk.mongodb.net/?appName=Cluster0'

const server = http.createServer(app);  // Create HTTP server with Express app

mongoose.connection.once('open', () => {
 console.log('MongoDB connection ready!');
})

mongoose.connection.on('error', (err) => {
 console.error(err);
})

async function startServer(){ 
 await mongoose.connect(MONGO_URL)
await loadPlanetsData()

server.listen(PORT, () => console.log(`✅ Server listening on PORT ${PORT}...`)); // Start server
}

startServer();
