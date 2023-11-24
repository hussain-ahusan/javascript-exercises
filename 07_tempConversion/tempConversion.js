// convert temp to celsius
// create a variable to hold the conversion formulae
// create a result variable to hold the converted temp rounded off to one decimal place
//return the result
const convertToCelsius = function(fahrenheit) {

  let FahrenheitToCelsius = (fahrenheit - 32) * 5/9
  let result = Math.round(FahrenheitToCelsius * 10)/10
  return result
};

// convert temp to fahrenheit
// create a variable to hold the conversion formulae
// create a result variable to hold the converted temp rounded off to one decimal place
// return the result
const convertToFahrenheit = function(celsius) {
    
    let celsiusToFahrenheit = celsius * 9/5 + 32 
    let result = Math.round(celsiusToFahrenheit * 10)/10
    return result
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
