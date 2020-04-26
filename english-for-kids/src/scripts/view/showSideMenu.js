const menu = document.querySelector('.menu');
const button = document.querySelector('.burger');
const burgerInner = button.querySelector('.burger__inner');

const onMouseLeave = () => {
  menu.classList.remove('menu_show');
  burgerInner.classList.remove('burger-action');
};

const onBurgerClick = () => {
  menu.classList.toggle('menu_show');
  burgerInner.classList.toggle('burger-action');
};

export default function sideMenuToggle() {
  button.addEventListener('click', onBurgerClick);
  menu.addEventListener('mouseleave', onMouseLeave);
}
