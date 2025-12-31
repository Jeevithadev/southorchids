// Loader
window.addEventListener("load", () => {
    gsap.to("#loader", {
      opacity: 0,
      duration: 0.8,
      onComplete: () => document.getElementById("loader").remove()
    });
  });
  
  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 50);
  });
  
  // Swiper
  if (document.querySelector(".mySwiper")) {
    new Swiper(".mySwiper", {
      loop: false,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  }  

  
  