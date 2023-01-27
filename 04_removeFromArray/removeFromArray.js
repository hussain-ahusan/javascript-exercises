const removeFromArray = function(...args) {
    // use ...args to make the function accept any number of arguments
    // create a variable to hold the first array argument
    // create an empty array variable to push the result of the remove operation
    // use the array special forEach loop to loop through the array
    // check if args includes the items to be removed.
    // after the evaluation, push the results of the evaluation to the empty array created beforehand.
    const array = args[0]
    const newArray = []
    array.forEach( (item) => {
        if (!args.includes(item)) {
            newArray.push(item)
        }
    })
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
