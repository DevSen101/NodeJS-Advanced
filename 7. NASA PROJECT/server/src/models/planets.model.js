const { parse } = require('csv-parse') // require parse fn from csv parse module, that parse CSV content
const fs = require('fs'); //require fs module, to read file from disk
const path = require('path');

const habitablePlanets = []

function isHabitablePlanet(planet){
 return planet['koi_disposition'] === 'CONFIRMED' //A review of the best available research we have on habitable planets was done in 2015, and it showed that one of the factors that makes a planet habitable is the stellar flux, which is a measure of the amount of light that the planet gets.Or, in other words, the amount of energy it gets from its sun compared to Earth.So as an upper limit. The planet should not get more than about one point one one times the amount of light that Earth gets any higher and the temperature of the planet would be so high that any water on its surface would disappear,it would evaporate in a very short period of time and at lower values.

 && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 // If we scroll to the section just above the temperature, we can see this insulation flux property,which has a strange sounding name .Thats just another way of seeing stellar flux. So then we are going to take this column name and filter on the value for each planet. So were going to say the planet must be confirmed and its stellar flux must be greater than zero point three six.And that same value must be less than the upper limit of one point one one.So just a little bit more light than we get here on Earth.And about three times less than we get, we are getting there.
  
 && planet['koi_prad'] < 1.6;  // Next up, studies of the Kepler data have shown that there's an upper limit to how large a planet can be before it becomes more like Neptune than Earth.These large planets are almost entirely made up of gases and ice, rather than having rocky surfaces that we could build on like Earth.And the upper limits for the size or radius of the planet is 1.6 times the radius of the Earth.Back in our CSV file, we can find that the planetary radius is represented by this property here measured in Earth radii, which is exactly what we need.So let's add on a condition which checks that the planet's radius is less than 1.6 times that.
}

function loadPlanetsData(){
 return new Promise((resolve , reject) => {
  fs.createReadStream(path.join(__dirname,'..','..','data','kepler-data.csv')) // this fn create a readable stream from a file, read the csv files in chunks instead of loading the entire file into memory(good for large files)

.pipe(parse({ // .pipe() sends the file stream into the parse function.

comment: '#',// comment: '#' – ignores lines starting with # (treated as comments).
columns: true,// columns: true – tells parser to use the first row as column headers, so each row becomes an object with key-value pairs.
// Without this: our results would just have raw chunks or arrays, not clean objects.
 
}))
.on('data', (data) => {
 if (isHabitablePlanet(data)){
  habitablePlanets.push(data)
 }
 })
.on('error', (err) =>{
 console.log(err);
 reject(err)
})
.on('end', () => {
 console.log(`We found ${habitablePlanets.length} habitable planets.`);
 resolve()
})
})
}

module.exports = {
 loadPlanetsData,
 planets: habitablePlanets
}