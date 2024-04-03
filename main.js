import * as THREE from '/three';
import { GLTFLoader } from '/three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from '/three/addons/controls/OrbitControls.js';
import WebGL from 'three/addons/capabilities/WebGL.js';

if ( WebGL.isWebGLAvailable() ) {
    

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
	'public/tc_gltf.gltf',
	// called when the resource is loaded
	function ( gltf ) {

		scene.add( gltf.scene );

        gltf.rotation.x = Math.PI / 8; 
        gltf.rotation.y = Math.PI / 4;
        mgltf.rotation.z = Math.PI / 10;

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
camera.position.y = 100;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; 
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
controls.maxPolarAngle = Math.PI / 2;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
	// Initiate function or other initializations here
	animate();

} else {

	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

}