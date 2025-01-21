'use strict';

let n = Math.random();
// n = n * 6;
n *= 6;
n = Math.floor(n) + 1;
console.log(n);

// Love Calculator
let he = prompt("Enter his name");
let she = prompt("Enter her name");

function calculateLovePercent() {
    return Math.floor(Math.random() * 100) + 1;
}

alert(`${she} and ${he} love percent is: ${calculateLovePercent()}%`);