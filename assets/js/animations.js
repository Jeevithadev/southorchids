gsap.registerPlugin(ScrollTrigger);

/* ------------------------------
   PIN 3D CANVAS
-------------------------------- */
ScrollTrigger.create({
  trigger: ".three-container",
  start: "top top",
  end: "+=300%",
  pin: true,
  scrub: true
});

/* ------------------------------
   ROTATE + ZOOM HONEY JAR
-------------------------------- */
const jarAnim = { progress: 0 };

gsap.to(jarAnim, {
  progress: 1,
  scrollTrigger: {
    trigger: ".three-container",
    start: "top top",
    end: "+=300%",
    scrub: true
  },
  onUpdate: () => {
    if (window.jarGroup) {
      window.jarGroup.rotation.y = jarAnim.progress * Math.PI * 2;
      window.jarGroup.rotation.x = jarAnim.progress * 0.5;
      window.jarGroup.position.z = jarAnim.progress * 1.5;
    }
  }
});


/* ------------------------------
   STORY TEXT ANIMATIONS
-------------------------------- */
document.querySelectorAll(".story-section").forEach((section) => {
  gsap.fromTo(
    section.querySelector("h2"),
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "top 40%",
        scrub: true
      }
    }
  );

  gsap.fromTo(
    section.querySelector("p"),
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.1,
      scrollTrigger: {
        trigger: section,
        start: "top 65%",
        end: "top 35%",
        scrub: true
      }
    }
  );
});


// bee animation

document.querySelectorAll(".bee").forEach((bee) => {
    gsap.set(bee, {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      scale: gsap.utils.random(0.6, 1)
    });
  
    gsap.to(bee, {
      x: "+=" + gsap.utils.random(-200, 200),
      y: "+=" + gsap.utils.random(-150, 150),
      duration: gsap.utils.random(15, 30),
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  });
  