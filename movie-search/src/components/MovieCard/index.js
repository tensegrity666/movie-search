/* eslint-disable no-underscore-dangle */

import './styles/moviecard.css';


class MoviecardView {
  constructor(movie, stars) {
    this.id = movie.imdbID;
    this.title = movie.Title;
    this.year = movie.Year;
    this.poster = movie.Poster;
    this.rating = movie.imdbRating;
    this.starRating = stars[Math.floor(this.rating)];
    this.link = 'https://www.imdb.com/title/';
    this.noImage = '/assets/noimage.png';
  }

  get card() {
    if (this._card) {
      return this._card;
    }
    this._card = document.createElement('li');
    this._card.classList.add('moviecard', 'swiper-slide');
    this._card.innerHTML = this.render();

    if (this.poster === 'N/A') {
      this.poster = this.noImage;
    }

    if (this.title.length < 25) {
      this.titleStyle = '';
    }
    if (this.title.length > 25) {
      this.titleStyle = 'moviecard__title_small';
    }
    if (this.title.length > 50) {
      this.titleStyle = 'moviecard__title_tiny';
    }

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
    <span class='moviecard__rating'>${this.starRating}</span>`;
  }
}

export default MoviecardView;
