<script>
    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-slide');
        const totalSlides = slides.length;

        // Wrap around if index is out of bounds
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }

        // Move the slides container
        const slidesContainer = document.querySelector('.carousel-slides');
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Initialize the first slide
    showSlide(currentSlide);
</script>