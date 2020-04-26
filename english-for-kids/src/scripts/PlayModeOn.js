/* eslint-disable no-restricted-globals */

import soundEffect from './helpers/playSoundeffect';
import SOUND_EFFECTS from './constants/soundEffects';
import navigationCatalog from './constants/navigationCatalog';
import data from './constants/originData';
import check from './utils/answers';
import showTotalPage from './utils/renderTotalPage';
import shuffled from './helpers/shuffleArrayWithWords';

const playground = data[navigationCatalog[location.hash]];

export default function initPlay(isPlay) {
  if (isPlay && shuffled.length > 0) {
    const randomWord = shuffled.pop();
    const wordToSpeak = playground[randomWord];
    check.currentWordId = wordToSpeak.id;
    check.currentWord = wordToSpeak.word;
    SOUND_EFFECTS.word = new Audio(wordToSpeak.audioSrc);
    soundEffect(SOUND_EFFECTS.word, SOUND_EFFECTS.delayForGame);
  }
  if (!isPlay) {
    showTotalPage(check.wrongAnswersCounter);
  }
}
