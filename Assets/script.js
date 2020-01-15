var timeEl = document.querySelector("#count");
var secondsLeft = 75;
var quizButton = document.querySelector("#startbutton");
var mode = "show";
var container = document.querySelector(".container");
// var timerInterval;

document.getElementById("startbutton").addEventListener("click", setTime);

// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = " " + secondsLeft;

//     if(secondsLeft <= 0) {
//       clearInterval(timerInterval);
//       timeEl.textContent = "0";
//       rightWrong.innerHTML = "";
//       alert("Time's up!");
//       mainEl.innerHTML = "Thanks for playing! Refresh the page to try again.";
//       mainEl.setAttribute("id", "loserScreen")
//     }

//   }, 1000);
// }

// function StopTime() {
//   clearInterval(timerInterval);
// }

quizButton.addEventListener("click", function() {
  if (mode === "show") {
    mode = "hide";
    container.setAttribute("class", "hide");
  }
  else {
    mode = "show";
    container.setAttribute("class", "show");
  }
  renderQuestions0();
});





