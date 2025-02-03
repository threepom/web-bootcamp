'use strict';

// document.querySelectorAll('.drum').forEach(button => {
//     button.addEventListener('click', () => {
//         console.log(button);
//     });
// });

let numberOfButtons = document.querySelectorAll('.drum').length;
for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
       makeSound(this.innerHTML);
       buttonAnimation(this.innerHTML);
    });
}

document.addEventListener('keydown', function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    let soundName;
    switch (key) {
        case 'w':
            soundName = 'crash';
            break;
        case 'a':
            soundName = 'kick-bass';
            break;
        case 's':
            soundName = 'snare';
            break;
        case 'd':
            soundName = 'tom-1';
            break;
        case 'j':
            soundName = 'tom-2';
            break;
        case 'k':
            soundName = 'tom-3';
            break;
        case 'l':
            soundName = 'tom-4';
            break;
        default:
            console.log(key);
    }
    let audio = new Audio(`./sounds/${soundName}.mp3`);
    audio.play();
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector(`.${currentKey}`);
    activeButton.classList.add('pressed');
    setTimeout(() => {activeButton.classList.remove('pressed')}, 100);
}


// let audio = new Audio('./sounds/tom-1.mp3');
// audio.play()
//     .then(() => {
//         console.log("Audio is playing successfully");
//     })
//     .catch(error => {
//         console.error("Error playing audio:", error);
//     });