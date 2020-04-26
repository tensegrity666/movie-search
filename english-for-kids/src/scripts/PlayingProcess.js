import initPlay from './initPlayMode';
import checkAnswer from './checkAnswer';
import isPlayMode from './utils/isPlayMode';
import soundEffect from './helpers/playSoundeffect';
import SOUND_EFFECTS from './constants/soundEffects';
import check from './state/state';

const button = document.querySelector('.start');
let isRepeat = false;

export const onSecondClick = () => {
  if (isRepeat && check.isPlaying) {
    soundEffect(SOUND_EFFECTS.word, SOUND_EFFECTS.delayForGame);
  }
};

export const onStartButtonClick = () => {
  if (!isRepeat) {
    button.innerText = `${check.buttonInnerTextRepeat}`;
    initPlay(isPlayMode.play);
    checkAnswer();
    isRepeat = true;
    button.addEventListener('click', onSecondClick);
  }
};

export default function startPlaying() {
  button.addEventListener('click', onStartButtonClick);
}
