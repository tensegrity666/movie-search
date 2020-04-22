
import initPlay from './PlayModeOn';
import isPlayMode from './utils/isPlayMode';
import checkAnswer from './answerCheck';

const button = document.querySelector('.start');

export default function startPlaying() {
  button.addEventListener('click', () => {
    button.innerText = 'stop...';
    initPlay(isPlayMode.play);
    checkAnswer();
  });
}
