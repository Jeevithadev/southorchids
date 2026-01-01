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


/* ------------------------------
   BEE FLOATING SYSTEM
-------------------------------- */
document.querySelectorAll(".bee").forEach((bee, i) => {

    gsap.set(bee, {
      x: gsap.utils.random(0, window.innerWidth),
      y: gsap.utils.random(0, window.innerHeight),
      scale: gsap.utils.random(0.7, 1),
      rotation: gsap.utils.random(-20, 20)
    });
  
    function fly() {
      gsap.to(bee, {
        x: gsap.utils.random(-100, window.innerWidth + 100),
        y: gsap.utils.random(-100, window.innerHeight + 100),
        rotation: gsap.utils.random(-30, 30),
        duration: gsap.utils.random(12, 20),
        ease: "sine.inOut",
        onComplete: fly
      });
    }
  
    fly();
  });