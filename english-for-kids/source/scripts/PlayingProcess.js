
import initPlay from './PlayModeOn';

const button = document.querySelector('.start');
const toggler = document.querySelector('#toggle');

export default function startPlaying() {
  button.addEventListener('click', () => {
    initPlay(toggler.checked);
  });
}
