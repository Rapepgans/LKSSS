function greeting(user){

    const {name,age, addres} = user;
    const {long,lat } = addres;
    console.log('Halo ${name} umur ${age} form ${long}, ${lat} ');   
}


const user = {
    name: 'Rapep',
    age: 17,
    address: {
        long: 87.1987,
        lat: 8.1945,
    },
};

greeting(user);

let [a,b,c,d] = [1,2,3,4];
console.log(a,b,c,d);