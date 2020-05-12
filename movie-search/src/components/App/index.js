import './styles/index.css';

import MoviecardView from '../MovieCard';

// import initKeyboard from '../Keyboard';

const SPINNER_SELECTOR = 'lds-facebook';
// initKeyboard();

class AppView {
  constructor(model, stars, container) {
    this.model = model;
    this.stars = stars;
    this.movielistContainer = container;
    this.spinnerElement = document.querySelector('#spinner');
  }


  renderMovieList() {
    this.movielistContainer.innerHTML = '';
    this.model.movielist.map((movie) => {
      const mc = new MoviecardView(movie, this.model.link, this.stars);

      this.movielistContainer.append(mc.card);
      return this.movielistContainer;
    });
  }

  showSpinner(isLoading) {
    this.spinnerElement.classList.remove(SPINNER_SELECTOR);
    if (isLoading) {
      this.spinnerElement.classList.add(SPINNER_SELECTOR);
    }
  }
}


export default AppView;
