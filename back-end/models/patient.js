'use strict';

const mongoose        = require('mongoose');
const autoIncrement   = require('mongoose-auto-increment');
const uniqueValidator = require('mongoose-unique-validator');
const isValidEmail    = require('../validators/email');
const isValidAge      = require('../validators/age');
const isValidZip      = require('../validators/zip');

var patientSchema = new mongoose.Schema({
  _id: {
    type: Number,
    index: true,
    unique: true,
    required: true
  },
  gender: {
    type: String,
    enum: ['female', 'male'],
    required: true,
    lowercase: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    index: true,
    unique: true,
    required: true,
    lowercase: true
  },
  phone: {
    type: Number,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  zip: {
    type: Number,
    required: true
  },
  termsAccepted: {
    type: Boolean,
    required: true
  }
}, { strict: true });

patientSchema.plugin(uniqueValidator);
patientSchema.plugin(autoIncrement.plugin, {
  model: 'Patient',
  field: '_id',
  startAt: 1,
  incrementBy: 1
});

// Fields validation.
patientSchema.path('email').validate(function (value) {
  return isValidEmail(value);
});
patientSchema.path('age').validate(function (value) {
  return isValidAge(value);
});
patientSchema.path('zip').validate(function (value) {
  return isValidZip(value);
});

module.exports = mongoose.model('Patient', patientSchema);
