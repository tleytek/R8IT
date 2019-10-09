require("dotenv").config();
const express = require("express");
const session = require("express-session");
// const cookieSession = require('cookie-session');
const passport = require("passport");
const mongoose = require("mongoose");
const mongoSessionStore = require("connect-mongo");
const app = express();
const PORT = process.env.PORT || 4000;
require("./models/Challenge");
require("./models/History");
require("./models/Post");
require("./models/User");
require("./passport");
const routes = require("./routes");

// Body Parser built-in to Express as on version 4.16
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/r8it", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const MongoStore = mongoSessionStore(session);
const sessionConfig = {
  name: "r8it.sid",
  // secret used for using signed cookies w/ the session
  secret: "keyboard cat",
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 14 * 24 * 60 * 60 // save session for 14 days
  }),
  // forces the session to be saved back to the store
  resave: false,
  // don't save unmodified sessions
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 14 // expires in 14 days
  }
};
app.use(session(sessionConfig));

// /* Add passport middleware to set passport up */
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(helmet());
  app.use(express.static("client/build"));
}

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
