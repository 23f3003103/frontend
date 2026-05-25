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
