/* eslint-disable no-restricted-globals */

import { wrapper } from './utils/createWrapper';

const onCategoryClick = (event) => {
  if (event.target.closest('.categories__container') && event.target.closest('.categories__container').hasAttribute('data-category')) {
    const hashOfClickedCard = event.target.closest('.categories__container').getAttribute('data-category');

    location.hash = hashOfClickedCard;
  }
};

export default function goToClickedCategory() {
  wrapper.addEventListener('click', onCategoryClick);
}
