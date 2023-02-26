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
var scoreEl = document.querySelector(".score");
var initialsLabelEl = document.querySelector("#initialsLabel");
var initialsBoxEL = document.querySelector("#initialsBox");
var initialsSubmitBtnEl = document.querySelector("#initialsSubmitBtn");
var yourScoreAlertEl = document.querySelector("#yourScoreAlert");
var replayBtnEl = document.querySelector("#replayBtn");
var timeLeft = questionBank.length * 15;
var firstPlaceEl = document.querySelector("#firstPlace");
var secondPlaceEl = document.querySelector("#secondPlace");
var thirdPlaceEl = document.querySelector("#thirdPlace");

var timeInterval;
var q = 0;
var score = 0;
var scoreList = [];


// Starting view
    sectionWelcomeEl.style.display='inline';
    sectionQuestionsEl.style.display='none';
    sectionInputEl.style.display='none';
    sectionHighscoreEl.style.display='none';

// Countdown
function countdown() {
    timeInterval = setInterval(function(){
        timeLeft--;
        countdownEl.textContent = "Time left: " + timeLeft;

        if (timeLeft===0 || q >= questionBank.length) {
            clearInterval(timeInterval);
            gameOver();
        }
    }, 1000);
};

// Display Q&A
function displayQA() {
    if (q < questionBank.length) {
        questionsEl.textContent = questionBank[q].question;
        optionAEl.textContent = questionBank[q].options[0];
        optionBEl.textContent = questionBank[q].options[1];
        optionCEl.textContent = questionBank[q].options[2];
        optionDEl.textContent = questionBank[q].options[3];
    } else {
        gameOver();
    }  
}
// Validating if answer is right or wrong
var compareAnswer = function(event) {
    if (q >= questionBank.length) {
        gameOver();
    } else if (event === questionBank[q].answer) {
        feedbackEl.textContent="Correct!";
    } else {
        timeLeft=timeLeft-10;
        feedbackEl.textContent="You are wrong!";
    }
// BUG error message is coming too early
    score = timeLeft;
    q++;
    displayQA();
}
var compare = function (event) {
    var event = event.target;
    compareAnswer(event.textContent.trim());
}

// Game starts
var startGame = function() {
    sectionWelcomeEl.style.display='none';
    sectionQuestionsEl.style.display='inline';
    sectionInputEl.style.display='none';
    sectionHighscoreEl.style.display='none';
    countdown();
    displayQA();
}
// Game over
var gameOver = function() {
    sectionWelcomeEl.style.display='none';
    sectionQuestionsEl.style.display='none';
    sectionInputEl.style.display='inline';
    sectionHighscoreEl.style.display='none';
    scoreEl.textContent = "Your score is " + score;
    countdownEl.style.display='none';
    clearInterval(timeInterval);
}

// Get scores from local storage
var getScore = function () {
    var storedScore = JSON.parse(localStorage.getItem("highScore"));
    if (storedScore!==null) {
        scoreList = storedScore;
    }
}

// Save scores to local storage
var saveScore = function () {
    localStorage.setItem("highScore", JSON.stringify(scoreList));

    scoreList.sort((a, b) => {
        return b.score - a.score;
       });

    var topTen = scoreList.slice(0, 2);
    for (var i = 0; i < topTen.length; i++) {
        var player = topTen[i].player;
        var score = topTen[i].score;
        firstPlaceEl.textContent = topTen[0].player + " - " + topTen[0].score;
        // secondPlaceEl.textContent = topTen[1].player + " - " + topTen[1].score;
        // thirdPlaceEl.textContent = topTen[2].player + " - " + topTen[2].score;
        // add these when I manage to get the replay eventlistener working
    }

}

// Store player initials
var submitScore = function(event) {
    event.preventDefault();
    var playerInitials = initialsBox.value.toUpperCase();
    var newScore = {
        player: playerInitials,
        score: score,
    };
    yourScoreAlertEl.textContent=playerInitials + ": " + score;
    scoreList.push(newScore);
    saveScore();
    sectionWelcomeEl.style.display='none';
    sectionQuestionsEl.style.display='none';
    sectionInputEl.style.display='none';
    sectionHighscoreEl.style.display='inline';

}
// // Replay game
// var replay = function() {
//     welcomePage()
// }

// Event-Listener Game starts on click
startButtonEl.addEventListener("click", startGame);
// Event-Listener Compares clicked answer to actual
answersEl.addEventListener("click", compare);
// Event-Listener saves Score and compares to leaderboard
initialsSubmitBtnEl.addEventListener("click", submitScore);
// Event-Listener starts another game on click
// replayBtnEl.addEventListener("click", startGame);
// BUG!!!
