"use strict"
// treat all js code as newer version

// DataTypes =>
// number
let score = 95
let temperature = 34.5

// bigint
let largeNum = 90073456782376747745n

// string => " "
let name = "Aksha"

// boolean => true/false
let isLoggedIn = true
let isPaymentDone = false

// null => standalone value
let currTemperature = null

// undefined
let userCity;

// symbol => unique
const id1 = Symbol("123")
const id2 = Symbol("123")

console.table([
  typeof score,
  typeof temperature,
  typeof largeNum,
  typeof name,
  typeof isLoggedIn,
  typeof isPaymentDone,
  typeof currTemperature,
  typeof userCity,
  typeof id1,
  typeof id2
]);