/* eslint-disable no-restricted-globals */

import data from './utils/data';
import navigationCatalog from './utils/navigationCatalog';
import isPlayMode from './utils/isPlayMode';

const onCardClick = (event) => {
  if (!isPlayMode.play) {
    if (event.target.closest('.categories__container') && event.target.closest('.categories__container').hasAttribute('id') && !event.target.classList.contains('categories__item-button')) {
      const id = event.target.closest('.categories__container').getAttribute('id');
      const currentLocation = data[navigationCatalog[location.hash]];
      const currentCard = currentLocation[id];
      const voice = new Audio(currentCard.audioSrc);
      voice.play();
    }
  }
};

export default function speakWord() {
  window.addEventListener('click', onCardClick);
}
