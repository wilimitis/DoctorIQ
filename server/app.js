var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');

var index = require('./routes/index');
var token = require('./routes/token');
var patients = require('./routes/patients');
var patientsDb = require('./data/patients').patientDetails;

var app = express();
if (app.get('env') !== 'production') {
  app.disable('etag');
}
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/attachments', express.static(path.join(__dirname, 'attachments')));

app.use('/', index);
app.use('/token', token);
app.use('/patients', patients);

// File upload/delete
const upload = multer({ dest: 'attachments/' });
app.post('/attachments', upload.single('file'), (req, res) => {
  const file = req.file;
  const meta = req.body;
  
  // Simulate db update
  let user = patientsDb[req.body.userId];
  patientsDb[req.body.userId].attachments = [...user.attachments, file];
  console.log(file);
  res.json(file);
});

app.post('/attachments/delete', (req, res) => {
  console.log(req.body);
  // Simulate db removal
  let user = patientsDb[req.body.userId];
  patientsDb[req.body.userId].attachments = [...user.attachments.filter(a => a.path !== req.body.path)];

  res.sendStatus(204);
});

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
