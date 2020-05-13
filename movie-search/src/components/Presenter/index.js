import AppView from '../App';
import AppModel from '../App/AppModel';
import SearcherView from '../Searcher';
// import paginator from '../Paginator';

import _state from '../State';
import { RATING_STARS } from '../../constants';
import { modifyRequestText, getMoviesData, render } from '../../helpers';

import stubData from '../../stub/dataExample';

const container = document.querySelector('.cardlist');
const input = document.querySelector('#search-input');
const submit = document.querySelector('#search-submit');
let modifiedRequest = '';
_state.movies.push(stubData);


class Presenter {
  constructor() {
    this.model = new AppModel(_state);
    this.appView = new AppView(this.model, RATING_STARS, container);
    this.searchView = new SearcherView(input, submit);

    render(stubData);


    this.searchView.onSubmit = (requestText) => {
      _state.movies = [];
      this.searchView.disableSubmitButton(_state.isLoading);

      modifiedRequest = modifyRequestText(requestText);
      getMoviesData(modifiedRequest, this.model.page);
    };
  }

  // update(state) {
  //   this.model.updateMovielist(state);
  //   this.appView.updateView(this.model);
  //   this.appView.renderMovieList();
  //   paginator.update();
  //   console.log(this.model.movies);
  // }

  init(data) {
    console.log(data);
  }
}

export default Presenter;
