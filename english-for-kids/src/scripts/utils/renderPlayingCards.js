import data from '../constants/originData';
import { cardList } from './createWrapper';

export default function playingCardsToRender(index) {
  cardList.innerHTML = '';
  data[index].forEach((card) => {
    const listItem = document.createElement('li');
    listItem.classList.add('categories__container');
    listItem.setAttribute('id', `${card.id}`);

    listItem.innerHTML = `<div class='categories__item'>
      <div class='categories__item_front'>
        <div class='item item_play'>
          <div class='item__image_play'>
            <img class='item__image-inner_play' src=${card.image} alt='guess'>
          </div>
        </div>
      </div>
    </div>`;
    cardList.append(listItem);
  });
}
