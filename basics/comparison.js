//Comparison 

// console.log(2 > 1) true
// console.log(2 <= 1) false
// console.log(2 < 1) false
// console.log(2 == 1) false
// console.log(2 != 1) true

console.log("2" > 1)
// true
console.log("02" > 1)
// true
// note : JS convert string to number

console.log(null > 0) //false
// it takes null as a 0 so 0 > 0 return false
console.log(null == 0) //false
// IN js null do not convert into any number so it returns false
console.log(null >= 0) //true
// here according to ECMA script it take this condition as a !(null < 0) 
// null becomes 0 and (0 < 0) return false but due to not operator it becomes !(false) so the output will be true.


