var questions = [
    { 
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
    },

    {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
    },

    {
    title: "Which of the following is NOT a data type?",
    choices: ["number", "string", "boolean", "NaN"],
    answer: "NaN"
    },

    {
    title: "Which of the following is NOT a loop type?",
    choices: ["for", "while", "circuit", "do-while"],
    answer: "circuit"
    },
    
    {
    title: "What of the following is NOT a pop-up",
    choices: ["alert", "display", "confirm", "prompt"],
    answer: "display"
    },
];




var timeEl = document.querySelector("#count");
var secondsLeft = 75;
var quizButton = document.querySelector("startbutton");

document.getElementById("startbutton").addEventListener("click", setTime);

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = " " + secondsLeft;

    if(secondsLeft === 0) {
      alert("Time's up!")
    }

  }, 1000);
}

//   import {
//     title: "Commonly used data types DO NOT include:",
//     choices: ["strings", "booleans", "alerts", "numbers"],
//     answer: "alerts"
//     }
//     from "questions.js";
// }