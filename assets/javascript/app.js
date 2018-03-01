
var correctAnswers = 0;
var wrongAnswers = 0;
var notAnswered = 0;

var questions = ["What does this do?", "What about this?"]
var randomQuestion = questions[Math.floor(Math.random() * questions.length)];
var answer = []

// Do I create a variable for 5 random questions?
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
  $(".startGame, .answer1, .answer2, .answer3, .answer4").hover(function (e) {
    $(this).css("background-color", e.type === "mouseenter" ? "#d58ab2" : "transparent")
  })

  $(".startGame").on("click", function () {
    console.log(randomQuestion)
    $(this).hide();
    $(".question").html(randomQuestion);
    $(".answer1").html("Answer 1");
    $(".answer2").html("Answer 2");
    $(".answer3").html("Answer 3");
    $(".answer4").html("Answer 4");
});

});

