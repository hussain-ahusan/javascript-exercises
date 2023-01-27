const palindromes = function (string) {
    // lowercase our string
    // create a variable to hold an array of a string without non alphanumeric chars
    // create a variable to hold and convert the the alphanumeric only array to string
    // create a variable to hold and reverse the newly formed alphanumeric string
    // use conditionals to check if string from step 3 an step 4 are equal
    let lowercase = string.toLowerCase()
    let ignoreSpecialChars = lowercase.match(/[a-z0-9]/g)
    let convertToString  = ignoreSpecialChars.join("")
    let reversed = convertToString.split("").reverse().join("")

    if (convertToString === reversed) {
        return true
    } else {
        return false
    }

};

// Do not edit below this line
module.exports = palindromes;
