import data from './utils/data';
import cardList from './utils/CreateWrapper';


const CATEGORIES_LIST = data[0];

const categoriesContent = [
  {
    id: '#actionA',
    word: `${CATEGORIES_LIST[0]}`,
    image: 'assets/images/dance.jpg',
  },
  {
    id: '#actionB',
    word: `${CATEGORIES_LIST[1]}`,
    image: 'assets/images/play.jpg',
  },
  {
    id: '#actionC',
    word: `${CATEGORIES_LIST[2]}`,
    image: 'assets/images/cry.jpg', /* TODO ADD PICS */
  },
  {
    id: '#adjective',
    word: `${CATEGORIES_LIST[3]}`,
    image: 'assets/images/cry.jpg', /* TODO: ADD PICS */
  },
  {
    id: '#animalA',
    word: `${CATEGORIES_LIST[4]}`,
    image: 'assets/images/rabbit.jpg',
  },
  {
    id: '#animalB',
    word: `${CATEGORIES_LIST[5]}`,
    image: 'assets/images/fish1.jpg',
  },
  {
    id: '#clothes',
    word: `${CATEGORIES_LIST[6]}`,
    image: 'assets/images/skirt.jpg',
  },
  {
    id: '#emotions',
    word: `${CATEGORIES_LIST[7]}`,
    image: 'assets/images/happy.jpg',
  },
];


export default function categoriesToRender() {
  categoriesContent.forEach((category) => {
    const listItem = document.createElement('li');
    listItem.classList.add('categories__container');
    listItem.setAttribute('data-category', `${category.id}`);

    listItem.innerHTML = `<div class='categories__item'>
      <div class="categories__item_front">
        <figure class="item">
          <picture class="item__image">
            <img class="item__image-inner" src=${category.image} >
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
