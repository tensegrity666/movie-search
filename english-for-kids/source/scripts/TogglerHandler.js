/* eslint-disable no-restricted-globals */

import playModeStyles from './PlayModeStyles';
import playingCardsToRender from './PlayingCardsToRender';
import cardsToRender from './CardsToRender';
import navigationCatalog from './utils/navigationCatalog';
import isPlayMode from './utils/isPlayMode';

const toggler = document.querySelector('#toggle');

export default function togglePageType() {
  toggler.addEventListener('change', () => {
    isPlayMode.play = toggler.checked;

    if (isPlayMode.play) {
      playModeStyles(isPlayMode.play);
      playingCardsToRender(navigationCatalog[location.hash]);
    } else {
      playModeStyles(isPlayMode.play);
      cardsToRender(navigationCatalog[location.hash]);
    }
  });
}
