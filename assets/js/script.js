
var sectionWelcome = document.querySelector(".section-welcome");
var sectionQuestions = document.querySelector(".section-questions");
var sectionInput = document.querySelector(".section-input");
var sectionHighscore = document.querySelector(".section-highscore");
var startButton = document.querySelector("#start-button");

// Starting view
sectionWelcome.style.display='inline';
sectionQuestions.style.display='none';
sectionInput.style.display='none';
sectionHighscore.style.display='none';
console.dir(sectionWelcome);
console.log(sectionWelcome);

// Timer

// Game starts
var startGame = function() {
    sectionWelcome.style.display='none';
    sectionQuestions.style.display='inline';
    sectionInput.style.display='none';
    sectionHighscore.style.display='none';
}

// Game starts on click
startButton.addEventListener("click", startGame);


