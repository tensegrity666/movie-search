function onSlideChange() {
  const lastMovieCardCoordinates = document.querySelector('.cardlist')
    .lastChild.getBoundingClientRect().right;
  const wrapperCoordinates = document.querySelector('.swiper-outer')
    .getBoundingClientRect().right;
  let counter = 1;

  if (Math.floor(lastMovieCardCoordinates) - Math.floor(wrapperCoordinates) <= THRESHOLD) {
    counter++;
    getMoviesData(currentState.requestString, counter)
      .then((json) => {});
  }
}

paginator.on('slideChange', onSlideChange);
