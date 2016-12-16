import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://127.0.0.1:3000',
  namespace: 'api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});
