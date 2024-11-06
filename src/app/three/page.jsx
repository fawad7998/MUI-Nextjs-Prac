// components/SolarSystem.js
"use client";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";

export default function SolarSystem() {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Load textures
        const textureLoader = new TextureLoader();
        const sunTexture = textureLoader.load('/earth.png');
        const earthTexture = textureLoader.load('/sun.png');

        // Sun
        const sunGeometry = new THREE.SphereGeometry(3, 32, 32);
        const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
        const sun = new THREE.Mesh(sunGeometry, sunMaterial);
        scene.add(sun);

        // Earth
        const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
        const earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture });
        const earth = new THREE.Mesh(earthGeometry, earthMaterial);
        earth.position.x = 8;
        scene.add(earth);

        // Light source
        const pointLight = new THREE.PointLight(0xffffff, 1.5);
        pointLight.position.set(0, 0, 0);
        scene.add(pointLight);

        // Camera position
        camera.position.z = 20;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate the sun and earth
            sun.rotation.y += 0.004;
            earth.rotation.y += 0.01;

            // Orbit the earth around the sun
            earth.position.x = 8 * Math.cos(Date.now() * 0.001);
            earth.position.z = 8 * Math.sin(Date.now() * 0.001);

            renderer.render(scene, camera);
        };
        animate();

        return () => {
            mountRef.current.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} />;
}
