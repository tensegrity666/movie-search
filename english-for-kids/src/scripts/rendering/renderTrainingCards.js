/* eslint-disable no-restricted-globals */

import data from '../constants/originData';
import mainpageToRender, { CATEGORIES_LIST } from './renderMainpage';
import { cardList, wrapper } from '../utils/createWrapper';
import check from '../state/state';

const toggler = document.querySelector('.toggler');
const categoryTitle = document.querySelector('.answers');

export default function cardsToRender(index) {
  const cardIndex = Number(index);
  const INDEX_FOR_HEADING = cardIndex - 1;

  const heading = document.createElement('h2');
  if (CATEGORIES_LIST[INDEX_FOR_HEADING] === undefined) {
    heading.innerHTML = 'Main';
  }
  heading.innerHTML = `${CATEGORIES_LIST[INDEX_FOR_HEADING]}`;
  heading.classList.add('visually-hidden');
  wrapper.prepend(heading);

  if (cardIndex === Number(check.mainpageIndex)) {
    return mainpageToRender();
  }
  categoryTitle.innerText = `${CATEGORIES_LIST[INDEX_FOR_HEADING]}`;
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
  return cardList;
}
