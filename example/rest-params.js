// chuyển
function total(...number) {
    console.log(number);
    let resul = 0;
    for (let i = 0; i < number.length; i++) {
        resul += number[i];
    }
    console.log(resul);
}

total(1, 2, 3, 4, 5, 6, 7)