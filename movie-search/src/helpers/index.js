/* eslint-disable consistent-return */

import _state from '../components/State';
import MoviecardView from '../components/MovieCard';
import { RATING_STARS } from '../constants';


function renderResults(movies) {
  const container = document.querySelector('.cardlist');
  container.innerHTML = '';

  movies.map((movie) => {
    const mc = new MoviecardView(movie, RATING_STARS);

    return container.append(mc.card());
  });
}


async function modifyRequestText(request) {
  return request
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/'/g, '')
    .trim()
    .split(' ')
    .join('+');
}


const TRANSLATER_LINK = 'https://translate.yandex.net/api/v1.5/tr.json/translate?';
const KEY = 'key=trnsl.1.1.20200322T155651Z.de98a60e6a99185e.089aea4237b51c6db082c966f27a7895cd1e8b44';
const REQUEST_PREFIX = '&text=';
const LANGUAGE = '&lang=ru-en';

async function detectRussian(request) {
  if (/[а-яА-ЯёЁ]/.test(request)) {
    const response = await fetch(`${TRANSLATER_LINK}${KEY}${REQUEST_PREFIX}${request}${LANGUAGE}`);
    const data = await response.json();

    return data;
  }
  return request;
}


function showSpinner(isLoading) {
  const spinner = document.querySelector('#spinner');

  spinner.classList.remove('lds-facebook');
  if (isLoading) {
    spinner.classList.add('lds-facebook');
  }
}


const textfield = document.querySelector('.main-container__textfield');

function showResultMessage(result, request) {
  _state.results = Number(result);

  textfield.classList.remove('main-container_danger');
  textfield.innerText = `${result} movies found for search "${request}"`;
}


function showError(error) {
  textfield.classList.add('main-container_danger');
  textfield.innerText = `${error}`;
}


const apiURL = 'https://www.omdbapi.com/?apikey=282ca252&type=movie';

// fcbac651

function getStatistics(movieID) {
  const requestTypePrefix = '&i=';

  return fetch(`${apiURL}${requestTypePrefix}${movieID}`)
    .then((response) => response.json())
    .then((data) => _state.movies.push(data))
    .catch((error) => showError(error));
}


function getMoviesData(request, page) {
  const requestTypePrefix = '&s=';
  const pagePrefix = '&page=';

  _state.request = request;
  _state.isLoading = true;
  showSpinner(_state.isLoading);

  return fetch(`${apiURL}${requestTypePrefix}${request}${pagePrefix}${page}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      showError(response.statusText);
    })
    .then((json) => {
      if (json.Error) {
        _state.errorMessage = json.Error;
        _state.isLoading = false;
        showError(_state.errorMessage);
      } else if (json.Response === 'True') {
        _state.results = json.totalResults;
        _state.isLoading = false;
        showResultMessage(_state.results, request);
        return json.Search;
      }
    })
    .then((movies) => movies.map((movie) => getStatistics(movie.imdbID)))
    .then((data) => Promise.all(data))
    .catch(() => showError(_state.errorMessage));
}


export {
  modifyRequestText,
  getMoviesData,
  renderResults,
  showResultMessage,
  showSpinner,
  detectRussian,
};
