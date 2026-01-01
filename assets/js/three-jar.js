const scene = new THREE.Scene();
scene.background = null;

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / 400,
  0.1,
  100
);
camera.position.z = 4;

const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true
});
renderer.setSize(300, 400);
document.getElementById("jar-canvas").appendChild(renderer.domElement);

// Honey jar body
const geometry = new THREE.CylinderGeometry(1, 1, 2, 32);
const material = new THREE.MeshPhysicalMaterial({
  color: 0xffb703,
  transparent: true,
  opacity: 0.9,
  roughness: 0.2,
  transmission: 0.8
});

const jar = new THREE.Mesh(geometry, material);
scene.add(jar);

// Light
const light = new THREE.DirectionalLight(0xffffff, 1.2);
light.position.set(5, 5, 5);
scene.add(light);

function animate() {
  jar.rotation.y += 0.005;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
  renderer.setSize(300, 400);
  camera.aspect = 300 / 400;
  camera.updateProjectionMatrix();
});
