/*
THIS CODE WAS WRITTEN FROM A YT TUTORIAL
const repeatString = function(message, loops) {
    //using switch statement, check is number of loops is less than 0, if it is then return error, if it is 0, then return an empty string
    // create a variable to hold the message
    // use for loop to repeat the message the given number of loops, for loop will add the message the variable created to hold the message on each iteration
    // return the variable used to hold the message
    switch (loops) {
        case 0:
            return '';
        case -1:
            return 'ERROR'
        default:
        break;
    }
    
    let greeting = ''
    
    for (let i=0; i < loops; i++){
        greeting += message
    }
    return greeting
};
*/

//This is my own code written to meet all the test conditions
function repeatString(greetingMessage, repetitions) {
    if (repetitions < 0) {
        return "ERROR";
    }
    let greeting = '';
    let i=0;
    while (i < repetitions) {
        greeting += greetingMessage;

    i++
    };

return greeting;
};




// Do not edit below this line
module.exports = repeatString;
