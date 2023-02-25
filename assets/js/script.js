var questionBank = [
    {   
        question: "How does a WHILE loop start?",
        options: ["while i = 1 to 10", "while (i <= 10; i++)", "while (var i = 0; i = 10; i++)", "while (i <= 10)"],
        answer: "while (i <= 10)"
    },
    {   
        question: "The external JavaScript file must contain the <script> tag.",
        options: ["True", "False", "Maybe", "I don't know"],
        answer: "False"
    },
    {   
        question: "Inside which HTML element do we put the JavaScript?", 
        options: ["<script>", "<js>", "<javascript>", "<JS>"],
        answer: "<script>"
    }
];

var sectionWelcomeEl = document.querySelector(".section-welcome");
var sectionQuestionsEl = document.querySelector(".section-questions");
var sectionInputEl = document.querySelector(".section-input");
var sectionHighscoreEl = document.querySelector(".section-highscore");
var startButtonEl = document.querySelector("#start-button");
var countdownEl = document.querySelector("#countdown");
var questionsEl = document.querySelector(".questions");
var answersEl = document.querySelector(".answers");
var optionAEl = document.querySelector("#optionA");
var optionBEl = document.querySelector("#optionB");
var optionCEl = document.querySelector("#optionC");
var optionDEl = document.querySelector("#optionD");
var feedbackEl = document.querySelector(".feedback");
var timeLeft = questionBank.length * 15;
var q = 0;
score = 0;




// Starting view
sectionWelcomeEl.style.display='inline';
sectionQuestionsEl.style.display='none';
sectionInputEl.style.display='none';
sectionHighscoreEl.style.display='none';


// Countdown
function countdown() {
    var timeInterval = setInterval(function(){
        if (timeLeft>=0) {
            countdownEl.textContent = "Time left: " + timeLeft;
            timeLeft--;
        } else clearInterval(timeInterval);
    }, 1000);
};

// Display Q&A
function displayQA() {
    // if (q < questionBank.length) {
        questionsEl.textContent = questionBank[q].question;
        optionAEl.textContent = questionBank[q].options[0];
        optionBEl.textContent = questionBank[q].options[1];
        optionCEl.textContent = questionBank[q].options[2];
        optionDEl.textContent = questionBank[q].options[3];
    // } else {
        // "gameover placeholder"
    // }  
}
// Validating if answer is right or wrong
var compareAnswer = function(event) {
    if (q >= questionBank.length) {
        window.alert("gameOver");
        clearInterval(timeInterval);
    } else if (event === questionBank[q].answer) {
        feedbackEl.textContent="Correct!";
    } else {
        timeLeft=timeLeft-10;
        feedbackEl.textContent="You are wrong!";
    }
    score = timeLeft;
    q++;
    displayQA();
}
var compare = function (event) {
    var event = event.target;
    compareAnswer(event.textContent.trim());
}
answersEl.addEventListener("click", compare);


// Game starts
var startGame = function() {
    sectionWelcomeEl.style.display='none';
    sectionQuestionsEl.style.display='inline';
    sectionInputEl.style.display='none';
    sectionHighscoreEl.style.display='none';
    countdown();
    displayQA();
}



// Event-Listener Game starts on click
startButtonEl.addEventListener("click", startGame);


