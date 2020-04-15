const cards = [{
  word: 'cry',
  translation: 'плакать',
  image: 'img/cry.jpg',
  audioSrc: 'audio/cry.mp3'
},
{
  word: 'dance',
  translation: 'танцевать',
  image: 'img/dance.jpg',
  audioSrc: 'audio/dance.mp3'
  },
{
  word: 'dive',
  translation: 'нырять',
  image: 'img/dive.jpg',
  audioSrc: 'audio/dive.mp3'
  },
{
  word: 'draw',
  translation: 'рисовать',
  image: 'img/draw.jpg',
  audioSrc: 'audio/draw.mp3'
  }];

const wrapper = document.body.querySelector('.wrapper');
const cardList = document.createElement('ul');

cardList.classList.add('categories');
wrapper.append(cardList);

cardList.insertAdjacentHTML('afterbegin', `<li class="categories__item">
      <a class="item-front" href="">
        <figure class="item">
          <picture class="item__image">
            <source class="item__image-inner" srcset="" type="image/webp">
            <img class="item__image-inner" width="320">
          </picture>
          <figcaption class="item__description">
          </figcaption>
        </figure>
      </a>
    </li>`);

