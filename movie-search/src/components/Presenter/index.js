import AppView from '../App';
import AppModel from '../App/AppModel';
import SearcherView from '../Searcher';

import { _state } from '../State';
import { RATING_STARS } from '../../constants';
import { modifyRequestText } from '../../helpers';

const container = document.querySelector('.cardlist');
const input = document.querySelector('#search-input');
const submit = document.querySelector('#search-submit');

class Presenter {
  constructor() {
    this.model = new AppModel(_state);
    this.appView = new AppView(this.model, RATING_STARS, container);
    this.searchView = new SearcherView(input, submit);

    this.appView.renderMovieList();
    this.searchView.addListener();

    this.appView.showSpinner(true);
    this.searchView.onSubmit = (requestText) => {
      this.searchView.disableSubmitButton(true);

      const modifiedRequest = modifyRequestText(requestText);
      console.log(modifiedRequest);
    };
  }

  init(data) {
    console.log(data);
  }
}

export default Presenter;
