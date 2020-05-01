import './styles/index.css';
import MovieCard from '../MovieCard/MovieCard';
import mySwiper from '../Paginator/Paginator';

import data from '../../stub/dataExample';

data.map((movie) => {
  MovieCard(movie);
});

mySwiper.init();
