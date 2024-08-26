const add = function(num1,num2) {
	let add = num1+num2;
	return add;
};

const subtract = function(num1,num2) {
	let sub = num1-num2;
	return sub;
};

const sum = function(numArray) {
	let numArrayLength = numArray.length;
	let sum = 0;
	if(numArrayLength==0){
		return sum;
	} else{
		for(i=0;i<numArrayLength;i++){
			sum+=numArray[i];
		}

		return sum;
	}
	
};

const multiply = function(multiplyArray) {
	let multiplyArrayLength = multiplyArray.length;
	let multipleAnswer = 1;
	for(i=0;i<multiplyArrayLength;i++){
		multipleAnswer*=multiplyArray[i];
	}
	return multipleAnswer;
};

const power = function(baseNum,powerNum) {
	let answerNum = baseNum**powerNum;
	return answerNum;
	
};

const factorial = function(factorialNum) {
	let factorialAns = 1;
	if(factorialNum==0 || factorialNum==1 ){
		return 1;
	} else{
		for(i=factorialNum;i>1;i--){
			factorialAns*=i;
			
		}
		return factorialAns;
	}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
