import { SOUND_EFFECTS, soundEffect } from './utils/Soundeffects';

const menu = document.querySelector('.menu');
const button = document.querySelector('.burger');
const burgerInner = button.querySelector('.burger__inner');

export default function sideMenuToggle() {
  button.addEventListener('click', () => {
    SOUND_EFFECTS.isSoundPlay = true;
    soundEffect(SOUND_EFFECTS.menuButton, SOUND_EFFECTS.delayForMenu);
    menu.classList.toggle('menu_show');
    burgerInner.classList.toggle('burger-action');
    SOUND_EFFECTS.isSoundPlay = false;
  });

  menu.onmouseleave = () => {
    menu.classList.remove('menu_show');
    burgerInner.classList.remove('burger-action');
  };

  clearTimeout(soundEffect);
}
