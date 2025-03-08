const themeToggle = document.getElementById("toggleButton");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark_theme");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark_theme");

    if (body.classList.contains("dark_theme")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});

const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");
let index = 0;

function updateCarousel() {
    document.querySelector(".carousel_inner").style.transform = `translateX(-${index * 25}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
});

dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
        index = parseInt(e.target.dataset.index);
        updateCarousel();
    });
});

const factItems = document.querySelectorAll('.fact_item');

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

function checkVisibility() {
    factItems.forEach(item => {
        if (isInView(item)) {
            item.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);

checkVisibility();

const footer = document.querySelector(".footer");
window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {
        footer.classList.add("show");
    }
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main_menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});