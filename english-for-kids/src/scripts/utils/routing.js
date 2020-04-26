import cardsToRender from './renderTrainingCards';
import scorePageToRender from '../ScorePage';
import navigationCatalog from '../constants/navigationCatalog';
import { cardList } from './createWrapper';


export default function addHashesToAddresline() {
  window.addEventListener('hashchange', () => {
    cardList.innerHTML = '';
    if (location.hash === '#score') {
      scorePageToRender();
    }
    cardsToRender(navigationCatalog[location.hash]);
  }, false);
}
