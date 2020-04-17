export const SOUND_EFFECTS = {
  isSundPlay: false,
  delayForMenu: 20,
  menuButton: new Audio('../assets/sounds/hover.mp3'),
};

export function delayForSouneffect(soundFile, delay) {
  setTimeout(() => {
    soundFile.play();
  }, delay);
}
