// Fuction Declaration

function aboutMe(name,age){
    const message = `I am ${name} and i am ${age} years old`;
    console.log(message);
}

// function Call

aboutMe('inpo',17);
aboutMe('rapep',17);

function calcSum(number1,number2){
    let sum = number1 + number2;
    return sum;
}

let result = calcSum(10,20);
console.log(result);