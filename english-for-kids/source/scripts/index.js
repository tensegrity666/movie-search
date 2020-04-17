import '../scss/main.scss';
import { cardsToRender } from './CardToRender';
import { dataToProcess, CURRENT_STATE } from './Categories';
import sideMenuToggle from './SideMenuShow';
import togglePageType from './TogglerHandler';

window.onload = () => {
  dataToProcess(CURRENT_STATE.currentCategory);
  cardsToRender(CURRENT_STATE.currentCategory);
  sideMenuToggle();
  togglePageType();
};
