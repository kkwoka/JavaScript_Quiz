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

for (var count = 0; count < questions.length; count++) {
    var ul = document.createElement("ul");
    var title = questions[count].title;
    var main = document.querySelector("#main")
    var choices = questions[count].choices;
        for (var countB = 0; countB < choices.length; countB++) {
            var li = document.createElement("li");
            ul.append(li);
        }
    main.append(ul);
}