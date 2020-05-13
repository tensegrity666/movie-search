import './styles/index.css';

import MoviecardView from '../MovieCard';

// import initKeyboard from '../Keyboard';

// initKeyboard();

class AppView {
  constructor(model, stars, container) {
    this.model = model;
    this.movies = model.movies;
    this.stars = stars;
    this.movielistContainer = container;

    // this.renderMovieList();
  }

  updateView(model) {
    this.model = model;
    this.movielistContainer.innerHTML = '';
  }

  renderMovieList() {
    this.movielistContainer.innerHTML = '';

    this.movies.map((movie) => {
      const mc = new MoviecardView(movie, this.stars);

      return this.movielistContainer.append(mc.card);
    });
  }
}


export default AppView;
