'use strict';

let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let rightPointFlag = document.querySelector('#right-point-flag');
let leftPointFlag = document.querySelector('#left-point-flag');
let result = document.querySelector('#result');
let refresh = document.querySelector('h1');
let dices = [];
for (let i = 1; i < 7; i++) {
    dices.push(`./images/dice${i}.png`);
}

let playerOneScore = 0;
let playerTwoScore = 0;
let diceCounter = 1;

function setPlayersScore(score) {
    if (diceCounter % 2 === 0) {
        playerTwoScore = score;
    } else {
        playerOneScore = score;
    }
    diceCounter++;
}

function getRandomDice() {
    let diceIndex = Math.floor(Math.random() * dices.length);
    setPlayersScore(diceIndex + 1);
    return dices[diceIndex];
}

function makeResultVisible() {
    result.classList.toggle('invisible');
}

function printResult(playerNumber) {
    result.innerHTML = `Player ${playerNumber} Wins!`;
    makeResultVisible();
}

img1.setAttribute('src', getRandomDice());
img2.setAttribute('src', getRandomDice());

if (playerOneScore > playerTwoScore) {
    rightPointFlag.classList.toggle('invisible');
    printResult(1);
} else if (playerOneScore < playerTwoScore) {
    leftPointFlag.classList.toggle('invisible');
    printResult(2);
} else {
    makeResultVisible();
}

refresh.addEventListener('click', () => {
   location.reload();
});
