'use strict';

const mongoose  = require('mongoose');
const config    = require('../config/index');
const log       = require('./log')(module);
const url       = 'mongodb://' + config.db.login + ':'
                    + config.db.password + '@'
                    + config.db.hosts[0].address + ':'
                    + config.db.hosts[0].port + '/'
                    + config.db.database;

module.exports = (function () {
  var db;

  // Using singleton pattern here to make sure we have single db per each launch (good if module caching is disabled).
  function init() {
    mongoose.Promise = require('bluebird'); // Mpromise (mongoose's default promise library) is slower and deprecated.
    mongoose.connect(url);
    db = mongoose.connection;
    require('mongoose-auto-increment').initialize(db);

    db.on('error', function (err) {
      log.error('error while connecting to db ' + config.db.database, err.message);
    });

    db.once('open', function callback () {
      log.info('connected to db ' + config.db.database);
    });

    process.on('SIGINT', function() {
      mongoose.connection.close(function () {
        log.info('disconnected from db ' + config.db.database);
        process.exit(0);
      });
    });

    return db;
  }

  return (!db) ? init() : db;
})();
