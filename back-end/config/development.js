'use strict';

module.exports = (function() {
  return {
    db: {
      hosts: [
        { address: 'ds147537.mlab.com', port: 47537 } // Can be expanded to support multiple db-hosts.
      ],
      database: 'vimedo',
      login: 'testuser',  // Must be set in ENV during app launch. Done so to simplify supertest start.
      password: 'testpassword'
    },
    app: {
      ip: '0.0.0.0',
      port: 3000,
      allowedContentType: 'application/json',
      servicingApiVersions: ['v1'] // Api versionining, defines what version(s) we currently service ['v1', 'v2'...]
    }
  };
})();
