'use strict';

document.querySelector("h1").innerHTML = "Good Bye";

console.log(document.firstElementChild);

let heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.style.color = 'red';
document.querySelector("input").click();

let lastLi = document.querySelector("ul").lastElementChild;
lastLi.innerHTML = "This is last li!";