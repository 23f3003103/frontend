// // Function Defination
// function myName(){
//     console.log('Ankush');
// }
// // Function Call
// myName();


// function addTwoNum(a,b) {
//     console.log(`Sum of two number: ${a+b}`);
// }

// addTwoNum(5,10);

// function multiplication(a,b){
//     let res = (a * b);
//     return res;
// }

// let multi = multiplication(5,4)
// console.log(multi)


// // Arrow Function

// let sum = (a,b) => {return a+b};

//// Practice Question 1
// function vowelsCount(str) {
//     let count = 0;
//     const vowels = "AEIOUaeiou";
//     for (const char of str) {
//         if (vowels.includes(char)) {
//             count += 1;
//         }
//     }
//     console.log(count);
// }

// vowelsCount("Ankush");

// --------Array Adavance Method-----
// For Each 
// let arr = [1, 2, 3, 4, 5, 6];

// arr.forEach((val) => {
//     console.log(val);
// })

// Question 2

// let nums = [2, 3, 4, 5, 6, 8];
// // 1. Method
// nums.forEach((num) => {
//     console.log(num**2);
// });

// // 2. method
// let numSquare = (num) => {
//     return (num**2);
// };

// nums.forEach(numSquare);

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