import React from "react";
import { Canvas } from "@react-three/fiber";
import Camera from "./Camera";

const Scene = (props) => {
  return (
    <Canvas>
      <Camera position={[0, 0, 10]} />
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
      <mesh rotation={[0.2, 0.2, 0.2]}>
        <boxGeometry />
        <meshBasicMaterial />
      </mesh>
    </Canvas>
  );
};

export default Scene;
