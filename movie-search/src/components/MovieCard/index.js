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
    if (Math.floor(element.dataset.rating) === 1) {
      element.innerHTML = RATING_STARS[1];
    }
    if (Math.floor(element.dataset.rating) === 2) {
      element.innerHTML = RATING_STARS[2];
    }
    if (Math.floor(element.dataset.rating) === 3) {
      element.innerHTML = RATING_STARS[3];
    }
    if (Math.floor(element.dataset.rating) === 4) {
      element.innerHTML = RATING_STARS[4];
    }
    if (Math.floor(element.dataset.rating) === 5) {
      element.innerHTML = RATING_STARS[5];
    }
    if (Math.floor(element.dataset.rating) === 6) {
      element.innerHTML = RATING_STARS[6];
    }
    if (Math.floor(element.dataset.rating) === 7) {
      element.innerHTML = RATING_STARS[7];
    }
    if (Math.floor(element.dataset.rating) === 8) {
      element.innerHTML = RATING_STARS[8];
    }
    if (Math.floor(element.dataset.rating) === 9) {
      element.innerHTML = RATING_STARS[9];
    }
    if (Math.floor(element.dataset.rating) === 10) {
      element.innerHTML = RATING_STARS[10];
    }
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
  <span class='visually-hidden'>${imdbRating}</span>
  <span class='moviecard__rating' data-rating=${imdbRating}></span>`;

  return card;
}

export { renderMovieCard, changeTitleSize, addStarRating };
