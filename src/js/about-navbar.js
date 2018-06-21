$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('inverse');
    $('.nav-link').addClass('text-white');
    $('.navbar-brand').addClass('text-white');
    $('.navbar-toggler').addClass('custom-toggler');
    $('.nav-link').addClass('hvr-underline-from-center-white');
  } else {
    $('nav').removeClass('inverse');
    $('.nav-link').removeClass('text-white');
    $('.navbar-brand').removeClass('text-white');
    $('.navbar-toggler').removeClass('custom-toggler');
    $('.nav-link').removeClass('hvr-underline-from-center-white');
  } 
})