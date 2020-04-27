/* eslint-disable no-restricted-globals */

import navigationCatalog from '../constants/navigationCatalog';

const check = {
  mainpageIndex: 0,
  isPlaying: true,
  isInPlayMode: null,
  totalCards: 8,
  currentWordId: null,
  currentWord: null,
  rightAnswersCounter: null,
  wrongAnswersCounter: null,
  buttonInnerTextRepeat: 'repeat',
  buttonInnerTextStart: 'start',
  currentCategoryForPlay: null,
  currentLocation: navigationCatalog[location.hash],
};

export { check as default };
