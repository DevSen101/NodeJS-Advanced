const fs  = require('fs') // File system module for reading SSL key/cert
const path = require('path') // For handling file paths
const https = require('https') // HTTPS server module
const express = require('express') // Express framework for web app
const helmet = require('helmet') // Security middleware for HTTP headers
require('dotenv').config() // Loads environment variables from .env file
const passport = require('passport') // Authentication middleware
const { Strategy } = require('passport-google-oauth20') // Google OAuth 2.0 strategy
const cookieSession = require('cookie-session')
const { verify } = require('crypto')

const PORT = 3000; // Server port

// Config object for Google OAuth credentials
const config = {
 CLIENT_ID: process.env.CLIENT_ID,
 CLIENT_SECRET: process.env.CLIENT_SECRET,
 COOKIE_KEY_1: process.env.COOKIE_KEY_1,
 COOKIE_KEY_2: process.env.COOKIE_KEY_2,
}

// OAuth options for Google strategy
const AUTH_OPTIONS = {
 callbackURL: '/auth/google/callback',
 clientID: config.CLIENT_ID,
 clientSecret: config.CLIENT_SECRET
}

// Verify callback executed after Google authentication
function verifyCallback(accessToken, refreshToken, profile, done){
  console.log('Google profile', profile);
  done(null, profile) // Pass user profile to Passport
}

// Register Google OAuth strategy with Passport
passport.use(new Strategy(AUTH_OPTIONS, verifyCallback))

// Save the session to the cookie
passport.serializeUser((user, done) => {
  done(null, user);
})

// Read the session from the cookie
passport.deserializeUser((obj, done) => {
  done(obj, done);
})

const app = express(); // Initialize Express app

app.use(helmet()); // Apply security best practices

app.use(cookieSession({
  name: 'session',
  maxAge: 24*60*60*1000,
  keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2],

}))

app.use(passport.initialize()) // Initialize Passport middleware
app.use(passport.session())

// Middleware to check if user is logged in
function checkLoggedIn(req, res, next){  //req.user
 const isLoggedIn = true; // Placeholder: always true for now
 if(!isLoggedIn){
  res.status(401).json({
   error: 'You must log in!'
  })
 }
 next(); // Continue if logged in
}

// Start Google OAuth flow
app.get('/auth/google', 
 passport.authenticate('google', {
  scope: ['email'] // Request access to user's email
 }));

// Callback route after Google authentication
app.get('/auth/google/callback',
  passport.authenticate('google',{
   failureRedirect: '/failure', // Redirect on failure
   successRedirect: '/', // Redirect on success
   session: true // Enable session storage
}),
(req, res) => {
 console.log('Google called us back!');
});

// Logout endpoint (not implemented yet)
app.get('/auth/logout', (req, res) => {})

// Protected route - only accessible if logged in
app.get('/secret',checkLoggedIn, (req, res) => {
 res.send('Your secret key is gdfTo5JHfrKLGkF5 !')   
})

// Login failure route
app.get('/failure', (req, res) => {
 res.send('Failed to log in!')
})

// Serve homepage
app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Create HTTPS server with SSL cert and key
https.createServer({
 key: fs.readFileSync('key.pem'),
 cert: fs.readFileSync('cert.pem'),
}, app).listen(PORT, () => {
 console.log(`Listening on port ${PORT}`);
})


/**Sequence
 * User → /auth/google → Google OAuth screen → User consents → Google redirects back to /auth/google/callback?code=...
→ Passport exchanges code for tokens → verifyCallback() runs → successRedirect('/') or failureRedirect('/failure')
 */