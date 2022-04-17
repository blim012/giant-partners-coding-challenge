import React from "react";
import PieSlice from "./PieSlice";
import uniqid from 'uniqid';

const Pie = (props) => {
  const { categoryData, categoryColors, sliceModalRef } = props;
  let currentTotalRadians = 0;

  const onMouseEnter = (e, categoryData, category, colorIndex) => {
    if(sliceModalRef) {
      const roundedValuePercent = (categoryData.valuePercent * 100).toFixed(2);
      sliceModalRef.current.classList.add('display');
      sliceModalRef.current.style.top = `${e.clientY - 30}px`;
      sliceModalRef.current.style.left = `${e.clientX + 20}px`;
      sliceModalRef.current.style.borderColor = `hsl(${categoryColors[colorIndex]}, 100%, 50%)`;
      sliceModalRef.current.textContent = `${category}: ${roundedValuePercent}% (${categoryData.value})`;
    }
  };

  const onMouseLeave = () => {
    if(sliceModalRef) {
      sliceModalRef.current.classList.remove('display');
    }
  };

  const updateModalPosition = (e) => {
    if(sliceModalRef) {
      sliceModalRef.current.style.top = `${e.clientY - 30}px`;
      sliceModalRef.current.style.left = `${e.clientX + 20}px`;
    }
  }

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
              onMouseEnter={(e) => onMouseEnter(e, categoryData[category], category, i)}
              onMouseLeave={onMouseLeave}
              updateModalPosition={updateModalPosition}
              key={uniqid('slice-')}
            />
          )
        })
      }
    </group>
  );
};

export default Pie;
