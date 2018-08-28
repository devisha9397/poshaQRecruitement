var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//Main Router file
var indexRouter = require('./routes/indexRouter');
//Added mongoose
var mongoose=require('mongoose');
var http=require('http');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//path for the url
app.use('/poshaq', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
//mongo db connection through mongoose
mongoose.connect('mongodb://localhost:27017/ToDoTask',
{ useNewUrlParser: true }).then(connect => {
  const port =  '3000';//port number
  app.set('port', port);
  const server = http.createServer(app);
  server.listen(port, () => console.log(`API running on localhost:${port}`));
})
.catch(err => {
  console.log('Hello World',err.message)
})

module.exports = app;
