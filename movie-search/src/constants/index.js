const LINK_TO_CATALOG = 'http://www.omdbapi.com/?apikey=fcbac651&type=movie&s=';

const LINK_TO_MOVIE = 'http://www.omdbapi.com/';

const ACTION_TYPE = {
  success: 'SEARCH_MOVIES_SUCCESS',
  fail: 'SEARCH_MOVIES_FAILURE',
  request: 'SEARCH_MOVIES_REQUEST',
};

const THRESHOLD = 20;

const RATING_STARS = {
  1: '&#9733;',
  2: '&#9733;&#9733;',
  3: '&#9733;&#9733;&#9733;',
  4: '&#9733;&#9733;&#9733;&#9733;',
  5: '&#9733;&#9733;&#9733;&#9733;&#9733;',
  6: '&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;',
  7: '&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;',
  8: '&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;',
  9: '&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;',
  10: '&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;',
};

export {
  LINK_TO_CATALOG, LINK_TO_MOVIE, RATING_STARS, ACTION_TYPE, THRESHOLD,
};
