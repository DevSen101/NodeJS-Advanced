const express = require('express')
const path = require('path')
const PORT = 3000;
const app = express();

app.get('/secret', (req, res) => {
 res.send('Your secret key is gdfTo5JHfrKLGkF5 !')   //by sending it over the http connection my data isn't secure i want a encrypted https connection !
})

app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
 console.log(`Listening on port ${PORT}`);
})
