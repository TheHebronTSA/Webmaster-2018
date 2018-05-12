var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

			var animate = function () {
				requestAnimationFrame( animate );

<<<<<<< HEAD
				cube.rotation.x += 0.1;
				cube.rotation.y += 0.1;

				renderer.render(scene, camera);
			};

			animate();
=======
var loader = new THREE.ColladaLoader();
loader.load('/src/3dModels/model.dae',function(result)
{
    scene.add(result.scene);
});



var light = new THREE.PointLight(0xFFFF00);
light.position.set(10, 0, 25);
scene.add(light);
renderer.render(scene,camera);
>>>>>>> parent of 57ff77c... Merge branch 'robotics'
