

const listGroup = (col, name) => {
  for (let i = 0; i < col.length; i++) {
    let element = col[i];
    var addLi = $('<li>');
    addLi.addClass('list-group-item');
    if (i % 2 === 0) {
      addLi.addClass("list-group-item-custom");
    } else {
      addLi.addClass("list-group-item-secondary");
    }
    addLi.text(element);
    $(name).append(addLi);
  }
}

$(document).ready(function () {

  listGroup(currentLanguages, "#currentLanguages");
  listGroup(learningLanguages, "#learningLanguages");

  projects.forEach(function (element, i) {
    // console.log(element.herokuLink)
    displayProjects(element.name, element.gitHub, element.imgLink, element.madeWith, element.webApp, element.herokuLink, element.shortDescription, i)
  });

  function displayProjects(name, github, img, madeWith, webApp, herokuLink, shortDescription, i) {
    i = i + 1;
    let gitHubUrl = `https://timlukens.com/${github}/`
    let gitHubRepo = github;
    if (github.substring(0,4) !== "http"){
      gitHubRepo = `https://github.com/tblukens/${github}/`
    }
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
      <p class="card-text">
      ${shortDescription}
      </p>
      <p class="small text-center">
      ${madeWith}
      ${clickToTry}
      </p>
      <p class="small text-center">
      <a class="btn btn-sm btn-secondary border border-dark" 
      href="${gitHubRepo}" role="button" target="_blank">Link to the GitHub</a></p>
      </div>
      </div>
      </div>`);
    $("#projectContainer").append($addProject)
  }



});



// $("#home, .jumbotron, #about, #portfolioContainer, .contact-social, .project-image, .socialContainer, .footerContainer").each(function () {

//   $(this).hide();

// });



// $('#home, .jumbotron, #about, #portfolioContainer, .contact-social, .project-image, .socialContainer, .footerContainer').each(function (i) {

//   delay = (i) * 650;

//   $(this).delay(delay).animate({

//     height: 'toggle'

//   }, {

//       duration: 1000,

//     });

// });