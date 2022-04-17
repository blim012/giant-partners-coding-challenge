import React, { useState } from "react";
import { Vector2 } from "three";

const PieSlice = (props) => {
  const [hover, setHover] = useState(false);
  const { phiStart, phiLength, color } = props;
  const segments = 24;
  const points = [
    new Vector2(0, 0),
    new Vector2(2, 0),
    new Vector2(2, 1),
    new Vector2(0, 1)
  ];

  return (
    <mesh
      onPointerOver={(e) => setHover(true)}
      onPointerLeave={(e) => setHover(false)}
    >
      <latheGeometry args={[points, segments, phiStart, phiLength]} />
      <meshStandardMaterial color={hover ? 'white' : color} />
    </mesh>
  );
};

export default PieSlice;
