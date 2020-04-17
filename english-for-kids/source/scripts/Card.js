import data from './data';

const wrapper = document.body.querySelector('.wrapper');
const cardList = document.createElement('ul');

cardList.classList.add('categories');
wrapper.prepend(cardList);

export default function categoryOfCardsToRender(index) {
  if (index) {
    data[index].forEach((card) => {
      const listItem = document.createElement('li');
      listItem.classList.add('categories__item');

      listItem.innerHTML = `<div class="categories__item_front">
      <figure class="item">
        <picture class="item__image">
            <img class="item__image-inner" src=${card.image} >
          </picture>
            <figcaption class="item__description">
              ${card.word}
            </figcaption>
        </figure>
      </div>
      <div class="categories__item_reverse">
        <figure class="item">
          <picture class="item__image">
            <img class="item__image-inner" src=${card.image} >
          </picture>
            <figcaption class="item__description">
              ${card.translation}
            </figcaption>
        </figure>
      </div>
      <button class="categories__item-button">Q</button>`;

      cardList.append(listItem);
    });
  }
}
