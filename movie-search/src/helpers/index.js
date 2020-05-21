/* eslint-disable consistent-return */

import _state from '../components/State';
import MoviecardView from '../components/MovieCard';

function renderResults(movies) {
  const container = document.querySelector('.cardlist');
  container.innerHTML = '';

  movies.map((movie) => {
    const mc = new MoviecardView(movie);

    return container.append(mc.card());
  });
}


function modifyRequestText(request) {
  return request
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .join('+');
}


const TRANSLATER_LINK = 'https://translate.yandex.net/api/v1.5/tr.json/translate?';
const KEY = 'key=trnsl.1.1.20200514T113357Z.7da7410ce1f8a61f.28103d59da89aacae1b845dc43aefa4dcb7abedd';
const REQUEST_PREFIX = '&text=';
const LANGUAGE = '&lang=ru-en';

async function detectRussian(request) {
  if (/[а-яА-ЯёЁ]/.test(request)) {
    const response = await fetch(`${TRANSLATER_LINK}${KEY}${REQUEST_PREFIX}${request}${LANGUAGE}`);
    const json = await response.json();

    return json.text.join('');
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


const apiURL = 'https://www.omdbapi.com/?apikey=fcbac651&type=movie';

function getStatistics(movieID) {
  const requestTypePrefix = '&i=';

  return fetch(`${apiURL}${requestTypePrefix}${movieID}`)
    .then((response) => response.json())
    .then((data) => _state.movies.push(data))
    .catch((error) => showError('Error occured...', error));
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
      showError(`Error: ${response.statusText}`);
    })
    .then((json) => {
      if (json.Error) {
        _state.errorMessage = json.Error;
        _state.isLoading = false;
        showError(`Error, no results for: ${_state.request}`);
      } else if (json.Response === 'True') {
        _state.results = json.totalResults;
        _state.isLoading = false;
        showResultMessage(_state.results, _state.request);
        return json.Search;
      }
    })
    .then((movies) => movies.map((movie) => getStatistics(movie.imdbID)))
    .then((data) => Promise.all(data))
    .catch(() => showError(`No results for: ${_state.request}`));
}


export {
  modifyRequestText,
  getMoviesData,
  renderResults,
  showResultMessage,
  showSpinner,
  detectRussian,
};
