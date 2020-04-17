import playModeToggler from './PlayModeToggler';

const PAGE_TYPE = {
  isPlay: false,
};
const toggler = document.querySelector('#toggle');

export default function togglePageType() {
  toggler.addEventListener('change', () => {
    PAGE_TYPE.isPlay = toggler.checked;
    console.log(PAGE_TYPE.isPlay);
    playModeToggler(PAGE_TYPE.isPlay);
  });
}
