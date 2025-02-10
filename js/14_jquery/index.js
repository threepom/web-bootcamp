'use strict';

// $(document).ready(function () {
//     $("h1").css("color", "red");
// });

// $("h1").css("color", "red");
$("h1").addClass("big-title margin-50");
// $("h1").removeClass("big-title");
console.log($("h1").css("color"));
console.log($("h1").hasClass("margin-50"));

$("h1").text("WoW!");

let buttons = $("button");
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "yellow";
}

$("button").text("Push me!");

$("#square").html('<span class="white-text">Hello from span!</span>');

$("a").attr("href", "https://jquery.com/download/");

$("#clicker").click(function () {
    $("#clicker").css("background-color", "blue");
});

buttons.click(function () {
   alert(`I was clicked!`);
});

$("input").keydown(function (event) {
    console.log(event.key);
});

$(document).keydown(function (event) {
    $("h1").text(event.key);
});

$("#mouse").on("mouseover", function (event) {
    $("#mouse").addClass("circle");
});
$("#mouse").on("mouseleave", function (event) {
    $("#mouse").removeClass("circle");
});

$("h1").before("<button>New</button>");
$("h1").after("<button>New After</button>");
$("h1").prepend("<button>New Prepend</button>");
$("h1").append("<button>New Append</button>");
// $("button").remove();   // removes all the buttons

$("#disappear").on("click", function (event) {
    // $("h1").hide();
    // $("h1").show();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeIn();
    // $("h1").fadeToggle();
    // $("h1").slideUp();
    // $("h1").slideDown();
    // $("h1").slideToggle();
    $("h1")
        .slideUp()
        .slideDown()
        .animate({opacity: 0.5}, 3000);
});