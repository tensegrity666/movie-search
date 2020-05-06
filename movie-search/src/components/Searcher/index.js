import './styles/searcher.css';
import EventEmitter from '../EventEmitter';
import { LINK_TO_CATALOG } from '../../constants';
import {
  reducer, action, initialState, dispatch,
} from '../Store';

const button = document.querySelector('#search-submit');
const emitter = new EventEmitter();

function modifyRequestText(request) {
  return request
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim().split(' ')
    .join('+');
}

export const state = {
  movies: [],
};

function sendRequest(url) {
  return fetch(url)
    .then((response) => response.json());
}

const onRequest = (request) => {
  const textfield = document.querySelector('.main-container__textfield');

  const modifiedRequest = modifyRequestText(request);

  textfield.innerText = `request: ${modifiedRequest}`;
  dispatch('SEARCH_MOVIES_REQUEST');
  sendRequest(`${LINK_TO_CATALOG}${modifiedRequest}`)
    .then((json) => {
      dispatch('SEARCH_MOVIES_SUCCESS', json.Search);
    })
    .catch((error) => {
      dispatch('SEARCH_MOVIES_FAILURE', null, error);
      console.log(action);
    });
};

emitter.subscribe('event:request-sending', onRequest);

const onSubmit = (event) => {
  const input = document.querySelector('#search-input');

  event.preventDefault();
  emitter.emit('event:request-sending', input.value);
  input.value = '';
};

const submitHandler = () => button.addEventListener('click', onSubmit);

export default submitHandler;
