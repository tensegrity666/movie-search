export const action = {
  type: '',
  payload: [],
  error: '',
};

export const initialState = {
  loading: false,
  movies: [],
  errorMessage: null,
};

export function reducer(state, currentAction) {
  switch (currentAction.type) {
    case 'SEARCH_MOVIES_REQUEST':
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
        loading: false,
        movies: currentAction.payload,
      };
    case 'SEARCH_MOVIES_FAILURE':
      return {
        ...state,
        loading: false,
        errorMessage: currentAction.error,
      };
    default:
      return state;
  }
}

export function dispatch(type, payload = null, error = null) {
  action.type = type;
  action.payload = payload;
  action.error = error;
}
