import { cardList } from './CreateWrapper';
import { SOUND_EFFECTS, soundEffect } from './Soundeffects';

const button = document.querySelector('.start');
const toggler = document.querySelector('.toggler');

export default function showTotalPage(isWin) {
  toggler.style.display = 'none';
  cardList.innerHTML = '';
  button.innerText = 'go to main page';
  const listItem = document.createElement('div');
  listItem.classList.add('error');
  if (isWin) {
    listItem.innerHTML = '&#128568;<br>you win!';
    cardList.append(listItem);
    soundEffect(SOUND_EFFECTS.win, SOUND_EFFECTS.delayForGame);
  } else {
    listItem.innerHTML = '&#128575;<br>Try again...';
    cardList.append(listItem);
    soundEffect(SOUND_EFFECTS.fail, SOUND_EFFECTS.delayForGame);
  }
  button.addEventListener('click', () => {
    location.hash = '#main';
    button.setAttribute('disabled', 'disabled');
    button.classList.remove('start_show');
  });
}
