import React from "react";
import { Canvas } from "@react-three/fiber";

const Scene = (props) => {
  return (
    <Canvas>
      <ambientLight 
        color={0xffffff}
        intensity={0.2}
      />
      <pointLight 
        color={0xffffff}
        intensity={1}
        position={[0, 0, 10]}
        lookAt={[0, 0, 0]}
      />
      <mesh>
        <boxGeometry />
        <meshBasicMaterial />
      </mesh>
    </Canvas>
  );
};

export default Scene;
