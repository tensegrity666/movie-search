class AppModel {
  constructor(state) {
    this.isLoading = state.isLoading;
    this.request = state.requestString;
    this.movielist = state.movies;
    this.results = state.results;
    this.page = state.page;
    this.error = state.error;
    this.link = state.link;
  }

  set requestString(string) {
    this.request = string;
  }

  addToMovielist(nextList) {
    this.movielist = this.movielist.concat(nextList);
  }

  clearMovielist() {
    this.movielist = [];
  }

  incrementPageNumber() {
    this.page += 1;
  }
}

export default AppModel;
