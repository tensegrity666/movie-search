const toggler = document.querySelector('.toggler');

export default function removeTogglerFromPage() {
  window.addEventListener('hashchange', () => {
    if (location.hash === '#score' || location.hash === '#main') {
      toggler.style.display = 'none';
    } else {
      toggler.style.display = 'flex';
    }
  });
}
