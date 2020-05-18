/* eslint-disable class-methods-use-this */

import './styles/searcher.css';


class SearcherView {
  constructor(inputElement, submitButton, keyboardButton) {
    this.inputElement = inputElement;
    this.submitButton = submitButton;
    this.keyboardButton = keyboardButton;

    this.addListener();
  }

  onEvent() {}

  addListener() {
    this.submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      if ((this.inputElement.value).trim()) {
        this.onEvent(this.inputElement.value);
        this.inputElement.value = '';
      }
    });
  }

  addKeyboardToggleListener(callback) {
    this.callback = callback;
    this.keyboardButton.addEventListener('click', this.callback);
  }

  disableSubmitButton(boolean) {
    this.submitButton.removeAttribute('disabled');
    setTimeout(() => this.submitButton.removeAttribute('disabled'), 5000);
    if (boolean) {
      this.submitButton.setAttribute('disabled', true);
    }
  }
}


export default SearcherView;
