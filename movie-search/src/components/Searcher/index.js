/* eslint-disable class-methods-use-this */
import './styles/searcher.css';


class SearcherView {
  constructor(inputElement, submitButton) {
    this.inputElement = inputElement;
    this.submitButton = submitButton;

    this.addListener();
  }

  onSubmit() {
  }

  addListener() {
    this.submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      if ((this.inputElement.value).trim()) {
        this.onSubmit(this.inputElement.value);
        this.inputElement.value = '';
      }
    });
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
