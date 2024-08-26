const leapYears = function(yearToCheck) {
    if((yearToCheck%100!=0 && yearToCheck%4==0) || (yearToCheck%400==0)){
        return true;
    } else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
