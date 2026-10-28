let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());

let myCreateDate = new Date(2026, 0, 5);
console.log(myCreateDate);

let myCreateDate2 = new Date(2026, 0, 23, 5, 3);
console.log(myCreateDate2);

console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getDate());
console.log(Math.floor(Date.now())/1000);

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth+1);
console.log(newDate.getDay());
`${newDate.getDay}`;

 newDate.toLocaleString(`default`, {
    weekday : "long"
 })