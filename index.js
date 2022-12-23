const navToggle = document.querySelector('.menu-toggle');
const navContainer = document.querySelector('.links-container');
const menuClose = document.querySelector('.menu-close');
const menuOpen = document.querySelector('.menu-open');
const windowScreen = document.querySelector('body');


navToggle.addEventListener('click', () => {

  menuClose.classList.toggle('menu-hide');
  menuOpen.classList.toggle('menu-hide');
  navContainer.classList.toggle('links-open');
})


window.addEventListener('resize', () => {
  
  navContainer.classList.remove('links-open');
})