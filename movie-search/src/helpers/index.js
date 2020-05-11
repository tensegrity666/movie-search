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
};
