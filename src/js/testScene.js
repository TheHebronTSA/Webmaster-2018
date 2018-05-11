var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

camera.position.z = 100;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setClearColor(0xfff6e6);
document.body.appendChild(renderer.domElement);


var geometry = new THREE.IcosahedronGeometry(20, 0);
var material = new THREE.MeshLambertMaterial({color: 0xfd59d7})
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);



var light = new THREE.PointLight(0xFFFF00);
light.position.set(10, 0, 25);
scene.add(light);
var controls = new THREE.OrbitControls(camera);
controls.update()

function animate()
{
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene,camera);
}