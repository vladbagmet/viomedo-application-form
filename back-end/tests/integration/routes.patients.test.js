var request = require('supertest');

var validData = {
  gender: 'male',
  firstName: 'someFirstName',
  lastName: 'someLastName',
  email: '' + new Date().getTime() + '@fakeserver.loc',
  phone: 490859494488,
  age: 18,
  zip: 12345,
  termsAccepted: true
};

var invalidData = {
  gender: 'male',
  firstName: 'someFirstName',
  lastName: 'someLastName',
  email: '' + new Date().getTime() + '@fakeserver.loc',
  phone: 490859494488,
  age: 777,
  zip: 12345,
  termsAccepted: true
};

var validPatient = {patient:validData};
var invalidPatient = {patient:invalidData};

describe('loading express', function () {
  var server;
  beforeEach(function () {
    server = require('../../app');
  });
  afterEach(function () {
    server.close();
  });

  it('responds to /api/v1/patients', function testSlash(done) {
    request(server)
      .get('/api/v1/patients')
      .set('Content-Type', 'application/json')
      .expect(200, done);
  });

  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .set('Content-Type', 'application/json')
      .expect(404, done);
  });

  it('returns inserted user for valid data', function testPath(done) {
    request(server)
      .post('/api/v1/patients')
      .set('Content-Type', 'application/json')
      .send(validPatient)
      .expect(function(res) {
        res.body.patient.phone = validData.phone;
      })
      .expect(201, done);
  });

  it('returns error(same user can`t be inserted twice)', function testPath(done) {
    request(server)
      .post('/api/v1/patients')
      .set('Content-Type', 'application/json')
      .send(validPatient)
      .expect(422, done);
  });


  it('returns age validation error for patient with invalid age', function testPath(done) {
    request(server)
      .post('/api/v1/patients')
      .set('Content-Type', 'application/json')
      .send(invalidPatient)
      .expect(422, done);
  });

});
