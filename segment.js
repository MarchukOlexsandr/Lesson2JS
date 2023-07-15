const x1 = 10
const x2 = 30

const number = 55

console.log(`число ${number} попадає в проміжок ${x1}`, number < x1) ;
console.log(`число ${number} попадає в проміжок ${x2}`, number > x2);

const result = number > x1 || number < x2;

console.log(result);