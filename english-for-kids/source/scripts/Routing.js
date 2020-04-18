import { cardsToRender, cardList } from './CardToRender';

export const CURRENT_STATE = {
  currentCategory: 0,
};

// const navigationLink = document.querySelectorAll('.navigation__item-link');

export const navigationCatalog = {
  '#main': 0,
  '#actionA': 1,
  '#actionB': 2,
  '#actionC': 3,
  '#adjective': 4,
  '#animalA': 5,
  '#animalB': 6,
  '#clothes': 7,
  '#score': 8,
};

export function addHashesToAddresline() {
  window.addEventListener('hashchange', () => {
    cardList.innerHTML = '';
    CURRENT_STATE.currentCategory = navigationCatalog[location.hash];
    cardsToRender(CURRENT_STATE.currentCategory);
  }, false);

  // navigationLink.forEach((link) => {
  //   link.addEventListener('click', () => {
  //     index = Number.parseInt(link.getAttribute('data-id'), 10);
  //     console.log(index);
  //     cardsToRender(index);
  //   });
  // });
}

// window.addEventListener('hashchange', () => {
//   CURRENT_STATE.currentCategory = navigationCatalog[location.hash];
//   console.log(navigationCatalog[location.hash]);
//   console.log(i);
//   cardsToRender(1);
// }, false);