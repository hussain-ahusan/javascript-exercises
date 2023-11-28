const add = function(num1, num2) {
  let sum = num1 + num2;
  return sum;
};

const subtract = function(num1, num2) {
  let subtracts = num1 - num2;
  return subtracts;
};

const sum = function(passedArray) {
  // create a variable to hold the sum operation
  // use array.reduced method so that it can add many numbers and return the final answer
  // return the ans

  let answer = passedArray.reduce((firstNum, nextNum) => {
    return firstNum + nextNum;
  },0)

  return answer;
};

const multiply = function(passedArray) {
  //declare a variable to hold the answer
  //in that variable, use array.reduce method so that we can pass in as many numbers and calculate multipilication.
  //return the final anwer
  let answer = passedArray.reduce((firstNum, nextNum) => firstNum * nextNum,1);

  return answer;
};

const power = function(num1, num2) {
  let answer = Math.pow(num1, num2);
  return answer;
};

const factorial = function(number) {
  //create a variable to hold the passed number
  //check if number is 0 or 1, if so return 1
  //else use while loop to iterate through the given number while number is less than 2.
  /*for each iteration, let number variable be equal to number variable times passed number minus 1. 
  (note that passed number is same as number variable, it's the same as n=n*(n-1) )
  */
  let ans = number;

  if (number === 0 || number === 1){
    return 1;
  } else {
    while (number > 2) {
      ans = ans * (number -1)
      number--;
    }

    return ans;
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
