import initPlay from './PlayModeOn';
import checkAnswer from './answerCheck';
import isPlayMode from './utils/isPlayMode';
import { SOUND_EFFECTS, soundEffect } from './utils/Soundeffects';
import check from './utils/answers';

const button = document.querySelector('.start');
let isRepeat = false;

export const onSecondClick = () => {
  if (isRepeat && check.isPlaying) {
    soundEffect(SOUND_EFFECTS.word, SOUND_EFFECTS.delayForGame);
  }
};

export const onStartButtonClick = () => {
  if (!isRepeat) {
    button.innerText = 'repeat';
    initPlay(isPlayMode.play);
    checkAnswer();
    isRepeat = true;
    button.addEventListener('click', onSecondClick);
  }
};

export default function startPlaying() {
  button.addEventListener('click', onStartButtonClick);
}
