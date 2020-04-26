/* eslint-disable no-restricted-globals */

import soundEffect from './helpers/playSoundeffect';
import SOUND_EFFECTS from './constants/soundEffects';
import check from './state/state';
import showTotalPage from './rendering/renderTotalPage';
import shuffled from './helpers/shuffleArrayWithWords';

export default function initPlay(isPlay) {
  if (isPlay && shuffled.length > 0) {
    const randomWord = shuffled.pop();
    const categoryForPlay = check.currentCategoryForPlay;
    const wordToSpeak = categoryForPlay[randomWord];
    check.currentWordId = wordToSpeak.id;
    check.currentWord = wordToSpeak.word;
    SOUND_EFFECTS.word = new Audio(wordToSpeak.audioSrc);
    soundEffect(SOUND_EFFECTS.word, SOUND_EFFECTS.delayForGame);
  }
  if (!isPlay) {
    showTotalPage(check.wrongAnswersCounter);
  }
}
