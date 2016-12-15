'use strict';

const Patient         = require('../../../models/patient'); // Later we can make path-indefferent require using NODE_ENV.
const log             = require('../../../libs/log')(module);
const responseHandler = require('../../../handlers/response');

module.exports = function(req, res) {
  // Define what patient`s details could be changed.
  var email = req.body.email;
  var phone = req.body.phone;
  var age = req.body.age;
  var zip = req.body.zip;

  Patient.findById(req.params.id).then(savePatient, reject);

  function savePatient(patient) {
    if (patient) {
      if (email) patient.email = email;
      if (phone) patient.phone = phone;
      if (age) patient.age = age;
      if (zip) patient.zip = zip;

      patient.save().then(fulfill, reject); // Using save becase of problems with mongoose schema validation on updates.
    } else {
      return reject({error: 'error while updating patient: ' + req.params.id});
    }
  }

  function fulfill(patient) {
    if (patient) {
      log.debug('patient`s details updated: ' + patient);
      return responseHandler(res, {patient})
    } else {
      return reject({error: 'error while updating patient: ' + req.params.id});
    }
  }

  function reject(error) {
    log.debug(error);
    return responseHandler(res, {error});
  }
}
