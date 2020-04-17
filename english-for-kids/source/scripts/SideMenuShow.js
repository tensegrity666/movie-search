export default function sideMenuToggle() {
  const menu = document.querySelector('.menu');
  const button = document.querySelector('.burger');
  const burgerInner = button.querySelector('.burger__inner');
  const hoverSound = new Audio('../assets/sounds/hover.mp3');
  const AUDIO_DELAY = 50;

  const delayForSouneffect = (soundFile, delay) => setTimeout(() => {
    soundFile.play();
  }, delay);

  button.addEventListener('click', () => {
    menu.classList.toggle('menu_show');
    burgerInner.classList.toggle('burger-action');
    delayForSouneffect(hoverSound, AUDIO_DELAY);
  });

  clearTimeout(delayForSouneffect);
}
