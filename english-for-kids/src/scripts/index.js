/* eslint-disable no-restricted-globals */

import '../styles/main.scss';

import sideMenuToggle from './showSideMenu';
import togglePageType from './togglePageMode';
import addHashesToAddresline from './utils/routing';
import cardsToRender from './rendering/renderTrainingCards';
import reverseCard from './reverseCard';
import speakWord from './speakWord';
import goToClickedCategory from './goToCategory';
import startPlaying from './gameLogic/PlayingProcess';
import state from './state/state';

cardsToRender(state.currentLocation);
addHashesToAddresline();
sideMenuToggle();
togglePageType();
reverseCard();
speakWord();
goToClickedCategory();
startPlaying();
