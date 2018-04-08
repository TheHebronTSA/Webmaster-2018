$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('inverse');
  } else {
    $('nav').removeClass('inverse');
  }
  if ($(document).scrollTop() > 50) {
    $('.nav-link').addClass('text-white');
  } else {
    $('.nav-link').removeClass('text-white');
  }
  if ($(document).scrollTop() > 50) {
    $('.navbar-brand').addClass('text-white');
  } else {
    $('.navbar-brand').removeClass('text-white');
  }
  if ($(document).scrollTop() > 50) {
    $('.navbar-toggler').addClass('custom-toggler');
  } else {
    $('.navbar-toggler').removeClass('custom-toggler');
  }
  if ($(document).scrollTop() > 50) {
    $('.nav-link').addClass('hvr-underline-from-center-white');
  } else {
    $('.nav-link').removeClass('hvr-underline-from-center-white');
  }
});  