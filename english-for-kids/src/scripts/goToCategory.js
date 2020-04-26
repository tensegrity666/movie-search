/* eslint-disable no-restricted-globals */

import { wrapper } from './utils/createWrapper';

const onCategoryClick = (event) => {
  if (event.target.closest('.categories__container') && event.target.closest('.categories__container').hasAttribute('data-category')) {
    const hashOfClickedCard = event.target.closest('.categories__container').getAttribute('data-category');

    const menuItem = [...document.querySelectorAll('.navigation__item-link')];
    menuItem.forEach((item) => {
      item.classList.remove('navigation__item-link_active');
      if (item.getAttribute('href') === hashOfClickedCard) {
        item.classList.add('navigation__item-link_active');
      }
    });
    location.hash = hashOfClickedCard;
  }
};

export default function goToClickedCategory() {
  wrapper.addEventListener('click', onCategoryClick);
}
