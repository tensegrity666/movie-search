/* eslint-disable no-restricted-globals */

import data from '../constants/originData';
import mainpageToRender from './renderMainpage';
import { cardList } from '../utils/createWrapper';

const toggler = document.querySelector('.toggler');

const PAGES = {
  main: 0,
  score: 8,
};

export default function cardsToRender(index) {
  const cardIndex = Number(index);

  if (cardIndex === Number(PAGES.main)) {
    return mainpageToRender();
  }
  if (cardIndex <= Number(PAGES.score)) {
    toggler.style.display = 'flex';
    cardList.innerHTML = '';

    data[cardIndex].forEach((card) => {
      const listItem = document.createElement('li');
      listItem.classList.add('categories__container');
      listItem.setAttribute('id', `${card.id}`);

      listItem.innerHTML = `<div class='categories__item'>
      <div class='categories__item_front'>
      <figure class='item'>
        <picture class='item__image'>
            <img class='item__image-inner' src=${card.image} alt=${card.word} width='260' height='175'>
          </picture>
            <figcaption class='item__description'>
              ${card.word}
            </figcaption>
        </figure>
      </div>
      <div class='categories__item_reverse'>
        <figure class='item'>
          <picture class='item__image'>
            <img class='item__image-inner' src=${card.image} alt=${card.word} width='260' height='175'>
          </picture>
            <figcaption class='item__description'>
              ${card.translation}
            </figcaption>
        </figure>
      </div>
      <button class='categories__item-button' data-id=${card.id}>&#128472;</button>
      </div>`;
      cardList.append(listItem);
    });
  }
  return cardList;
}
