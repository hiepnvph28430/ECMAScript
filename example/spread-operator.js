// spread-operator -- copy
const person = {
    names: 'Hiep',
    age: 20
}
const person2 = {
    ...person,
    address: 'Ha noi'
}

console.log(person2);

const product = [1, 2, 3, 4];
console.log('Product:', product);
const product2 = [-1, ...product, 5];
console.log('Product2:', product2);
const newProductFilter = product2.filter(item => item != 5)
console.log('newProductFilter', newProductFilter);