import { SOUND_EFFECTS, delayForSouneffect } from './utils/SoundeffectsHandler';

const menu = document.querySelector('.menu');
const button = document.querySelector('.burger');
const burgerInner = button.querySelector('.burger__inner');
const page = document.querySelector('.page');

export default function sideMenuToggle() {
  button.addEventListener('click', () => {
    SOUND_EFFECTS.isSoundPlay = true;
    page.classList.toggle('page-noscroll');
    menu.classList.toggle('menu_show');
    burgerInner.classList.toggle('burger-action');
    delayForSouneffect(SOUND_EFFECTS.menuButton, SOUND_EFFECTS.delayForMenu);
  });

  clearTimeout(delayForSouneffect);
}
