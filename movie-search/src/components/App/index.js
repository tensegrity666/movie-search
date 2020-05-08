import './styles/index.css';
// import renderMovieCard from '../MovieCard';
<<<<<<< HEAD
// import { Moviecard } from '../MovieCard';
import { renderCards } from '../MovieCard';
import { initSearcher } from '../Searcher';
import { initialState } from '../../store';
import initKeyboard from '../Keyboard';
import paginator from '../Paginator';


const { movies } = initialState;
renderCards(movies);

initSearcher();
initKeyboard();
=======
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
>>>>>>> 14230fb... feat: implement rendering cards from fetch
paginator.init();
