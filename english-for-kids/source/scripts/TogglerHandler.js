import playModeStyles from './PlayModeStyles';
import playingCardsToRender from './PlayingCardsToRender';
import cardsToRender from './CardsToRender';
import { navigationCatalog } from './Routing';

const toggler = document.querySelector('#toggle');

export default function togglePageType() {
  toggler.addEventListener('change', () => {
    if (toggler.checked) {
      playModeStyles(toggler.checked);
      playingCardsToRender(navigationCatalog[location.hash]);
    } else {
      playModeStyles(toggler.checked);
      cardsToRender(navigationCatalog[location.hash]);
    }
  });
}
