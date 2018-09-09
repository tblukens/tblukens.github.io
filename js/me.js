// $('.jumbotron').hide();

// $('.jumbotron')

//   .delay(500).animate({ height: 'toggle', opacity: '0.4'}, "slow")

//   .delay(500).animate({opacity: '1'}, "fast");



// $("#projectContainer:nth-child(1n+1)").each(function() {

//   $(this).delay(1000).animate({

//      height: 'toggle'}, 1000, 'linear'

//   );

// });


{/* <li class="list-group-item">HTML</li>
<li class="list-group-item">CSS</li>
<li class="list-group-item">Bootstrap</li>
<li class="list-group-item">JavaScript</li>
</ul>
</div>
</div>
<div class="col-lg order-lg-3">
<h3 class="mb-4">Learning Languages:</h3>
<div class="list-group" id="learningLanguages">
<ul class="list-group">
<li class="list-group-item">JavaScript, always more to learn.</li>
<li class="list-group-item">jQuery</li>
<li class="list-group-item">Node.js</li>
<li class="list-group-item">SQL</li>
<li class="list-group-item">MongoDB</li>
<li class="list-group-item">React</li> */}

var currentLanguages = [
  'HTML',
  'CSS',
  'Bootstrap',
  'JavaScript',
  'jQuery',
];

var learningLanguages = [
  'JavaScript, always more to learn',
  'APIs & AJAX',
  'Node.js',
  'SQL',
  'MongoDB',
  'React'
];



$(document).ready(function(){

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



});



$("#about, .contact-social, .project-image").each(function() {

  $(this).hide();

});



$('#about, .contact-social, .project-image').each(function(i) {

   delay =(i)*550;

   $(this).delay(delay).animate({

      height: 'toggle'

    }, {

    duration: 1500,

  });

});

