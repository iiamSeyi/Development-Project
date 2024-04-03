import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 1, 0); 
scene.add(directionalLight);
scene.add(new THREE.AmbientLight(0xffffff, 0.5));

const loader = new GLTFLoader();

loader.load(
	// resource URL
	'tc_gltf.gltf',
	// called when the resource is loaded
	function ( gltf ) {

		scene.add( gltf.scene );

        model.rotation.x = Math.PI / 8; 
        model.rotation.y = Math.PI / 4;

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

camera.position.z = 120;
camera.position.x = 20;
camera.position.y = 30;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();