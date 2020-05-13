/* eslint-disable consistent-return */

import _state from '../components/State';
import MoviecardView from '../components/MovieCard';
import { RATING_STARS } from '../constants';
import paginator from '../components/Paginator';


const container = document.querySelector('.cardlist');

function render(movies) {
  container.innerHTML = '';

  movies.map((movie) => {
    const mc = new MoviecardView(movie, RATING_STARS);
    return container.append(mc.card);
  });
  paginator.update();
}


function modifyRequestText(request) {
  return request
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim().split(' ')
    .join('+');
}

const spinner = document.querySelector('#spinner');

function showSpinner(isLoading) {
  spinner.classList.remove('lds-facebook');
  if (isLoading) {
    spinner.classList.add('lds-facebook');
  }
}

const textfield = document.querySelector('.main-container__textfield');

function showResults(result, request) {
  _state.results = Number(result);
  textfield.classList.remove('main-container_danger');
  textfield.innerText = `${result} movies found for search "${request}"`;
}

function showError(error) {
  textfield.classList.add('main-container_danger');
  textfield.innerText = `${error}`;
}


const apiURL = 'https://www.omdbapi.com/?apikey=282ca252&type=movie';

//fcbac651

function getStatistics(movieID) {
  const requestTypePrefix = '&i=';

  return fetch(`${apiURL}${requestTypePrefix}${movieID}`)
    .then((response) => response.json())
    .then((data) => _state.movies.push(data))
    .catch((error) => console.error(error));
}


function getMoviesData(request, page) {
  const requestTypePrefix = '&s=';
  const pagePrefix = '&page=';
  _state.isLoading = true;
  showSpinner(_state.isLoading);

  return fetch(`${apiURL}${requestTypePrefix}${request}${pagePrefix}${page}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((json) => {
      if (json.Error) {
        _state.errorMessage = json.Error;
        _state.isLoading = false;
        showError(_state.errorMessage);
      } else if (json.Response === 'True') {
        _state.results = json.totalResults;
        _state.isLoading = false;

        return json.Search;
      }
    })
    .then((movies) => movies.map((movie) => getStatistics(movie.imdbID)))
    .then((data) => Promise.all(data))
    .then(() => {
      showResults(_state.results, request);
      render(_state.movies);
    })
    .catch((error) => console.error(error))
    .finally(() => showSpinner(_state.isLoading));
}

export {
  modifyRequestText,
  getMoviesData,
  showResults,
  showError,
  textfield,
  render,
};
