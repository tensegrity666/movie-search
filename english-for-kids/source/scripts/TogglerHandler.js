import playModeToggler from './PlayModeToggler';

const PAGE_TYPE = {
  isTrain: true,
};
const toggler = document.querySelector('#toggle');

export default function togglePageType() {
  toggler.addEventListener('change', () => {
    PAGE_TYPE.isTrain = toggler.checked;
    playModeToggler(PAGE_TYPE.isTrain);
  });
}
