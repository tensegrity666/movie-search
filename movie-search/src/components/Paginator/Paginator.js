import {
  Swiper, Navigation, Pagination, A11y,
} from 'swiper/js/swiper.esm';
import './styles/index.css';

Swiper.use([Navigation, Pagination, A11y]);

const mySwiper = new Swiper('.swiper-container', {
  init: false,
  speed: 500,
  loop: false,
  effect: 'slide',
  spaceBetween: 10,
  slidesPerView: 1,

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
      spaceBetween: 40,
    },
    1480: {
      slidesPerView: 4,
      spaceBetween: 80,
    },
  },

  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
});

export { mySwiper as default };
