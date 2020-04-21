/* eslint-disable no-restricted-globals */

import '../scss/main.scss';
import sideMenuToggle from './SideMenu';
import togglePageType from './TogglerHandler';
import { addHashesToAddresline, navigationCatalog } from './Routing';
import cardsToRender from './CardsToRender';
import reverseCard from './ReverseCard';
import speakWord from './SpeakWord';
import goToClickedCategory from './GoToCategory';
import removeTogglerFromPage from './TogglerRemover';

window.onload = () => {
  cardsToRender(localStorage.currentPageBeforeExit || 0);
  addHashesToAddresline();
  sideMenuToggle();
  togglePageType();
  reverseCard();
  speakWord();
  goToClickedCategory();
  removeTogglerFromPage();
};

window.onunload = () => {
  localStorage.currentPageBeforeExit = navigationCatalog[location.hash];
};
