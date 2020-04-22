/* eslint-disable no-restricted-globals */

import { SOUND_EFFECTS, soundEffect } from './utils/Soundeffects';
import navigationCatalog from './utils/navigationCatalog';
import data from './utils/data';
import check from './utils/answers';
import showTotalPage from './utils/ShowTotalPage';
import shuffled from './utils/shuffleArrayWithWords';

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
    showTotalPage();
  }
}
