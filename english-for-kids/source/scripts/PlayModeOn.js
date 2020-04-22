import { SOUND_EFFECTS, soundEffect } from './utils/Soundeffects';
import navigationCatalog from './utils/navigationCatalog';
import data from './utils/data';
import check from './utils/answers';
import shuffled from './utils/shuffleArrayWithWords';

const playground = data[navigationCatalog[location.hash]];

export default function initPlay(isPlay) {
  if (isPlay) {
    const randomWord = shuffled.pop();
    console.log(shuffled);
    const wordToSpeak = playground[randomWord];
    check.currentWord = wordToSpeak.id;
    SOUND_EFFECTS.word = new Audio(wordToSpeak.audioSrc);
    soundEffect(SOUND_EFFECTS.word, SOUND_EFFECTS.delayForGame);
  }
}
