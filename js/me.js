var currentLanguages = [
  'HTML',
  'CSS',
  'Bootstrap',
  'JavaScript',
  'jQuery',
  'Firebase'
];

var learningLanguages = [
  'JavaScript, always more to learn',
  'APIs & AJAX',
  'Node.js',
  'SQL',
  'MongoDB',
  'React'
];



$(document).ready(function () {

  for (let i = 0; i < currentLanguages.length; i++) {
    var addLi = $('<li>');
    addLi.addClass('list-group-item');
    addLi.text(currentLanguages[i]);
    $('#currentLanguages').append(addLi);
  }
  for (let i = 0; i < learningLanguages.length; i++) {
    var addLi = $('<li>');
    addLi.addClass('list-group-item');
    addLi.text(learningLanguages[i]);
    $('#learningLanguages').append(addLi);
  }


  $(".list-group-item:even").addClass("list-group-item-custom");

  $(".list-group-item:odd").addClass("list-group-item-secondary");

  var gitHubLink = "https://tblukens.github.io/";

  var projects = [{
    name: "Word Guess Game",
    gitHub: "Word-Guess-Game",
    imgLink: "../img/word_guess_game_portfolio.PNG",
    
  }]

  var displayProjects

  {
    /* <div id="project1" class="col-md-6 col-lg-4">
    <div class="card mb-3 border border-dark">
      <a href="https://tblukens.github.io/Word-Guess-Game/" target="_blank">
        <img class="card-img-top project-image" src="img/word_guess_game_portfolio.PNG" alt="Word Guess Game" />
      </a>
      <div class="card-body p-2 border border-dark border-bottom-0 border-left-0 border-right-0">
        <h4 class="card-title">
          <a href="https://tblukens.github.io/Word-Guess-Game/" target="_blank">Word Guess Game</a>
        </h4>
        <p class="card-text">Made with vanilla JavaScript</p>
        <p class="small">Click above to try it out. Or below for github repo:</p>
        <p class="small text-center"><a name="wordGuessGameButton" id="wordGuessGameButton" class="btn btn-sm btn-secondary border border-dark" href="https://github.com/tblukens/Word-Guess-Game" role="button">Link to the GitHub</a></p>
      </div>
    </div>
    </div>
    <div id="project2" class="col-md-6 col-lg-4">
    <div class="card mb-3 border border-dark">
      <a href="https://tblukens.github.io/unit-4-game/" target="_blank">
        <img class="card-img-top project-image" src="img/dbz_fighter.png" alt="DBZ Fighter RPG">
      </a>
      <div class="card-body p-2 border border-dark border-bottom-0 border-left-0 border-right-0">
        <a href="https://tblukens.github.io/unit-4-game/" target="_blank">
          <h4 class="card-title">DBZ Fighter RPG</h4>
        </a>
        <p class="card-text">Made with JavaScript and jQuery</p>
        <p class="small">Click above to try it out. Or below for github repo:</p>
        <p class="small text-center"><a name="dbzFighterButton" id="dbzFighterButton" class="btn btn-sm btn-secondary border border-dark" href="https://github.com/tblukens/unit-4-game" role="button">Link to the GitHub</a></p>
      </div>
    </div>
    </div>
    <div id="project3" class="col-md-6 col-lg-4">
    <div class="card mb-3 border border-dark">
      <a href="https://tblukens.github.io/TriviaGame/" target="_blank">
        <img class="card-img-top project-image" src="img/GAME_OF_THRONES.png" alt="Game of Thrones Trivia">
      </a>
      <div class="card-body p-2 border border-dark border-bottom-0 border-left-0 border-right-0">
        <a href="https://tblukens.github.io/TriviaGame/" target="_blank">
          <h4 class="card-title">Game of Thrones Trivia</h4>
        </a>
        <p class="card-text">Made with JavaScript and jQuery</p>
        <p class="small">Click above to try it out. Or below for github repo:</p>
        <p class="small text-center"><a name="triviaGameButton" id="triviaGameButton" class="btn btn-secondary border border-dark btn-sm" href="https://github.com/tblukens/TriviaGame" role="button">Link to the GitHub</a></p>
      </div>
    </div>
    </div>
    <div id="project4" class="col-md-6 col-lg-4">
    <div class="card mb-3 border border-dark">
      <a href="https://tblukens.github.io/GIPHY_API/" target="_blank">
        <img class="card-img-top project-image" src="img/giphy.png" alt="GIPHY API">
      </a>
      <div class="card-body p-2 border border-dark border-bottom-0 border-left-0 border-right-0">
        <a href="https://tblukens.github.io/GIPHY_API/" target="_blank">
          <h4 class="card-title">Giphy API and OMDB Info</h4>
        </a>
        <p class="card-text">Made with JavaScript, jQuery, AJAX, APIs</p>
        <p class="small">Click above to try it out. Or below for github repo:</p>
        <p class="small text-center"><a name="giphyButton" id="giphyButton" class="btn btn-secondary border border-dark btn-sm" href="https://github.com/tblukens/GIPHY_API" role="button">Link to the GitHub</a></p>
      </div>
    </div>
    </div>
    <div id="project5" class="col-md-6 col-lg-4">
    <div class="card mb-3 border border-dark">
      <a href="https://tblukens.github.io/RPS-Multiplayer/" target="_blank">
        <img class="card-img-top project-image" src="img/rps-multi.png" alt="RPS-Multiplayer">
      </a>
      <div class="card-body p-2 border border-dark border-bottom-0 border-left-0 border-right-0">
        <a href="https://tblukens.github.io/RPS-Multiplayer/" target="_blank">
          <h4 class="card-title">Rock Paper Scissors</h4>
        </a>
        <p class="card-text">Multiplayer rock, paper, scissors game made with JavaScript, jQuery, Firebase</p>
        <p class="small">Click above to try it out. Or below for github repo:</p>
        <p class="small text-center"><a name="giphyButton" id="giphyButton" class="btn btn-secondary border border-dark btn-sm" href="https://github.com/tblukens/RPS-Multiplayer" role="button">Link to the GitHub</a></p>
      </div>
    </div>
    </div> */
  }



});



$("#about, .contact-social, .project-image").each(function () {

  $(this).hide();

});



$('#about, .contact-social, .project-image').each(function (i) {

  delay = (i) * 550;

  $(this).delay(delay).animate({

    height: 'toggle'

  }, {

    duration: 1500,

  });

});