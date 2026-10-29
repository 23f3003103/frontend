// Practice Question

// let num = prompt("Enter a number: ")

// if (num % 5 === 0) {
//     console.log(`The  Number ${num} you entered is Multiple of 5`)
// } else {
//     console.log(`The Number ${num} you entered is not a multiple of 5`)
// }


let score = prompt("Enter Marks: ")

if (score >= 90 && score <= 100) {
    console.log("Your Grade is S")
} else if (score >= 80 && score < 90) {
    console.log("Your Grade is A")
} else if (score >= 70 && score < 80) {
    console.log("Your Grade is B")
} else if (score >= 60 && score < 70) {
    console.log("Your Grade is C")
} else if (score >= 50 && score < 60) {
    console.log("Your Grade is E")
} else {
    console.log("You are fail, Your Grade is F")
}





// ------------------Switch--------------

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}








// ---------------Truthy--------------

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")