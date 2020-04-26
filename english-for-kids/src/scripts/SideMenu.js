import soundEffect from './helpers/playSoundeffect';
import SOUND_EFFECTS from './constants/soundEffects';

const menu = document.querySelector('.menu');
const button = document.querySelector('.burger');
const burgerInner = button.querySelector('.burger__inner');

export default function sideMenuToggle() {
  button.addEventListener('click', () => {
    soundEffect(SOUND_EFFECTS.menuButton, SOUND_EFFECTS.delayForMenu);
    menu.classList.toggle('menu_show');
    burgerInner.classList.toggle('burger-action');
  });

  menu.onmouseleave = () => {
    menu.classList.remove('menu_show');
    burgerInner.classList.remove('burger-action');
  };
}
