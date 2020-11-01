//Runs once at the beginning
function setup() {
    var googleSheetLink = "https://docs.google.com/spreadsheets/d/1z4PK-F5hbKsOl8Vsm1wQdZoFMIavXeyaVEOedqsOzZ4/edit?usp=sharing";
    trivia.loadGoogleSheet(googleSheetLink).then(displayWelcome); 
  }

  //Loops continously for background effects and animations. (p5.js)
function draw() {
    if (trivia.state == "welcome") background("yellow");
    else if (trivia.state == "question") background("lightblue");
    else if (trivia.state == "correct") background("green");
    else if (trivia.state == "incorrect") background("red");
    else if (trivia.state == "thankyou") background("orange");
  }

  function displayWelcome() {
    $(".screen").hide();
    $("#welcome-screen").show();
    $("#question-count").html(`You have ${trivia.totalQuestions} questions waiting for you.`);
  }

  function displayQuestion() {
    $(".screen").hide();
    $("#question-screen").show();
    $("#correctAnswer").removeClass("highlight");
    $("#feedback").hide();
    trivia.insertQuestionInfo();
    trivia.shuffleAnswers();
  }

  function displayThankyou() {
    $(".screen").hide();
    $("#thankyou-screen").show();
    $("#game-results").html(`You got ${trivia.totalCorrect} of ${trivia.totalAnswered} correct.`);
  }

function onClickedAnswer(isCorrect) {
    $('#score').html(`${trivia.totalCorrect} of ${trivia.totalAnswered} Correct`);
    if (isCorrect) $("#feedback").html(`Way to go!`).show();
    else $("#feedback").html(`Better luck next time.`).show();
    $("#correctAnswer").addClass("highlight"); //highlight right answer
    $("#feedback").append(`<br><button onclick="trivia.gotoNextQuestion();">Next Question</br>`);
  }

function onClickedStart() {
    displayQuestion();
  }
