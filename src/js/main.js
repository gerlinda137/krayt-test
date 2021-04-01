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

const burgerMenuInit = function () {
  if (window.innerWidth <= 1024) {
    document.querySelector(`.main-header`).classList.add(`main-header--on-scroll`);
    mainNav.classList.add(`main-nav--hidden`);
    userMenu.classList.add(`user-menu--hidden`);
  } else {
    document.querySelector(`.main-header`).classList.remove(`main-header--on-scroll`);
    mainNav.classList.remove(`main-nav--hidden`);
    userMenu.classList.remove(`user-menu--hidden`);
  }
};


window.onresize = burgerMenuInit;

burgerMenuInit();


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
  // slidesPerView: 3,
  // spaceBetween: 30,

  navigation: {
    nextEl: `.swiper-button-next`,
    prevEl: `.swiper-button-prev`,
  },

  pagination: {
    el: `.swiper-pagination`,
    type: `progressbar`,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    500: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 30,

    }
  },
});

new Swiper(`.gallery__slider`, {

  spaceBetween: 30,
  slidesPerView: `auto`,
  centeredSlides: true,
  loop: true,

  navigation: {
    nextEl: `.swiper-button-next`,
    prevEl: `.swiper-button-prev`,
  },

  breakpoints: {
    320: {
      speed: 400,
    },

    768: {
      speed: 0,
    },
  },
});

new Swiper(`.reviews__slider`, {
  speed: 400,
  spaceBetween: 30,
  slidesPerView: `auto`,

  navigation: {
    nextEl: `.swiper-button-next`,
    prevEl: `.swiper-button-prev`,
  },

  pagination: {
    el: `.swiper-pagination`,
    type: `progressbar`,
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

// read more
const showMoreBtns = document.querySelectorAll(`.faq__button`);
const moreInfos = document.querySelectorAll(`.faq__more-info`);


for (let i = 0; i < showMoreBtns.length; i++) {
  showMoreBtns[i].onclick = function () {
    if (moreInfos[i].style.visibility === `hidden`) {
      moreInfos[i].style.visibility = `visible`;
      moreInfos[i].style.height = `auto`;
      moreInfos[i].style.margin = `10px 0 10px 0`;
    } else {
      moreInfos[i].style.visibility = `hidden`;
      moreInfos[i].style.height = `0`;
      moreInfos[i].style.margin = `0`;
    }
  };
}
