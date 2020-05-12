const LINKS = {
  search: 'https://www.omdbapi.com/?apikey=fcbac651&type=movie&s=',
  movieTitle: 'http://www.omdbapi.com/',
  page: '&page=',
};

const ACTION_TYPE = {
  success: 'SEARCH_MOVIES_SUCCESS',
  fail: 'SEARCH_MOVIES_FAILURE',
  request: 'SEARCH_MOVIES_REQUEST',
};

const THRESHOLD = 520;

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
  LINKS, RATING_STARS, ACTION_TYPE, THRESHOLD,
};
