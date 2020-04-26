/* eslint-disable no-restricted-globals */

import '../styles/main.scss';

import sideMenuToggle from './SideMenu';
import togglePageType from './TogglerHandler';
import addHashesToAddresline from './utils/routing';
import cardsToRender from './utils/renderTrainingCards';
import reverseCard from './ReverseCard';
import speakWord from './SpeakWord';
import goToClickedCategory from './goToCategory';
import startPlaying from './PlayingProcess';

cardsToRender(0);
addHashesToAddresline();
sideMenuToggle();
togglePageType();
reverseCard();
speakWord();
goToClickedCategory();
startPlaying();
