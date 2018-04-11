const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const debug = require('debug')('server');
const net = require('net');
const https = require('https');
const http = require('http');
const httpProxy = require('http-proxy');
const fs = require('fs');
const app = express();
const compression = require("compression")
const proxy2 = require('http-proxy-middleware');
const proxy = httpProxy.createProxy();
const cookieSession = require('cookie-session');
const options = {
  key: `${fs.readFileSync(path.resolve(__dirname, "./ca/214300552770283.key"))}`,
  cert: `${fs.readFileSync(path.resolve(__dirname, "./ca/214300552770283.pem"))}`
}
const port = '443'
app.use((req, res, next) => {
  console.log('访问者地址：', req.ip)
  next()
})
app.use(cookieSession({name: 'session', keys: ['view']}))
app.use((req, res, next) => {
  console.log(req.protocol)
  if(req.protocol != 'https') {
    res.redirect('https://' + req.headers.host + req.originalUrl)
  } else {
    next()
  }
})
app.use(compression())
app.use(express.static(path.join(__dirname, 'public')));
//app.use("*", (req, res, next) => {
//  req.url = req.originalUrl
//  req.host="git.zgpv.top:8080"
//  res.set("X-Frame-Options", "DENY")
//console.log(11, req.host)
//  next()
//  proxy.web(req, res, { target: "http://git.zgpv.top:8080" });
//})
app.use("/facilitator", proxy2({target: "http://123.56.45.15"}))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
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

const server = http.createServer(app).listen('80');
server.on('error', onError);
server.on('listening', () => onListening(server));

const servers = https.createServer(options, app).listen(port);
servers.on('error', onError);
servers.on('listening', () => onListening(servers));

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening(server) {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
