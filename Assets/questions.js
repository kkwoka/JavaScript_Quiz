var questions = [
    { 
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
    },

    {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "square brackets", "parentheses"],
    answer: "parentheses"
    },

    {
    title: "Which of the following is NOT a data type?",
    choices: ["number", "string", "boolean", "NaN"],
    answer: "NaN"
    },

    {
    title: "Which of the following is NOT a loop type?",
    choices: ["circuit", "while", "for", "do-while"],
    answer: "circuit"
    },
    
    {
    title: "What of the following is NOT a pop-up?",
    choices: ["alert", "display", "confirm", "prompt"],
    answer: "display"
    },
];

var mainEl = document.querySelector("#main");
var i = 0;
var question = questions[i];
var title = questions[i].title;
var choices = questions[i].choices;
var currentQuestion = 0;
var currentAnswer = 0;
var rightWrong = document.querySelector("#commentEl");
var timerInterval;

function setTime() {
    timeEl.textContent = "";
    secondsLeft = 75;
     timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = " " + secondsLeft;
  
      if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        timeEl.textContent = "0";
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
// ------------------------------------------------------------------------------------------------------------------------------

var renderQuestions0 = function() {
    i++;
    mainEl.innerHTML = "";
    rightWrong.innerHTML = "We'll let you know how you're doing along the way!";

    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    h1.textContent = title;
    var ul = document.createElement("ul");

    for (currentQuestion = 0; currentQuestion < choices.length; currentQuestion++) {
        var li = document.createElement("li");
        li.innerHTML = choices[currentQuestion];
        li.setAttribute("data-answer", question.answer);
        ul.append(li);
        li.onclick = nextQuestion0;
    };
    div.append(h1);
    div.append(ul);
    mainEl.append(div);
};

function nextQuestion0() {
    var rightAnswer = this.getAttribute("data-answer")
    var choiceLi = this.textContent
    if (rightAnswer === choiceLi) {
        rightWrong.innerHTML = "Yay! That is the correct answer!";
        mainEl.innerHTML = "";
        renderQuestions1();
    } else {
        secondsLeft = (secondsLeft-15);
        rightWrong.innerHTML = "Sorry, that is the wrong answer. 15 seconds will be subtracted from your remaining time!";        
    }
};

// ------------------------------------------------------------------------------------------------------------------------------

var renderQuestions1 = function() {
    mainEl.innerHTML = "";
    currentQuestion = 1;
    var choices = questions[i].choices;
    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    h1.textContent = questions[currentQuestion].title;
    var ul = document.createElement("ul");

    for (i = 0; i < 4; i++) {
        var li = document.createElement("li");
        li.innerHTML = choices[i];
        li.setAttribute("data-answer", questions.answer);
        ul.append(li);
        li.onclick = nextQuestion1;
    };
    div.append(h1);
    div.append(ul);
    mainEl.append(div);
};

function nextQuestion1() {
    var rightAnswer = "parentheses"
    var choiceLi = this.textContent
    if (rightAnswer === choiceLi) {
        rightWrong.innerHTML = "Wowza! You got it!";
        mainEl.innerHTML = "";
        renderQuestions2();
    } else {
        secondsLeft = (secondsLeft-15);
        rightWrong.innerHTML = "Try again, you'll get it next time! But 15 seconds will be subtracted from your remaining time!";        
    }
};

// ------------------------------------------------------------------------------------------------------------------------------

var renderQuestions2 = function() {
    mainEl.innerHTML = "";
    currentQuestion = 2;
    var choices = questions[2].choices;
    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    h1.textContent = questions[currentQuestion].title;
    var ul = document.createElement("ul");

    for (i = 0; i < 4; i++) {
        var li = document.createElement("li");
        li.innerHTML = choices[i];
        ul.append(li);
        li.onclick = nextQuestion2;
    };
    div.append(h1);
    div.append(ul);
    mainEl.append(div);
};

function nextQuestion2() {
    var rightAnswer = "NaN"
    var choiceLi = this.textContent
    if (rightAnswer === choiceLi) {
        mainEl.innerHTML = "";
        renderQuestions3();
    } else {
        secondsLeft = (secondsLeft-15);
        rightWrong.innerHTML = "Unfortuantely, that is not actually correct. 15 seconds will be subtracted from your remaining time!";        
    }
};

// ------------------------------------------------------------------------------------------------------------------------------

var renderQuestions3 = function() {
    mainEl.innerHTML = "";
    currentQuestion = 3;
    var choices = questions[3].choices;
    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    h1.textContent = questions[currentQuestion].title;
    var ul = document.createElement("ul");

    for (i = 0; i < 4; i++) {
        var li = document.createElement("li");
        li.innerHTML = choices[i];
        ul.append(li);
        li.onclick = nextQuestion3;
    };
    div.append(h1);
    div.append(ul);
    mainEl.append(div);
};

function nextQuestion3() {
    var rightAnswer = "circuit"
    var choiceLi = this.textContent
    if (rightAnswer === choiceLi) {
        rightWrong.innerHTML = "Correct! You're almost there!";
        mainEl.innerHTML = "";
        renderQuestions4();
    } else {
        secondsLeft = (secondsLeft-15);
        rightWrong.innerHTML = "Not exactly... but don't give up. 15 seconds will be subtracted from your remaining time!";        
    }
};

// ------------------------------------------------------------------------------------------------------------------------------

var renderQuestions4 = function() {
    mainEl.innerHTML = "";
    currentQuestion = 4;
    var choices = questions[4].choices;
    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    h1.textContent = questions[currentQuestion].title;
    var ul = document.createElement("ul");

    for (i = 0; i < 4; i++) {
        var li = document.createElement("li");
        li.innerHTML = choices[i];
        ul.append(li);
        li.onclick = nextQuestion4;
    };
    div.append(h1);
    div.append(ul);
    mainEl.append(div);
};

function nextQuestion4() {
    var rightAnswer = "display"
    var choiceLi = this.textContent
    if (rightAnswer === choiceLi) {
        rightWrong.innerHTML = "Yay! That is the correct answer!";
        enterScore();
        timeEl = secondsLeft;
        StopTime();
    } else {
        secondsLeft = (secondsLeft-15);
        rightWrong.innerHTML = "Sorry, that is the wrong answer. 15 seconds will be subtracted from your remaining time!";      
    }
};
// ------------------------------------------------------------------------------------------------------------------------------

function enterScore() {
    mainEl.innerHTML = "";
    rightWrong.innerHTML = "";

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
    initialBox.value = "Enter Initials";

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
        var userInputInitials = document.querySelector(".highscoreButtons").value;
  
        if (userInputInitials === "") {
            rightWrong.innerHTML = "";
          displayMessage("error", "We can't register your score if you don't give initials!");
        } else {
            rightWrong.innerHTML = "";
          localStorage.setItem("userInputInitials", userInputInitials);
        }

        highscoreHeader.innerHTML = "Highscores:";
        finalScoreTag.innerHTML = "";
        finalP.innerHTML = "";
        highscoreDiv.innerHTML = "";
        rightWrong.innerHTML = "";
        
        
        var startOverButton = document.createElement("a");
        startOverButton.setAttribute("id", "startOverButton");
        startOverButton.setAttribute("href", "index.html");

        startOverButton.textContent = "Start Over";

        var highscoreList = document.createElement("li");
        highscoreList.setAttribute("id", "highscoreList");
        highscoreList.innerHTML = userInputInitials + " , " + secondsLeft;

        highscoreDiv.append(highscoreHeader);
        highscoreDiv.append(highscoreList); 
        highscoreDiv.append(startOverButton);
        mainEl.append(highscoreDiv);  

        // var hslist = document.querySelector(".hsList");
        // hslist.innerHTML = userInputInitials + " , " + secondsLeft;
    })
}

