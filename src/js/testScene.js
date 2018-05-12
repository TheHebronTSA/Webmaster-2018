var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

camera.position.z = 100;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setClearColor(0xfff6e6);
document.body.appendChild(renderer.domElement);


var loader = new THREE.ColladaLoader();
loader.load('/src/3dModels/model.dae',function(collada)
{
    var dae = collada.scene;
    var skin = collada.skins[0];

    dae.position.set(0,0,0);
    dae.scale.set(1.5,1.5,1.5);
    scene.add(dae);
});




var light = new THREE.PointLight(0xFFFF00);
light.position.set(10, 0, 25);
scene.add(light);
renderer.render(scene,camera);