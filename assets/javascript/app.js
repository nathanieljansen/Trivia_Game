
var correctGuess = 0;
var wrongAnswers = 0;
var notAnswered = 0;
var round = 0;
var counter = 20;
var interval;
var questionsArr = [
  {
    question: "Who is the president?",
    answers: ["Bill Maher", "Obama", "Brittany Spears", "Trump"],
    correctAnswer: 3
  },

  {
    question: "What does this do?",
    answers: ["Nothing", "Something", "Haha", "Right"],
    correctAnswer: 1
  }
]
randomArray = [0,1,2,3,4,5]

function questionGen() {
var randomQuestion = questionsArr[Math.floor(Math.random() * questionsArr.length)];
return randomQuestion;
}

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
    round++;
    console.log(round);
    timer();
    var currentQuestion = questionGen()
    $(".question").html(currentQuestion.question);
    var answers = [];
    var theseAnswers = currentQuestion.answers;
    for (var i = 0; i < theseAnswers.length; i++) {
      answers.push('<p class = "answerOption col-md-6 col-sm-6 col-6" data-answer' + [i] + '>' + theseAnswers[i] + '</p>');
    }

    $(".answersDiv").html(answers);
    $(".answerOption").hover(function (e) {
      $(this).css("background-color", e.type === "mouseenter" ? "#d58ab2" : "transparent");
    })

    $(".answersDiv").on("click", ".answerOption", function () {
      $(this).unbind();
      var index = $(this).index();
      if (index === currentQuestion.correctAnswer) {
        $(".countDown").html("Nice!!!");
        correctGuess++;
        nextQuestion();
      }
      else if (index != currentQuestion.correctAnswer) {
        $(this).unbind();
        $(".countDown").html("Nope!");
        wrongAnswers++;
        nextQuestion();
      }
    })

    function nextQuestion() {
      clearInterval(interval);
      timer();
      currentQuestion = questionGen();
      $(".answerOption").empty()
      round++;
      console.log(round);
      $(".question").html(currentQuestion.question);
      var answers = [];
      var theseAnswers = currentQuestion.answers;
      for (var i = 0; i < theseAnswers.length; i++) {
        answers.push('<p class = "answerOption col-md-6 col-sm-6 col-6" data-answer' + [i] + '>' + theseAnswers[i] + '</p>');
        $(".answersDiv").html(answers);
        $(".answerOption").hover(function (e) {
          $(this).css("background-color", e.type === "mouseenter" ? "#d58ab2" : "transparent");
        })
      }
    }

    function timer() {
      counter = 21;
      interval = 0;
      interval = setInterval(function () {
        counter--;
        if (counter > 1) {
          $(".countDown").html(counter + " Seconds Left")
        }
        if (counter === 1) {
          $(".countDown").html(counter + " Second Left")
        }
        if (counter === 0) {
          $(".countDown").html(counter + " Seconds Left")
          notAnswered++;
          $(".question").html("Ran out of Time")
          $(".answersDiv").html("")
          clearInterval(interval);
        }
      }, 1000);

    }



  });



});
