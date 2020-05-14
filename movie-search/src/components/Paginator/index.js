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
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1480: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
};


export default PARAMS;
