import React, { useRef } from "react";
import { OrthographicCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const calcCameraZoom = () => {
  const aspect = Math.min(window.innerWidth, window.innerHeight);
  return aspect * 0.12;
}

const Camera = (props) => {
  let cameraZoom = calcCameraZoom();
  const cameraRef = useRef();
  const cursor = {
    x: 0,
    y: 0
  };
  const parallaxAmplitude = 1.8;

  window.addEventListener('mousemove', (e) => {
    cursor.x = (e.clientX / window.innerWidth) - 0.5;
    cursor.y = (e.clientY / window.innerHeight) - 0.5;
  });

  window.addEventListener('resize', () => {
    cameraZoom = calcCameraZoom();
    cameraRef.current.zoom = cameraZoom;
  });

  useFrame(() => {
    cameraRef.current.position.x = cursor.x * parallaxAmplitude;
    cameraRef.current.position.y = -(cursor.y * parallaxAmplitude);
    cameraRef.current.lookAt(new Vector3(0, 0, 0));
  });

  return (
    <OrthographicCamera 
      makeDefault
      ref={cameraRef}
      zoom={cameraZoom}
      {...props}
    />
  );
};

export default Camera;
