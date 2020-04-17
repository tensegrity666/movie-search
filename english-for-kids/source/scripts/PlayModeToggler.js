const togglerLabel = document.querySelector('.toggler__description-train');
const button = document.querySelector('.start');

export default function playModeToggler(isPlay) {
  if (isPlay) {
    togglerLabel.classList.add('toggler__description-play');
    button.classList.add('start_show');
    button.setAttribute('disabled', true);
  } else {
    togglerLabel.classList.remove('toggler__description-play');
    button.classList.remove('start_show');
    button.setAttribute('disabled', false);
  }
}
