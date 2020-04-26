/* eslint-disable no-restricted-globals */

import playModeStyles from './setPlayModeStyles';
import playingCardsToRender from '../rendering/renderPlayingCards';
import cardsToRender from '../rendering/renderTrainingCards';
import navigationCatalog from '../constants/navigationCatalog';
import check from '../state/state';

const toggler = document.querySelector('#toggle');

const onTogglerChange = () => {
  check.isInPlayMode = toggler.checked;

  if (check.isInPlayMode) {
    playModeStyles(check.isInPlayMode);
    playingCardsToRender(navigationCatalog[location.hash]);
  } else {
    playModeStyles(check.isInPlayMode);
    cardsToRender(navigationCatalog[location.hash]);
  }
};

export default function togglePageType() {
  toggler.addEventListener('change', onTogglerChange);
}
