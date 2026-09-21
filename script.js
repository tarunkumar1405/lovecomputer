function toggleMenu() {
    const nav = document.querySelector(".nav-links");

    if (!nav) return;

    const isOpen = nav.style.display === "flex";

    nav.style.display = isOpen ? "none" : "flex";

    if (!isOpen) {
        nav.style.position = "absolute";
        nav.style.top = "72px";
        nav.style.left = "0";
        nav.style.right = "0";
        nav.style.background = "#fff";
        nav.style.padding = "20px";
        nav.style.flexDirection = "column";
        nav.style.borderBottom = "1px solid #e7ebf2";
    }
}

function filterCards() {
    const searchBox = document.getElementById("searchBox");

    if (!searchBox) return;

    const query = searchBox.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".searchable");

    cards.forEach(function(card) {
        const text = card.innerText.toLowerCase();

        card.style.display = text.includes(query) ? "" : "none";
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
