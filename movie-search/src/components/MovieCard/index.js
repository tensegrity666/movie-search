/* eslint-disable no-underscore-dangle */

import './styles/moviecard.css';


import { RATING_STARS, LINK_TO_MOVIE } from '../../constants';
import paginator from '../Paginator';


class Moviecard {
  constructor(movie, link) {
    this.id = movie.imdbID;
    this.title = movie.Title;
    this.year = movie.Year;
    this.poster = movie.Poster;
    this.rating = movie.imdbRating;
    this.link = link;

    if (this.poster === 'N/A') {
      this.poster = '/assets/noimage.png';
    }
  }

  get card() {
    if (this._card) {
      return this._card;
    }
    this._card = document.createElement('li');
    this._card.classList.add('moviecard', 'swiper-slide');
    this._card.innerHTML = this.render();
    return this._card;
  }

  render() {
    return `<header>
      <a class='moviecard__title ${this.titleStyle}' href='${this.link}${this.id}' target='_blank'
        rel='noopener noreferrer'>
        ${this.title}
      </a>
    </header>
    <img
      class='moviecard__image'
      src=${this.poster}
      alt='${this.title}' load='lazy'>
    <p class='moviecard__year'>${this.year}</p>
    <span class='visually-hidden'>IMDB Rating: ${this.rating}</span>
    <span class='moviecard__rating'>${this.stars}</span>`;
  }

  addStarRating() {
    this.stars = RATING_STARS[Math.floor(this.rating)];
  }

  changeTitleSize() {
    if (this.title.length < 25) {
      this.titleStyle = '';
    }
    if (this.title.length > 25) {
      this.titleStyle = 'moviecard__title_small';
    }
    if (this.title.length > 50) {
      this.titleStyle = 'moviecard__title_tiny';
    }
  }
}

function renderCards(state) {
  const movieList = document.querySelector('.cardlist');
  movieList.innerHTML = '';
  state.map((movie) => {
    const mc = new Moviecard(movie, LINK_TO_MOVIE);
    mc.changeTitleSize();
    mc.addStarRating();
    movieList.append(mc.card);
    paginator.update();
    return movieList;
  });
}

export { Moviecard, renderCards };
