import './styles/index.css';
import { renderMovieCard, changeTitleSize, addStarRating } from '../MovieCard';
import mySwiper from '../Paginator';
import submitHandler from '../Searcher';
import reducer from '../Store/index';

import data from '../../stub/dataExample';

const movieList = document.querySelector('.cardlist');

data.map((movie) => {
  const movieCard = renderMovieCard(movie);
  return movieList.append(movieCard);
});

submitHandler();

const ACTIONS = ['SEARCH_MOVIES_REQUEST', 'SEARCH_MOVIES_SUCCESS', 'SEARCH_MOVIES_FAILURE'];

const initialState = {
  loading: true,
  loaded: false,
  searchQuery: '',
  movies: [],
  errorMessage: null,
};

addStarRating();
changeTitleSize();
mySwiper.init();

console.log(reducer(initialState, ACTIONS[2]));
console.log(initialState);
