/* eslint-disable no-restricted-globals */

import data from './constants/originData';
import navigationCatalog from './constants/navigationCatalog';
import isPlayMode from './utils/isPlayMode';
import { wrapper } from './utils/createWrapper';

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
  wrapper.addEventListener('click', onCardClick);
}
