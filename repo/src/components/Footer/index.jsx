import { CopyText, FooterS } from "./style";
import githubIcon from '../../app/shared/icons/github_logo_icon_147285.png'
import linkedinIcon from '../../app/shared/icons/linkedin_black_logo_icon_147114.png'
import emailIcon from '../../app/shared/icons/email.png'
import React, { useState, useEffect } from 'react';
import * as THREE from "three"

const Footer = () => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGL1Renderer({
        canvas: document.querySelector("#bg")
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.position.setZ(30)
    renderer.render(scene, camera)
    const geometry = new THREE.TorusGeometry(10, 3, 12, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ee00, wireframe: true });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus)
    const pointLight = new THREE.PointLight(0xfffff)
    pointLight.position.set(5, 1, 1)
    const ambientLight = new THREE.AmbientLight(0xffffff)
    scene.add(pointLight, ambientLight)
    const lightHelper = new THREE.PointLightHelper(pointLight)
    scene.add(lightHelper)
    const animate = () => {
        requestAnimationFrame(animate)
        renderer.render(scene, camera)
        torus.rotateX(0.01)
        torus.rotateY(0.01)
        torus.rotateZ(0.005)
    }
    animate()

    return (<>
        <FooterS>
            <div>
                <p>CONTACTAME</p>
            </div>
            <div>
                <img width={50} height={50} src={githubIcon} alt="Logo github" />
                <img width={50} height={50} src={linkedinIcon} alt="Logo linkedin" />
                <div>
                    <img width={50} height={50} src={emailIcon} alt="Logo correo electronico" />
                    Yeisona07@hotmail.com
                </div>
            </div>
            <canvas id="bg">

            </canvas>
            <hr />
            <CopyText>
                This work is licensed by Creative Commons License Attribution-NonCommercial - Yeison S
            </CopyText>
        </FooterS>
    </>);
}

export default Footer;
