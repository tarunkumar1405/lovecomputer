function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    const button = document.querySelector(".menu");
    if (!nav) return;
    const isOpen = nav.classList.toggle("is-open");
    if (button) button.setAttribute("aria-expanded", String(isOpen));
}

function filterPosts() {
    const input = document.getElementById("blogSearch");

    if (!input) return;

    const query = input.value.toLowerCase().trim();
    const posts = document.querySelectorAll(".searchable-post");
    let visible = 0;

    posts.forEach(function(post) {
        const text = post.innerText.toLowerCase();

        if (text.includes(query)) {
            post.style.display = "";
            visible++;
        } else {
            post.style.display = "none";
        }
    });

    updateNoResults(visible);
}


function filterCategory(category, button) {
    const posts = document.querySelectorAll(".searchable-post");
    const searchInput = document.getElementById("blogSearch");

    if (searchInput) {
        searchInput.value = "";
    }

    document.querySelectorAll(".category").forEach(function(item) {
        item.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }

    let visible = 0;

    posts.forEach(function(post) {
        const categories = (post.dataset.category || "").split(" ");

        if (category === "all" || categories.includes(category)) {
            post.style.display = "";
            visible++;
        } else {
            post.style.display = "none";
        }
    });

    updateNoResults(visible);
}


function updateNoResults(visible) {
    const message = document.getElementById("noResults");

    if (!message) return;

    message.style.display = visible === 0 ? "block" : "none";
}


function showMessage() {
    alert("More articles will be added soon.");
}


document.addEventListener("DOMContentLoaded", function() {
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }
});
