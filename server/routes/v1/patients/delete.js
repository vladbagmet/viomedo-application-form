'use strict';

const Patient         = require('../../../models/patient'); // Later we can make path-indefferent require.
const log             = require('../../../libs/log')(module);
const responseHandler = require('../../../handlers/response');

module.exports = function(req, res) {
  Patient.findByIdAndRemove(req.params.id).then(fulfill, reject);

  function fulfill(patient) {
    if (patient) {
      log.debug('patient deleted: ' + patient);
      return responseHandler(res, {patient, status: 204});
    } else {
      return reject({error: 'error while deleting patient: ' + req.params.id});
    }
  }

  function reject(error) {
    log.debug(error);
    return responseHandler(res, {error});
  }
}
