/* eslint-disable no-restricted-globals */

import cardsToRender from '../rendering/renderTrainingCards';
import navigationCatalog from '../constants/navigationCatalog';
import data from '../constants/originData';
import check from '../state/state';

export default function addHashesToAddresline() {
  window.addEventListener('hashchange', () => {
    cardsToRender(navigationCatalog[location.hash]);
    check.currentCategoryForPlay = data[navigationCatalog[location.hash]];
  }, false);
}
