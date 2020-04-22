/* eslint-disable no-restricted-globals */

const onCategoryClick = (event) => {
  if (event.target.closest('.categories__container') && event.target.closest('.categories__container').hasAttribute('data-category')) {
    const hashOfClickedCard = event.target.closest('.categories__container').getAttribute('data-category');

    location.hash = hashOfClickedCard;
  }
};

export default function goToClickedCategory() {
  window.addEventListener('click', onCategoryClick);
}
