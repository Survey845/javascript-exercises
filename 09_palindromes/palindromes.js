const palindromes = function (stringToCheck) {
        stringToCheck = stringToCheck.toLowerCase();
        let letterArray = [];
        let reverseArray = [];
        let stringToCheckLength = stringToCheck.length;
        for(i=0;i<stringToCheckLength;i++){
            if(stringToCheck[i].search(/^[a-z0-9]+$/i) != -1){
                letterArray.push(stringToCheck[i])
            }
        }
        let letterArrayLength = letterArray.length;

        for(j=1;j<=letterArrayLength;j++){
            reverseArray.push(letterArray[letterArrayLength-j])
        }

        if(reverseArray.toString()===letterArray.toString()){
            return true;
        } else{
            return false;
        }
    
        
};

// Do not edit below this line
module.exports = palindromes;
