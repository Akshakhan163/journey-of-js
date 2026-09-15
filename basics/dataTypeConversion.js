//  string to number conversion

let score = "33abc";
let scoreInNumber = Number(score);

console.log(typeof scoreInNumber);
// number

console.log(scoreInNumber);
// NaN => not a number

// assigning null and undefined values in string
let score1 = null
let nullScore = Number(score1)

console.log(typeof nullScore);
// number

console.log(nullScore);
// 0

let score2 = undefined;
let undefScore = Number(score2)

console.log(typeof undefScore);
// number

console.log(undefScore);
// NaN

// conclusion
// "33" => 33
// "33abc" => NaN
// true => 1 / false => 0;
// converion of string doesn't show any bug of error but give wrong values

// boolean Conversion 
let isLoggedIn = "Aksha";

let booleanisLoggedIN = Boolean(isLoggedIn)
console.log(booleanisLoggedIN);

// 1 => true, false => 0
// "" => false;
// " " => true;
// "Aksha" => true;

// number to string
let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber)