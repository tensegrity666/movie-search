/* eslint-disable no-restricted-globals */
import '../scss/main.scss';
import sideMenuToggle from './SideMenu';
import togglePageType from './TogglerHandler';
import { addHashesToAddresline } from './Routing';
import { cardsToRender } from './CardToRender';
import reverseCard from './ReverseCard';
import speakWord from './SpeakWord';
import savedState from './utils/SavedState';

cardsToRender(savedState.pageToOpenOnStart || 0);
addHashesToAddresline();
sideMenuToggle();
togglePageType();
reverseCard();
speakWord();

window.onunload = () => {
  savedState.pageToOpenOnStart = location.hash;
};
