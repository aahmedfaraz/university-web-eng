const composeFunc = (func1, func2) => (inpt) => func1(func2(inpt));

const myFunc1 = (inpt) => inpt + 15;
const myFunc2 = (inpt) => inpt + 20;

const result = composeFunc(myFunc1, myFunc2);

console.log(`Result : ${result(10)}`);
console.log(`Result : ${result(20)}`);
console.log(`Result : ${result(30)}`);
