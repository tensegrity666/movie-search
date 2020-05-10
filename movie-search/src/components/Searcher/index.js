import './styles/searcher.css';
import './styles/spinner.css';

import { dispatch, reducer, currentState } from '../../store';
import {
  modifyRequestText,
  getMoviesData,
  showSpinner,
  showError,
  showResults,
  textfield,
} from '../../helpers';

import { LINK_TO_CATALOG, ACTION_TYPE, THRESHOLD } from '../../constants';
import { renderCards } from '../MovieCard';
import EventEmitter from '../../eventEmitter';
import paginator from '../Paginator';

const emitter = new EventEmitter();
const movieArr = [];


function sendRequestToAPI(request) {
  const modifiedRequest = modifyRequestText(request);

  currentState.requestString = `${LINK_TO_CATALOG}${modifiedRequest}&page=`;

  getMoviesData(currentState.requestString, currentState.page)
    .then((json) => {
      if (json.Error) {
        dispatch(ACTION_TYPE.fail, null, json.Error);
        currentState.isLoading = reducer().isLoading;
        currentState.errorMessage = reducer().errorMessage;
        showSpinner(currentState);
        showError(currentState.errorMessage);
      } else if (json.Response === 'True') {
        dispatch(ACTION_TYPE.success, json.Search);
        currentState.isLoading = reducer().isLoading;
        movieArr.push(Object.values(json.Search));
        currentState.movies = Object.values(reducer().movies);
        currentState.results = json.totalResults;
        showSpinner(currentState);
        renderCards(currentState.movies);
        showResults(currentState.results, request);
      }
    })
    .catch((error) => {
      dispatch(ACTION_TYPE.fail, null, error);
      currentState.isLoading = reducer().isLoading;
      currentState.errorMessage = reducer().errorMessage;
    });

  paginator.on('slideChange', () => {
    const lastMovieCardCoordinates = document.querySelector('.cardlist')
      .lastChild.getBoundingClientRect().right;
    const wrapperCoordinates = document.querySelector('.swiper-outer')
      .getBoundingClientRect().right;
    let counter = 1;

    if (Math.floor(lastMovieCardCoordinates) - Math.floor(wrapperCoordinates) <= THRESHOLD) {
      counter++;
      getMoviesData(currentState.requestString, counter)
        .then((json) => {
          dispatch(ACTION_TYPE.success, json.Search);
          currentState.isLoading = reducer().isLoading;
          currentState.movies = Object.values(reducer().movies);
          currentState.results = json.totalResults;
          showSpinner(currentState);
          renderCards(currentState.movies);
          showResults(currentState.results, request);

          console.log(counter);
        });
    }
  });
}

emitter.subscribe('event:request-sending', sendRequestToAPI);

function initSearcher() {
  const submitButton = document.querySelector('#search-submit');

  const onSubmit = (event) => {
    const input = document.querySelector('#search-input');

    event.preventDefault();
    if ((input.value).trim()) {
      sendRequestToAPI(input.value);
      dispatch(ACTION_TYPE.request);
      emitter.emit('event:request-sending', input.value);
      currentState.isLoading = reducer().isLoading;
      showSpinner(currentState);
      input.value = '';
      textfield.innerText = '';
    }
  };

  submitButton.addEventListener('click', onSubmit);
}

export { initSearcher };
