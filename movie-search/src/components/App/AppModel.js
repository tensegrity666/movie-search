class AppModel {
  constructor(state) {
    this.isLoading = state.isLoading;
    this.request = state.requestString;
    this.movies = state.movies;
    this.page = state.page;
    this.error = state.errorMessage;
  }

  saveRequestString(string) {
    this.request = string;
  }

  updateMovielist(state) {
    this.movies = state.movies;
  }

  addToMovielist(nextList) {
    this.movies = this.movies.concat(nextList);
  }

  clearMovielist() {
    this.movies = [];
  }

  incrementPageNumber() {
    this.page += 1;
  }
}

export default AppModel;
