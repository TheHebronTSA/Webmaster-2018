$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('inverse');
    } else {
      $('nav').removeClass('inverse');
    }
  });  