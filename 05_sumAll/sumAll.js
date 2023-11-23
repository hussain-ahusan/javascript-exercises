//use if to check for type of the arguments passed into the function and to check if the numbers is less than zero.
//create a variable to hold the sum
//create two variables to hold smallest and biggest bumber with Math.min and Math.max so that whatever the order they are passed in, sum will be calculated.
//use for loop to iterate between the given two numbers and add the value of i to sum, then return sum.


const sumAll = function (num1, num2) {
    
    if (typeof num1 !== 'number' || typeof num2!== 'number') {
        return 'ERROR';
    }
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    let sum = 0;
    let smallest = Math.min(num1, num2);
    let biggest = Math.max(num1, num2);

    for (let i = smallest; i <= biggest; i++) {
        sum += i;
    };

   return sum;
}



// Do not edit below this line
module.exports = sumAll;
