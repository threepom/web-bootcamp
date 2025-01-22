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

let lovePercent = calculateLovePercent();

if (lovePercent > 50) {
    alert(`${she} and ${he} love percent is: ${lovePercent}%. You love each other like Kanye loves Kanye!`);
}else if (lovePercent > 30 && lovePercent <= 50) {
    alert(`${she} and ${he} love percent is: ${lovePercent}%`);
} else {
    alert(`${she} and ${he} love percent is: ${lovePercent}%. You go together like oil and water!`);
}

let a = 1;
let b = "1";

if (a === b) {
    console.log("yes");
} else {
    console.log("no");
}

if (a == b) {
    console.log("yes");
} else {
    console.log("no");
}

