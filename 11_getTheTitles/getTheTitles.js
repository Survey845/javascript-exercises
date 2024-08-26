const getTheTitles = function(booksArray) {
    let solArray =[];
    let booksArrayLength = booksArray.length;
    for(i=0;i<booksArrayLength;i++){
        solArray.push(booksArray[i]["title"]);
    }

    return solArray;
};

// Do not edit below this line
module.exports = getTheTitles;
