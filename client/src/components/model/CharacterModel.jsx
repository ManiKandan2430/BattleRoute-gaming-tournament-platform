import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { Solider } from "./Solider";

const CharacterModel = () => {
  const spotLightRef = useRef();
  const spotLightRef2 = useRef();

  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
      {/* Ambient light - base illumination */}
      <ambientLight intensity={0.3} />

      {/* Main directional light */}
      <directionalLight
        position={[5, 0, -10]}
        intensity={20}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        color="#EDEEF7"
      />

      {/* Fill point light */}
      <pointLight position={[-5, 5, -5]} intensity={10} color="#99ccff" />

      {/* Spot light for focus */}
      <spotLight
        position={[0, 8, 2]}
        angle={0.3}
        penumbra={0.5}
        intensity={1.5}
        castShadow
        color="#fff2e6"
      />

      {/* ✅ Added directional lights from your code */}
      <directionalLight
        ref={spotLightRef}
        position={[-5, -10, 10]}
        intensity={20}
        color="#ffffff"
        castShadow
      />

      <directionalLight
        ref={spotLightRef2}
        position={[-4, 3, 50]}
        intensity={20}
        color="#ffffff"
        castShadow
      />

      {/* Model and environment */}
      <Suspense fallback={null}>
        <Solider scale={0.4} position={[0, 0, 0]} />
        <Environment preset="sunset" />
        <ContactShadows
          position={[0, -1, 0]}
          opacity={0.6}
          scale={10}
          blur={2}
          far={4}
        />
      </Suspense>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default CharacterModel;
