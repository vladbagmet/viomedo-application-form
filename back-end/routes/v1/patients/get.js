'use strict';

const Patient         = require('../../../models/patient'); // Later we can make path-indefferent require.
const log             = require('../../../libs/log')(module);
const responseHandler = require('../../../handlers/response');

module.exports = function(req, res) {
  var id = parseInt(req.params.id, 10);

  // To service GET requests for routes '/patients' and '/patients:/id'.
  if ( id > 0 ) {
    Patient.findById(id).then(fulfill, reject);
  } else {
    Patient.find({}).then(fulfill, reject);
  }

  function fulfill(patients) {
    if (patients) {
      log.debug('patient(s) found: ' + patients);
      return (id > 0) ?  responseHandler(res, {patient: patients}) : responseHandler(res, {patients});
    } else {
      return reject({error: 'error while finding patient: ' + id});
    }
  }

  function reject(error) {
    log.debug(error);
    return responseHandler(res, {error, status: 404});
  }
}
