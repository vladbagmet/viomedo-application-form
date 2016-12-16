import DS from 'ember-data';

export default DS.Model.extend({
  gender:         DS.attr('string'),
  firstName:      DS.attr('string'),
  lastName:       DS.attr('string'),
  email:          DS.attr('string'),
  phone:          DS.attr('number'),
  age:            DS.attr('number'),
  zip:            DS.attr('number'),
  termsAccepted:  DS.attr('boolean')
});
