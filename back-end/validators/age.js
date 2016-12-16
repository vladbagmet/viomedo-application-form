module.exports = function (age) {
  var number = parseInt(age, 10);

  return ( (number >= 1) && (number <= 99) ) ? true : false;
}
