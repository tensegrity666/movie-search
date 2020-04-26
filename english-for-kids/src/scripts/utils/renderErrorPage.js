import { cardList } from './createWrapper';

export default function errorPageToRender() {
  const listItem = document.createElement('div');
  listItem.classList.add('error');
  listItem.innerHTML = '&#129302;<br>&#128072; open menu, please';
  cardList.append(listItem);
  return cardList;
}
