let myDate = new Date();
console.log(myDate); //2026-10-29T12:57:23.881Z
console.log(myDate.toString()); //Thu Oct 29 2026 12:57:23 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Thu Oct 29 2026
console.log(myDate.toJSON()); //2026-10-29T12:57:23.881Z

let myCreateDate = new Date(2026, 0, 5);
console.log(myCreateDate); //2026-01-05T00:00:00.000Z

let myCreateDate2 = new Date(2026, 0, 23, 5, 3);
console.log(myCreateDate2); //2026-01-23T05:03:00.000Z

console.log(myCreateDate.toLocaleString()); //1/5/2026, 12:00:00 AM

let myTimeStamp = Date.now(); //gives in millisec
console.log(myTimeStamp); //1793278644323
console.log(myCreateDate.getDate()); //5
console.log(Math.floor(Date.now())/1000); //1793278644.323

let newDate = new Date();
console.log(newDate); //2026-10-29T12:57:24.323Z
console.log(newDate.getMonth+1); //function getMonth() { [native code] }1
console.log(newDate.getDay()); //4
`${newDate.getDay}`;

 newDate.toLocaleString(`default`, {
    weekday : "long"
 })

 let dateDiff = myDate - myCreateDate;

 console.log(Math.floor(dateDiff/(1000*60*60*24)));
