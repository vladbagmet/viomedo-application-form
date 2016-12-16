'use strict';

var router    = require('express').Router();
const config  = require('../config/index'); // Later we can make path-indefferent require, NODE_PATH=. node app.js.

// Define REST API endpoints
config.app.servicingApiVersions.forEach(function(version) {
  var apiPathPrefix   = '/' + version;
  var apiRoutePrefix  = '/api' + apiPathPrefix;

  router.post(apiRoutePrefix + '/patients', require('.' + apiPathPrefix + '/patients/post'));
  router.get(apiRoutePrefix + '/patients', require('.' + apiPathPrefix + '/patients/get'));
  router.get(apiRoutePrefix + '/patients/:id', require('.' + apiPathPrefix + '/patients/get'));
  router.put(apiRoutePrefix + '/patients/:id', require('.' + apiPathPrefix + '/patients/put'));
  router.delete(apiRoutePrefix + '/patients/:id', require('.' + apiPathPrefix + '/patients/delete'));
});

module.exports = router;
