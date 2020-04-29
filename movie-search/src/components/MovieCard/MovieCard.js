export default class MovieCard {
  constructor(title, poster, year, imdbRating) {
    this.title = title;
    this.poster = poster;
    this.year = year;
    this.imdbRating = imdbRating;
  }

  render() {
    this.card = document.createElement('li');
    this.card.innerHTML = `<header>
    <a class="moviecard__title" href="http://www.dsdfdsf.ru" target="_blank"
      rel="noopener noreferrer">
      reqiuem fo bla bla
    </a>
  </header>
  <img
    src=${this.poster}
    alt=${this.title}>
  <p class="moviecard__year">${this.year}</p>
  <span class="moviecard__rating">${this.imdbRating}</span>`;
  }
}
