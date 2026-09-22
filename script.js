function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  if (!nav) return;

  nav.classList.toggle("mobile-open");

  if (!nav.classList.contains("mobile-open")) {
    document.querySelectorAll(".nav-dropdown-menu").forEach(function (menu) {
      menu.classList.remove("open");
    });
  }
}

function filterCards() {
  const searchBox = document.getElementById("searchBox");
  if (!searchBox) return;

  const query = searchBox.value.toLowerCase().trim();

  document.querySelectorAll(".searchable").forEach(function (card) {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(query) ? "" : "none";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll(".nav-drop-btn").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      const menu = button.nextElementSibling;
      if (!menu) return;

      const willOpen = !menu.classList.contains("open");

      document.querySelectorAll(".nav-dropdown-menu").forEach(function (item) {
        item.classList.remove("open");
      });

      if (willOpen) {
        menu.classList.add("open");
      }
    });
  });

  document.querySelectorAll(".nav-links > a").forEach(function (link) {
    link.addEventListener("click", function () {
      const nav = document.querySelector(".nav-links");
      if (nav) nav.classList.remove("mobile-open");
    });
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".nav-dropdown")) {
      document.querySelectorAll(".nav-dropdown-menu").forEach(function (menu) {
        menu.classList.remove("open");
      });
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) {
      const nav = document.querySelector(".nav-links");
      if (nav) nav.classList.remove("mobile-open");

      document.querySelectorAll(".nav-dropdown-menu").forEach(function (menu) {
        menu.classList.remove("open");
      });
    }
  });
});
