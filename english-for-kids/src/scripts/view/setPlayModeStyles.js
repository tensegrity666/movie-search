import { answers } from '../gameLogic/checkAnswer';
import state from '../state/state';

const togglerLabel = document.querySelector('.toggler__description-train');
const togglerOuter = document.querySelector('.toggler');
const button = document.querySelector('.start');
const categoryTitle = document.querySelector('.answers');
const body = document.querySelector('.page');

export default function playModeStyles(isPlay) {
  if (isPlay) {
    togglerLabel.classList.add('toggler__description-play');
    togglerOuter.classList.add('toggler_play');
    button.classList.add('start_show');
    button.removeAttribute('disabled');
    categoryTitle.innerText = '';
    categoryTitle.innerHTML = `${answers.join('')}`;
    body.classList.add('page-play');
    togglerLabel.innerText = state.togglerLabelPlay;
  } else {
    togglerLabel.classList.remove('toggler__description-play');
    togglerOuter.classList.remove('toggler_play');
    button.classList.remove('start_show');
    button.setAttribute('disabled', 'disabled');
    body.classList.remove('page-play');
    togglerLabel.innerText = state.togglerLabelTrain;
  }
}
