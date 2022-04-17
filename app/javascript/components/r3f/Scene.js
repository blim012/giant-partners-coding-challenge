import React from "react";
import { Canvas } from "@react-three/fiber";
import Camera from "./Camera";
import Pie from "./Pie";

const Scene = (props) => {
  const { data, total, categoryColors } = props;
  const pieRadians = 2 * Math.PI;
  const categoryData = {};

  // Organize data for the pie chart
  for(let i = 0; i < data.length; i++) {
    const category = data[i][0];
    const value = data[i][1];
    const valuePercent = value / total;
    const pieRadianLength = pieRadians * valuePercent;
    categoryData[category] = {};
    categoryData[category].valuePercent = valuePercent;
    categoryData[category].pieRadianLength = pieRadianLength;
    categoryData[category].value = value;
  }

  console.log(categoryData);

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
      <Pie 
        categoryData={categoryData}
        categoryColors={categoryColors} 
      />
    </Canvas>
  );
};

export default Scene;
