import './styles/index.css';
import { renderMovieCard, changeTitleSize, addStarRating } from '../MovieCard';
import mySwiper from '../Paginator';
import '../Searcher/';

import data from '../../stub/dataExample';

const movieList = document.querySelector('.cardlist');

data.map((movie) => {
  const movieCard = renderMovieCard(movie);
  return movieList.append(movieCard);
});

addStarRating();
changeTitleSize();
mySwiper.init();
