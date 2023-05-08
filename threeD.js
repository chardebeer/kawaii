// Initialize the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("three-container").appendChild(renderer.domElement);

// Create the Poké Ball's material
const textureLoader = new THREE.TextureLoader();
const pokeBallTexture = textureLoader.load("https://wallpaperaccess.com/full/45634.png");
const material = new THREE.MeshBasicMaterial({ map: pokeBallTexture });

// Create the Poké Ball's geometry
const geometry = new THREE.SphereGeometry(1, 32, 32);

// Create the Poké Ball's mesh
const pokeBall = new THREE.Mesh(geometry, material);
scene.add(pokeBall);

// Position the camera
camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the Poké Ball
  pokeBall.rotation.x += 0.01;
  pokeBall.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
