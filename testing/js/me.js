// $('.jumbotron').hide();
// $('.jumbotron')
//   .delay(500).animate({ height: 'toggle', opacity: '0.4'}, "slow")
//   .delay(500).animate({opacity: '1'}, "fast");

// $("#projectContainer:nth-child(1n+1)").each(function() {
//   $(this).delay(1000).animate({
//      height: 'toggle'}, 1000, 'linear'
//   );
// });

$(document).ready(function(){
$(".list-group-item:even").addClass("list-group-item-custom");
$(".list-group-item:odd").addClass("list-group-item-secondary");
});

$("#about, .contact-social").each(function() {
  $(this).hide();
});

$('#about, .contact-social').each(function(i) {
   delay =(i)*550;
   $(this).delay(delay).animate({
      height: 'toggle'
    }, {
    duration: 1500,
  });
});
