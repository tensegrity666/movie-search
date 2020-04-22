import cardsToRender from './CardsToRender';
import scorePageToRender from './ScorePage';
import navigationCatalog from './utils/navigationCatalog';
import { cardList } from './utils/CreateWrapper';


export default function addHashesToAddresline() {
  window.addEventListener('hashchange', () => {
    cardList.innerHTML = '';
    if (location.hash === '#score') {
      scorePageToRender();
    }
    cardsToRender(navigationCatalog[location.hash]);
  }, false);
}
