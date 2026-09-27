function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  const button = document.querySelector('.menu');
  if (!nav) return;

  const isOpen = nav.classList.toggle('mobile-open');
  if (button) {
    button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    button.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    button.textContent = isOpen ? '×' : '☰';
  }
}

function closeMobileMenu() {
  const nav = document.querySelector('.nav-links');
  const button = document.querySelector('.menu');
  if (!nav) return;

  nav.classList.remove('mobile-open');
  nav.querySelectorAll('.nav-dropdown-menu').forEach(function(menu) {
    menu.classList.remove('open');
  });
  nav.querySelectorAll('.nav-drop-btn').forEach(function(btn) {
    btn.setAttribute('aria-expanded', 'false');
  });

  if (button) {
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open menu');
    button.textContent = '☰';
  }
}

function filterCards() {
  const searchBox = document.getElementById('searchBox');
  if (!searchBox) return;

  const query = searchBox.value.toLowerCase().trim();
  document.querySelectorAll('.searchable').forEach(function(card) {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(query) ? '' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll('.nav-drop-btn').forEach(function(btn) {
    btn.setAttribute('aria-expanded', 'false');

    btn.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();

      const menu = btn.nextElementSibling;
      if (!menu) return;

      const wasOpen = menu.classList.contains('open');

      document.querySelectorAll('.nav-dropdown-menu').forEach(function(item) {
        item.classList.remove('open');
      });
      document.querySelectorAll('.nav-drop-btn').forEach(function(item) {
        item.setAttribute('aria-expanded', 'false');
      });

      if (!wasOpen) {
        menu.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.querySelectorAll('.nav-links > a, .nav-dropdown-menu a').forEach(function(link) {
    link.addEventListener('click', function() {
      closeMobileMenu();
    });
  });

  document.addEventListener('click', function(event) {
    const nav = document.querySelector('.nav-links');
    const button = document.querySelector('.menu');
    if (!nav) return;

    if (!nav.contains(event.target) && !(button && button.contains(event.target))) {
      closeMobileMenu();
    }
  });

  window.addEventListener('resize', function() {
    if (window.innerWidth > 900) closeMobileMenu();
  });
});
