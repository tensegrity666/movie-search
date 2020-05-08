/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */

import './styles/moviecard.css';
import { RATING_STARS } from '../../constants';

class Moviecard {
  constructor(movie, link) {
    this.id = movie.imdbID;
    this.title = movie.Title;
    this.year = movie.Year;
    this.poster = movie.Poster;
    this.rating = movie.imdbRating;
    this.link = link;
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

export default Moviecard;
