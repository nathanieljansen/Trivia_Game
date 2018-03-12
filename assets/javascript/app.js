
var correctGuess = 0;
var wrongAnswers = 0;
var notAnswered = 0;
var round = 0;
var counter = 15;
var interval;

var gameStartAudio = new Audio("http://soundfxcenter.com/video-games/pacman/8d82b5_Pacman_Opening_Song_Sound_Effect.mp3")
var timeRunningOut = new Audio("http://soundfxcenter.com/video-games/pacman/8d82b5_Pacman_Siren_Sound_Effect.mp3")
var wrongAnSound = new Audio("http://soundfxcenter.com/video-games/pacman/8d82b5_Pacman_Dies_Sound_Effect.mp3")
var rightAnSound = new Audio("http://soundfxcenter.com/video-games/pacman/8d82b5_Pacman_Eating_Ghost_Sound_Effect.mp3")
var endGameSound = new Audio("http://soundfxcenter.com/video-games/pacman/8d82b5_Pacman_Extra_Live_Sound_Effect.mp3")
var questionsArr = [
  {
    question: "What inspired Pac-Man's shape",
    answers: ["Pizza", "The Moon", "A Tire", "An Excel Pie Chart"],
    correctAnswer: 0
  },

  {
    question: "Originally Pac-Man was goin to be called?",
    answers: ["Pac-Man", "Mega Man", "Dot Eater", "Puck Man"],
    correctAnswer: 3
  },

  {
    question: "Pac-Man was originally created for?",
    answers: ["Everyone", "A Guy Name Frank", "Women", "The King of England"],
    correctAnswer: 2
  },

  {
    question: "Mario was originally going to carry?",
    answers: ["Luigi", "A Gun", "Some Purple Drank", "A Flower for the Princess"],
    correctAnswer: 1
  },
  {
    question: "In the game Mortal Kombat, what phrase is heard when Scorpion uses his spear?",
    answers: ["Get outta here!", "Get over here!", "I'm outta here!", "Where are we?"],
    correctAnswer: 1
  },

  {
    question: "Who was the inspiration behind Mortal Combat?",
    answers: ["Jean Claud Van Damme", "Some Ninja", "Steet Fighter", "The Creators Nephew"],
    correctAnswer: 0
  },

  {
    question: "Jumpman’s goal is to save the Lady from the giant ape in which 1981 arcade game?",
    answers: ["Mega Man", "Tecmo Bowl", "Super Mario", "Donkey Kong"],
    correctAnswer: 3
  },

  {
    question: "How many rows of aliens are there usually at the start of a ‘Space Invaders’ game?",
    answers: ["5", "8", "6", "7"],
    correctAnswer: 0
  },

  {
    question: "What month and year was the NES released?",
    answers: ["September 1987", "October 1983", "June 1982", "July 1983"],
    correctAnswer: 3
  },

  {
    question: "Why do Mushrooms make Mario grow",
    answers: ["A Refrence to Magic Mushrooms", "It's Like Spinach for the Body", "It's Just a Game", "Ask Alexa"],
    correctAnswer: 0
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
  $(".correctAns").hide();
  $(".wrongAns").hide();
  $(".notAns").hide();

  $(".question").on("click", function () {
    gameStartAudio.play();
    $(this).unbind();
    $(this).css("background-color", "#72f7fa")
    $(".footer").show();
    round++;
    timer();
    var currentQuestion = questionGen();
    console.log(currentQuestion);
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
      removeQuestion();
      $(".countDown").off("click");
      $(this).unbind();
      var index = $(this).index();
      if (index === currentQuestion.correctAnswer) {
       
        rightAnSound.play();
        $(".correctAns").hide();
        $(".wrongAns").hide();
        $(".notAns").hide();
        $(".wrongRight").show();
        $(".wrongRight").html("Nice!!!");
        $(".answersDiv").hide()
        $(".question").hide()
        correctGuess++;
        round++;
        if (round >= 11) {
          endGameSound.play();
          gameOver();

        }
        else {
          nextQuestion();
          
        }
      }
      else if (index != currentQuestion.correctAnswer) {
        wrongAnSound.play();
        $(this).unbind();
        $(".correctAns").hide();
        $(".wrongAns").hide();
        $(".notAns").hide();
        $(".wrongRight").show();
        $(".wrongRight").html("Nah!!!");
        $(".answersDiv").hide()
        $(".question").hide()
        wrongAnswers++;
        round++;
        if (round >= 11) {
          endGameSound.play();
          gameOver();
        }
        else {
          nextQuestion();
          
        }
      }
    })

    function gameOver() {
      questionsArr = [
        {
          question: "What inspired Pac-Man's shape",
          answers: ["Pizza", "The Moon", "A Tire", "An Excel Pie Chart"],
          correctAnswer: 0
        },

        {
          question: "Originally Pac-Man was goin to be called?",
          answers: ["Pac-Man", "Mega Man", "Dot Eater", "Puck Man"],
          correctAnswer: 3
        },

        {
          question: "Pac-Man was originally created for?",
          answers: ["Everyone", "A Guy Name Frank", "Women", "The King of England"],
          correctAnswer: 2
        },

        {
          question: "Mario was originally going to carry?",
          answers: ["Luigi", "A Gun", "Some Purple Drank", "A Flower for the Princess"],
          correctAnswer: 1
        },
        {
          question: "In the game Mortal Kombat, what phrase is heard when Scorpion uses his spear?",
          answers: ["Get outta here!", "Get over here!", "I'm outta here!", "Where are we?"],
          correctAnswer: 1
        },

        {
          question: "Who was the inspiration behind Mortal Combat?",
          answers: ["Jean Claud Van Damme", "Some Ninja", "Steet Fighter", "The Creators Nephew"],
          correctAnswer: 0
        },

        {
          question: "Jumpman’s goal is to save the Lady from the giant ape in which 1981 arcade game?",
          answers: ["Mega Man", "Tecmo Bowl", "Super Mario", "Donkey Kong"],
          correctAnswer: 3
        },

        {
          question: "How many rows of aliens are there usually at the start of a ‘Space Invaders’ game?",
          answers: ["5", "8", "6", "7"],
          correctAnswer: 0
        },

        {
          question: "What month and year was the NES released?",
          answers: ["September 1987", "October 1983", "June 1982", "July 1983"],
          correctAnswer: 3
        },

        {
          question: "Why do Mushrooms make Mario grow",
          answers: ["Magic Mushrooms Bro", "It's Like Spinach for the Body", "It's Just a Game", "Ask Alexa"],
          correctAnswer: 0
        }
      ]
      $(".correctAns").show();
      $(".wrongAns").show();
      $(".notAns").show();
      $(".correctAns").html("Correct " + correctGuess);
      $(".wrongAns").html("Wrong " + wrongAnswers);
      $(".notAns").html("Not Answered " + notAnswered);
      $(".wrongRight").html("Game Over")
      $(".question").hide();
      $(".countDown").html("Click to Start Again");
      $(".score").html("Correct:" + correctGuess + " Wrong:" + wrongAnswers + " Not Answered:" + notAnswered);
      clearInterval(interval);
      counter = 15;
      interval = 0;
      $(".countDown").on("click", function () {
        gameStartAudio.play();
        correctGuess = 0;
        wrongAnswers = 0;
        notAnswered = 0;
        round = 0;
        nextQuestion();
        round++;
        $(".wrongRight").empty();
        $(".score").hide();
        $(".countDown").empty();
      }
      )
    }

    function removeQuestion(){
      console.log(questionsArr.indexOf(currentQuestion));
      var removedQuestion = questionsArr.indexOf(currentQuestion);
      questionsArr.splice(removedQuestion, 1);
    }

    function nextQuestion() { 
      console.log(questionsArr)
      $(".correctAns").hide();
      $(".wrongAns").hide();
      $(".notAns").hide();
      $(".countDown").off("click");
      clearInterval(interval);
      counter = 15;
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
      $(".countDown").html(counter + " Seconds Left")
      counter = 15;
      interval = setInterval(function () {
        counter--;
        if (counter > 1) {
          $(".countDown").html(counter + " Seconds Left")
        }
        if (counter <= 15) {
          $(".answersDiv").show()
          $(".wrongRight").hide();
          $(".question").show()
        }
        if (counter === 5) {
          timeRunningOut.play();
        }
        if (counter === 1) {
          $(".countDown").html(counter + " Second Left")
        }
        if (counter === 0) {
          removeQuestion()
          notAnswered++;
          round++;
          $(".countDown").html(counter + " Seconds Left")
          $(".wrongRight").show();
          $(".wrongRight").html("Out of Time!!");
          $(".answersDiv").hide()
          $(".question").hide()
          if (round >= 11) {
            endGameSound.play();
            gameOver();

          }
          else {
            nextQuestion();
          }
        }
      }, 1000);


    }



  });



});
