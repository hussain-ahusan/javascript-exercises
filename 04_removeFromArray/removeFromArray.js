const removeFromArray = function(givenArray, ...args) {

    const newArray = new Array();
    givenArray.forEach( (element) => {
        if (!args.includes(element)) {
            newArray.push(element)
        }
    })
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
