//Stack(Primitive), Heap(Non Primitive)

let myGithubName = "akshakhan@123"

let anotherName = "akshakhan"

anotherName = myGithubName

console.log(anotherName);
console.log(myGithubName);

//Heap 
let userOne = {
    email : "aksha@gmail.com",
    upi : "aksha@ybl"
}

let userTwo = userOne;
userTwo.email = "userTwo@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


