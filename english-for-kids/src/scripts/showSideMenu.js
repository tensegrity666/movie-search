const menu = document.querySelector('.menu');
const button = document.querySelector('.burger');
const burgerInner = button.querySelector('.burger__inner');

export default function sideMenuToggle() {
  button.addEventListener('click', () => {
    menu.classList.toggle('menu_show');
    burgerInner.classList.toggle('burger-action');
  });

  menu.onmouseleave = () => {
    menu.classList.remove('menu_show');
    burgerInner.classList.remove('burger-action');
  };
}
