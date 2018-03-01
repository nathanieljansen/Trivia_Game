
var correctAnswers = 0;
var wrongAnswers = 0;
var notAnswered = 0;
var userPick
var counter = 5;

var questionsArr = [
  {
    question: "who is president?",
    answers: ["Bill Maher", "Obama", "Brittany Spears", "Trump"],
    correctAnswer: 3
  },

  {
    question: "what does this do?",
    answers: ["Nothing", "Something", "Haha", "Right"],
    correctAnswer: 1
  }
]
var randomQuestion = questionsArr[Math.floor(Math.random() * questionsArr.length)];


$(function () {

  $(".question").html("Click Here to Start the Game!");
  $(".question").hover(function (e) {
    $(this).css("background-color", e.type === "mouseenter" ? "#d58ab2" : "transparent")
  })
  $(".footer").hide();

  $(".question").on("click", function () {
    $(this).unbind();
    $(this).css("background-color", "#72f7fa")
    $(".footer").show();
    timer()
    $(".question").html(randomQuestion.question);
    var answers = [];
    var theseAnswers = randomQuestion.answers;
    for (var i = 0; i < theseAnswers.length; i++) {
      answers.push('<p class=" taco col-md-6 col-sm-6 col-6" data-id' + [i] + '>' + theseAnswers[i] + '</p>');

    }
    $(".answersDiv").html(answers);
  })


  function timer() {
    var interval = setInterval(function () {
      counter--;
      console.log(counter)
      $(".countDown").html(counter)
      if (counter === 0) {
        $(".question").html("Ran out of Time")
        $(".answersDiv").html("")
        clearInterval(interval);
      }
    }, 1000);
  }

});
