<<<<<<< HEAD
=======
// import { THRESHOLD } from '../constants';


>>>>>>> 14230fb... feat: implement rendering cards from fetch
function showSpinner(state) {
  const spinner = document.querySelector('#spinner');

  spinner.classList.remove('lds-facebook');
  if (state.isLoading) {
    spinner.classList.add('lds-facebook');
  }
}


function modifyRequestText(request) {
  return request
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim().split(' ')
    .join('+');
}


<<<<<<< HEAD
function getMoviesData(url, page) {
  return fetch(`${url}${page}`).then((response) => response.json());
}


const textfield = document.querySelector('.main-container__textfield');


function showResults(result, request) {
  textfield.classList.remove('main-container_danger');
  textfield.innerText = `${result} movies found for search "${request}"`;
}


function showError(error) {
  textfield.classList.add('main-container_danger');
  textfield.innerText = `${error}`;
}


export {
  modifyRequestText,
  getMoviesData,
  showSpinner,
  showResults,
  showError,
  textfield,
=======
function getMoviesData(url) {
  return fetch(url)
    .then((response) => response.json());
}


// function InitLoadingNextPage() {
//   let counter = 1;
//   let PAGE_NUMBER = `&page=${counter}`;

//   const lastMovieCardCoordinates = document.querySelector('.cardlist')
//  .lastChild.getBoundingClientRect().right;
//   const wrapperCoordinates = document.querySelector('.swiper-outer')
// .getBoundingClientRect().right;

//   if (Math.floor(lastMovieCardCoordinates) - Math.floor(wrapperCoordinates) <= THRESHOLD) {
//     counter += 1;
//     PAGE_NUMBER = `&page=${counter}`;
//   }

//   return PAGE_NUMBER;
// }

export {
  modifyRequestText, getMoviesData, showSpinner,
>>>>>>> 14230fb... feat: implement rendering cards from fetch
};
