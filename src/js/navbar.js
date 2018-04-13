$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('inverse');
  } else {
    $('nav').removeClass('inverse');
  }
}); 

$('button').click(function(){
  if (!document.querySelector('.inverse')) { // If not found
    $('nav').toggleClass('inverse');
  }
});