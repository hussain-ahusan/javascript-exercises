const fibonacci = function(index) {
    //check if index is less that 0, if it is return oops
    if (index < 0) {
        return "OOPS"
    }
    //check if the index is 0, if it is return 0
    if (index === 0){
        return 0
    }
    // create  variables to hold the initial numbers
    let a = 0
    let b = 1
    //create a variable to hol the given index
    let c = parseInt(index)

    // create a for loop to find the fib member of the given index
    // loop is a separate block so, it's possible to reassign preassigned variables inside the loop.  outside the loops; c = parseInt(index) inside the loop; (c = a + b)
    for (let i = 1; i < index; i++) {
        // add the initial numbers of the fib sequence to determine the first fib member
        c = a + b
        // reassign each variable to be equal to next value (a equal to b and b equal to c) so that when loop is finished, we get the fib member of the given index
        a = b
        b = c
    }
    return c
};

// Do not edit below this line
module.exports = fibonacci;
