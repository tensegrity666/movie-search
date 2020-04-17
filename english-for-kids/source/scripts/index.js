import '../scss/main.scss';
import { cardsToRender } from './CardToRender';
import { dataToProcess, CURRENT_STATE } from './Categories';
import sideMenuToggle from './SideMenuShow';

dataToProcess(CURRENT_STATE.currentCategory);
cardsToRender(CURRENT_STATE.currentCategory);
sideMenuToggle();
