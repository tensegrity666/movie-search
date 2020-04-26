/* eslint-disable no-restricted-globals */

import { cardList } from './createWrapper';
import soundEffect from '../helpers/playSoundeffect';
import SOUND_EFFECTS from '../constants/soundEffects';
import check from './answers';
import isPlayMode from './isPlayMode';

const button = document.querySelector('.start');
const toggler = document.querySelector('.toggler');
const answers = document.querySelector('.answers');
const RELOAD_TIMEOUT = 500;

export default function showTotalPage(isLose) {
  toggler.style.display = 'none';
  cardList.innerHTML = '';
  button.innerText = 'return';
  const listItem = document.createElement('div');
  listItem.classList.add('result');
  isPlayMode.play = 'false';
  if (!isLose) {
    listItem.innerHTML = '&#128568;<br>you win!';
    cardList.append(listItem);
    soundEffect(SOUND_EFFECTS.win, SOUND_EFFECTS.delayForGame);
  }
  if (isLose) {
    listItem.innerHTML = `&#128575;<br>
    try again...<br>
    wrong answers: ${check.wrongAnswersCounter}`;
    cardList.append(listItem);
    soundEffect(SOUND_EFFECTS.fail, SOUND_EFFECTS.delayForGame);
  }
  button.addEventListener('click', () => {
    button.classList.remove('start_show');
    button.setAttribute('disabled', 'disabled');
    answers.classList.remove('answers_show');
    answers.innerText = '';
    setTimeout(() => {
      location.reload();
    }, RELOAD_TIMEOUT);
  });
}
