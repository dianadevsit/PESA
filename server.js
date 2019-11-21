const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('cookie-session');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
//const passport = require('passport');
//const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');

const app = express();

// view engine setup

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({keys: ['secretkey1', 'secretkey2', '...']}));
app.use(flash());

if (process.env.NODE_ENV === "production") {

  app.use(express.static("client/build"));

  app.get("*", (req, res) => {

  res.sendFile(path.resolve(__dirname, "client", "build" , "index.html"));
})

}

// Connect mongoose

const databaseUri = "mongodb://localhost/job_search";

if (process.env.MONGODB_URI) {

  mongoose.connect(process.env.MONGODB_URI)

}else{

  mongoose.connect(databaseUri, {useNewUrlParser: true, useUnifiedTopology: true})

}



// Configure passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// // Configure passport-local to use account model for authentication
// // const User = require('./models/user');

// passport.use(new LocalStrategy(User.authenticate()));

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// mongoose.connect('mongodb://localhost/job_search', { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
//   if (err) {
//     console.log('Could not connect to mongodb on localhost. Ensure that you have mongodb running on localhost and mongodb accepts connections on standard ports!');
//   }
// });

mongoose.set('useCreateIndex', true);

// Register routes
require('./routes/routes')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);c
});

// module.exports = app;

app.listen(PORT, () => {
    
    console.log(`App running on port ${PORT}!`);
  
});