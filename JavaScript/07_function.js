// Function Defination
function myName(){
    console.log('Ankush');
}
// Function Call
myName();


function addTwoNum(a,b) {
    console.log(`Sum of two number: ${a+b}`);
}

addTwoNum(5,10);

function multiplication(a,b){
    let res = (a * b);
    return res;
}

let multi = multiplication(5,4)
console.log(multi)


// Arrow Function

let sum = (a,b) => {return a+b};

// Practice Question 1
function vowelsCount(str) {
    let count = 0;
    const vowels = "AEIOUaeiou";
    for (const char of str) {
        if (vowels.includes(char)) {
            count += 1;
        }
    }
    console.log(count);
}

vowelsCount("Ankush");

// --------Array Adavance Method-----
// For Each 
let arr = [1, 2, 3, 4, 5, 6];

arr.forEach((val) => {
    console.log(val);
})

// Question 2

let nums = [2, 3, 4, 5, 6, 8];
// 1. Method
nums.forEach((num) => {
    console.log(num**2);
});

// 2. method
let numSquare = (num) => {
    return (num**2);
};

nums.forEach(numSquare);

// 1. Map ---> return new array

let nums = [2, 3, 4, 5, 6, 8];
// nums.map((val) => {
//     console.log(val*10);
// });

// let newArr = nums.map((val) => {
//     return (val*10);
// });

// console.log(newArr);

// 3. Filter ---> return a copy on array 

let evenArr = nums.filter((val) => {
    return (val > 3);
})

console.log(evenArr);

// 4. Reduce ---> return a single output

const res = 0;
const sum = nums.reduce((res, curr) => res + curr);

console.log(sum);






function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("U");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ankush"))
// console.log(loginUserMessage("Ankush"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Ankush",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));






// -----------------Scope---------------

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}







// --------------Arrow Function-------------

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()




const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()