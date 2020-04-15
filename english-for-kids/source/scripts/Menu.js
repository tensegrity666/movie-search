const text = 'wefewfwefewfg';
const sources = '/assets/images/categories/action/cry.jpg';
const wrapper = document.body.querySelector('.wrapper');
const cardList = document.createElement('ul');

cardList.classList.add('categories');
wrapper.prepend(cardList);

cardList.insertAdjacentHTML('afterbegin', `<li class="categories__item">
      <a class="item-front" href="">
        <figure class="item">
          <picture class="item__image">
            <source class="item__image-inner" srcset="" type="image/webp">
            <img class="item__image-inner" scr=${sources} width="320">
          </picture>
          <figcaption class="item__description">
            ${text}
          </figcaption>
        </figure>
      </a>
    </li>`);
