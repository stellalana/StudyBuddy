const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");
const socket = require("socket.io");
const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require("./config/keys");


passport.use(new GoogleStrategy({
  clientID: keys.googleAuthClientID,
  clientSecret: keys.googleAuthSecret,
  callbackURL: "http://localhost:3000/getQuestions"
}, (accessToken, refreshToken, profile, done) => {
console.log(accessToken)
console.log(refreshToken);
console.log(profile);
}))

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}))

app.get('/getQuestions', passport.authenticate('google'))


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/studyBuddy").
then(() => console.log('Now connected to MongoDB-StudyBuddy!'))
.catch(err => console.error('Error connection to MongoDB - studyBuddy', err));

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
