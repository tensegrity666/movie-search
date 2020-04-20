const wrapper = document.body.querySelector('.wrapper');
const cardList = document.createElement('ul');

cardList.classList.add('categories');
wrapper.prepend(cardList);

export { cardList as default };
