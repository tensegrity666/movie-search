const toggler = document.querySelector('.toggler');

export default function removeTogglerFromPage() {
  window.addEventListener('hashchange', () => {
    if (location.hash === '#score') {
      toggler.style.display = 'none';
    } else {
      toggler.style.display = 'flex';
    }
  });
}
