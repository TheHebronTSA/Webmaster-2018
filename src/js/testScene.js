var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// instantiate a loader
var loader = new THREE.JSONLoader();

// load a resource
loader.load(
	// resource URL
	'./3dModels/model.json',

	// onLoad callback
	function ( geometry, materials ) {
		var material = materials[ 0 ];
		var object = new THREE.Mesh( geometry, material );
		scene.add( object );
	},

	// onProgress callback
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},

	// onError callback
	function( err ) {
		console.log( 'An error happened' );
	}
);
Constructor



var light = new THREE.PointLight(0xFFFF00);
light.position.set(10, 0, 25);
scene.add(light);
renderer.render(scene, camera);
