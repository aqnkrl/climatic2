document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const slides = document.querySelectorAll(".carousel-slide");
    const totalSlides = slides.length;

    function changeSlide() {
        index = (index + 1) % totalSlides;
        document.querySelector(".carousel").style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(changeSlide, 5000);  // Cambia cada 5 segundos
});
