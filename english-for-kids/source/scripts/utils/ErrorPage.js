import cardList from './CreateWrapper';

const toggler = document.querySelector('.toggler');

export default function errorPageToRender() {
  const listItem = document.createElement('div');
  listItem.classList.add('error');
  toggler.style.display = 'none';
  listItem.innerHTML = '🤖<br>404';
  cardList.append(listItem);
  return cardList;
}
