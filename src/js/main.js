import Swiper from 'swiper/bundle';

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


//  swiper

new Swiper(`.introduction__slider`, {
  speed: 400,
  spaceBetween: 100,
  slidesPerView: 1,

  pagination: {
    el: `.swiper-pagination`,
    type: `bullets`,
    clickable: true,
  },
});

new Swiper(`.workspaces__slider`, {
  slidesPerView: 3,
  spaceBetween: 30,

  navigation: {
    nextEl: `.swiper-button-next`,
    prevEl: `.swiper-button-prev`,
  },

  pagination: {
    el: `.swiper-pagination`,
    type: `progressbar`,
  },
});
