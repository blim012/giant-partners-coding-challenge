import React, { useRef } from "react";
import { OrthographicCamera } from "@react-three/drei";

const calcCameraZoom = () => {
  const aspect = Math.min(window.innerWidth, window.innerHeight);
  return aspect * 0.12;
}

const Camera = (props) => {
  let cameraZoom = calcCameraZoom();
  const cameraRef = useRef();

  window.addEventListener('resize', () => {
    cameraZoom = calcCameraZoom();
    cameraRef.current.zoom = cameraZoom;
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
