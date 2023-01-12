// loop
const product = ['Product:A', 'Product:B', 'Product:C'];
for (let i = 0; i < product.length; i++) {
    // biết điểm dừng, dựa theo length
    // dựa vào index để hiển thị
    console.log('For', product[i]);
}
// for in ==> để lấy index
for (let item in product) {
    console.log('For in', product[item]);
}
// for of ==> để lấy giá trị
for (let item of product) {
    console.log('For of', item);
}
// forEach
product.forEach((item, index) => console.log(`${item} ${index}`));

// map -> tạo ra một mảng mới và có thể thay đổi giá trị
const newMapProduct = product.map((item, index) => {
    return `${item} ${index + 1}`;
});
console.log(newMapProduct);
// filter -> Tạo ra 1 mảng, lọc các phẩn tử thỏa mãn điều kiện
const newFilterProduct = product.filter(item => {
    return item != 'Product:C';
})
console.log(newFilterProduct);
//
const app = document.querySelector("#app");
app.innerHTML = product.map((item) => `<div>${item}</div>`).join("");
// reduce 
const numbers = [
    { id: 1, names: 'Product1', price: 200 },
    { id: 2, names: 'Product1', price: 200 },
    { id: 3, names: 'Product1', price: 230 }
];
const total = numbers.reduce((accumulator, nextValue) => accumulator + nextValue.price, 0);
console.log(total);

// Find -> Tìm phần tử trong mảng -> Trả về một phần tử thỏa mãn điều kiện
const number2 = [
    { id: 1, names: 'Product1', price: 200 },
    { id: 2, names: 'Product1', price: 200 },
    { id: 3, names: 'Product1', price: 230 }
];
const idpro = number2.find((item) => item.id == 2)
console.log(idpro)


