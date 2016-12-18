# Viomedo application form

This demo sends patient`s application to the server.

Back-end implements REST API on Node.js/Express/MongoDB.
Fron-end is implemented using Ember.js.

## Prerequisites

You will need the following things properly installed on your computer.

* [Ember](http://emberjs.com)
* [Node.js](http://nodejs.org/) (with NPM)
* [Mocha](https://mochajs.org-cli.com/)

## Installation

* `sudo npm i -g ember-cli`
* `sudo npm i -g mocha`
* `git clone https://github.com/vladbagmet/viomedo-application-form.git`
* `cd viomedo-application-form`
* `npm install`
* `bower install`

## Running / Development
* `node back-end/app.js` | starts back-end API at [http://localhost:3000](http://localhost:3000).
* `ember server` | starts frontend. Visit app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `mocha -R spec back-end/tests/integration/routes.patients.test.js` | starts back-end integration tests

