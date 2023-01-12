// // object = {key : value}

const person = {
    names: 'Hiệp',
    age: 20,
    address: {
        city: 'Hà Nội',
        dt: '099999999999',

    },

};
const { names, age, address: { city, dt } } = person;
// const names = person.names;
console.log(names);
console.log(names, age);
const showInfo = ({ names, age, address }) => {
    console.log(names, age, city);
}
showInfo(person);


// // mảng
// function useState() {
//     return ['Hiệp', 19];
// }
// const [names, age] = useState();
// console.log(age);