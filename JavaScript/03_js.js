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

// else-if 

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