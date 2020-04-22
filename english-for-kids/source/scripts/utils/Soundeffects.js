export const SOUND_EFFECTS = {
  delayForMenu: 0,
  delayForCard: 5,
  delayForGame: 1000,
  menuButton: new Audio('../assets/sounds/hover.mp3'),
  clickOnCard: new Audio('../assets/sounds/click.mp3'),
  wrongAnswer: new Audio('../assets/sounds/bad.mp3'),
  win: new Audio('../assets/sounds/win.mp3'),
  fail: new Audio('../assets/sounds/fail.mp3'),
  word: null,
};

export function soundEffect(soundFile, delay) {
  setTimeout(() => {
    soundFile.play();
  }, delay);
}
