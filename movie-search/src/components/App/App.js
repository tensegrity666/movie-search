import './styles/index.css';
import renderMovieCard from '../MovieCard/MovieCard';
import mySwiper from '../Paginator/Paginator';

import data from '../../stub/dataExample';

const movieList = document.querySelector('.cardlist');

data.map((movie) => {
  const movieCard = renderMovieCard(movie);
  return movieList.append(movieCard);
});

mySwiper.init();
