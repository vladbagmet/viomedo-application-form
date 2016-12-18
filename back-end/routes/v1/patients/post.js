'use strict';

const Patient         = require('../../../models/patient'); // Later we can make path-indefferent require setting NODE_ENV.
const log             = require('../../../libs/log')(module);
const capitalizeStr   = require('../../../libs/ucfirst');
const responseHandler = require('../../../handlers/response');

module.exports = function(req, res) {
  // Pre-save data formatting.
  if (req.body.patient.firstName) req.body.patient.firstName = capitalizeStr(req.body.patient.firstName);
  if (req.body.patient.lastName) req.body.patient.lastName = capitalizeStr(req.body.patient.lastName);

  var patient = new Patient(req.body.patient);
  patient.save().then(fulfill, reject);

  function fulfill(patient) {
    log.debug('patient saved: ' + patient);
    return responseHandler(res, {patient, status: 201});
  }

  function reject(error) {
    log.debug(error);
    return responseHandler(res, {error});
  }
}
