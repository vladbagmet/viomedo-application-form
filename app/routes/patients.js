import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('newPatient', this.store.createRecord('patient'));
  },

  actions: {
    addNewPatient(newPatient) {
      newPatient.save().then(
        () => {
          this.transitionTo('success');

        },
        () => {
          this.transitionTo('fail');
        }
      );
    }
  }

});
