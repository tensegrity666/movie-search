/* eslint-disable no-restricted-globals */

import data from '../constants/originData';
import soundEffect from '../helpers/playSoundeffect';
import SOUND_EFFECTS from '../constants/soundEffects';
import check from '../state/state';
import showTotalPage from '../rendering/renderTotalPage';
import shuffled from '../helpers/shuffleArrayWithWords';
import navigationCatalog from '../constants/navigationCatalog';

export default function initPlay(isPlay) {
  if (isPlay && shuffled.length > 0) {
    const randomWord = shuffled.pop();
    const choosenCategory = navigationCatalog[location.hash];
    const startingArray = data[choosenCategory];
    const startingWord = startingArray[randomWord];
    check.currentWordId = startingWord.id;
    check.currentWord = startingWord.word;
    SOUND_EFFECTS.word = new Audio(startingWord.audioSrc);
    soundEffect(SOUND_EFFECTS.word, SOUND_EFFECTS.delayForGame);
  }
  if (!isPlay) {
    showTotalPage(check.wrongAnswersCounter);
  }
}
