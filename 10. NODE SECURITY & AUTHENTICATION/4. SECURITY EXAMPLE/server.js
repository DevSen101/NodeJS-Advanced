const fs  = require('fs')
const path = require('path')
const https = require('https')
const express = require('express')
const helmet = require('helmet')

const PORT = 3000;
const app = express();

app.use(helmet())

app.get('/secret', (req, res) => {
 res.send('Your secret key is gdfTo5JHfrKLGkF5 !')   //by sending it over the http connection my data isn't secure i want a encrypted https connection !
})

app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

https.createServer({
 key: fs.readFileSync('key.pem'),
 cert: fs.readFileSync('cert.pem'),
}, app).listen(PORT, () => {
 console.log(`Listening on port ${PORT}`);
})
