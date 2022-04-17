import React from "react";
import { Vector2 } from "three";

const PieSlice = (props) => {
  const { phiStart, phiLength, color } = props;
  const segments = 24;
  const points = [
    new Vector2(0, 0),
    new Vector2(2, 0),
    new Vector2(2, 1),
    new Vector2(0, 1)
  ];

  return (
    <mesh>
      <latheGeometry args={[points, segments, phiStart, phiLength]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default PieSlice;
