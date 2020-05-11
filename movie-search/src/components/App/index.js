import './styles/index.css';

import MoviecardView from '../MovieCard';
import SearcherView from '../Searcher';
import { initialState } from '../../store';
// import initKeyboard from '../Keyboard';
import paginator from '../Paginator';
import { RATING_STARS } from '../../constants';


// initKeyboard();

class AppView {
  constructor(state, stars) {
    this.movielist = state.movies;
    this.link = state.link;
    this.stars = stars;
  }

  init(movielistContainer) {
    this.movielistContainer = movielistContainer;
  }

  renderMovieList() {
    this.movielistContainer.innerHTML = '';

    this.movielist.map((movie) => {
      const mc = new MoviecardView(movie, this.link, this.stars);

      this.movielistContainer.append(mc.card);

      return this.movielistContainer;
    });
  }

  inintSpinner(spinnerElement) {
    this.spinnerElement = spinnerElement;
  }

  showSpinner(isLoading) {
    this.spinnerElement.classList.remove('lds-facebook');
    if (isLoading) {
      this.spinnerElement.add('lds-facebook');
    }
  }
}

const container = document.querySelector('.cardlist');

const userAppView = new AppView(initialState, RATING_STARS);
userAppView.init(container);
userAppView.renderMovieList();


paginator.init();

//
const input = document.querySelector('#search-input');
const submit = document.querySelector('#search-submit');

const userSearchView = new SearcherView();
userSearchView.init(input, submit);
userSearchView.addListener();
//
