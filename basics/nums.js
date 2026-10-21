const score = 400
console.log(score);

const balance = new Number(400)
console.log(balance);
console.log(balance.toString().length);

const otherNumber = 23.8996
console.log(otherNumber.toPrecision(4));
//it always return string in which it counts digits
// 23.8996 the first four digits are 23.89 after that it has 9 so it increase it's previous digit now the output will be 23.90

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'));

