/* eslint-disable no-restricted-globals */

import cardsToRender from '../rendering/renderTrainingCards';
import scorePageToRender from '../rendering/renderScorePage';
import navigationCatalog from '../constants/navigationCatalog';
import data from '../constants/originData';
import check from '../state/state';

export default function addHashesToAddresline() {
  window.addEventListener('hashchange', () => {
    if (location.hash === '#score') {
      scorePageToRender();
    }
    cardsToRender(navigationCatalog[location.hash]);
    check.currentCategoryForPlay = data[navigationCatalog[location.hash]];
  }, false);
}
