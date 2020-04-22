/* eslint-disable no-restricted-globals */

import '../scss/main.scss';
import sideMenuToggle from './SideMenu';
import togglePageType from './TogglerHandler';
import addHashesToAddresline from './Routing';
import navigationCatalog from './utils/navigationCatalog';
import cardsToRender from './CardsToRender';
import reverseCard from './ReverseCard';
import speakWord from './SpeakWord';
import goToClickedCategory from './GoToCategory';
import removeTogglerFromPage from './TogglerRemover';
import startPlaying from './PlayingProcess';

window.onload = () => {
  localStorage.clear();
  cardsToRender(localStorage.currentPageBeforeExit || 0);
  addHashesToAddresline();
  sideMenuToggle();
  togglePageType();
  reverseCard();
  speakWord();
  goToClickedCategory();
  removeTogglerFromPage();
  startPlaying();
};

window.onunload = () => {
  localStorage.currentPageBeforeExit = navigationCatalog[location.hash];
};
