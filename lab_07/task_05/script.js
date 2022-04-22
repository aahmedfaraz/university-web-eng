const isPositive = (num) => num > 0;

const myArray = [-1, 1, -2, 2, -3, 3, -4, 4, -5, 5];

console.log(`The Array    : ${myArray}`);
console.log(`Filtered +ve : ${myArray.filter(isPositive)}`);
