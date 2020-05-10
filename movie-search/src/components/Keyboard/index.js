/* eslint-disable no-underscore-dangle */
import './styles/keyboard.css';

const wrapper = document.createElement('section');
const container = document.createElement('div');

export default function initKeyboard() {
  wrapper.classList.add('keyboard", "keyboard--hidden');
  container.classList.add('keyboard__keys');
  container.appendChild(createKeys());

  const keys = container.querySelectorAll('.keyboard__key');

  wrapper.append(this.container);
  document.body.append(this.wrapper);

  const input = document.querySelector('.input');
  input.addEventListener('focus', () => {
    open(input.value, (currentValue) => {
      input.value = currentValue;
    });
  });
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


function open() {
  wrapper.classList.toggle('keyboard--hidden');
}

// const Keyboard = {
//   elements: {
//       main: null,
//       keysContainer: null,
//       keys: []
//   },

//   eventHandlers: {
//       oninput: null,
//       onclose: null
//   },

//   properties: {
//       value: "",
//       capsLock: false
//   },

//   init() {
// // Create main elements
// this.elements.main = document.createElement("div");
// this.elements.keysContainer = document.createElement("div");

// // Setup main elements
// this.elements.main.classList.add("keyboard", "keyboard--hidden");
// this.elements.keysContainer.classList.add("keyboard__keys");
// this.elements.keysContainer.appendChild(this._createKeys());

// this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

// Add to DOM
// this.elements.main.appendChild(this.elements.keysContainer);
// document.body.appendChild(this.elements.main);

// // Automatically use keyboard for elements with .use-keyboard-input
// document.querySelectorAll(".use-keyboard-input").forEach(element => {
//     element.addEventListener("focus", () => {
//         this.open(element.value, currentValue => {
//             element.value = currentValue;
//         });
//     });
// });
// },

// _createKeys() {
//     const fragment = document.createDocumentFragment();
//     const keyLayout = [
//         "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
//         "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
//         "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
//         "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
//         "space"
//     ];

//     // Creates HTML for an icon
//     const createIconHTML = (icon_name) => {
//         return `<i class="material-icons">${icon_name}</i>`;
//     };

//     keyLayout.forEach(key => {
//         const keyElement = document.createElement("button");
//         const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;

//         // Add attributes/classes
//         keyElement.setAttribute("type", "button");
//         keyElement.classList.add("keyboard__key");

//         switch (key) {
//             case "backspace":
//                 keyElement.classList.add("keyboard__key--wide");
//                 keyElement.innerHTML = createIconHTML("backspace");

//                 keyElement.addEventListener("click", () => {
//                     this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
//                     this._triggerEvent("oninput");
//                 });

//                 break;

//             case "caps":
//                 keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
//                 keyElement.innerHTML = createIconHTML("keyboard_capslock");

//                 keyElement.addEventListener("click", () => {
//                     this._toggleCapsLock();
//                     keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
//                 });

//                 break;

//             case "enter":
//                 keyElement.classList.add("keyboard__key--wide");
//                 keyElement.innerHTML = createIconHTML("keyboard_return");

//                 keyElement.addEventListener("click", () => {
//                     this.properties.value += "\n";
//                     this._triggerEvent("oninput");
//                 });

//                 break;

//             case "space":
//                 keyElement.classList.add("keyboard__key--extra-wide");
//                 keyElement.innerHTML = createIconHTML("space_bar");

//                 keyElement.addEventListener("click", () => {
//                     this.properties.value += " ";
//                     this._triggerEvent("oninput");
//                 });

//                 break;

//             case "done":
//                 keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
//                 keyElement.innerHTML = createIconHTML("check_circle");

//                 keyElement.addEventListener("click", () => {
//                     this.close();
//                     this._triggerEvent("onclose");
//                 });

//                 break;

//             default:
//                 keyElement.textContent = key.toLowerCase();

//                 keyElement.addEventListener("click", () => {
//                     this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
//                     this._triggerEvent("oninput");
//                 });

//                 break;
//         }

//         fragment.appendChild(keyElement);

//         if (insertLineBreak) {
//             fragment.appendChild(document.createElement("br"));
//         }
//     });

//     return fragment;
// },

//   _triggerEvent(handlerName) {
//       if (typeof this.eventHandlers[handlerName] == "function") {
//           this.eventHandlers[handlerName](this.properties.value);
//       }
//   },

//   _toggleCapsLock() {
//       this.properties.capsLock = !this.properties.capsLock;

//       for (const key of this.elements.keys) {
//           if (key.childElementCount === 0) {
//               key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
//           }
//       }
//   },

//   open(initialValue, oninput, onclose) {
//       this.properties.value = initialValue || "";
//       this.eventHandlers.oninput = oninput;
//       this.eventHandlers.onclose = onclose;
//       this.elements.main.classList.remove("keyboard--hidden");
//   },

//   close() {
//       this.properties.value = "";
//       this.eventHandlers.oninput = oninput;
//       this.eventHandlers.onclose = onclose;
//       this.elements.main.classList.add("keyboard--hidden");
//   }
// };

// Keyboard.init();
