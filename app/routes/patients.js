import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //return {};
    //return this.store.findAll('patient');
    return this.store.createRecord('patient');
  },

  actions: {
    addNewPatient() {
      let newPatient = this.modelFor(this.routeName);
      alert('addNewPatient button pressed! ' + JSON.stringify(newPatient) );


      newPatient.save.then(
        patient => {
          console.info('Response:', patient);
        },
        error => {
          console.error('Error from server:', error);
        }
      );


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
