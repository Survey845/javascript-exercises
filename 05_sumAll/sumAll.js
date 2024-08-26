const sumAll = function(num1, num2) {
    let numOne,numTwo;
    let totalSum = 0;

    if(num1<0 || num2<0 || num1%1!==0 || num2%1!==0 || typeof num1!==typeof 0 || typeof num2!==typeof 0){
        return "ERROR";
    }
    

    else if(num1<num2){
        numOne = num1;
        numTwo = num2;
    }
    else{
        numOne = num2;
        numTwo = num1;
    }

    for(i=numOne;i<=numTwo;i++){
        totalSum+=i;
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
