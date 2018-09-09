'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var app = module.exports = loopback();

var cookieParser = require('cookie-parser');
var session = require('express-session');
var path = require('path');
var helmet = require('helmet');


var cors = require('cors')

app.use(cors());

/*
 * body-parser is a piece of express middleware that
 *   reads a form's input and stores it as a javascript
 *   object accessible through `req.body`
 *
 */
var bodyParser = require('body-parser');

// configure body parser
var engine = require('ejs-locals');

app.use(loopback.token());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(loopback.static(require('path').join(__dirname, '..', 'client')));
// configure view handler
app.set('view engine', 'ejs');
app.engine('ejs', engine);
app.set('views', path.join(__dirname, 'views'));

// Proxy
app.set('trust proxy', true);
// boot scripts mount components like REST API
boot(app, __dirname);

// to support JSON-encoded bodies
app.middleware('parse', bodyParser.json());
// to support URL-encoded bodies
app.middleware('parse', bodyParser.urlencoded({
  extended: true,
}));

app.middleware('session:before', cookieParser(app.get('cookieSecret')));

const maxAge = parseInt(process.env.npm_package_config_session_ttl);
app.middleware('session', session({
  secret: process.env.npm_package_config_session_secret,
  saveUninitialized: true,
  resave: true,
  // cookie expires in two hours.
  cookie: {maxAge}
}));

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
