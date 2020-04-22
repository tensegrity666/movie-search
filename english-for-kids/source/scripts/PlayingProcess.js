import initPlay from './PlayModeOn';
import checkAnswer from './answerCheck';
import isPlayMode from './utils/isPlayMode';
import { SOUND_EFFECTS, soundEffect } from './utils/Soundeffects';

const button = document.querySelector('.start');
let isRepeat = true;

const onSecondClick = () => {
  if (!isRepeat) {
    soundEffect(SOUND_EFFECTS.word, SOUND_EFFECTS.delayForGame);
  }
};

const onStartButtonClick = () => {
  if (isRepeat) {
    button.innerText = 'repeat';
    initPlay(isPlayMode.play);
    checkAnswer();
    isRepeat = false;
    button.addEventListener('click', onSecondClick);
  }
};

export default function startPlaying() {
  button.addEventListener('click', onStartButtonClick);
}
