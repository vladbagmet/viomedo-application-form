'use strict';

/* Sets data and meta information for api responses.
 * @param {Object} res, response object to send back an answer for client
 * @param {Object} meta, additional data to process
 * @return {void}
 */
function responseHandler(res, meta) {
  if (!res) {
    throw new Error('res is required');
  }

  function stripPredefinedKeys(key) {
    return ( (key !== 'error') && (key !== 'status') ) ? true : false;
  }

  var message = {};
  var error = meta.error;
  var status = meta.status;
  var data = (Object.keys(meta)).filter(stripPredefinedKeys)[0]; // Flexible var naming for API responses.

  if (error) {
    res.status(422);
    error.status = 'error';
    message = error;
  } else {
    message.status = 'success';
  }

  if (status) {
    res.status(status);
  }

  if (data) {
    message[data] = meta[data];
  }

  return res.send(message);
}

module.exports = responseHandler;
