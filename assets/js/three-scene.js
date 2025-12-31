import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

const canvas = document.querySelector('#honeyCanvas');
if (!canvas) {
  console.warn('Honey canvas not found');
} else {
  initThree();
}

function initThree() {

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    45,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    100
  );
  camera.position.set(0, 1.2, 4);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true
  });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  scene.add(new THREE.AmbientLight(0xffffff, 0.6));

  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(5, 10, 5);
  scene.add(dirLight);

  // Glass jar
  const glassMaterial = new THREE.MeshPhysicalMaterial({
    transmission: 1,
    roughness: 0,
    thickness: 1,
    transparent: true
  });

  const jar = new THREE.Mesh(
    new THREE.CylinderGeometry(0.9, 0.9, 2, 64),
    glassMaterial
  );

  const honey = new THREE.Mesh(
    new THREE.CylinderGeometry(0.85, 0.85, 1.4, 64),
    new THREE.MeshStandardMaterial({ color: 0xffb300 })
  );
  honey.position.y = -0.2;

  const lid = new THREE.Mesh(
    new THREE.CylinderGeometry(0.95, 0.95, 0.25, 64),
    new THREE.MeshStandardMaterial({ color: 0x333333 })
  );
  lid.position.y = 1.1;

  const jarGroup = new THREE.Group();
  jarGroup.add(jar, honey, lid);
  scene.add(jarGroup);

  window.jarGroup = jarGroup; // for GSAP scroll later

  function animate() {
    jarGroup.rotation.y += 0.003;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  });
}
