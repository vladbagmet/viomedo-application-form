'use strict';

// Right now it is supposed that we will run app only in development mode.
module.exports = (function() {
  return {
    db: {
      hosts: [
        { address: '', port: 0 }
      ],
      database: '',
      login: '',
      password: ''
    },
    app: {
      ip: '',
      port: 0,
      allowedContentType: '',
      servicingApiVersions: []
    }
  };
})();
