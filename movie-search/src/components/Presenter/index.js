/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */

import Swiper from 'swiper';
import AppView from '../App';
import KeyboardView from '../Keyboard';
import { keysLayoutDefault, keysLayoutCyrillic } from '../Keyboard/layouts';
import AppModel from '../App/AppModel';
import SearcherView from '../Searcher';
import PARAMS from '../Paginator';
import _state from '../State';

import { THRESHOLD, PICS } from '../../constants';
import {
  modifyRequestText,
  getMoviesData,
  renderResults,
  detectRussian,
  showSpinner,
} from '../../helpers';

import stubData from '../../stub/dataExample';

const input = document.querySelector('#search-input');
const submit = document.querySelector('#search-submit');
const keyboardToggler = document.querySelector('#search-toggler');

_state.movies.push(stubData);


class Presenter {
  constructor() {
    this.model = new AppModel(_state);
    this.appView = new AppView(this.model);
    this.searchView = new SearcherView(input, submit, keyboardToggler);
    this.paginator = new Swiper('.swiper-container', PARAMS);
    this.keyboardView = new KeyboardView(keysLayoutDefault, keysLayoutCyrillic);

    renderResults(stubData);

    this.paginator.init();


    this.searchView.addKeyboardToggleListener(() => {
      this.keyboardView.toggle();
      this.searchView.inputElement.focus();
      this.searchView.inputElement.value = '';
    });

    this.keyboardView.addKeyPressEvent((inputFromVKeyb) => {
      this.searchView.inputElement.focus();

      switch (inputFromVKeyb) {
        case PICS.bspace:
          this.searchView.inputElement.value = this.searchView.inputElement.value.slice(0, -1);
          break;

        case PICS.enter:
          if (this.searchView.inputElement.value) {
            this.searchView.onEvent(this.searchView.inputElement.value);
          }
          this.searchView.inputElement.value = '';
          break;

        default:
          this.searchView.inputElement.value += inputFromVKeyb;
      }
    });


    this.searchView.onEvent = async (requestText) => {
      _state.request = requestText;
      _state.movies = [];


      this.searchView.disableSubmitButton(_state.isLoading);

      const data = await detectRussian(requestText);
      const modifiedRequest = modifyRequestText(data);

      getMoviesData(modifiedRequest, this.model.page)
        .then(() => {
          _state.requestString = modifiedRequest;
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
        getMoviesData(_state.requestString, _state.page)
          .then(() => {
            _state.isLoading = false;
            renderResults(_state.movies);
            showSpinner(_state.isLoading);
            this.paginator.update();
          });
      }
    });
  }

  init() {}
}

export default Presenter;
