import './styles/moviecard.css';
import { LINK_TO_CATALOG, TITLE_FONT_SIZES, RATING_STARS } from '../../constants';

function changeTitleSize() {
  const titles = document.querySelectorAll('.moviecard__title');

  Array.from(titles).forEach((title) => {
    if (title.innerText.length > 50) {
      title.style.fontSize = TITLE_FONT_SIZES.tiny;
    } else if (title.innerText.length > 25) {
      title.style.fontSize = TITLE_FONT_SIZES.small;
    }
  });
}

function addStarRating() {
  const ratings = document.querySelectorAll('.moviecard__rating');

  Array.from(ratings).map((rating) => {
    if (Math.floor(Number(rating.innerHTML)) === 1) {
      rating.innerHTML = RATING_STARS[1];
    }
    if (Math.floor(Number(rating.innerHTML)) === 2) {
      rating.innerHTML = RATING_STARS[2];
    }
    if (Math.floor(Number(rating.innerHTML)) === 3) {
      rating.innerHTML = RATING_STARS[3];
    }
    if (Math.floor(Number(rating.innerHTML)) === 4) {
      rating.innerHTML = RATING_STARS[4];
    }
    if (Math.floor(Number(rating.innerHTML)) === 5) {
      rating.innerHTML = RATING_STARS[5];
    }
    if (Math.floor(Number(rating.innerHTML)) === 6) {
      rating.innerHTML = RATING_STARS[6];
    }
    if (Math.floor(Number(rating.innerHTML)) === 7) {
      rating.innerHTML = RATING_STARS[7];
    }
    if (Math.floor(Number(rating.innerHTML)) === 8) {
      rating.innerHTML = RATING_STARS[8];
    }
    if (Math.floor(Number(rating.innerHTML)) === 9) {
      rating.innerHTML = RATING_STARS[9];
    }
    if (Math.floor(Number(rating.innerHTML)) === 10) {
      rating.innerHTML = RATING_STARS[10];
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
    <a class="moviecard__title" href=${moviepage} target="_blank"
      rel="noopener noreferrer">
      ${Title}
    </a>
  </header>
  <img
    src=${Poster}
    alt=${Title} load='lazy'>
  <p class="moviecard__year">${Year}</p>
  <span class="moviecard__rating">${imdbRating}</span>`;

  return card;
}

export { renderMovieCard, changeTitleSize, addStarRating };
