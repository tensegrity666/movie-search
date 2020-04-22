import { cardList } from './CreateWrapper';

export default function errorPageToRender() {
  const listItem = document.createElement('div');
  listItem.classList.add('error');
  listItem.innerHTML = '🤖<br>&#128072; open menu, please';
  cardList.append(listItem);
  return cardList;
}
