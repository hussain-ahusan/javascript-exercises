const sumAll = function(num1, num2) {
    // create variable to hold the error message
    // create  variables to find the lowest and highest number of the given two numbers
    // create a variable to add the sum for each iteration
    // using if, check if the type of arguments is not equal to number, if thats true then return the error message
    // also check if the arguments are less than zero, if it is, then return error message
    // now use for loop to loop between the two arguments.
    // for each iteration, add the number to the sum variable, when loop ends, return the sum variable
   let error = "ERROR"
   let smallest = Math.min(num1, num2)
   let largest = Math.max(num1, num2)
   let sum =0

  
        if ((typeof num1 !== "number") || (typeof num2 !== "number")) {
            return error
        } else if ((smallest < 0) || (largest < 0)) {
            return error
        } else {
            for(let i = smallest; i <= largest; i++) {
                sum = sum + i
            }
        }
    console.log(sum)
    return sum
};

// Do not edit below this line
module.exports = sumAll;
