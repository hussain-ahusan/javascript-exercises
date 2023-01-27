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

// Do not edit below this line
module.exports = repeatString;
