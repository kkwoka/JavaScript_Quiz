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
  firstQuestion();
});

var mainEl = document.querySelector("#main");
var i = 0;
var k = 0;
var question = questions[i];
var title = questions[i].title;
var choices = questions[i].choices;
var rightWrong = document.querySelector("#commentEl");
var timerInterval;

var firstQuestion = function() {
    mainEl.innerHTML = "";
    var h1 = document.createElement("h1");
    var ul = document.createElement("ul");
    rightWrong.innerHTML = "We'll let you know how you're doing along the way!";
    h1.textContent = title;
    var rightAnswer = question.answer;

    for (k = 0; k < choices.length; k++) {
        var li = document.createElement("li");
        li.setAttribute("data-answer", question.answer);
        currentLI = choices[k];
        li.innerHTML = currentLI;
        ul.append(li);
        li.onclick = nextQuestion0;
    }
    h1.append(ul);
    mainEl.append(h1);
}

var renderQuestions = function() {
    mainEl.innerHTML = "";
    i++;
    var question = questions[i];
    var title = questions[i].title;
    var choices = questions[i].choices;
    var h1 = document.createElement("h1");
    var ul = document.createElement("ul");
    // rightWrong.innerHTML = "We'll let you know how you're doing along the way!";
    h1.textContent = title;
    var rightAnswer = question.answer;

    for (k = 0; k < choices.length; k++) {
        var li = document.createElement("li");
        li.setAttribute("data-answer", rightAnswer);
        currentLI = choices[k];
        li.innerHTML = currentLI;
        ul.append(li);
        li.onclick = nextQuestion0;
    }
    h1.append(ul);
    mainEl.append(h1);
}

function nextQuestion0() {
    var rightAnswer = this.getAttribute("data-answer")
    var choiceLi = this.textContent
    if (rightAnswer === choiceLi && rightAnswer != "display") {
        rightWrong.innerHTML = "Yay! That is the correct answer!";
        mainEl.innerHTML = "";
        renderQuestions();
    } else if (rightAnswer === "display" && choiceLi === "display") {
        enterScore();
        timeEl = secondsLeft;
        StopTime();
    } else {
        secondsLeft = (secondsLeft-15);
        rightWrong.innerHTML = "Sorry, that is the wrong answer. 15 seconds will be subtracted from your remaining time!";        
    }
};

function setTime() {
    timeEl.textContent = "";
    secondsLeft = 75;
     timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = " " + secondsLeft;
  
      if(secondsLeft <= 0) {
        timeEl.textContent = "0";
        clearInterval(timerInterval);
        rightWrong.innerHTML = "";
        alert("Time's up!");
        mainEl.innerHTML = "Thanks for playing! Refresh the page to try again.";
        mainEl.setAttribute("id", "loserScreen")
      }
    }, 1000);
  }
  
function StopTime() {
    clearInterval(timerInterval);
}

var highscoreButton1 = document.getElementById("highscores");
highscoreButton1.addEventListener("click", function() {
    rightWrong.innerHTML = "Must finish quiz before you may see the highscores!"
})

function enterScore() {
    mainEl.innerHTML = "";
    rightWrong.innerHTML = "";

    var highscoreButton = document.querySelector("#highscores");
    var userInputInitials;

    var highscoreDiv = document.createElement("div");
    highscoreDiv.setAttribute("class", "highScoreCenter");
    
    var highscoreHeader = document.createElement("h1");
    highscoreHeader.setAttribute("class", "highscoresCenter");
    highscoreHeader.innerHTML = "Thanks for taking the quiz!";
    
    var finalScoreTag = document.createElement("h2");
    finalScoreTag.setAttribute("class", "highscoresCenter");
    finalScoreTag.innerHTML = "Your Final Score Is: " + secondsLeft;
    
    var finalP = document.createElement("p");
    finalP.setAttribute("class", "highscoresCenter");
    finalP.innerHTML = "To secure your fame, enter your initials below, then click the \"Submit\" button.";

    var initialBox = document.createElement("input");
    initialBox.setAttribute("class", "highscoreButtons");
    initialBox.setAttribute("placeholder", "Enter Initials");

    var sumbitButton = document.createElement("button");
    sumbitButton.setAttribute("class", "highscoreButtons");
    sumbitButton.innerHTML = "Submit";

    highscoreDiv.append(highscoreHeader);
    highscoreDiv.append(finalScoreTag);
    highscoreDiv.append(finalP);
    highscoreDiv.append(initialBox);
    highscoreDiv.append(sumbitButton);
    mainEl.append(highscoreDiv);

    sumbitButton.addEventListener("click", function() {
        userInputInitials = document.querySelector(".highscoreButtons").value;
  
        if (userInputInitials === "") {
            rightWrong.innerHTML = "We can't register your score if you don't give initials!";
        } else {
            rightWrong.innerHTML = "Submitted highscore successfully! Click \"View Highscores\".";
            localStorage.setItem("userInputInitials", userInputInitials);
            localStorage.setItem("timeScore", secondsLeft);
        }
    })

    highscoreButton.addEventListener("click", function() {
        userInputInitials = document.querySelector(".highscoreButtons").value;
        if (userInputInitials === "") {
            rightWrong.innerHTML = "We can't register your score if you don't give initials!";
        } else {
            mainEl.innerHTML = "";
            rightWrong.innerHTML = "";

            var highscoreDiv = document.createElement("div");
            highscoreDiv.setAttribute("class", "highScoreCenter");
            
            var highscoreHeader = document.createElement("h1");
            highscoreHeader.setAttribute("class", "highscoresCenter");
            highscoreHeader.innerHTML = "Did you make the Highscore list?";
            
            var finalScoreTag = document.createElement("h2");
            finalScoreTag.setAttribute("class", "highscoresCenter");
            finalScoreTag.innerHTML = "Highscore Hall of Fame";
            
            var highscoreList = document.createElement("li");
            highscoreList.setAttribute("id", "highscoreList");
            highscoreList.innerHTML = userInputInitials + " , " + secondsLeft;

            var startOverButton = document.createElement("a");
            startOverButton.setAttribute("id", "startOverButton");
            startOverButton.setAttribute("href", "index.html");
            startOverButton.textContent = "Start Over";

            highscoreDiv.append(highscoreHeader);
            highscoreDiv.append(finalScoreTag);
            highscoreDiv.append(highscoreList);
            highscoreDiv.append(startOverButton);
            mainEl.append(highscoreDiv);
        }
        })
}

function displayMessage(type, message) {
    rightWrong.textContent = message;
    rightWrong.setAttribute("class", type);
}