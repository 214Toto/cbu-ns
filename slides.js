let slideIndex = 0;
let slides = document.querySelectorAll(".slide");
let totalSlides = slides.length;
let slideWidth = slides[0].offsetWidth;

function showSlides() {
  slideIndex++;
  if (slideIndex >= totalSlides) {
    // Smoothly transition to an empty space equivalent to the width of all images combined
    slides.forEach(slide => {
      slide.style.transition = "transform 1s ease-in-out";
      slide.style.transform = `translateX(-${totalSlides * slideWidth}px)`;
    });

    // After the transition, instantly jump to the first image without a transition
    setTimeout(() => {
      slides.forEach(slide => {
        slide.style.transition = "none";
        slide.style.transform = "translateX(0)";
      });
      slideIndex = 0;
    }, 1000); // Adjust this delay to match the transition time
  } else {
    transitionSlides();
  }
}

function transitionSlides() {
  let offset = -slideIndex * slideWidth; // Calculate transform offset for slide
  slides.forEach(slide => {
    slide.style.transition = "transform 1s ease-in-out";
    slide.style.transform = `translateX(${offset}px)`;
  });
}

setInterval(showSlides, 2000); // Change slide every 2 seconds (2000 milliseconds)
