/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */

import Swiper from 'swiper';
import AppView from '../App';
import AppModel from '../App/AppModel';
import SearcherView from '../Searcher';
import PARAMS from '../Paginator';
import _state from '../State';

import { RATING_STARS, THRESHOLD } from '../../constants';
import {
  modifyRequestText,
  getMoviesData,
  renderResults,
  // onSlideChange,
  showSpinner,
} from '../../helpers';

import stubData from '../../stub/dataExample';

const container = document.querySelector('.cardlist');
const input = document.querySelector('#search-input');
const submit = document.querySelector('#search-submit');
let modifiedRequest = '';
_state.movies.push(stubData);


class Presenter {
  constructor() {
    this.model = new AppModel(_state);
    this.appView = new AppView(this.model, RATING_STARS, container);
    this.searchView = new SearcherView(input, submit);
    this.paginator = new Swiper('.swiper-container', PARAMS);

    renderResults(stubData);
    this.paginator.init();


    this.searchView.onSubmit = (requestText) => {
      _state.movies = [];
      this.searchView.disableSubmitButton(_state.isLoading);

      modifiedRequest = modifyRequestText(requestText);
      getMoviesData(modifiedRequest, this.model.page)
        .then(() => {
          _state.isLoading = false;
          renderResults(_state.movies);
          showSpinner(_state.isLoading);
          this.paginator.update();
          this.paginator.slideTo(0, 500);
        });
    };

    this.paginator.on('slideChange', () => {
      const lastMovieCardCoordinates = document.querySelector('.cardlist').lastChild.getBoundingClientRect().right;
      const wrapperCoordinates = document.querySelector('.swiper-outer').getBoundingClientRect().right;

      if ((Math.floor(lastMovieCardCoordinates) - Math.floor(wrapperCoordinates) <= THRESHOLD)
      && _state.request) {
        _state.page += 1;
        getMoviesData(_state.request, _state.page)
          .then(() => {
            _state.isLoading = false;
            renderResults(_state.movies);
            showSpinner(_state.isLoading);
            this.paginator.update();
          });
      }
    });
  }

  init(data) {
    console.log(data);
  }
}

export default Presenter;
