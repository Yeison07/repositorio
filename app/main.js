import './style.css'
import * as THREE from "three"

const scene= new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000)

const renderer= new THREE.WebGL1Renderer({
    canvas: document.querySelector("#bg")
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth,window.innerHeight)
camera.position.setZ(30)
renderer.render(scene,camera)

const geometry = new THREE.TorusGeometry( 10, 3, 12, 100 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ee00, wireframe:true } );
const torus = new THREE.Mesh( geometry, material );

scene.add(torus)

const pointLight= new THREE.PointLight(0xfffff)
pointLight.position.set(5,1,1)
const ambientLight= new THREE.AmbientLight(0xffffff)
scene.add(pointLight,ambientLight)
const lightHelper= new THREE.PointLightHelper(pointLight)
scene.add(lightHelper)
const animate =()=>{
    requestAnimationFrame(animate)
    renderer.render(scene,camera)
    torus.rotateX(0.01)
    torus.rotateY(0.01)
    torus.rotateZ(0.005)
}

animate()