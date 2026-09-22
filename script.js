function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  if (!nav) return;
  nav.classList.toggle("mobile-open");
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

  const dropdownButtons = document.querySelectorAll(".nav-drop-btn");

  dropdownButtons.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      event.stopPropagation();

      const currentMenu = btn.nextElementSibling;
      if (!currentMenu) return;

      const wasOpen = currentMenu.classList.contains("open");

      document.querySelectorAll(".nav-dropdown-menu").forEach(function (menu) {
        menu.classList.remove("open");
      });

      if (!wasOpen) {
        currentMenu.classList.add("open");
      }
    });
  });

  document.addEventListener("click", function () {
    document.querySelectorAll(".nav-dropdown-menu").forEach(function (menu) {
      menu.classList.remove("open");
    });
  });

  // Close the mobile menu after selecting a normal link.
  document.querySelectorAll(".nav-links > a").forEach(function (link) {
    link.addEventListener("click", function () {
      const nav = document.querySelector(".nav-links");
      if (nav) nav.classList.remove("mobile-open");
    });
  });
});
