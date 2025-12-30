window.addEventListener("load", () => {
    gsap.to("#loader", {
      opacity: 0,
      duration: 0.8,
      onComplete: () => document.getElementById("loader").remove()
    });
  });

  window.addEventListener("scroll", () => {
    document.querySelector(".navbar")
      .classList.toggle("scrolled", window.scrollY > 50);
  });

  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    },
    loop: true
  });

  const canvas = document.getElementById("honeyCanvas");
if (canvas) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const geometry = new THREE.CylinderGeometry(1,1,2,32);
  const material = new THREE.MeshStandardMaterial({ color: 0xC99700 });
  const jar = new THREE.Mesh(geometry, material);
  scene.add(jar);

  const light = new THREE.PointLight(0xffffff, 1);
  light.position.set(5,5,5);
  scene.add(light);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    jar.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
}

  
  