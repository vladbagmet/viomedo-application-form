'use strict';

// Inside app all debug info routes inside this module. Later we can easily redirect output to elastic (or whatever).
const winston = require('winston');

/*
 * Using 3 log levels:
 *  1. error
 *  2. warn
 *  3. info
 *  // 4. debug
 *  // 5. trace
 */
function getLogger(module) {
  var path = module.filename.split('/').slice(-2).join('/');

  return new winston.Logger({
    transports : [
      new winston.transports.Console({
        colorize:   true,
        level:      'debug',
        label:      path,
        timestamp:  true
      })
    ]
  });
}

module.exports = getLogger;
