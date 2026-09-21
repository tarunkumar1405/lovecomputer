document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      mainNav.classList.toggle("show");
    });
  }

  const cards = Array.from(document.querySelectorAll(".article-card"));
  const buttons = Array.from(document.querySelectorAll(".category-btn"));
  const searchInput = document.getElementById("searchInput");
  const searchForm = document.getElementById("blogSearch");
  const noResults = document.getElementById("noResults");

  let selectedCategory = "all";

  function filterArticles() {
    const query = (searchInput.value || "").trim().toLowerCase();
    let visible = 0;

    cards.forEach(function (card) {
      const category = card.dataset.category || "";
      const text = (card.dataset.search || card.textContent).toLowerCase();

      const categoryMatch = selectedCategory === "all" || category === selectedCategory;
      const searchMatch = !query || text.includes(query);

      if (categoryMatch && searchMatch) {
        card.style.display = "";
        visible++;
      } else {
        card.style.display = "none";
      }
    });

    noResults.style.display = visible ? "none" : "block";
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      selectedCategory = button.dataset.category;
      filterArticles();
    });
  });

  if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      filterArticles();
      document.querySelector(".latest-section").scrollIntoView({ behavior: "smooth" });
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", filterArticles);
  }

  filterArticles();
});
