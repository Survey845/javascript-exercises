const convertToCelsius = function(numFah) {
  solCel = (numFah-32)*5/9;
  return parseFloat(solCel.toFixed(1));
};

const convertToFahrenheit = function(numCel) {
    solFah = (numCel*9/5)+32;
    return parseFloat(solFah.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
