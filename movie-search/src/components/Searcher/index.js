import './styles/searcher.css';
import EventEmitter from '../EventEmitter';

const input = document.querySelector('#search-input');
const button = document.querySelector('#search-submit');
const textfield = document.querySelector('.main-container__textfield');
const emitter = new EventEmitter();

emitter.subscribe('event:request-sending', (data) => {
  textfield.innerText = `request: ${data}`;
});

export default function Searcher() {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    emitter.emit('event:request-sending', input.value);
    input.value = '';
  });
}
