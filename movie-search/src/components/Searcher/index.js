import './styles/searcher.css';
import './styles/spinner.css';
import { dispatch, reducer, currentState } from '../../store';
import { modifyRequestText, getMoviesData, showSpinner } from '../../helpers';
import { LINK_TO_CATALOG, ACTION_TYPE, LINK_TO_MOVIE } from '../../constants';
import Moviecard from '../MovieCard';
import EventEmitter from '../../eventEmitter';
import paginator from '../Paginator';

const emitter = new EventEmitter();

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

function sendRequestToAPI(request) {
  const modifiedRequest = modifyRequestText(request);

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
