
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000; // Increased particle count
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15; // Increased spread
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Create multiple particle systems with different colors and behaviors
    const particleGroups = [
      {
        size: 0.005,
        color: '#00d09c',
        opacity: 0.6,
        speed: 0.1,
        amplitude: 0.15,
      },
      {
        size: 0.003,
        color: '#2563eb',
        opacity: 0.4,
        speed: 0.15,
        amplitude: 0.1,
      },
      {
        size: 0.004,
        color: '#f97316',
        opacity: 0.5,
        speed: 0.2,
        amplitude: 0.12,
      },
    ];

    const particleSystems = particleGroups.map(group => {
      const material = new THREE.PointsMaterial({
        size: group.size,
        color: group.color,
        transparent: true,
        opacity: group.opacity,
        blending: THREE.AdditiveBlending,
      });
      return {
        points: new THREE.Points(particlesGeometry, material),
        config: group,
      };
    });

    particleSystems.forEach(system => scene.add(system.points));

    // Add floating spheres
    const sphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: '#00d09c',
      transparent: true,
      opacity: 0.6,
      shininess: 100,
    });

    const spheres = Array(5).fill(null).map(() => {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      );
      scene.add(sphere);
      return sphere;
    });

    // Add ambient and directional lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Camera position
    camera.position.z = 2;

    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Scroll effect
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Animation
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth camera movement
      targetX = mouseX * 0.2;
      targetY = mouseY * 0.2;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;

      // Rotate and animate particle systems
      particleSystems.forEach((system, i) => {
        const { points, config } = system;
        points.rotation.x = elapsedTime * config.speed + i * 0.1;
        points.rotation.y = elapsedTime * (config.speed * 1.5) + i * 0.1;
        
        // Add wave effect with different amplitudes
        const positions = points.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          const x = positions[i];
          const z = positions[i + 2];
          positions[i + 1] = Math.sin(elapsedTime + x + z) * config.amplitude;
        }
        points.geometry.attributes.position.needsUpdate = true;
      });

      // Animate floating spheres
      spheres.forEach((sphere, i) => {
        sphere.position.y += Math.sin(elapsedTime * 0.5 + i) * 0.002;
        sphere.rotation.x = elapsedTime * 0.2;
        sphere.rotation.y = elapsedTime * 0.3;
        
        // Pulse effect
        const scale = 1 + Math.sin(elapsedTime * 2 + i) * 0.1;
        sphere.scale.set(scale, scale, scale);
      });

      // Parallax effect on scroll
      camera.position.y = -(scrollY * 0.0002);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
};

export default Background3D;
