var timeEl = document.querySelector("#count");
var secondsLeft = 75;
var quizButton = document.querySelector("#startbutton");
var mode = "show";
var container = document.querySelector(".container");

document.getElementById("startbutton").addEventListener("click", setTime);
document.getElementById("startbutton").addEventListener("click", includeJs);
// document.getElementById("startbutton").addEventListener("click", hide);

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
    mode = "show";
    container.setAttribute("class", "show");
  }
});



function includeJs() {
  var myJSON = JSON.stringify(questions);
}




//   var js = document.createElement("script");

//   js.type = "text/javascript";
//   js.src = jsFilePath;

//   document.body.appendChild(js);

//   var myJSON = JSON.stringify(questions);
// }

// includeJs("Assets/questions.js");

//   import {
//     title: "Commonly used data types DO NOT include:",
//     choices: ["strings", "booleans", "alerts", "numbers"],
//     answer: "alerts"
//     }
//     from "questions.js";
// }