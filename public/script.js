// Theme toggle. The initial theme is set by the inline script in <head>.
(function () {
  var root = document.documentElement;
  var button = document.querySelector('.theme-toggle');

  function updateLabel() {
    var label = root.dataset.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
  }

  button.addEventListener('click', function () {
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('jb-theme', next); } catch (e) {}
    updateLabel();
  });

  updateLabel();
})();

// "Student work" expand/collapse.
(function () {
  var button = document.querySelector('.student-toggle');
  var panel = document.getElementById(button.getAttribute('aria-controls'));
  var label = button.querySelector('.student-toggle-label');

  button.addEventListener('click', function () {
    var open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    panel.classList.toggle('is-open', open);
    label.textContent = open ? 'hide' : 'show';
  });
})();
