import * as THREE from 'three';
// Initialize Three.js scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lighting to the scene
var ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);
var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 0).normalize();
scene.add(directionalLight);

// Load the GLTF model
var loader = new THREE.GLTFLoader();
loader.load('"C:/Users/Oluwaseyi Salisu/Downloads/tc_gltf.gltf"', function (gltf) {
    var model = gltf.scene;
    scene.add(model);
}, undefined, function (error) {
    console.error(error);
});

// Set camera position
camera.position.z = 5;

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();


