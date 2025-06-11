document.addEventListener("DOMContentLoaded", function () {
  // ค้นหา element ของ carousel ในหน้าเว็บ
  const carousel = document.querySelector("[data-carousel]");

  // ---- เพิ่มเงื่อนไขนี้เข้าไป ----
  // โค้ดทั้งหมดจะทำงานก็ต่อเมื่อหน้านั้นมี carousel อยู่จริง
  if (carousel) {
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
      interval = setInterval(nextSlide, 5000); // เปลี่ยนสไลด์ทุก 5 วินาที
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

    // เริ่มต้นการทำงาน
    updateSlidePosition();
    interval = setInterval(nextSlide, 5000);
  } // <-- ปิดปีกกาของ if ที่เพิ่มเข้ามา
});