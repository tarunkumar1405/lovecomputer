function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  if (!nav) return;
  const isOpen = nav.classList.toggle("mobile-open");
  nav.style.display = isOpen ? "flex" : "";
}

function filterCards() {
  const searchBox = document.getElementById("searchBox");
  if (!searchBox) return;

  const query = searchBox.value.toLowerCase().trim();
  document.querySelectorAll(".searchable").forEach(function(card) {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(query) ? "" : "none";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll(".nav-drop-btn").forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      event.stopPropagation();
      const menu = btn.nextElementSibling;
      if (!menu) return;

      const wasOpen = menu.classList.contains("open");
      document.querySelectorAll(".nav-dropdown-menu").forEach(function (m) {
        m.classList.remove("open");
      });
      if (!wasOpen) menu.classList.add("open");
    });
  });

  document.addEventListener("click", function () {
    document.querySelectorAll(".nav-dropdown-menu").forEach(function (m) {
      m.classList.remove("open");
    });
  });
});


// India & World dropdown compatibility
document.querySelectorAll('.nav-dropdown-toggle').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    const menu = btn.nextElementSibling;
    if (menu) menu.classList.toggle('open');
  });
});
