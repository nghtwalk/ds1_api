import { Suspense, useEffect, useState } from "react";
import { MeshStandardMaterial } from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Environment } from "@react-three/drei";
import CanvasLoader from '../Loader';
import Fire from '../Fire.jsx';
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import FireParticles from '../FireParticles.jsx';


const Warrior = ({ isMobile }) => {
  const warrior = useGLTF('/models/warrior.gltf');

  warrior.scene.traverse((child) => {
    if (child.isMesh) {
      
      if (child.material.name === "Mat_Ash" || child.material.name === "Mat_NonReflective") {
        
        child.material = new MeshStandardMaterial({
          map: child.material.map, 
          metalness: 0.0, 
          roughness: 1.0, 
        });

        
      } else {
       
        const newMaterial = new MeshStandardMaterial({
          map: child.material.map,
          normalMap: child.material.normalMap,
          metalness: 0.50, 
          roughness: 0, 
          envMapIntensity: 1.5, 
        });
        child.material = newMaterial;
      }
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={1.0} groundColor="black" />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <primitive
        object={warrior.scene}
        scale={isMobile ? 1.2 : 1.5}
        position={isMobile ? [0, -1.5, -2.2] : [2, -1.5, -1.5]}
        rotation={[0, 0.5, 0]}
      />

    </mesh>
  );
};

const WarriorCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
          enableRotate={true}
        />
        <Warrior isMobile={isMobile} />

        <FireParticles  position={[4.2, -0.75, 2.6]}  />

        <Fire position={[4.2,-1.85, 2.6]}/>


        <Environment preset="sunset" environmentIntensity={0.2} /> 

        

        <EffectComposer>
          <Bloom intensity={0.25} width={300} height={300} />
        </EffectComposer>

        
        
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default WarriorCanvas;