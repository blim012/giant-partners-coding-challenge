import React from "react";
import PieSlice from "./PieSlice";

const Pie = (props) => {
  const { categoryData } = props;
  const colors = ['red', 'green', 'blue', 'purple', 'orange', 'yellow'];
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
              color={colors[i]}
            />
          )
        })
      }
    </group>
  );
};

export default Pie;
