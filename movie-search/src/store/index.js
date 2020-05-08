import data from '../stub/dataExample';

const action = {
  type: '',
  payload: [],
  error: '',
};

const initialState = {
  isLoading: false,
  movies: data,
  errorMessage: null,
  page: 1,
};

const currentState = {
  movies: [],
<<<<<<< HEAD
  page: 1,
  requestString: '',
  results: 0,
=======
  page: null,
  requestString: '',
>>>>>>> 14230fb... feat: implement rendering cards from fetch
};

function reducer(state = initialState, currentAction = action) {
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
  action, initialState, reducer, dispatch, currentState,
};
