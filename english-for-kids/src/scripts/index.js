/* eslint-disable no-restricted-globals */

import '../styles/main.scss';

import sideMenuToggle from './showSideMenu';
import togglePageType from './togglePageMode';
import addHashesToAddresline from './utils/routing';
import cardsToRender from './rendering/renderTrainingCards';
import reverseCard from './ReverseCard';
import speakWord from './speakWord';
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
