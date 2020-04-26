import data from '../constants/originData';
import { cardList } from '../utils/createWrapper';

const CATEGORIES_LIST = data[0];
const toggler = document.querySelector('.toggler');

const categoriesContent = [
  {
    id: '#actionA',
    word: `${CATEGORIES_LIST[0]}`,
    image: 'assets/images/dance.jpg',
    alt: 'actions',
  },
  {
    id: '#actionB',
    word: `${CATEGORIES_LIST[1]}`,
    image: 'assets/images/sing.jpg',
    alt: 'actions',
  },
  {
    id: '#actionC',
    word: `${CATEGORIES_LIST[2]}`,
    image: 'assets/images/argue.jpg',
    alt: 'actions',
  },
  {
    id: '#adjective',
    word: `${CATEGORIES_LIST[3]}`,
    image: 'assets/images/friendly.jpg',
    alt: 'adjectives',
  },
  {
    id: '#animalA',
    word: `${CATEGORIES_LIST[4]}`,
    image: 'assets/images/rabbit.jpg',
    alt: 'animals',
  },
  {
    id: '#animalB',
    word: `${CATEGORIES_LIST[5]}`,
    image: 'assets/images/turtle.jpg',
    alt: 'animals',
  },
  {
    id: '#clothes',
    word: `${CATEGORIES_LIST[6]}`,
    image: 'assets/images/skirt.jpg',
    alt: 'clothes',
  },
  {
    id: '#emotions',
    word: `${CATEGORIES_LIST[7]}`,
    image: 'assets/images/happy.jpg',
    alt: 'emotions',
  },
];

export default function mainpageToRender() {
  toggler.style.display = 'none';
  cardList.innerHTML = '';
  categoriesContent.forEach((category) => {
    const listItem = document.createElement('li');
    listItem.classList.add('categories__container');
    listItem.setAttribute('data-category', `${category.id}`);

    listItem.innerHTML = `<div class='categories__item'>
      <div class="categories__item_front">
        <figure class="item">
          <picture class="item__image">
            <img class="item__image-inner" src=${category.image} alt=${category.alt}>
          </picture>
          <figcaption class="item__description">
            ${category.word}
          </figcaption>
        </figure>
      </div>
    </div>`;
    cardList.append(listItem);
  });
  return cardList;
}
