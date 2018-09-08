var QuizUI = {
  displayNext: function () {
    if (quiz.hasEnded()) {
      this.displayScore();
    } else {
      this.displayQuestion();
      this.displayChoices();
      this.displayProgress();
    }
  },
  displayQuestion: function() {
    this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
  },
  displayChoices: function() {
    var choices = quiz.getCurrentQuestion().choices;

    for(var i = 0; i < choices.length; i++) {
      this.populateIdWithHTML("choice" + i, choices[i]);
      this.guessHandler("guess" + i, choices[i]);
    }
  },
  displayScore: function() {
    var gameOverHTML = "<div class='row justify-content-center text-center'><div class='col-12 w-100'><h1 class='display-3'>Game Over</h1></div>";
    gameOverHTML += "<div class='col-12 w-100'><h2> Your score is: " + quiz.score + " out of " + quiz.questions.length + "</h2></div></div>";
    this.populateIdWithHTML("quiz", gameOverHTML);
    $('.willHide').hide();
  },

  populateIdWithHTML: function(id, text) {
    var element = document.getElementById(id);
    element.innerHTML = text;
  },
  guessHandler: function(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
      quiz.guess(guess);
      QuizUI.displayNext();
    }
  },

  displayProgress: function() {
    var currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.populateIdWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
  }
};
