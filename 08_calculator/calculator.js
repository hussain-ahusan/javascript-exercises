const add = function(num1, num2) {
  // create a variable to hold addition operation
  // return the addition variable
    let ans = num1 +num2
    return ans
};

const subtract = function(num1, num2) {
  // create a variable to hold the subtraction operation
  // return the subtraction variable
    let ans = num1- num2
    return ans
};

const sum = function(array) {
  // create a variable to hold the sum operation
  // use array.reduced method so that it can add many numbers and return the final answer
  // return the sum variable
    let ans = array.reduce( function (accumulator, nextItem){
      return nextItem + accumulator
    },0);
    return ans
};

const multiply = function(arr) {
  // create a variable to hold the multiplication operation
  // use array.reduce method so that it can multiply many numbers and return the final answer
  // return the multiplication variable
    let ans = arr.reduce((accumulator, nextItem) => accumulator * nextItem, 1)
    return ans
};

const power = function(num1, num2) {
  // create a variable to hold the final answer
  // use Math.pow method to raise the given number to the power of the second given number
  // return the final answer variable
    let ans = Math.pow(num1, num2)
    return ans
};

const factorial = function(number) {
  // check if the given number is less than 0, if it is then return error
  // check if the given number is 0, if it is return 1
  // otherwise return a variable that holds the expression used to find the factorialized number
  if (number < 0) {
    return "error"
  } else if (number === 0) {
    return 1
  } else {
	return ans = number * factorial(number - 1)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
