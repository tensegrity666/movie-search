import './styles/index.css';
import renderMovieCard from '../MovieCard';
import swiper from '../Paginator';
import initSearcher from '../Searcher';
import { currentState } from '../../store';

const { movies } = currentState;

movies.map((movie) => {
  const movieList = document.querySelector('.cardlist');
  const movieCard = renderMovieCard(movie);

  return movieList.append(movieCard);
});

initSearcher();
swiper.init();
