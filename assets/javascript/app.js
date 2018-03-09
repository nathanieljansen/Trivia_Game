
var correctGuess = 0;
var wrongAnswers = 0;
var notAnswered = 0;
var round = 0;
var counter = 21;
var interval;
var gameStartAudio = new Audio("http://soundfxcenter.com/video-games/pacman/8d82b5_Pacman_Opening_Song_Sound_Effect.mp3")
var timeRunningOut = new Audio("http://soundfxcenter.com/video-games/pacman/8d82b5_Pacman_Siren_Sound_Effect.mp3")
var wrongAnSound = new Audio("http://soundfxcenter.com/video-games/pacman/8d82b5_Pacman_Dies_Sound_Effect.mp3")
var rightAnSound = new Audio("http://soundfxcenter.com/video-games/pacman/8d82b5_Pacman_Eating_Ghost_Sound_Effect.mp3")
var endGameSound = new Audio("http://soundfxcenter.com/video-games/pacman/8d82b5_Pacman_Extra_Live_Sound_Effect.mp3")
var questionsArr = [
  {
    question: "In video games, what colour is Pac-Man?",
    answers: ["Pink", "Orange", "Blue", "Yellow"],
    correctAnswer: 3
  },

  {
    question: "How many square blocks is each game piece composed of in the game of Tetris?",
    answers: ["4", "7", "6", "5"],
    correctAnswer: 0
  },

  {
    question: "In video gaming, what is the name of the princess whom Mario repeatedly stops Bowser from kidnapping?",
    answers: ["Princess Bowser", "Princess Carolyn", "Princess Peach", "Princess Cake"],
    correctAnswer: 2
  },

  {
    question: "In the game Doom, which planet is the space marine posted to after assaulting his commanding officer?",
    answers: ["Earth", "Jupiter", "Mars", "Pluto"],
    correctAnswer: 2
  },
  {
    question: "In the game ‘Mortal Kombat’, what phrase is heard when Scorpion uses his spear?",
    answers: ["Get outta here!", "Get over here!", "I'm outta here!", "Where are we?"],
    correctAnswer: 1
  },

  {
    question: "Which 1986 Nintendo game is set in the fantasy land of Hyrule, and centres on a boy named Link?",
    answers: ["Zelda", "Kurbi", "Steet Fighter", "Excite Bike"],
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
    question: "What month and year was the Atari released?",
    answers: ["September 1977", "October 1973", "June 1982", "December 1999"],
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
      console.log(questionsArr.indexOf(currentQuestion));
      var removedQuestion = questionsArr.indexOf(currentQuestion);
      questionsArr.splice(removedQuestion );
      $(".countDown").off("click");
      console.log(questionsArr)
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
      counter = 21;
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

    function nextQuestion() { 
      
      $(".correctAns").hide();
      $(".wrongAns").hide();
      $(".notAns").hide();
      $(".countDown").off("click");
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
        if (counter <= 20) {
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
