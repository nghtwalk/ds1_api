import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const FireParticles = ({ position = [0, 0, 0], count = 50 }) => {
  const particlesRef = useRef();

 
  const offsets = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * Math.PI * 2,
      y: Math.random() * Math.PI * 2,
      speedX: Math.random() * 0.5 + 0.5, 
      speedY: Math.random() * 0.5 + 0.5, 
    }));
  }, [count]);

  
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];

    for (let i = 0; i < count; i++) {
      
      const x = (Math.random() - 0.5) * 2;
      const y = (Math.random() - 0.5) * 2;
      const z = (Math.random() - 0.5) * 2;
      vertices.push(x, y, z);

      
      const color = new THREE.Color();
      color.setHSL(0.05 + Math.random() * 0.1, 1.0, 0.5);
      colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    return geometry;
  }, [count]);

 
  const particlesMaterial = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
  }, []);

  
  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      const elapsedTime = state.clock.elapsedTime;

      for (let i = 0; i < count; i++) {
        const index = i * 3; 

        
        positions[index] += Math.sin(elapsedTime * offsets[i].speedX) * 0.002; 
        positions[index + 1] += Math.cos(elapsedTime * offsets[i].speedY) * 0.002; 
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef} position={position}>
      <bufferGeometry attach="geometry" {...particlesGeometry} />
      <pointsMaterial attach="material" {...particlesMaterial} />
    </points>
  );
};

export default FireParticles;
