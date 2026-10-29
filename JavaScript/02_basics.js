// -------------Strings--------------
const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));








// Unary Operators

let x = 5;
x++; 
console.log(x); // Output: 6
x--;
console.log(x); // Output: 5

// x++ is the post-increment operator, which increments the value of x after it is used in an expression.
// ++x is the pre-increment operator, which increments the value of x before it is used in an expression.

// Assignment Operators
let a = 10;
a += 5; // Equivalent to a = a + 5
console.log(a); // Output: 15
a -= 3; // Equivalent to a = a - 3
console.log(a); // Output: 12
a *= 2; // Equivalent to a = a * 2
console.log(a); // Output: 24
a /= 4; // Equivalent to a = a / 4
console.log(a); // Output: 6
a %= 5; // Equivalent to a = a % 5
console.log(a); // Output: 1


// Comparison Operators
let a = 5;
let b = 10;
console.log(a == b); // False
console.log(a != b); // True
console.log(a > b); // False
console.log(a < b); // True
console.log(a >= b); // False
console.log(a <= b); // True

// Strickt version
let c = '5';
console.log(a === c); // false, because they are of different types

// Logical Operators

let x = true;
let y = false;

console.log(x && y); // false
console.log(x || y); // true
console.log(!x); // false



const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

