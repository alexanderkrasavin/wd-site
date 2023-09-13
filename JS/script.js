const burgerButton = document.querySelector('.burger__item');
const header = document.querySelector('.header');
const firstLine = document.querySelector('.first-line');
const secondLine = document.querySelector('.second-line');
const thirdLine = document.querySelector('.third-line');
const navigation = document.querySelector('.nav__list');

burgerButton.addEventListener('click', () => {
  header.classList.toggle('header_active');
  firstLine.classList.toggle('first-line_active');
  secondLine.classList.toggle('second-line_active');
  thirdLine.classList.toggle('third-line_active');
  navigation.classList.toggle('nav__list_active');
});