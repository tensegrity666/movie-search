/* eslint-disable no-underscore-dangle */

import { LINKS } from '../../constants';

import data from '../../stub/dataExample';

const action = {
  type: '',
  payload: [],
  error: '',
};

const _state = {
  isLoading: false,
  movies: data,
  errorMessage: null,
  page: 1,
  link: LINKS.movieTitle,
  requestString: '',
  results: 0,
};

// const currentState = {
//   isLoading: false,
//   movies: [],
//   errorMessage: null,
//   page: null,
//   link: LINKS.movieTitle,
//   requestString: '',
//   results: 0,
// };

function reducer(state = _state, currentAction = action) {
  switch (currentAction.type) {
    case 'SEARCH_MOVIES_REQUEST':
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      };
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
        isLoading: false,
        movies: currentAction.payload,
      };
    case 'SEARCH_MOVIES_FAILURE':
      return {
        ...state,
        isLoading: false,
        errorMessage: currentAction.error,
      };
    default:
      return state;
  }
}

function dispatch(type, payload = null, error = null) {
  action.type = type;
  action.payload = payload;
  action.error = error;
}

export {
  action, _state, reducer, dispatch,
};
