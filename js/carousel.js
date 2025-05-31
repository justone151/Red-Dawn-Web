document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector("[data-carousel]");
  const slidesContainer = carousel.querySelector("[data-slides]");
  const slides = slidesContainer.querySelectorAll(".carousel__slide");
  const nextButton = carousel.querySelector("[data-carousel-button='next']");
  const prevButton = carousel.querySelector("[data-carousel-button='prev']");
  let currentIndex = 0;
  let interval;

  function updateSlidePosition() {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
  }

  if (nextButton && prevButton) {
    nextButton.addEventListener("click", () => {
      nextSlide();
      resetInterval();
    });

    prevButton.addEventListener("click", () => {
      prevSlide();
      resetInterval();
    });
  }

  updateSlidePosition();
  interval = setInterval(nextSlide, 5000);
});
