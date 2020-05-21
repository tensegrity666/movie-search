/* eslint-disable no-underscore-dangle */

import './styles/keyboard.css';
import './styles/animations.css';

import { PICS } from '../../constants';


class keyboardView {
  constructor(defaultLayout, rusLayout, symbolsLayout) {
    this.container = document.createElement('div');
    this.container.classList.add('keyboard');
    this.defaultLayout = defaultLayout;
    this.rusLayout = rusLayout;
    this.symbolsLayout = symbolsLayout;
    this.language = 'en';

    this.render(defaultLayout);
    this.init();
  }

  render(layout) {
    this.container.innerHTML = '';
    this.layout = layout;

    this.layout.forEach((key) => {
      this.button = document.createElement('button');
      this.button.classList.add('keyboard__key');
      this.insertLineBreak = ['backspace', 'p', 'ъ', 'enter', '?'].indexOf(key) !== -1;
      this.brake = document.createElement('span');
      this.brake.classList.add('linebreak');

      switch (key) {
        case 'backspace':
          this.button.setAttribute('data-key', '');
          this.button.classList.add('keyboard__key_double', 'backspace');
          this.button.innerHTML = PICS.bspace;
          break;

        case 'enter':
          this.button.setAttribute('data-key', '');
          this.button.classList.add('keyboard__key_double', 'enter');
          this.button.innerHTML = PICS.enter;
          break;

        case 'space':
          this.button.setAttribute('data-key', '');
          this.button.classList.add('keyboard__key_space');
          this.button.innerHTML = PICS.space;
          break;

        case 'esc':
          this.button.setAttribute('data-hide', '');
          this.button.innerHTML = PICS.escape;
          break;

        case 'lang':
          this.button.setAttribute('data-lang', '');
          this.button.innerHTML = PICS.language;
          break;

        default:
          this.button.innerHTML = key;
          this.button.setAttribute('data-key', '');
          this.button.classList.add('keyboard__key');
          break;
      }

      this.container.append(this.button);

      if (this.insertLineBreak) {
        this.container.append(this.brake);
      }
    });
  }

  init() {
    document.body.append(this.container);
  }

  toggle() {
    this.container.classList.toggle('keyboard_show');
  }

  addKeyPressEvent(callback) {
    this.callback = callback;

    this.container.addEventListener('click', (event) => {
      if (event.target.hasAttribute('data-key')) {
        this.callback(event.target.innerHTML);
      }
      if (event.target.hasAttribute('data-hide')) {
        this.toggle();
      }
      if (event.target.hasAttribute('data-lang')) {
        switch (this.language) {
          case 'ru':
            this.language = 'en';
            this.render(this.defaultLayout);
            break;

          default:
            this.language = 'ru';
            this.render(this.rusLayout);
            break;
        }
      }
    });
  }
}

export default keyboardView;
