let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) slideIndex = 0;
    else if (index < 0) slideIndex = totalSlides - 1;
    else slideIndex = index;

    const offset = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
    showSlide(slideIndex + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(slideIndex - 1);
});

// Automatic slide change
setInterval(() => showSlide(slideIndex + 1), 5000);
