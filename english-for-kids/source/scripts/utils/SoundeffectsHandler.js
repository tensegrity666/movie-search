export const SOUNDEFFECTS = {
  menuButton: new Audio('../assets/sounds/hover.mp3'),
};
const AUDIO_DELAY = 20;

export function delayForSouneffect(soundFile) {
  setTimeout(() => {
    soundFile.play();
  }, AUDIO_DELAY);
}
