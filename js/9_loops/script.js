'use strict';

let fizzBuzzArray = [];
let count = 1;

function fizzBuzz() {
    while (count <= 100) {
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
}

fizzBuzz();
console.log(`Array: [ ${fizzBuzzArray.join(", ")} ]`);

let bottleCounter = 99;
function beer() {
    while (bottleCounter >= 1) {
        console.log(`${bottleCounter} bottles of beer on the wall, ${bottleCounter} bottles of beer.`);
        bottleCounter--;
        if (bottleCounter === 0) {
            console.log(`Take one down and pass it around, no more bottles of beer on the wall.`);
        } else {
            console.log(`Take one down and pass it around, ${bottleCounter} bottles of beer on the wall.`);
        }
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer.\n" +
        "Go to the store and buy some more, 99 bottles of beer on the wall.")
}

beer();

// do...while
let number = 10;
do {
    console.log("This will run at least once!");
} while (number < 5);

// for loop
for (let i = 0; i < 10; i++) {
    console.log(`i: ${i}`);
}

function fibonacciGenerator(number) {
    let fibonacciArray = [];
    if (number === 1) {
        fibonacciArray.push(0);
    } else {
        fibonacciArray = [0, 1];
        if (number > 2) {
            for (let i = 2; i < number; i++) {
                let fibonacciSum = fibonacciArray[i - 2] + fibonacciArray[i - 1];
                fibonacciArray.push(fibonacciSum);
            }
        }
    }
    return fibonacciArray;
}

console.log(fibonacciGenerator(3));