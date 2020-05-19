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

    this.country = movie.Country || 'N/A';
    this.director = movie.Director || 'N/A';
    this.genre = movie.Genre || 'N/A';
    this.rated = movie.Rated || 'N/A';
    this.release = movie.Released || 'N/A';
    this.length = movie.Runtime || 'N/A';
  }

  card() {
    if (this._card) {
      return this._card;
    }
    this._card = document.createElement('li');
    this._card.classList.add('moviecard', 'swiper-slide');

    if (this.poster === 'N/A') {
      this.poster = this.noImage;
    }

    if (this.rating === 'N/A') {
      this.starRating = '';
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
      src='${this.poster}'
      alt='${this.title}' load='lazy' data-modal>
    <p class='moviecard__year'>
    ${this.year}
    </p>
    <span class='visually-hidden'>IMDB Rating: ${this.rating}</span>
    <span class='moviecard__rating'>${this.starRating}</span>
    <button class='moviecard__info_button' type='button' data-modal>?</button>

    <ul class='moviecard__info_hidden'>
      <li class='moviecard__info-item'>Country: ${this.country}</li>
      <li class='moviecard__info-item'>Director: ${this.director}</li>
      <li class='moviecard__info-item'>Genre: ${this.genre}</li>
      <li class='moviecard__info-item'>Date of release: ${this.release}</li>
      <li class='moviecard__info-item'>Length: ${this.length}</li>
      <li class='moviecard__info-item'>Rated: ${this.rated}</li>
    </ul>`;
  }
}

export default MoviecardView;
