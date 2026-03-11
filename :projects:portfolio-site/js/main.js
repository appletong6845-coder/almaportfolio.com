// js/main.js
// Shared behaviors (set .is-active on matching nav link)
document.addEventListener('DOMContentLoaded', () => {
  const links = Array.from(document.querySelectorAll('.nav-link'));
  const path = window.location.pathname.split('/').pop().toLowerCase() || 'index.html';
  links.forEach(link => {
    const href = (link.getAttribute('href') || '').split('/').pop().toLowerCase();
    if (href && href === path) {
      link.classList.add('is-active');
    } else {
      link.classList.remove('is-active');
    }
  });
});
if (rect.top < triggerBottom && rect.bottom > triggerTop) {
  toysLayer.classList.add('close');
} else {
  toysLayer.classList.remove('close');
}
