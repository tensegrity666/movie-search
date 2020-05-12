/* eslint-disable class-methods-use-this */
import './styles/searcher.css';

// function sendRequestToAPI(request) {
//   const modifiedRequest = modifyRequestText(request);

//   currentState.requestString = `${LINK_TO_CATALOG}${modifiedRequest}&page=`;

//   getMoviesData(currentState.requestString, currentState.page)
//     .then((json) => {
//       if (json.Error) {
//         dispatch(ACTION_TYPE.fail, null, json.Error);
//         currentState.isLoading = reducer().isLoading;
//         currentState.errorMessage = reducer().errorMessage;
//         showSpinner(currentState);
//         showError(currentState.errorMessage);
//       } else if (json.Response === 'True') {
//         dispatch(ACTION_TYPE.success, json.Search);
//         currentState.isLoading = reducer().isLoading;
//         movieArr.push(Object.values(json.Search));
//         currentState.movies = Object.values(reducer().movies);
//         currentState.results = json.totalResults;
//         showSpinner(currentState);
//         renderCards(currentState.movies);
//         showResults(currentState.results, request);
//       }
//   // const page = InitLoadingNextPage();

//   paginator.on('slideChange', () => {
//     const lastMovieCardCoordinates = document.querySelector('.cardlist')
//       .lastChild.getBoundingClientRect().right;
//     const wrapperCoordinates = document.querySelector('.swiper-outer')
//       .getBoundingClientRect().right;
//     let counter = 1;

//     if (Math.floor(lastMovieCardCoordinates) - Math.floor(wrapperCoordinates) <= THRESHOLD) {
//       counter++;
//       getMoviesData(currentState.requestString, counter)
//         .then((json) => {
//           dispatch(ACTION_TYPE.success, json.Search);
//           currentState.isLoading = reducer().isLoading;
//           currentState.movies = Object.values(reducer().movies);
//           currentState.results = json.totalResults;
//           showSpinner(currentState);
//           renderCards(currentState.movies);
//           showResults(currentState.results, request);

//           console.log(counter);
//         });
//     }
//   });
// }

// // emitter.subscribe('event:request-sending', sendRequestToAPI);

// function initSearcher() {
//   const submitButton = document.querySelector('#search-submit');

//   const onSubmit = (event) => {
//     const input = document.querySelector('#search-input');

//     event.preventDefault();
//     if ((input.value).trim()) {
//       sendRequestToAPI(input.value);
//       dispatch(ACTION_TYPE.request);
//       emitter.emit('event:request-sending', input.value);
//       currentState.isLoading = reducer().isLoading;
//       showSpinner(currentState);
//       input.value = '';
//       textfield.innerText = '';
//     }
//   };

//   submitButton.addEventListener('click', onSubmit);
// }


//
class SearcherView {
  constructor(inputElement, submitButton) {
    this.inputElement = inputElement;
    this.submitButton = submitButton;
  }

  onSubmit() {
  }

  addListener() {
    this.submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      this.onSubmit(this.inputElement.value);
      this.inputElement.value = '';
    });
  }

  disableSubmitButton(boolean) {
    this.submitButton.removeAttribute('disabled');
    if (boolean) {
      this.submitButton.setAttribute('disabled', true);
    }
  }
}

//


export default SearcherView;
