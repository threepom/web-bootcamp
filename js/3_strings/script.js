'use strict';

// let inputText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel quam.";
let inputText = "Lorem";
let totalCharsNumber = 10;
let inputTextLength = inputText.length;
console.log(`You have written ${inputTextLength} characters. You have ${totalCharsNumber - inputTextLength} characters.`);

// Slice
inputText = inputText.slice(0, totalCharsNumber);
console.log(`You have written ${inputText.length} characters. You have ${totalCharsNumber - inputText.length} characters.`);

let name = "jAcK";
name = name.toLowerCase();
name = name.slice(0, 1).toUpperCase() + name.slice(1, name.length);
console.log(name)
