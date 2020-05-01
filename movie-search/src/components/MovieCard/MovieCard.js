// export default class MovieCard {

//   constructor(title, year, poster, imdbID, imdbRating) {
//     this.title = title;
//     this.year = year;
//     this.poster = poster;
//     this.imdbRating = imdbRating;
//     this.imdbID = imdbID;
//   }

//   render() {
//     return `<header>
//               <a class='moviecard__title' href=${moviepage} target='_blank' rel='noopener noreferrer'>
//                 ${Title}
//               </a>
//             </header>
//             <img src=${Poster} alt=${Title} load='lazy'>
//             <p class="moviecard__year">${Year}</p>
//             <span class="moviecard__rating">${imdbRating}</span>`
//   }
// }

import './styles/index.css';

const LINK_TO_CATALOG = 'https://www.imdb.com/title/';

export default function MovieCard(movie) {

  const {
    Title, Year, Poster, imdbID, imdbRating,
  } = movie;

  const list = document.querySelector('.cardlist');
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

  return list.append(card);
}
