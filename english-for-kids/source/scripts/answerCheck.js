import { SOUND_EFFECTS, soundEffect } from './utils/Soundeffects';
import initPlay from './PlayModeOn';
import check from './utils/answers';

const onAnswerClick = (event) => {
  if (check.rightAnswersCounter) {
    if (event.target.classList.contains('item__image-inner_play')) {
      const id = event.target.closest('.categories__container').getAttribute('id');

      if (id === check.currentWord) {
        soundEffect(SOUND_EFFECTS.clickOnCard, SOUND_EFFECTS.delayForCard);
        check.rightAnswersCounter--;
        initPlay(check.rightAnswersCounter);
      }
    }
  }
};

export default function checkAnswer() {
  document.addEventListener('click', onAnswerClick);
}
