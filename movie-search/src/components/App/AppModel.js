class AppModel {
  constructor(state) {
    this.isLoading = state.isLoading;
    this.request = state.requestString;
    this.movies = state.movies;
    this.page = state.page;
    this.error = state.errorMessage;
  }
}

export default AppModel;
