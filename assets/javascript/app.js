
var correctAnswers = 0
var wrongAnswers = 0
var notAnswered = 0

// Do I create a variable for all the questions?
// 
// List of questions with 4 answers, 3 incorrect, 1 correct
// 


$(function () {

  $(".startGame").html("Click Here to Start the Game!");
  $(".question").html(" ");
  $(".answer1").html(" ");
  $(".answer2").html(" ");
  $(".answer3").html(" ");
  $(".answer4").html(" ");

  $(".startGame").on("click", function () {
    $(".startGame").html(" ");
    $(".question").html("Question");
    $(".answer1").html("Answer 1");
    $(".answer2").html("Answer 2");
    $(".answer3").html("Answer 3");
    $(".answer4").html("Answer 4");
});

});

