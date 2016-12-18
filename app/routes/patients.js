import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },

  actions: {
    addNewPatient(model) {
      var newPatient = {};

      newPatient.gender = model.gender;
      newPatient.firstName = model.firstName;
      newPatient.lastName = model.lastName;
      newPatient.email = model.email;

      newPatient.phone = model.phone;
      newPatient.age = model.age;
      newPatient.zip = model.zip;
      newPatient.termsAccepted = model.termsAccepted;

      this.store.createRecord('patient', newPatient).save().then(
        patient => {
          console.info('Response:', patient);
        },
        error => {
          console.error('Error from server:', error);
        }
      );
    }
  }

});
