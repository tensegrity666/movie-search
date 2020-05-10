import './styles/index.css';
// import renderMovieCard from '../MovieCard';
// import { Moviecard } from '../MovieCard';
import { renderCards } from '../MovieCard';
import { initSearcher } from '../Searcher';
import { initialState } from '../../store';
import paginator from '../Paginator';


const { movies } = initialState;
renderCards(movies);

initSearcher();
paginator.init();
