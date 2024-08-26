const findTheOldest = function(oldestPersonsList) {
    let oldestPersonIndex;
    let maxAge = 0;
    let currentDate = parseInt(new Date().getFullYear());
    let oldestPersonsListLength = oldestPersonsList.length;
    for(i=0;i<oldestPersonsListLength;i++){
        if(typeof oldestPersonsList[i].yearOfDeath==="undefined" && currentDate-oldestPersonsList[i]["yearOfBirth"]>maxAge){
            maxAge = currentDate-oldestPersonsList[i]["yearOfBirth"];
            oldestPersonIndex = i;
            
        } else if(oldestPersonsList[i]["yearOfDeath"]-oldestPersonsList[i]["yearOfBirth"]>maxAge){
            maxAge = oldestPersonsList[i]["yearOfDeath"]-oldestPersonsList[i]["yearOfBirth"];
            oldestPersonIndex = i;
        } 
    }
    let oldestPerson = oldestPersonsList[oldestPersonIndex];
    return oldestPerson;
    
};

// Do not edit below this line
module.exports = findTheOldest;
