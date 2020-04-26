import soundEffect from './helpers/playSoundeffect';
import SOUND_EFFECTS from './constants/soundEffects';
import { wrapper } from './utils/createWrapper';

const onButtonClick = (event) => {
  if (event.target.classList.contains('categories__item-button')) {
    event.target.parentElement.classList.add('categories__item-rotate');
    event.target.classList.add('categories__item-button-rotate');
    soundEffect(SOUND_EFFECTS.clickOnCard, SOUND_EFFECTS.delayForCard);

    const onMouseLeave = () => {
      event.target.parentElement.classList.remove('categories__item-rotate');
      event.target.classList.remove('categories__item-button-rotate');
    };

    const currentId = event.target.dataset.id;
    const currentElement = document.getElementById(currentId);
    currentElement.addEventListener('mouseleave', onMouseLeave);
  }
};

export default function reverseCard() {
  wrapper.addEventListener('click', onButtonClick);
}
