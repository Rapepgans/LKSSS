let numbers = [1,2,3,4,5,6];


const onlyOddNumbers = numbers.filter(function (num){
    return num % 2 == 1;
})
console.log(onlyOddNumbers);