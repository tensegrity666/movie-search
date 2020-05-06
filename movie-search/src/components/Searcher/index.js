import './styles/searcher.css';
import { dispatch, reducer, currentState } from '../../store';
import { LINK_TO_CATALOG, ACTION_TYPE } from '../../constants';
import { modifyRequestText, sendRequest } from '../../helpers';


function getMoviesData(request) {
  const textfield = document.querySelector('.main-container__textfield');
  textfield.innerText = `request: ${request}`;

  const modifiedRequest = modifyRequestText(request);
  sendRequest(`${LINK_TO_CATALOG}${modifiedRequest}`)
    .then((json) => {
      dispatch(ACTION_TYPE.success, json.Search);
      currentState.loading = reducer().loading;
      currentState.movies = reducer().movies;
      console.log(currentState);
    })
    .catch((error) => {
      dispatch(ACTION_TYPE.fail, null, error);
      currentState.loading = reducer().loading;
      currentState.errorMessage = reducer().errorMessage;
    });
}

console.log(currentState);

function initSearcher() {
  const submitButton = document.querySelector('#search-submit');

  const onSubmit = (event) => {
    const input = document.querySelector('#search-input');

    event.preventDefault();
    dispatch(ACTION_TYPE.request);
    currentState.loading = reducer().loading;
    getMoviesData(input.value);
    input.value = '';
  };

  submitButton.addEventListener('click', onSubmit);
}

export default initSearcher;
