export default function soundEffect(soundFile, delay) {
  setTimeout(() => {
    soundFile.play();
  }, delay);
}
