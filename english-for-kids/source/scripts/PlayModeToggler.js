const togglerLabel = document.querySelector('.toggler__description-train');
const togglerOuter = document.querySelector('.toggler');
const button = document.querySelector('.start');
const answers = document.querySelector('.answers');
const body = document.querySelector('.page');

export default function playModeToggler(isTrain) {
  if (isTrain) {
    togglerLabel.classList.add('toggler__description-play');
    togglerOuter.classList.add('toggler_play');
    button.classList.add('start_show');
    button.setAttribute('disabled', true);
    answers.classList.add('answers_show');
    body.classList.add('page-play');
    togglerLabel.innerText = 'play';
  } else {
    togglerLabel.classList.remove('toggler__description-play');
    togglerOuter.classList.remove('toggler_play');
    button.classList.remove('start_show');
    button.setAttribute('disabled', false);
    answers.classList.remove('answers_show');
    body.classList.remove('page-play');
    togglerLabel.innerText = 'train';
  }
}
