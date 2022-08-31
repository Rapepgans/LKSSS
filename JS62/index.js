const doctors = [
    {name: 'Rapep', age: 99},
    {name: 'Sultan', age: 99},
    {name: 'Ndog', age: 100},
];

const result = doctors.find(function(doctor){
    return doctor.age > 17;
});

console.log(result);