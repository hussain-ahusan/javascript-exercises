// convert temp to celsius
// create a variable to hold the fahrenheit temp
// create a variable to hold the conversion formulae
// create a variable to hold the converted temp rounded off to one decimal place
//return the one dp variable
const convertToCelsius = function(fahrenheit) {
  let fahrenheitTemp = fahrenheit
  let FahrenheitToCelsius = (fahrenheitTemp - 32) * 5/9
  let result = Math.round(FahrenheitToCelsius * 10)/10
  return result
};

// convert temp to fahrenheit
// create a variable to hold fahrenheit temp
// create a variable to hold the conversion formulae
// create a variable to hold the converted temp rounded off to one decimal place
// return the one dp variable 
const convertToFahrenheit = function(celsius) {
    let celsiusTemp = celsius
    let celsiusToFahrenheit = celsiusTemp * 9/5 + 32 
    let result = Math.round(celsiusToFahrenheit * 10)/10
    return result
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
