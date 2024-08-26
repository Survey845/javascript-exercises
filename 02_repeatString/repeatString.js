const repeatString = function(word, multiplier) {
    let returnString ='';
    if(multiplier<0){
        returnString = "ERROR";

    } else{
        for(i=0;i<multiplier;i++){
            returnString+=word;
        }
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
