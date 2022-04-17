import React, { useState } from "react";
import { Vector2 } from "three";

const PieSlice = (props) => {
  const [hover, setHover] = useState(false);
  const { 
    phiStart, 
    phiLength, 
    onMouseEnter,
    onMouseLeave,
    updateModalPosition 
  } = props;
  let categoryColor = props.categoryColor;
  if(!categoryColor) categoryColor = 0;
  const segments = 24;
  const points = [
    new Vector2(0, 0),
    new Vector2(2, 0),
    new Vector2(2, 1),
    new Vector2(0, 1)
  ];

  return (
    <mesh
      onPointerOver={(e) => {setHover(true); onMouseEnter(e)}}
      onPointerLeave={() => {setHover(false); onMouseLeave()}}
      onPointerMove={(e) => updateModalPosition(e)}
    >
      <latheGeometry args={[points, segments, phiStart, phiLength]} />
      <meshStandardMaterial color={hover ? 'white' : `hsl(${categoryColor}, 100%, 50%)`} />
    </mesh>
  );
};

export default PieSlice;
