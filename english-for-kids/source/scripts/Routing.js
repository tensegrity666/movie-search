import { cardsToRender, cardList } from './CardToRender';

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
    cardsToRender(navigationCatalog[location.hash]);
  }, false);
}
