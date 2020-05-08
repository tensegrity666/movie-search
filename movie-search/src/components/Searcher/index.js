import './styles/searcher.css';
import './styles/spinner.css';
<<<<<<< HEAD

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
=======
import { dispatch, reducer, currentState } from '../../store';
import { modifyRequestText, getMoviesData, showSpinner } from '../../helpers';
import { LINK_TO_CATALOG, ACTION_TYPE, LINK_TO_MOVIE } from '../../constants';
import Moviecard from '../MovieCard';
>>>>>>> 14230fb... feat: implement rendering cards from fetch
import EventEmitter from '../../eventEmitter';
import paginator from '../Paginator';

const emitter = new EventEmitter();
<<<<<<< HEAD
const movieArr = [];

=======

// paginator.init();
function renderCards(state) {
  const movieList = document.querySelector('.cardlist');
  movieList.innerHTML = '';
  state.map((movie) => {
    // const movieCard = renderMovieCard(movie);
    const mc = new Moviecard(movie, LINK_TO_MOVIE);
    // const movieList = document.querySelector('.cardlist');
    // movieList.innerHTML = '';
    mc.changeTitleSize();
    mc.addStarRating();
    movieList.append(mc.card);
    paginator.update();
    return movieList;
  //   return movieList.append(movieCard);
  });
}
>>>>>>> 14230fb... feat: implement rendering cards from fetch

function sendRequestToAPI(request) {
  const modifiedRequest = modifyRequestText(request);

<<<<<<< HEAD
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
=======
  // const page = InitLoadingNextPage();

  currentState.requestString = `${LINK_TO_CATALOG}${modifiedRequest}`;

  getMoviesData(currentState.requestString)
    .then((json) => {
      dispatch(ACTION_TYPE.success, json.Search);
      currentState.isLoading = reducer().isLoading;
      currentState.movies = Object.values(reducer().movies);
      console.log(currentState.movies);
      showSpinner(currentState);
      renderCards(currentState.movies);
>>>>>>> 14230fb... feat: implement rendering cards from fetch
    })
    .catch((error) => {
      dispatch(ACTION_TYPE.fail, null, error);
      currentState.isLoading = reducer().isLoading;
      currentState.errorMessage = reducer().errorMessage;
    });
<<<<<<< HEAD

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
=======
>>>>>>> 14230fb... feat: implement rendering cards from fetch
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
<<<<<<< HEAD
      textfield.innerText = '';
=======
>>>>>>> 14230fb... feat: implement rendering cards from fetch
    }
  };

  submitButton.addEventListener('click', onSubmit);
}

<<<<<<< HEAD
export { initSearcher };
=======
export { initSearcher, getMoviesData };

// class Searcher extends EventEmitter {
//   constructor(initialState) {
//     super();
//     this.state = initialState;
//   }

//   init() {
//     this.input = document.querySelector('#search-input');
//     this.submitButton = document.querySelector('#search-submit');
//   }

//   bind() {
//     this.submitButton.addEventListener('click', (event) => {
//       event.preventDefault();
//       if ((this.input.value).trim()) {
//         sendRequestToAPI(this.input.value);
//         // dispatch(ACTION_TYPE.request);
//         currentState.isLoading = reducer().isLoading;
//         showSpinner(currentState);
//         this.input.value = '';
//       }
//     });
//   }
// }
>>>>>>> 14230fb... feat: implement rendering cards from fetch
