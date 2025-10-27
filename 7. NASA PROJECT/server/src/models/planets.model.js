const { parse } = require('csv-parse') // CSV parsing function
const fs = require('fs');              // File system module to read CSV
const path = require('path');          // To handle file paths
const planets = require('./planets.mongo') // Mongoose model for planets

// Function to check if a planet is habitable based on CSV data
function isHabitablePlanet(planet){
 return planet['koi_disposition'] === 'CONFIRMED'   // Must be confirmed planet
 && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 // Stellar flux suitable
 && planet['koi_prad'] < 1.6;                      // Planet radius < 1.6 Earth radii
}

// Get all planets from MongoDB
async function getAllPlanets(){
  return await planets.find({},{
    '_id': 0, '__v': 0
  })
}

// Load and parse Kepler CSV data
function loadPlanetsData(){
 return new Promise((resolve , reject) => {
  fs.createReadStream(path.join(__dirname,'..','..','data','kepler-data.csv')) // Read CSV as stream
  .pipe(parse({                                                               // Parse CSV
    comment: '#',                                                              // Ignore comment lines
    columns: true                                                              // Use first row as headers
  }))
  .on('data', async (data) => {
    if (isHabitablePlanet(data)){                                             // Filter habitable planets
      savePlanet(data)                                                        // Save to DB
    }
  })
  .on('error', (err) => { 
    console.log(err);
    reject(err) 
  })                                       // Handle errors
  .on('end', async() => {                                                     // When done
    const countPlanetsFound = (await getAllPlanets()).length;
    console.log(`We found ${countPlanetsFound} habitable planets.`);          // Log count
    resolve()
  })
 })
}

// Save planet to MongoDB (upsert: create if not exists)
async function savePlanet(planet){
  try {
    await planets.updateOne(
      { keplerName: planet.kepler_name },  // Filter by name
      { keplerName: planet.kepler_name },  // Data to save
      { upsert: true }                     // Insert if not exists
    )  
  } catch (error) {
    console.error(`Could not save planet ${error}`);
  }
}

module.exports = {
 loadPlanetsData,  // Export function to load planets from CSV
 getAllPlanets      // Export function to get all planets
}
