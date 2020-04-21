import { cardList } from './CreateWrapper';

export default function errorPageToRender() {
  const listItem = document.createElement('div');
  listItem.classList.add('error');
  listItem.innerHTML = '🤖<br>404';
  cardList.append(listItem);
  return cardList;
}
