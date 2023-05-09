$(function(){

});

window.onscroll = function showHeader() {
  var header = document.querySelector('.header');
  var header = document.querySelector('.menu');
  if (window.pageYOffset > 20){
    header.classList.add('fixed');
  }
  else{
    header.classList.remove('fixed');
  }
};