import data from './utils/data';
import { cardList } from './utils/CreateWrapper';

export default function playingCardsToRender(index) {
  cardList.innerHTML = '';
  data[index].forEach((card) => {
    const listItem = document.createElement('li');
    listItem.classList.add('categories__container');
    listItem.setAttribute('id', `${card.id}`);

    listItem.innerHTML = `<div class='categories__item'>
      <div class='categories__item_front'>
        <div class='item'>
          <div class='item__image'>
            <img class='item__image-inner item__image-inner_play' src=${card.image} alt='guess' width='260' height='175'>
          </div>
        </div>
      </div>
    </div>`;
    cardList.append(listItem);
  });
}
