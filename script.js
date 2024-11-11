let currentSlide = 0;
const slides = document.querySelectorAll(".pildid img");

showSlide(currentSlide);

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function moveSlide(step) {
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    showSlide(currentSlide);
}

const autoSlide = setInterval(() => {
    moveSlide(1);
}, 5000);