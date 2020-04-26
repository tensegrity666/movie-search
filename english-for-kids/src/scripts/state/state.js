import navigationCatalog from '../constants/navigationCatalog';

const check = {
  isPlaying: true,
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
