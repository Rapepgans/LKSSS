//default parameters

function calcSum(number1,number2){
    let sum = number1 + number2;
    return sum;
}
console.log(calcSum(10,50));


//function expression

const calcSum = function(number1,number2){
    let sum = number1 + number2;
    return sum;
}
console.log(calcSumExp(50,60));

// arrow function

const calcSumArr = (number1,number2) => number1 + number2;
console.log(calcSumArr(40,30));

//function expression 

const mul18ytwo = function(number1){
    return number1 * 2;
}
console.log(mul18ytwo(6));

//arrow function

const mul18ytwoArr = (number1) => number1 * 2;
console.log(mul18ytwoArr(8));