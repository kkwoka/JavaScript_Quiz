var timeEl = document.querySelector("#count");
var secondsLeft = 75;
var quizButton = document.querySelector("#startbutton");
var highscoreButton1 = document.getElementById("highscores");
var mainEl = document.querySelector("#main");
var i = 0;
var k = 0;
var question = questions[i];
var title = questions[i].title;
var choices = questions[i].choices;
var commentEl = document.querySelector("#commentEl");
var timerInterval;

document.getElementById("startbutton").addEventListener("click", setTime);

function setTime() {
    timeEl.textContent = "";
    secondsLeft = 75;
    timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = " " + secondsLeft;
  
      if(secondsLeft <= 0) {
        timeEl.textContent = " 0";
        clearInterval(timerInterval);
        commentEl.innerHTML = "";
        alert("Time's up!");
        mainEl.innerHTML = "Thanks for playing! Refresh the page to try again.";
        mainEl.setAttribute("id", "loserScreen")
      }
    }, 1000);
}

function StopTime() {
    clearInterval(timerInterval);
}

quizButton.addEventListener("click", function() {
    mainEl.innerHTML = "";
    var h1 = document.createElement("h1");
    var ul = document.createElement("ul");
    commentEl.innerHTML = "We'll let you know how you're doing along the way!";
    h1.textContent = title;

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
})

var renderQuestions = function() {
    i++;
    question = questions[i];
    title = questions[i].title;
    choices = questions[i].choices;
    var rightAnswer = question.answer;
    var h1 = document.createElement("h1");
    var ul = document.createElement("ul");
    h1.textContent = title;

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
    var lastAnswer = questions[questions.length - 1].answer
    var rightAnswer = this.getAttribute("data-answer")
    var choiceLi = this.textContent
    if (rightAnswer === choiceLi && rightAnswer != lastAnswer) {
        commentEl.innerHTML = "Yay! That is the correct answer!";
        mainEl.innerHTML = "";
        renderQuestions();
    } else if (rightAnswer === choiceLi && rightAnswer === lastAnswer) {
        enterScore();
        timeEl = secondsLeft;
        StopTime();
    } else {
        secondsLeft = (secondsLeft-15);
        commentEl.innerHTML = "Sorry, that is the wrong answer. 15 seconds will be subtracted from your remaining time!";        
    }
};

highscoreButton1.addEventListener("click", function() {
    commentEl.innerHTML = "Must finish quiz before you may see the highscores!"
})

function enterScore() {
    mainEl.innerHTML = "";
    commentEl.innerHTML = "";

    var highscoreButton = document.querySelector("#highscores");
    var userInputInitials;
    var highscoreDiv = document.createElement("div");
    var highscoreHeader = document.createElement("h1");
    var finalScoreTag = document.createElement("h2");
    var finalP = document.createElement("p");
    var initialBox = document.createElement("input");
    var sumbitButton = document.createElement("button");

    highscoreDiv.setAttribute("class", "highScoreCenter");
    highscoreHeader.setAttribute("class", "highscoresCenter");
    highscoreHeader.innerHTML = "Thanks for taking the quiz!";
    finalScoreTag.setAttribute("class", "highscoresCenter");
    finalScoreTag.innerHTML = "Your Final Score Is: " + secondsLeft;
    finalP.setAttribute("class", "highscoresCenter");
    finalP.innerHTML = "To secure your fame, enter your initials below, then click the \"Submit\" button.";
    initialBox.setAttribute("class", "highscoreButtons");
    initialBox.setAttribute("placeholder", "Enter Initials");
    sumbitButton.setAttribute("class", "highscoreButtons");
    sumbitButton.innerHTML = "Submit";

    highscoreDiv.append(highscoreHeader, finalScoreTag, finalP, initialBox, sumbitButton);
    mainEl.append(highscoreDiv);

    sumbitButton.addEventListener("click", function() {
        userInputInitials = document.querySelector(".highscoreButtons").value;
  
        if (userInputInitials === "") {
            commentEl.innerHTML = "We can't register your score if you don't give initials!";
        } else {
            commentEl.innerHTML = "Submitted highscore successfully! Click \"View Highscores\".";
            localStorage.setItem("userInputInitials", userInputInitials);
            localStorage.setItem("timeScore", secondsLeft);
        }
    })

    highscoreButton.addEventListener("click", function() {
        userInputInitials = document.querySelector(".highscoreButtons").value;

        if (userInputInitials === "") {
            commentEl.innerHTML = "We can't register your score if you don't give initials!";
        } else {
            mainEl.innerHTML = "";
            commentEl.innerHTML = "";

            var highscoreDiv = document.createElement("div");
            var highscoreHeader = document.createElement("h1");
            var finalScoreTag = document.createElement("h2");
            var highscoreList = document.createElement("li");
            var StartOverDiv = document.createElement("div");
            var startOverButton = document.createElement("a");


            highscoreDiv.setAttribute("class", "highScoreCenter");
            highscoreHeader.setAttribute("class", "highscoresCenter");
            highscoreHeader.innerHTML = "Did you make the Highscore list?";
            finalScoreTag.setAttribute("class", "highscoresCenter");
            finalScoreTag.innerHTML = "Highscore Hall of Fame";
            highscoreList.setAttribute("id", "highscoreList");
            highscoreList.innerHTML = userInputInitials + " , " + secondsLeft;
            StartOverDiv.setAttribute("class", "center");
            startOverButton.setAttribute("id", "startOverButton");
            startOverButton.setAttribute("href", "index.html");
            startOverButton.textContent = "Start Over";

            StartOverDiv.append(startOverButton);
            highscoreDiv.append(highscoreHeader, finalScoreTag, highscoreList);
            highscoreDiv.append(StartOverDiv);
            mainEl.append(highscoreDiv);
        }
    })
}

function displayMessage(type, message) {
    commentEl.textContent = message;
    commentEl.setAttribute("class", type);
}