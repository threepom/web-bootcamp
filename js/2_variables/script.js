'use strict';

let name = prompt('What is your name?');
alert(`The name is ${name}`);

function test() {
    let a = "3";
    let b = "8";

    /***********Do not change the code above 👆*******/
    let temp = a;
    a = b;
    b = temp;
    /***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}

test();