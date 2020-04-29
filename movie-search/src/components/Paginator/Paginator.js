import { Swiper, Navigation, Pagination } from 'swiper/js/swiper.esm';

Swiper.use([Navigation, Pagination]);

const mySwiper = new Swiper('.swiper-container', {
  loop: true,
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
});

export { mySwiper as default };
