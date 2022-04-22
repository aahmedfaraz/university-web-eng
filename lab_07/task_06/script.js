let numbers = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
console.log(`The Array    : ${numbers}`);

numbers = numbers.map((num) => Math.sqrt(num));
console.log(`After Sqrt   : ${numbers}`);
