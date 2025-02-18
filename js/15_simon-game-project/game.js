'use strict';

const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

    $("h1").text(`Level ${level}`);
    level++;
}

function playSound(name) {
    let audio = new Audio(`./sounds/${name}.mp3`);
    audio.play();
}

function animatePress(currentColour) {
    let currentButton = $(`#${currentColour}`);
    currentButton.addClass("pressed");
    setTimeout(() => {
        currentButton.removeClass("pressed");
    }, 100);
}

function reset() {
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
}

function checkAnswer(currentLevel) {
    let elementIndex = userClickedPattern.length - 1;
    if (userClickedPattern[elementIndex] === gamePattern[elementIndex]) {
        if (userClickedPattern.length === currentLevel) {
            console.log(`Success`);
            setTimeout(nextSequence, 1000);
        }

    } else {
        playSound(`wrong`);
        $("body").addClass(`game-over`);
        setTimeout(() => {
            $("body").removeClass("game-over");
            reset();
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");

        $(document).on('keydown', function handler() {
            nextSequence();
            $(document).off('keydown', handler);
        });
        console.log(`No Success`);
    }

}


$(".btn").on("click", function (event) {
    let userChosenColour = event.target.getAttribute("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    console.log(userClickedPattern);
    checkAnswer(level);
    if (level === userClickedPattern.length) {
        console.log(`userClickedPattern is empty`);
        userClickedPattern = [];
    }
});

$(document).on('keydown', function handler() {
    nextSequence();
    $(document).off('keydown', handler);
});
