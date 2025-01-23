'use strict';

let guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
console.log(guestList);
console.log(guestList.length);
console.log(guestList[0]);
console.log(guestList.includes("Pam"));

let guest = "Jacko";

if (guestList.includes(guest)) {
    console.log(`Welcome ${guest}!`);
} else {
    console.log(`${guest} you are not in the guest list...`);
}

let output = [];
output.push(1);
console.log(output);
output.push(2);
output.push(3);
console.log(output);

let fizzBuzzArray = [];
let count = 1;

function fizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0) {
        fizzBuzzArray.push('FizzBuzz');
    } else if (count % 3 === 0) {
        fizzBuzzArray.push('Fizz');
    } else if (count % 5 === 0) {
        fizzBuzzArray.push('Buzz');
    } else {
        fizzBuzzArray.push(count);
    }
    count++;
}

fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();

console.log(fizzBuzzArray);

let employees = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
    return names[Math.floor(Math.random() * names.length)] + " is going to buy lunch today!";
}

console.log(whosPaying(employees));