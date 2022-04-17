import React from "react";
import PieSlice from "./PieSlice";
import uniqid from 'uniqid';

const Pie = (props) => {
  const { categoryData, categoryColors } = props;
  let currentTotalRadians = 0;

  return (
    <group rotation={[Math.PI * 0.42, 0, 0]}>
      {
        Object.keys(categoryData).map((category, i) => {
          const phiStart = currentTotalRadians;
          const phiLength = categoryData[category].pieRadianLength;
          currentTotalRadians += phiLength;
      
          return (
            <PieSlice 
              phiStart={phiStart}
              phiLength={phiLength}
              categoryColor={categoryColors[i]}
              key={uniqid('slice-')}
            />
          )
        })
      }
    </group>
  );
};

export default Pie;
