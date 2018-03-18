/**
 * @file scroll.js
 * @description This file adds event listener to down chevron to scroll to main content on click
 * @license MIT
 */
$(document).ready(function(){
$(".hero__scroll").click(function(e) {
  var hash = "#main"
  e.preventDefault();

  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 800, function(){

  })
  /*document.querySelector('#main').scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  })*/
})})