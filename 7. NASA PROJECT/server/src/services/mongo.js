const mongoose = require('mongoose')

const MONGO_URL = 'mongodb+srv://NASA_API_db_user:phwayVzNwzTsHOK8@cluster0.v70snnk.mongodb.net/?appName=Cluster0'

mongoose.connection.once('open', () => {
 console.log('MongoDB connection ready!');
})

mongoose.connection.on('error', (err) => {
 console.error(err);
})

async function mongoConnect(){
 await mongoose.connect(MONGO_URL)
}

async function mongoDisconnect(){
 await mongoose.disconnect()
}

module.exports = {
 mongoConnect,
 mongoDisconnect
}