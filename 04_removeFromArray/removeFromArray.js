const removeFromArray = function(arrayMain, ...arguementToRemove) {
    let arrayMainLength = arrayMain.length;
    let arguementToRemoveLength = arguementToRemove.length;
    let ansArray = [];
    for(i = 0; i<arrayMainLength; i++){
        let check = true;
        for(j=0;j<arguementToRemoveLength;j++){
            if(arrayMain[i]===arguementToRemove[j]){
                check = false;
                break;
            }           
        }
        if(check == true){
            ansArray.push(arrayMain[i]);
        }
        
    }
    return ansArray;
};

// Do not edit below this line
module.exports = removeFromArray;
