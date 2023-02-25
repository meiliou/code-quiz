var sectionWelcomeEl = document.querySelector(".section-welcome");
var sectionQuestionsEl = document.querySelector(".section-questions");
var sectionInputEl = document.querySelector(".section-input");
var sectionHighscoreEl = document.querySelector(".section-highscore");
var startButtonEl = document.querySelector("#start-button");

var countdownEl = document.querySelector("#countdown");


// Starting view
sectionWelcomeEl.style.display='inline';
sectionQuestionsEl.style.display='none';
sectionInputEl.style.display='none';
sectionHighscoreEl.style.display='none';


// Countdown
function countdown() {
    var timeLeft = 5;

    var timeInterval = setInterval(function(){
        if (timeLeft>=0) {
            countdownEl.textContent = "Time left: " + timeLeft;
            timeLeft--;
        } else clearInterval(timeInterval);
    }, 1000);
};

// Game starts
var startGame = function() {
    sectionWelcomeEl.style.display='none';
    sectionQuestionsEl.style.display='inline';
    sectionInputEl.style.display='none';
    sectionHighscoreEl.style.display='none';
    countdown();
}

// Game starts on click
startButtonEl.addEventListener("click", startGame);


