/* eslint-disable no-plusplus */

import soundEffect from '../helpers/playSoundeffect';
import SOUND_EFFECTS from '../constants/soundEffects';
import initPlay from './initPlayMode';
import check from '../state/state';

const answersArea = document.querySelector('.answers');
export const answers = [];

const onAnswerClick = (event) => {
  if (event.target.classList.contains('item__image-inner_play')) {
    const id = event.target.closest('.categories__container').getAttribute('id');

    if (id === check.currentWordId) {
      event.target.classList.add('item__image_checked');
      answers.unshift('&#128522;');
      answersArea.innerHTML = `${answers.join('')}`;

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
      answers.unshift('&#128539;');
      answersArea.innerHTML = `${answers.join('')}`;
    }
  }
};

export default function checkAnswer() {
  document.addEventListener('click', onAnswerClick);
}
