'use strict';

function getMilk() {
    console.log("Leave house");
    console.log("Go to shop");
    console.log("Take milk");
    console.log("Pay for milk");
    console.log("Bring milk to the house");
}

function getMilkByRobot(bottles) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("Buy " + bottles + " bottles of milk");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
}

let buyMilk = function (moneyAmount, bottlePrice) {
    let bottlesNumber = Math.floor(moneyAmount / bottlePrice);
    let change = getChange(moneyAmount, bottlePrice);
    console.log(`We can buy ${bottlesNumber} bottles. The change is ${change}`);
}

function lifeInWeeks(age) {
    let totalAge = 90;
    let leftTime = totalAge - age;
    console.log(`You have ${leftTime * 365} days, ${leftTime * 52} weeks, and ${leftTime * 12} months left.`)
}

function getChange(moneyAmount, bottlePrice) {
    return moneyAmount % bottlePrice;
}

function bmiCalculator(weight, height) {
    return Math.round(weight / Math.pow(height, 2));
}

let bmi = bmiCalculator(65, 1.8);
console.log(`BMI is ${bmi}`);

getMilk();
getMilkByRobot(3);
buyMilk(10, 1.5);
lifeInWeeks(56);