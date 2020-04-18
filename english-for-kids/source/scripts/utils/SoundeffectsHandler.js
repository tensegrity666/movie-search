export const SOUND_EFFECTS = {
  isSundPlay: false,
  delayForMenu: 5,
  delayForCard: 0,
  menuButton: new Audio('../assets/sounds/hover.mp3'),
  clickOnCard: new Audio('../assets/sounds/click.mp3'),
};

export function soundEffect(soundFile, delay) {
  setTimeout(() => {
    soundFile.play();
  }, delay);
}
