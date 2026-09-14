const userId = 1
let accountEmail = "aksha@gmail.com"
var accountPassword = "12345"
accountCity = "Indore"
let accountState;

// changes in const is not allowed
// prefer not to use var because of issue in block scope and functional scope

console.table([userId, accountEmail, accountPassword, accountCity, accountState]);