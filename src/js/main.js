import Swiper from 'swiper/bundle';

// import 'swiper/swiper-bundle.css';

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

new Swiper(`.gallery__slider`, {
  speed: 400,
  spaceBetween: 30,
  slidesPerView: `auto`,
  centeredSlides: true,
  loop: true,

  navigation: {
    nextEl: `.swiper-button-next`,
    prevEl: `.swiper-button-prev`,
  },
});


// tabs

const tabs = document.querySelector(`.tabs`);
const tabsBtn = tabs.querySelectorAll(`.tabs__btn`);
const tabsContent = tabs.querySelectorAll(`.tabs__content`);

const tabsHandler = (path) => {
  tabsContent.forEach((el) => {
    el.classList.remove(`tabs__content--active`);
  });
  document.querySelector(`[data-tabs-target="${path}"]`).classList.add(`tabs__content--active`);
};

tabs.addEventListener(`click`, (e) => {
  if (e.target.classList.contains(`tabs__btn`)) {
    const tabsPath = e.target.dataset.tabsPath;
    tabsBtn.forEach((el) => {
      el.classList.remove(`tabs__btn--active`);
    });
    document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add(`tabs__btn--active`);
    tabsHandler(tabsPath);
  }

  if (e.target.classList.contains(`tabs__arrow--prev`)) {
    const activeBtn = document.querySelector(`.tabs__btn--active`);
    const activeParent = activeBtn.closest(`.tabs__item`);
    const previousParent = activeParent.previousElementSibling;

    if (previousParent) {
      const prevActive = previousParent.querySelector(`.tabs__btn`);
      tabsBtn.forEach((el) => {
        el.classList.remove(`tabs__btn--active`);
      });
      prevActive.classList.add(`tabs__btn--active`);

      const path = prevActive.dataset.tabsPath;
      tabsHandler(path);
    }
  }

});
