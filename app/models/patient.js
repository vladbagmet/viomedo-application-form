import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  gender:         validator('presence', {
                    presence: true,
                    message: 'Choose gender.'
  }),
  firstName:      validator('length', {
                    min: 2,
                    max: 25,
                    message: 'First name is invalid.'
  }),
  lastName:       validator('length', {
                    min: 2,
                    max: 25,
                    message: 'Last name is invalid.'
  }),
  email:          validator('format', {
                    type: 'email',
                    message: 'E-mail is invalid.'
  }),
  phone:          validator('format', {
                    regex: /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/,
                    message: 'Phone number is invalid.'
  }),
  age:            validator('format', {
                    regex: /^[1-9][0-9]?$/,
                    message: 'Age is invalid. Must be between 1 and 99 years.'
  }),
  zip:            validator('format', {
                    regex: /^\d{3,5}?$/,
                    message: 'Zip is invalid.'
  }),
  termsAccepted:  validator('presence', {
                    presence: true,
                    message: 'Terms must be accepted.'
  })
});

export default DS.Model.extend(Validations, {
  gender:         DS.attr('string'),
  firstName:      DS.attr('string'),
  lastName:       DS.attr('string'),
  email:          DS.attr('string'),
  phone:          DS.attr('number'),
  age:            DS.attr('number'),
  zip:            DS.attr('number'),
  termsAccepted:  DS.attr('boolean')
});
