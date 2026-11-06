document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle: no stored choice = follow the system setting
(function () {
  var root = document.documentElement;
  var media = window.matchMedia('(prefers-color-scheme: dark)');
  var buttons = document.querySelectorAll('[data-theme-option]');
  function current() { return root.getAttribute('data-theme') || (media.matches ? 'dark' : 'light'); }
  function sync() {
    var t = current();
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.themeOption === t)); });
  }
  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      var t = b.dataset.themeOption;
      root.setAttribute('data-theme', t);
      try { localStorage.setItem('theme', t); } catch (e) {}
      sync();
    });
  });
  media.addEventListener('change', sync);
  sync();
})();
