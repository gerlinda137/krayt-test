// import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

import 'normalize.css';

const burgerBtn = document.querySelector(`.main-header__burger`);
const mainNav = document.querySelector(`.main-nav`);
const userMenu = document.querySelector(`.user-menu`);

burgerBtn.onclick = function () {
  mainNav.classList.toggle(`main-nav--hidden`);
  userMenu.classList.toggle(`user-menu--hidden`);

  if (mainNav.classList.contains(`main-nav--hidden`)) {
    burgerBtn.style.backgroundImage = `url('../img/menu.svg')`;
  } else {
    burgerBtn.style.backgroundImage = `url('../img/close.svg')`;
  }
};


if (window.innerWidth <= 1024) {
  document.querySelector(`.main-header`).classList.add(`main-header--on-scroll`);
  mainNav.classList.add(`main-nav--hidden`);
  userMenu.classList.add(`user-menu--hidden`);
} else {
  document.querySelector(`.main-header`).classList.remove(`main-header--on-scroll`);
  mainNav.classList.remove(`main-nav--hidden`);
  userMenu.classList.remove(`user-menu--hidden`);
}
