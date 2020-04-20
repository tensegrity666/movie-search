import data from './utils/data';
import categoriesToRender from './CategoriesToRender';
import cardList from './utils/CreateWrapper';

export default function cardsToRender(index) {
  const cardIndex = Number(index);
  if (cardIndex !== 0 && cardIndex !== undefined && !isNaN(cardIndex)) {
    data[cardIndex].forEach((card) => {
      const listItem = document.createElement('li');
      listItem.classList.add('categories__container');
      listItem.setAttribute('id', `${card.id}`);

      listItem.innerHTML = `<div class='categories__item'>
      <div class='categories__item_front'>
      <figure class='item'>
        <picture class='item__image'>
            <img class='item__image-inner' src=${card.image} alt=${card.word} >
          </picture>
            <figcaption class='item__description'>
              ${card.word}
            </figcaption>
        </figure>
      </div>
      <div class='categories__item_reverse'>
        <figure class='item'>
          <picture class='item__image'>
            <img class='item__image-inner' src=${card.image} alt=${card.word} >
          </picture>
            <figcaption class='item__description'>
              ${card.translation}
            </figcaption>
        </figure>
      </div>
      <button class='categories__item-button' data-id=${card.id}>🗘</button>
      </div>`;

      cardList.append(listItem);
    });
  } else if (cardIndex === 0) {
    categoriesToRender();
  }
}
