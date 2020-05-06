import './styles/index.css';
import { renderMovieCard, changeTitleSize, addStarRating } from '../MovieCard';
import mySwiper from '../Paginator';
import submitHandler from '../Searcher';

import data from '../../stub/dataExample';

data.map((movie) => {
  const movieList = document.querySelector('.cardlist');
  const movieCard = renderMovieCard(movie);

  return movieList.append(movieCard);
});

submitHandler();
addStarRating();
changeTitleSize();
mySwiper.init();
