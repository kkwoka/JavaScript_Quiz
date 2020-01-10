var timeEl = document.querySelector("#count");
var secondsLeft = 75;
var quizButton = document.querySelector("#startbutton");
var mode = "show";
var container = document.querySelector(".container");


document.getElementById("startbutton").addEventListener("click", setTime);
document.getElementById("startbutton").addEventListener("click", displayQuestions);

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = " " + secondsLeft;

    if(secondsLeft === 0) {
      alert("Time's up!")
    }

  }, 1000);
}

quizButton.addEventListener("click", function() {
  if (mode === "show") {
    mode = "hide";
    container.setAttribute("class", "hide");
  }
  else {
    mode = "hide";
    container.setAttribute("class", "show");
  }
});

function displayQuestions() {
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
  var myJSON = JSON.stringify(questions);
  document.querySelector("#questionDisplay").innerHTML = myJSON;
}