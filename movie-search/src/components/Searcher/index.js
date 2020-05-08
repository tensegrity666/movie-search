import './styles/searcher.css';
import './styles/spinner.css';
import { dispatch, reducer, currentState } from '../../store';
import { modifyRequestText, getMoviesData, showSpinner, InitLoadingNextPage } from '../../helpers';
import { LINK_TO_CATALOG, ACTION_TYPE } from '../../constants';
import renderMovieCard from '../MovieCard';
import EventEmitter from '../../eventEmitter';

const emitter = new EventEmitter();

function renderCards(state) {
  const movieList = document.querySelector('.cardlist');
  movieList.innerHTML = '';
  state.map((movie) => {
    const movieCard = renderMovieCard(movie);

    return movieList.append(movieCard);
  });
}

function sendRequestToAPI(request) {
  const modifiedRequest = modifyRequestText(request);

  const page = InitLoadingNextPage();

  currentState.requestString = `${LINK_TO_CATALOG}${modifiedRequest}${page}`;

  getMoviesData(currentState.requestString)
    .then((json) => {
      dispatch(ACTION_TYPE.success, json.Search);
      currentState.isLoading = reducer().isLoading;
      currentState.movies = Object.values(reducer().movies);
      console.log(currentState.movies);
      showSpinner(currentState);
      renderCards(currentState.movies);
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
