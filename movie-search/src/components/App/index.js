import './styles/index.css';


class AppView {
  constructor(model) {
    this.model = model;

    this.container = document.querySelector('.cardlist');
    this.addCardClickListener();
  }

  addCardClickListener() {
    this.container.addEventListener('click', (event) => {
      if (event.target.hasAttribute('data-modal')) {
        event.target.nextElementSibling.classList.toggle('moviecard__info_show');
      }
      if (event.target.hasAttribute('data-modal-close')) {
        event.target.parentElement.classList.toggle('moviecard__info_show');
      }
    });
  }
}


export default AppView;
