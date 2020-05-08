import './styles/index.css';
// import renderMovieCard from '../MovieCard';
import Moviecard from '../MovieCard';
import { initSearcher } from '../Searcher';
import { initialState } from '../../store';
import paginator from '../Paginator';
// import { InitLoadingNextPage } from '../../helpers';
import { LINK_TO_MOVIE } from '../../constants';

const { movies } = initialState;


movies.map((movie) => {
  const mc = new Moviecard(movie, LINK_TO_MOVIE);
  const movieList = document.querySelector('.cardlist');

  mc.changeTitleSize();
  mc.addStarRating();
  movieList.append(mc.card);

  return movieList;
});


// const swiper = document.querySelector('.swiper-outer');
// swiper.addEventListener('mousedown', InitLoadingNextPage);

initSearcher();
paginator.init();
