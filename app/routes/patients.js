import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //return {};
    //return this.store.findAll('patient');
    //return this.store.createRecord('patient');
    return this.store.findAll('patient');
  },

  actions: {
    addNewPatient(gender, firstName, lastName, email, phone, age, zip, termsAccepted) {

      //alert('gender: ' + gender);
      //alert('firstName: ' + firstName);


      //
      this.store.createRecord('patient', {gender, firstName, lastName, email, phone, age, zip, termsAccepted}).save().then(
        patient => {
          console.info('Response:', patient);
        },
        error => {
          console.error('Error from server:', error);
        }
      );


      //let newPatient = this.modelFor(this.routeName);
      //alert('addNewPatient button pressed! ' + JSON.stringify(newPatient) );


      // newPatient.save.then(
      //   patient => {
      //     console.info('Response:', patient);
      //   },
      //   error => {
      //     console.error('Error from server:', error);
      //   }
      // );


      // let thing = this.modelFor(this.routeName);
      // var self = this;
      // thing.save().then(function() {
      //   self.transitionTo('things');
      // }).catch(function(reason) {
      // });


      // newPatient.save.then(
      //   patient => {
      //     console.info('Response:', patient);
      //     this.controller.set('patient', this.store.createRecord('patient'));
      //   },
      //   error => {
      //     console.error('Error from server:', error);
      //   }
      // );

    }
  }

});
