const reverseString = function(stringToBeReversed) {
    let lengthOfString = stringToBeReversed.length;
    let stringWhichIsReversed = ""
    for(i=0;i<lengthOfString;i++){
        stringWhichIsReversed += stringToBeReversed[lengthOfString-i-1];
    }
    return stringWhichIsReversed;
};

// Do not edit below this line
module.exports = reverseString;
