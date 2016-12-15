'use strict';

/* Here we assume that we have only 2 possible configurations right now.
 * This can be easily expandable to as many configs as required (e.g. "production", "staging", "development", etc).
*/
module.exports = (function() {
  var config;

  // Using singleton here to make sure we have single config per each app launch (good if module caching is disabled).
  function init() {
    switch (process.env.NODE_ENV) {
      case 'production':
        config = require('./production');
        break;
      default:
        config = require('./development');
    }

    return config;
  }

  return (!config) ? init() : config ;
})();
