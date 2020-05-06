/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */

import './styles/moviecard.css';
import { LINK_TO_CATALOG, RATING_STARS } from '../../constants';

function changeTitleSize() {
  const titles = document.querySelectorAll('.moviecard__title');

  Array.from(titles).forEach((title) => {
    if (title.innerText.length > 50) {
      title.classList.add('moviecard__title_tiny');
    } else if (title.innerText.length > 25) {
      title.classList.add('moviecard__title_small');
    }
  });
}

function addStarRating() {
  const ratings = document.querySelectorAll('.moviecard__rating');

  Array.from(ratings).forEach((element) => {
    element.innerHTML = RATING_STARS[Math.floor(element.dataset.rating)];
  });
}

function renderMovieCard(movie) {
  const {
    Title, Year, Poster, imdbID, imdbRating,
  } = movie;

  const moviepage = `${LINK_TO_CATALOG}${imdbID}`;
  const card = document.createElement('li');

  card.classList.add('moviecard', 'swiper-slide');

  card.innerHTML = `<header>
    <a class='moviecard__title' href=${moviepage} target='_blank'
      rel='noopener noreferrer'>
      ${Title}
    </a>
  </header>
  <img
    src=${Poster}
    alt=${Title} load='lazy'>
  <p class='moviecard__year'>${Year}</p>
  <span class='visually-hidden'>IMDB Rating: ${imdbRating}</span>
  <span class='moviecard__rating' data-rating=${imdbRating}></span>`;

  changeTitleSize();
  addStarRating();

  return card;
}

export default renderMovieCard;
