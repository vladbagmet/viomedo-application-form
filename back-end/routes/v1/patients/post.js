'use strict';

const Patient         = require('../../../models/patient'); // Later we can make path-indefferent require.
const log             = require('../../../libs/log')(module);
const responseHandler = require('../../../handlers/response');

module.exports = function(req, res) {

  //
    console.log('req.body.patient: ' + JSON.stringify(req.body.patient));
    console.log('typeof(req.body.patient): ' + typeof(req.body.patient));
    console.log('');
    console.log('req.body.patients: ' + JSON.stringify(req.body.patients));
    console.log('typeof(req.body.patients): ' + typeof(req.body.patients));
  //

  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var gender = req.body.gender;

  var phone = req.body.phone;
  var age = req.body.age;
  var zip = req.body.zip;
  var termsAccepted = req.body.termsAccepted;

  // Pre-save data formatting.
  if (firstName) firstName = firstName.charAt(0).toUpperCase() + firstName.toLowerCase().slice(1);
  if (lastName) lastName = lastName.charAt(0).toUpperCase() + lastName.toLowerCase().slice(1);

  var patient = new Patient({ gender, firstName, lastName, email, phone, age, zip, termsAccepted });
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
