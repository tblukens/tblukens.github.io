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

  var projects = [
    {
      name: "Word Guess Game",
      gitHub: "Word-Guess-Game",
      imgLink: "./img/word_guess_game_portfolio.PNG",
      madeWith: "Vanilla JavaScript",
    },
    {
      name: "DBZ Fighter RPG",
      gitHub: "unit-4-game",
      imgLink: "./img/dbz_fighter.png",
      madeWith: "JavaScript and jQuery",
    },
    {
      name: "Game of Thrones Trivia",
      gitHub: "TriviaGame",
      imgLink: "./img/GAME_OF_THRONES.png",
      madeWith: "JavaScript and jQuery",
    },
    {
      name: "Giphy API and OMDB Info",
      gitHub: "GIPHY_API",
      imgLink: "./img/giphy.png",
      madeWith: "JavaScript, jQuery, AJAX, APIs",
    },
    {
      name: "Multiplayer Rock, Paper, Scissors",
      gitHub: "RPS-Multiplayer",
      imgLink: "./img/rps-multi.png",
      madeWith: "JavaScript, jQuery, Firebase",
    },
    {
      name: "What's For Dinner?",
      gitHub: "Whats_For_Dinner",
      imgLink: "./img/portfolio-whats-for-dinner.png",
      madeWith: "JavaScript, jQuery, AJAX/APIs, html2canvas, Bulma CSS",
    },
    {
      name: "LIRI Node App",
      gitHub: "liri-node-app",
      imgLink: "./img/liri-node-app.png",
      madeWith: "JavaScript, Node.js, and node modules.",
    },
  ]

  projects.forEach(function(element,i) {
    displayProjects(element.name, element.gitHub, element.imgLink, element.madeWith, i)
  });

  function displayProjects(name, github, img, madeWith, i) {
    i=i+1;
    var $addProject = ('<div id="project'+i+'"+ class="col-md-6 col-lg-4">'+
    '<div class="card mb-3 border border-dark">'+
      '<a href="https://tblukens.github.io/'+github+'/" target="_blank">'+
        '<img class="card-img-top project-image" src="'+img+'" alt="'+name+'" />'+
      '</a>'+
      '<div class="card-body p-2 border border-dark border-bottom-0 border-left-0 border-right-0">'+
        '<h4 class="card-title"><a href="https://tblukens.github.io/'+github+'/" target="_blank">'+name+'</a></h4>'+
        '<p class="card-text">'+madeWith+'</p>'+
        '<p class="small">Click above to try it out. Or below for github repo:</p>'+
        '<p class="small text-center"><a class="btn btn-sm btn-secondary border border-dark"'+
           'href="https://github.com/tblukens/'+github+'" role="button" target="_blank">Link to the GitHub</a></p>'+
      '</div>'+
    '</div>'+
  '</div>');
  $("#projectContainer").append($addProject)
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