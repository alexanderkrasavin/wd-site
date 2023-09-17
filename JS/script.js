const burgerButton = document.querySelector('.burger__item');
const burgerLine = document.querySelector('.burger__line');
const header = document.querySelector('.header');
const navigation = document.querySelector('.nav__list');
const body = document.querySelector('body');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('active')
  burgerLine.classList.toggle('active')
  navigation.classList.toggle('active');
  body.classList.toggle('lock')
});