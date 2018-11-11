var currentLanguages = [
  'HTML',
  'CSS',
  'Bootstrap',
  'JavaScript',
  'jQuery',
  'Firebase',
  'APIs & AJAX',
];

var learningLanguages = [
  'JavaScript, always more to learn',
  'Node.js',
  'SQL',
  'MongoDB',
  'React',
  'Vue'
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

  var projects = [
    {
      name: "Word Guess Game",
      gitHub: "Word-Guess-Game",
      imgLink: "./img/word_guess_game_portfolio.PNG",
      madeWith: "Vanilla JavaScript",
      webApp: true
    },
    {
      name: "DBZ Fighter RPG",
      gitHub: "unit-4-game",
      imgLink: "./img/dbz_fighter.png",
      madeWith: "JavaScript and jQuery",
      webApp: true
    },
    {
      name: "Game of Thrones Trivia",
      gitHub: "TriviaGame",
      imgLink: "./img/GAME_OF_THRONES.png",
      madeWith: "JavaScript and jQuery",
      webApp: true
    },
    {
      name: "Giphy API and OMDB Info",
      gitHub: "GIPHY_API",
      imgLink: "./img/giphy.png",
      madeWith: "JavaScript, jQuery, AJAX, APIs",
      webApp: true
    },
    {
      name: "Multiplayer Rock, Paper, Scissors",
      gitHub: "RPS-Multiplayer",
      imgLink: "./img/rps-multi.png",
      madeWith: "JavaScript, jQuery, Firebase",
      webApp: true
    },
    {
      name: "What's For Dinner?",
      gitHub: "Whats_For_Dinner",
      imgLink: "./img/portfolio-whats-for-dinner.png",
      madeWith: "JavaScript, jQuery, AJAX/APIs, html2canvas, Bulma CSS",
      webApp: true
    },
    {
      name: "LIRI Node App",
      gitHub: "liri-node-app",
      imgLink: "./img/liri-node-app.png",
      madeWith: "JavaScript, Node.js, and node modules.",
      webApp: false
    },
    {
      name: "Word Guess Game - Node",
      gitHub: "node_word_guess_game",
      imgLink: "./img/node_word_guess_game.png",
      madeWith: "JavaScript, Node.js, and node modules.",
      webApp: false
    },
    {
      name: "Bamazon Store - Node/MySQL",
      gitHub: "bamazon_node_mysql",
      imgLink: "./img/bamazon.png",
      madeWith: "JavaScript, Node.js, MySQL",
      webApp: false
    },
    {
      name: "Node Bank App - Node/MySQL",
      gitHub: "bank_of_node",
      imgLink: "./img/bank_of_node.png",
      madeWith: "JavaScript, Node.js, MySQL",
      webApp: false
    },
    {
      name: "Friend Finder",
      gitHub: "Friend-Finder-Vue",
      imgLink: "./img/friend-finder.png",
      madeWith: "Vue, Node, Express",
      webApp: 'heroku',
      herokuLink: "https://tbl-friend-finder.herokuapp.com/"
    },
    {
      name: "Eat Da Burger",
      gitHub: "burger",
      imgLink: "./img/eat_da_burger.png",
      madeWith: "Vue, Node, Express, MySQL",
      webApp: 'heroku',
      herokuLink: "http://tbl-burger.herokuapp.com/"
    }
  ]

  projects.forEach(function (element, i) {
    console.log(element.herokuLink)
    displayProjects(element.name, element.gitHub, element.imgLink, element.madeWith, element.webApp, element.herokuLink, i)
  });

  function displayProjects(name, github, img, madeWith, webApp, herokuLink, i) {
    i = i + 1;
    let gitHubUrl = `https://timlukens.com/${github}/`
    let gitHubRepo = `https://github.com/tblukens/${github}/`
    let clickToTry = `<p class="small">Click above to try it out. Or below for github repo:</p>`;
    if (webApp === 'heroku') {
      gitHubUrl = herokuLink
    } else if (!webApp && !herokuLink) {
      gitHubUrl = gitHubRepo;
      clickToTry = '';
    }
    var $addProject = (`<div id="project${i}"+ class="col-md-6 col-lg-4 portfolio-project">
      <div class="card mb-3 border border-dark">
      <a href="${gitHubUrl}" target="_blank">
      <img class="card-img-top project-image" src="${img}" alt="${name}" />
      </a>
      <div class="card-body p-2 border border-dark border-bottom-0 border-left-0 border-right-0">
      <h4 class="card-title"><a href="${gitHubUrl}" target="_blank">${name}</a></h4>
      <p class="card-text">${madeWith}</p>
      ${clickToTry}
      <p class="small text-center"><a class="btn btn-sm btn-secondary border border-dark" 
      href="${gitHubRepo}" role="button" target="_blank">Link to the GitHub</a></p>
      </div>
      </div>
      </div>`);
    $("#projectContainer").append($addProject)
  }



});



$("#home, .jumbotron, #about, #portfolioContainer, .contact-social, .project-image, .socialContainer, .footerContainer").each(function () {

  $(this).hide();

});



$('#home, .jumbotron, #about, #portfolioContainer, .contact-social, .project-image, .socialContainer, .footerContainer').each(function (i) {

  delay = (i) * 650;

  $(this).delay(delay).animate({

    height: 'toggle'

  }, {

      duration: 1000,

    });

});