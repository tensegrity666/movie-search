/* eslint-disable no-plusplus */

import { SOUND_EFFECTS, soundEffect } from './utils/Soundeffects';
import initPlay from './PlayModeOn';
import check from './utils/answers';

const onAnswerClick = (event) => {
  if (event.target.classList.contains('item__image-inner_play')) {
    const id = event.target.closest('.categories__container').getAttribute('id');

    if (id === check.currentWordId) {
      soundEffect(SOUND_EFFECTS.clickOnCard, SOUND_EFFECTS.delayForCard);
      check.rightAnswersCounter++;

      if (check.rightAnswersCounter !== check.totalCards) {
        initPlay(check.isPlaying);
      } else {
        check.isPlaying = false;
        initPlay(check.isPlaying);
      }
    } else {
      soundEffect(SOUND_EFFECTS.wrongAnswer, SOUND_EFFECTS.delayForCard);
      check.wrongAnswersCounter++;
    }
  }
};

export default function checkAnswer() {
  document.addEventListener('click', onAnswerClick);
}
