import data from './data';
import { cardList } from './CardToRender';

const CATEGORIES_LIST = data[0];

const categoriesContent = [
  {
    id: '0',
    word: `${CATEGORIES_LIST[0]}`,
    image: 'assets/images/dance.jpg',
  },
  {
    id: '1',
    word: `${CATEGORIES_LIST[1]}`,
    image: 'assets/images/play.jpg',
  },
  {
    id: '2',
    word: `${CATEGORIES_LIST[2]}`,
    image: 'assets/images/cry.jpg', /* TODO ADD PICS */
  },
  {
    id: '3',
    word: `${CATEGORIES_LIST[3]}`,
    image: 'assets/images/cry.jpg', /* TODO: ADD PICS */
  },
  {
    id: '4',
    word: `${CATEGORIES_LIST[4]}`,
    image: 'assets/images/rabbit.jpg',
  },
  {
    id: '5',
    word: `${CATEGORIES_LIST[5]}`,
    image: 'assets/images/fish1.jpg',
  },
  {
    id: '6',
    word: `${CATEGORIES_LIST[6]}`,
    image: 'assets/images/skirt.jpg',
  },
  {
    id: '7',
    word: `${CATEGORIES_LIST[7]}`,
    image: 'assets/images/happy.jpg',
  },
];


export default function categoriesToRender() {
  categoriesContent.forEach((category) => {
    const listItem = document.createElement('li');
    listItem.classList.add('categories__item');
    listItem.innerHTML = `<div class="categories__item_front">
      <figure class="item">
        <picture class="item__image">
          <img class="item__image-inner" src=${category.image} >
        </picture>
        <figcaption class="item__description">
          ${category.word}
        </figcaption>
      </figure>
    </div>`;
    cardList.append(listItem);
  });
  return cardList;
}
