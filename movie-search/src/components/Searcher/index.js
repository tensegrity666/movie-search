import './styles/searcher.css';
import EventEmitter from '../EventEmitter';
// import data from '../../stub/dataExample';

// const form = document.querySelector('.searcher');
const input = document.querySelector('#search-input');
const button = document.querySelector('#search-submit');
const textfield = document.querySelector('.main-container__textfield');
const emitter = new EventEmitter();

const MY_URL = 'http://www.omdbapi.com/?t=titanic&apikey=fcbac651';

function sendRequest(url) {
  return fetch(url).then((response) => response.json());
}

const onRequest = (request) => {
  textfield.innerText = `request: ${request}`;
  // const response = await fetch(`http://www.omdbapi.com/?t=${query}&apikey=fcbac651`);
  // const foo = await response.json();
  // return console.log(JSON.parse(foo));
  sendRequest(MY_URL)
    .then((answer) => console.log(answer))
    .catch((error) => console.log(error));
};

emitter.subscribe('event:request-sending', onRequest);

const onClick = (event) => {
  event.preventDefault();
  emitter.emit('event:request-sending', input.value);
  input.value = '';
};

const submitHandler = () => button.addEventListener('click', onClick);

// sendRequest('data')
//   .then((foo) => console.log(JSON.parse(foo)));

export default submitHandler;