function displayMessage(type, message) {
    rightWrong.textContent = message;
    rightWrong.setAttribute("class", type);
}

// var hslist = document.querySelector(".hsList");
// hslist.innerHTML = userInputInitials + " , " + secondsLeft



// function clickAnswers() {
//     currentAnswer = choices[currentAnswer];
//         console.log(currentAnswer);
//         if (choices[currentAnswer] === "alerts" || choices[currentAnswer] === "parentheses" || choices[currentAnswer] === "NaN" || choices[currentAnswer] === "circuit" || choices[currentAnswer] === "display") {
//             console.log("Yay, correct answer!");
//         } else {
//             secondsLeft = (secondsLeft-10);
//             console.log("Sorry, wrong answer!");
//         };       
//     };






// var mainEl = document.querySelector("#main");
// var currentQuestion = 0;
// var renderQuestions = function() {
//     mainEl.innerHTML = "";
//     questions.forEach(function(question, indexQuestion) {
//         var div = document.createElement("div");
//         if(currentQuestion != indexQuestion) {
//             div.setAttribute("Class", "hide");
//         }
//         var hOne = document.createElement("h1");
//         hOne.innerHTML = question.title;
//         var ul = document.createElement("ul");
//         question.choices.forEach(function(answerChoices) {
//             var li = document.createElement("li");
//             li.textContent = answerChoices;
//             li.setAttribute("id", "choice" + indexQuestion);
//             ul.append(li);
//         });
//         console.log(div);
//         div.append(hOne);
//         div.append(ul);
//         mainEl.append(div);

//     });

//     var choice0 = document.querySelector("#choice0");
//     choice0.addEventListener("click", function() {
//         if (choice0 === "alerts" || choice0 === "parentheses" || choice0 === "NaN" || choice0 === "circuit" || choice0 === "display") {
//             console.log("Yay, correct answer!");
//         } else {
//             secondsLeft = (secondsLeft-10);
//             console.log("Sorry, wrong answer!");
//         };   
//     });
