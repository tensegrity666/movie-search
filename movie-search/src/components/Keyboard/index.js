/* eslint-disable no-underscore-dangle */
import './styles/keyboard.css';

const wrapper = document.createElement('section');
const container = document.createElement('div');

function open() {
  wrapper.classList.toggle('keyboard--hidden');
}

function createKeys() {
  const fragment = document.createDocumentFragment();
  const keyLayoutDefault = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'backspace',
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter',
    'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?',
    'space',
  ];

  keyLayoutDefault.forEach((key) => {
    const button = document.createElement('button');

    button.setAttribute('type', 'button');
    button.classList.add('keyboard__key');

    switch (key) {
      case 'Backspace':
        button.classList.add('keyboard__key_double', 'backspace');
        button.innerHTML = 'Backspace';
        break;

      case 'Enter':
        button.classList.add('keyboard__key_double', 'enter');
        button.innerHTML = 'Enter';
        break;

      case 'Shift':
        button.classList.add('keyboard__key_triple', 'shift');
        button.innerHTML = 'Shift';
        break;

      case 'Tab':
        button.classList.add('keyboard__key_double', 'tab');
        button.innerHTML = 'Tab';
        break;

      case 'CapsLock':
        button.innerHTML = 'CapsLock';
        break;

      case 'Space':
        button.classList.add('keyboard__key_space');
        button.innerText = ' ';
        break;

      case 'Alt':
        button.classList.add('alt');
        button.innerHTML = 'Alt';
        break;

      case 'Ctrl':
        button.classList.add('ctrl');
        button.innerHTML = 'Ctrl';
        break;

      default:
        button.innerText = key;
        button.classList.add('keyboard__key');
        break;
    }

    fragment.append(button);
  });

  return fragment;
}


export default function initKeyboard() {
  wrapper.classList.add('keyboard", "keyboard--hidden');
  container.classList.add('keyboard__keys');
  container.appendChild(createKeys());

  wrapper.append(this.container);
  document.body.append(this.wrapper);

  const input = document.querySelector('.input');
  input.addEventListener('focus', () => {
    open(input.value, (currentValue) => {
      input.value = currentValue;
    });
  });
}
