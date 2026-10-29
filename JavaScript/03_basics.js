// Conditional Statements

let age = 18;

if (age >= 18) {
    console.log("You can vote")
}

if (age < 18) {
    console.log("You can not vote")
}

// if-else


let mode = "Dark";
let color;

if (mode === "Dark") {
    color === "White"
} else {
    color === "Dark"
}

// if-else-if 

let num = 18;

if (num % 2 === 0) {
    console.log("Num is devisible by 2")
} else if (num % 3 === 0) {
    console.log("Num is divisible by 3")
} else {
    console.log("Num is not  devisible by 2 or 3")
}

// Ternary Operators
// a ? b : c ---> a is condition, b is value(if condition is true), c is also value(if condition false)

let age = 22;

let result = age > 25 ? ("You can vote") : ("You cann't vote")
console.log(result)




// ----------------Date and time-------------------


// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})



//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3