const togglerLabel = document.querySelector('.toggler__description-train');
const togglerOuter = document.querySelector('.toggler');
const button = document.querySelector('.start');
const card = document.querySelector('.item');

export default function playModeToggler(isTrain) {
  if (isTrain) {
    togglerLabel.classList.add('toggler__description-play');
    togglerOuter.classList.add('toggler_play');
    button.classList.add('start_show');
    button.setAttribute('disabled', true);
    togglerLabel.innerText = 'play';
  } else {
    togglerLabel.classList.remove('toggler__description-play');
    togglerOuter.classList.remove('toggler_play');
    button.classList.remove('start_show');
    cards.forEach((card) => card.classList.remove('item_play'));
    button.setAttribute('disabled', false);
    togglerLabel.innerText = 'train';
  }
}
