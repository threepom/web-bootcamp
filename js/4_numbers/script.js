'use strict';

let number = 11;
let parity;

if (number % 2 != 0) {
    parity = "odd";
} else {
    parity = "even";
}

console.log(`Number: ${number} is ${parity}`);

let dogAge = 10;
let humanAge = (dogAge - 2) * 4 + 21;
console.log(`Dog age: ${dogAge}. Human age: ${humanAge}`);

let x = 3;
// let y = x++;
let y = ++x;
y += 1;
console.log(y)
console.log(x)