'use strict';

/* Capitalize first symbol.
 * @param {String} str, input string
 * @return {String}
 */
module.exports = function(str) {
  return '' + str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
}
