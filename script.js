const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');
const triangular_Border=document.querySelector('.triangle_border');
hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
  triangular_Border.classList.toggle('hide');
  
});
