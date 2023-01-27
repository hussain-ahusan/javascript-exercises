const leapYears = function(year) {
   // using if, check if the given year is divisible by 4 and 400 without a reminder
   // also check if the given year is not divisible by 100 without a reminder
   // if the above mentioned checks are true, return true, else return false
 if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
    return true
 } else {
    return false
 }
};

// Do not edit below this line
module.exports = leapYears;
