const ACTIONS = {
  request: 'SEARCH_MOVIES_REQUEST',
  success: 'SEARCH_MOVIES_SUCCESS',
  failure: 'SEARCH_MOVIES_FAILURE',
};

const initialState = {
  loading: false,
  loaded: false,
  searchQuery: '',
  movies: [],
  errorMessage: null,
};

export default function reducer(state, action) {
  switch (action) {
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
        movies: [],
      };
    case 'SEARCH_MOVIES_FAILURE':
      return {
        ...state,
        loading: false,
        errorMessage: `Error ${initialState.loading}`,
      };
    default:
      return state;
  }
}

reducer(initialState, ACTIONS);
