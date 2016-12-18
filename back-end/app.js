'use strict';

const app             = require('express')();
const bodyParser      = require('body-parser');
const cors            = require('cors')
const config          = require('./config');
const db              = require('./libs/db');
const log             = require('./libs/log')(module);
const responseHandler = require('./handlers/response');

app.use(cors());
app.use(bodyParser.json());

// Middleware to check content-type.
app.use('/', function (req, res, next) {
  if (req.headers['content-type'] !== config.app.allowedContentType) {
    var error = {error: 'content-type expected: ' + config.app.allowedContentType};
    log.debug(error);
    responseHandler(res, {error, status: 400});
  } else {
    next();
  }
});

// Middleware to validate ids.
app.use('*/patients/:id', function (req, res, next) {
  if (parseInt(req.params.id, 10) > 0) {
    next();
  } else {
    var error = {error: 'invalid id: ' + req.params.id};
    log.debug(error);
    responseHandler(res, {error, status: 400});
  }
});

app.use('/', require('./routes'));

app.all('*', function (req, res) {
  var error = {error: 'no route defined for ' + req.method + ' ' + req.url};
  log.debug(error);
  responseHandler(res, {error, status: 404});
});

const server = app.listen(config.app.port, config.app.ip, function () {
  log.info('server is listening on port ' + config.app.port);
});

module.exports = server; // To run tests against app.
