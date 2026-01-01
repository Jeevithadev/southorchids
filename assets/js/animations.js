gsap.registerPlugin(ScrollTrigger);

/* ------------------------------
   BEE FLOATING SYSTEM
-------------------------------- */
document.addEventListener("DOMContentLoaded", () => {

  gsap.registerPlugin(ScrollTrigger);

  /* ------------------------------
     BEE FLOATING SYSTEM (FINAL)
  -------------------------------- */

  const bees = document.querySelectorAll(".bee");

  bees.forEach((bee) => {

    gsap.set(bee, {
      x: gsap.utils.random(0, window.innerWidth),
      y: gsap.utils.random(0, window.innerHeight),
      scale: gsap.utils.random(0.7, 1),
      rotation: gsap.utils.random(-30, 30)
    });

    function fly() {
      gsap.to(bee, {
        x: gsap.utils.random(-100, window.innerWidth + 100),
        y: gsap.utils.random(-100, window.innerHeight + 100),
        rotation: gsap.utils.random(-45, 45),
        duration: gsap.utils.random(10, 18),
        ease: "sine.inOut",
        onComplete: fly
      });
    }

    fly();
  });

});

// honey-separator
gsap.utils.toArray(".honey-separator svg path").forEach((wave) => {
  gsap.fromTo(
    wave,
    { scaleY: 0.85 },
    {
      scaleY: 1,
      transformOrigin: "top",
      duration: 1.5,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: wave,
        start: "top 90%",
      }
    }
  );
});
gsap.utils.toArray(".honey-path").forEach((path) => {
  gsap.fromTo(path,
    { scaleY: 0.6 },
    {
      scaleY: 1,
      duration: 1.6,
      ease: "elastic.out(1, 0.5)",
      scrollTrigger: {
        trigger: path,
        start: "top 85%"
      }
    }
  );
});

// product card animation
const cards = document.querySelectorAll(".product-card");
const bees = document.querySelectorAll(".bee");

bees.forEach((bee) => {

  function landOnCard() {
    const card = cards[Math.floor(Math.random() * cards.length)];
    const rect = card.getBoundingClientRect();

    gsap.to(bee, {
      x: rect.left + rect.width / 2,
      y: rect.top - 20,
      scale: 0.8,
      duration: 2,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(bee, {
          delay: 1.5,
          onComplete: flyAgain
        });
      }
    });
  }

  function flyAgain() {
    gsap.to(bee, {
      x: gsap.utils.random(0, window.innerWidth),
      y: gsap.utils.random(0, window.innerHeight),
      scale: gsap.utils.random(0.7, 1),
      duration: gsap.utils.random(8, 14),
      ease: "sine.inOut",
      onComplete: landOnCard
    });
  }

  flyAgain();
});

// hive background
gsap.utils.toArray(".hive-bg").forEach((bg) => {
  gsap.to(bg, {
    backgroundPosition: "0px 200px",
    ease: "none",
    scrollTrigger: {
      trigger: bg,
      scrub: true
    }
  });
});

//limit bee on mobile
 if (window.innerWidth < 768) {
  document.querySelectorAll(".bee").forEach((bee, i) => {
    if (i > 1) bee.remove();
  });
}
//Reduce GSAP work when tab inactive
document.addEventListener("visibilitychange", () => {
  gsap.globalTimeline.timeScale(document.hidden ? 0 : 1);
});