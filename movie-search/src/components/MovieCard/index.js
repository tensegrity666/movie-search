import './styles/moviecard.css';
import { LINK_TO_CATALOG, TITLE_FONT_SIZES } from '../../constants';

export function changeTitleSize() {
  const titles = document.querySelectorAll('.moviecard__title');

  Array.from(titles).forEach((title) => {
    if (title.innerText.length > 50) {
      title.style.fontSize = TITLE_FONT_SIZES.tiny;
    } else if (title.innerText.length > 25) {
      title.style.fontSize = TITLE_FONT_SIZES.small;
    }
  });
}

export default function renderMovieCard(movie) {
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
