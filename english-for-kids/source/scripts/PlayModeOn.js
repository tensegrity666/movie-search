import { SOUND_EFFECTS, soundEffect } from './utils/Soundeffects';
import { navigationCatalog } from './Routing';
import data from './utils/data';

const randomizer = (arrayLength) => Math.floor(Math.random() * arrayLength);

export default function initPlay(isPlay) {
  if (isPlay) {
    const playground = data[navigationCatalog[location.hash]];
    const randomWord = randomizer(playground.length);
    const wordToSpeak = playground[randomWord];
    SOUND_EFFECTS.word = new Audio(wordToSpeak.audioSrc);
    soundEffect(SOUND_EFFECTS.word, SOUND_EFFECTS.delayForGame);
  }
}
