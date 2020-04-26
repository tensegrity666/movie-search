/* eslint-disable no-restricted-globals */

import playModeStyles from './setPlayModeStyles';
import playingCardsToRender from './utils/renderPlayingCards';
import cardsToRender from './utils/renderTrainingCards';
import navigationCatalog from './constants/navigationCatalog';
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
