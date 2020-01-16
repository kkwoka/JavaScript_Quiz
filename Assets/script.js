var timeEl = document.querySelector("#count");
var secondsLeft = 75;
var quizButton = document.querySelector("#startbutton");
var mode = "show";
var container = document.querySelector(".container");

document.getElementById("startbutton").addEventListener("click", setTime);

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





