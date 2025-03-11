import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import particleFire from 'three-particle-fire';


particleFire.install({ THREE });

const Fire = ({ position = [0, 0, 0] }) => {
  const { scene, camera, size } = useThree();
  const fireRef = useRef();

  useEffect(() => {
    const fireRadius = 0.5;
    const fireHeight = 3;
    const particleCount = 400;

    
    const geometry = new particleFire.Geometry(fireRadius, fireHeight, particleCount);
    const material = new particleFire.Material({ color: 0xff2200 });
    material.setPerspective(camera.fov, size.height);

    
    const fireMesh = new THREE.Points(geometry, material);
    fireRef.current = fireMesh;

    
    fireMesh.position.set(...position);

    
    scene.add(fireMesh);

    const fireLight = new THREE.PointLight(0xff2200, 20, 50); 
    fireLight.position.set(...position);
    scene.add(fireLight);

    
    return () => {
      if (fireRef.current) {
        scene.remove(fireRef.current);
        fireRef.current.geometry.dispose();
        fireRef.current.material.dispose();
      }
    };
  }, [scene, camera, size.height, position]);

  useFrame((state, delta) => {
    if (fireRef.current) {
      fireRef.current.material.update(delta * 0.75); 
    }
  });

  return null; 
};

export default Fire;