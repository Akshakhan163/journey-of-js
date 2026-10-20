const name = "aksha"
const repo = "7"

console.log(name + repo + "value");
console.log(`hello my name is ${name} with repo count of ${repo}.`);

const gameName = new String('Aksha/khan/163/.com');
console.log(gameName[5])
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8, 1);
console.log(anotherString);

const newStringOne = " Aksha "
console.log(newStringOne.trim());

const url = "https://aksha.com/%20/khan";

console.log(url.replace('%20','-'));
console.log(url.includes('Khan'))
console.log(gameName.split('/'));