import '../scss/main.scss';
import { cardsToRender } from './CardToRender.js';
import { dataToProcess, CURRENT_STATE } from './Categories.js';

dataToProcess(CURRENT_STATE.currentCategory);
cardsToRender(CURRENT_STATE.currentCategory);
