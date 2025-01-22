'use strict';

function bmiCalculator (weight, height) {
    let bmi = getBMI(weight, height);
    let interpretation = "";
    if (bmi < 18.5) {
        interpretation = `Your BMI is ${bmi}, so you are underweight.`;
    } else if (bmi > 18.5 && bmi <= 24.9) {
        interpretation = `Your BMI is ${bmi}, so you have a normal weight.`;
    } else {
        interpretation = `Your BMI is ${bmi}, so you are overweight.`;
    }
    return interpretation;
}

function getBMI(weight, height) {
    return (weight / Math.pow(height, 2)).toFixed(1);
}

console.log(bmiCalculator(85, 1.86));