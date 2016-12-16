module.exports = function (zip) {
  // Calculate how many digits are in number.
  var numberRank = Math.max(Math.floor(Math.log10(Math.abs(parseInt(zip, 10)))), 0) + 1;

  return ( (numberRank >= 3) && (numberRank <= 5) ) ? true : false;
}
