// let marks = [97, 35, 98, 93, 78, 45]
// console.log(marks)
// // indecis
// stu1 = marks[0]
// stu2 = marks[5]


// marks[3] = 89

// // Looping over an Array

// for (let i = 0; i < marks.length; i++) {
//     console.log("marks: ", marks[i])
// }

// // for of

// for(let mark of marks) {
//     console.log(mark)
// }

// Question 1

// let scores = [85, 87, 44, 37, 76, 60]
// const totalStudent = scores.length
// let sum = 0
// for (let score of scores) {
//     sum += score 
// }
// console.log(sum)
// avg = sum/totalStudent
// console.log(avg)

// Question 2

// let prices = [250, 645, 300, 900, 50];

// let newPrices = [];
// for (let i = 0; i < prices.length; i++) {
//     let offer = prices[i] / 10;
//     newPrices[i] = prices[i] - offer;    
// }
// console.log(newPrices)

// Array Methods

// 1. Push
// let fruits = ["Mango", "Grapes", "Apple", "Banana"];
// // fruits.push("Lichi", "Govava");
// // console.log(fruits);

// // // 2. Pop
// // fruits.pop();
// // console.log(fruits);

// // // 3. Concat

// // let fruits1 = ["Orange", "Watermelon"];

// // let newFruits = fruits.concat(fruits1);
// // console.log(newFruits);

// // 4. unshift --> add at 0th index
// fruits.unshift("Govava");
// // console.log(fruits);

// // // 5. Shift --> delete from start

// // fruits.shift();
// // console.log(fruits)

// // 6. Slice --> not change in original array

// console.log(fruits.slice(1,3)) // --> ["Mango", "Grapes"]

// // 7. Splice --> to chnage in original array

// let arr = [1, 2, 3, 8, 5, 6, 7];

// arr.splice(3,1,4);
// console.log(arr);

// Question 3

let companies = ["Blomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

companies.shift(); // Delete a company from start

companies.splice(1,1,"Ola"); // Delete Uber & add Ola in its place

companies.push("Amazon"); // add amazon at end

console.log(companies);