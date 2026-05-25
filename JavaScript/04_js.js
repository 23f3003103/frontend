// PRactice Question

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