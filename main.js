// Initialize Three.js components
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

// Create a sphere
const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.x = -2; // Initial position of the sphere
scene.add(sphere);

// Position the camera
camera.position.z = 5;

// Define variables for sphere movement
let sphereDirection = 1; // 1 for moving right, -1 for moving left
const sphereSpeed = 0.02; // Speed of movement

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Move the sphere horizontally
    sphere.position.x += sphereDirection * sphereSpeed;

    // Reverse direction if sphere reaches edge
    if (sphere.position.x >= 2 || sphere.position.x <= -2) {
        sphereDirection *= -1;
    }

    // Rotate the sphere
    sphere.rotation.x += 0.02;
    sphere.rotation.y += 0.02;

    renderer.render(scene, camera);
}
animate();
