import './styles/searcher.css';
import './styles/spinner.css';
import { dispatch, reducer, currentState } from '../../store';
import { modifyRequestText, getMoviesData, showSpinner } from '../../helpers';
import { LINK_TO_CATALOG, ACTION_TYPE, LINK_TO_MOVIE } from '../../constants';
import Moviecard from '../MovieCard';
import EventEmitter from '../../eventEmitter';
import paginator from '../Paginator';

const emitter = new EventEmitter();


function renderCards(state) {
  const movieList = document.querySelector('.cardlist');
  movieList.innerHTML = '';
  state.map((movie) => {
    const mc = new Moviecard(movie, LINK_TO_MOVIE);
    mc.changeTitleSize();
    mc.addStarRating();
    movieList.append(mc.card);
    paginator.update();
    return movieList;
  });
}
const textfield = document.querySelector('.main-container__textfield');

function showResults(result, request) {
  textfield.classList.remove('main-container_danger');
  textfield.innerText = '';
  textfield.innerText = `${result} movies found for search "${request}"`;
}

function showError(error) {
  textfield.classList.add('main-container_danger');
  textfield.innerText = `${error}`;
}

function sendRequestToAPI(request) {
  const modifiedRequest = modifyRequestText(request);

  currentState.requestString = `${LINK_TO_CATALOG}${modifiedRequest}`;

  getMoviesData(currentState.requestString)
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
    }
  };

  submitButton.addEventListener('click', onSubmit);
}

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
