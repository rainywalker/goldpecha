require('./newrelic');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const user = require('./routes/user');




mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://jaelomin:ex7804!!@ds155130.mlab.com:55130/jaelomin-db')
.then(() =>  console.log('connection succesful'))
.catch((err) => console.error(err));

app.use(require('connect-history-api-fallback')())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/users', express.static(path.join(__dirname, 'dist')));
app.use('/api/user', user);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
