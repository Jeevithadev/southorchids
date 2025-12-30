gsap.from("h1", {
    y: 50,
    opacity: 0,
    duration: 1
  });

  gsap.registerPlugin(ScrollTrigger);

  // Section fade-up
  gsap.utils.toArray("section").forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1
    });
  });
  
  