
var correctGuess = 0;
var wrongAnswers = 0;
var notAnswered = 0;
var round = 0;
var counter = 21;
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
  },

  {
    question: "What are you doing?",
    answers: ["Trying new things", "Watching TV", "Sleeping", "Nothing"],
    correctAnswer: 3
  }
]


function questionGen() {
  var randomQuestion = questionsArr[Math.floor(Math.random() * questionsArr.length)];
  return randomQuestion;
}

$(function start() {

  

  $(".question").html("Click Here to Start the Game!");
  $(".question").hover(function (e) {
    $(this).css("background-color", e.type === "mouseenter" ? "#d58ab2" : "transparent")
  })
  $(".footer").hide();
  $(".score").hide();
  $(".wrongRight").hide();

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
      $(".countDown").off("click");
      $(this).unbind();
      var index = $(this).index();
      if (index === currentQuestion.correctAnswer) {
        $(".wrongRight").show();
        $(".wrongRight").html("Nice!!!");
        $(".answersDiv").hide()
        $(".question").hide()
        correctGuess++;
        round ++;
        if (round >= 4) {
          gameOver();

        }
         else {
          nextQuestion();
        }
      }
      else if (index != currentQuestion.correctAnswer) {
        $(this).unbind();
        $(".wrongRight").show();
        $(".wrongRight").html("Nah!!!");
        $(".answersDiv").hide()
        $(".question").hide()
        wrongAnswers++;
        round ++;
        if (round >= 4) {
         gameOver();
        }
        else {
          nextQuestion();
        }
      }
    })

    function gameOver() {
      $(".score").show();
      $(".wrongRight").html("Game Over")
      $(".question").hide();
      $(".countDown").html("Click to Start Again");
      $(".score").html("Correct:" + correctGuess + " Wrong:" + wrongAnswers + " Not Answered:" + notAnswered);
      clearInterval(interval);
      counter = 21;
      interval = 0;
      $(".countDown").on("click", function (){
        nextQuestion();
        correctGuess = 0;
        wrongAnswers = 0;
        notAnswered = 0;
        round = 0;
        $(".score").hide();
        $(".countDown").empty();
      }
      )
    }

    function nextQuestion() {
      clearInterval(interval);
      counter = 21;
      interval = 0;
      timer();
      currentQuestion = questionGen();
      $(".answerOption").empty()
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
        if (counter <= "20") {
          $(".answersDiv").show()
          $(".wrongRight").hide();
          $(".question").show()
        }
        if (counter === 1) {
          $(".countDown").html(counter + " Second Left")
        }
        if (counter === 0) {
          notAnswered++;
          round++;
          $(".countDown").html(counter + " Seconds Left")
          $(".wrongRight").show();
          $(".wrongRight").html("Out of Time!!");
          $(".answersDiv").hide()
          $(".question").hide()
          if (round >= 4) {
            gameOver();
            console.log(round)

          }
          else {
          nextQuestion();
          }
        }
      }, 1000);


    }



  });



});
