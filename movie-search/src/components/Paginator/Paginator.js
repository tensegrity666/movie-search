import { Swiper, Navigation, Pagination } from 'swiper/js/swiper.esm';
import './styles/index.css';

Swiper.use([Navigation, Pagination]);

const mySwiper = new Swiper('.swiper-container', {
  speed: 500,
  loop: false,
  spaceBetween: 100,
  slidesPerView: 4,

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

  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
});

export { mySwiper as default };
