/* eslint-disable no-restricted-globals */

import { cardList } from '../utils/createWrapper';
import soundEffect from '../helpers/playSoundeffect';
import SOUND_EFFECTS from '../constants/soundEffects';
import check from '../state/state';

const button = document.querySelector('.start');
const toggler = document.querySelector('.toggler');
const answers = document.querySelector('.answers');
const RELOAD_TIMEOUT_WIN = 6700;
const RELOAD_TIMEOUT_LOSE = 2000;

const hideControlsAfterGame = () => {
  button.classList.remove('start_show');
  button.setAttribute('disabled', 'disabled');
  answers.classList.remove('answers_show');
  answers.innerText = '';
  location.hash = '#main';
};

export default function showTotalPage(isLose) {
  toggler.style.display = 'none';
  cardList.innerHTML = '';
  button.innerText = 'return';
  const listItem = document.createElement('div');
  listItem.classList.add('result');
  check.isInPlayMode = 'false';
  if (!isLose) {
    listItem.innerHTML = '&#128568;<br>you win!';
    cardList.append(listItem);
    soundEffect(SOUND_EFFECTS.win, SOUND_EFFECTS.delayForGame);
    setTimeout(() => {
      hideControlsAfterGame();
    }, RELOAD_TIMEOUT_WIN);
  }
  if (isLose) {
    listItem.innerHTML = `&#128575;<br>
    try again...<br>
    wrong answers: ${check.wrongAnswersCounter}`;
    cardList.append(listItem);
    soundEffect(SOUND_EFFECTS.fail, SOUND_EFFECTS.delayForGame);
    setTimeout(() => {
      hideControlsAfterGame();
    }, RELOAD_TIMEOUT_LOSE);
  }
  button.addEventListener('click', hideControlsAfterGame);
}
