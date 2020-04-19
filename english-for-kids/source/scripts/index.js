import '../scss/main.scss';
import sideMenuToggle from './SideMenu';
import togglePageType from './TogglerHandler';
import { addHashesToAddresline, navigationCatalog } from './Routing';
import { cardsToRender } from './CardToRender';
import reverseCard from './ReverseCard';
import speakWord from './SpeakWord';

cardsToRender(navigationCatalog[location.hash]);
addHashesToAddresline();
sideMenuToggle();
togglePageType();
reverseCard();
speakWord();
