const fibonacci = function(fibonacciIndex) {
    fibonacciIndex = parseInt(fibonacciIndex);
    let finalSum = 1;
    let middleMan = 1;
    let emptyBox;

    if(fibonacciIndex>=0){
    if(fibonacciIndex==0 || fibonacciIndex==1){
        return fibonacciIndex;
    } else{
        for(i=2;i<fibonacciIndex;i++){
            emptyBox = finalSum;
            finalSum+=middleMan;
            middleMan = emptyBox;

        }
        return finalSum;
        }
    } else{
        return "OOPS";
    }


};

// Do not edit below this line
module.exports = fibonacci;
