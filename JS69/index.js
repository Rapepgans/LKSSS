let numbers = [1,2,3,4,5];


let doctor = [
    {name: 'Rapep' , age: 99},
    {name: 'sultan' , age: 99},
    {name: 'Ndog' , age: 100},
];

const docName = doctor.map((doc) => doc.age);
console.log(docName);