document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const itemWidth = carousel.querySelector(".carousel-item").offsetWidth; // Breite eines Elements inkl. Margin

    // Funktion: Nach links scrollen
    prevBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: -itemWidth, behavior: "smooth" });
    });

    // Funktion: Nach rechts scrollen
    nextBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: itemWidth, behavior: "smooth" });
    });
});


function updateCarousel() {
    const offset = currentIndex * 25; // Each item takes 25% (assuming 4 items visible)
    carousel.style.transform = `translateX(-${offset}%)`;
}

// FAQ Toggle
document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.faq-icon');
        
        // Toggle answer visibility
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

        // Rotate the "+" icon
        icon.textContent = icon.textContent === '+' ? '-' : '+';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let lastScrollY = window.scrollY;
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            // Beim Scrollen nach unten Header ausblenden
            if (window.scrollY > 0) {  // Verhindern, dass der Header oben verschwindet
                header.classList.add("hidden");
            }
        } else {
            // Beim Scrollen nach oben Header einblenden
            header.classList.remove("hidden");
        }
        lastScrollY = window.scrollY;
    });

    // Optional: Header wieder anzeigen, wenn Maus darüber geht
    header.addEventListener("mouseenter", () => {
        header.classList.remove("hidden");
    });

    header.addEventListener("mouseleave", () => {
        if (window.scrollY > 0) {
            header.classList.add("hidden");
        }
    });
});


