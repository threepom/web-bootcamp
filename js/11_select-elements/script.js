'use strict';

let li = document.getElementsByTagName('li');
li[0].innerHTML = "Hello from first li!";
li[1].innerHTML = `<b>
                     <i>Hello from the second li</i>
                   </b>`;
li[1].style.color = 'green';

let btn = document.getElementsByClassName('btn');
btn[0].style.backgroundColor = 'blue';
btn[0].style.color = 'white';

let title = document.getElementById('title');
title.style.color = 'red';
title.addEventListener('click', () => {
    title.classList.toggle('huge');
});

let square = document.querySelector('.square');
square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'red';
});
square.addEventListener('mouseout', () => {
    square.style.backgroundColor = 'green';
});

let secondSquare = document.querySelector('#second-square');
secondSquare.addEventListener('mouseover', () => {
    secondSquare.style.backgroundColor = 'blue';
    secondSquare.style.borderRadius = '50%';
    secondSquare.style.transition = 'all 3s ease-in-out';
});

secondSquare.addEventListener('mouseout', () => {
    secondSquare.style.backgroundColor = 'green';
    secondSquare.style.borderRadius = '0';
})

let liLink = document.querySelector('li a');
liLink.style.color = 'brown';

let colors = ['red', 'green', 'blue', 'brown', 'orange', 'purple', 'maroon'];

function getColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

let names = document.querySelectorAll('.names');
names.forEach(name => {
    name.style.color = getColor();
    name.addEventListener('mouseover', () => {
        name.style.opacity = '0';
        name.style.transition = 'all 3s ease-in-out';
    });
    name.addEventListener('mouseout', () => {
        name.style.opacity = '1';
    });
});

let openModalButton = document.querySelector('#open-modal');
let closeModalButton = document.querySelector('#close-modal');
let modal = document.querySelector('#modal');
openModalButton.addEventListener('click', () => {
    openModalButton.classList.add('hidden');
    openModalButton.classList.remove('visible');
    modal.classList.add('visible');
    modal.classList.remove('hidden');
});

closeModalButton.addEventListener('click', () => {
    openModalButton.classList.add('visible');
    openModalButton.classList.remove('hidden');
    modal.classList.add('hidden');
    modal.classList.remove('visible');
});

let toc = document.querySelector('#first-toc');
toc.setAttribute('class', 'some-class');

