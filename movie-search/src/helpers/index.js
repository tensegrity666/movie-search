// import { THRESHOLD } from '../constants';


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
};
