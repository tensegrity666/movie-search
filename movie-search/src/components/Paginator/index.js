import './styles/swiper.css';

const PARAMS = {
  init: false,
  speed: 500,
  loop: false,
  effect: 'slide',
  spaceBetween: 10,
  slidesPerView: 1,
  preloadImages: true,

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    dynamicMainBullets: 4,
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    670: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },

  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
};


export default PARAMS;
