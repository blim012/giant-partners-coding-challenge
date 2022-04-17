import React from "react";

const Pie = (props) => {
  const { categoryData } = props;
  const colors = ['red', 'green', 'blue', 'purple', 'orange', 'yellow'];
  let currentTotalRadians = 0;

  Object.keys(categoryData).map((category, i) => {
    const phiStart = currentTotalRadians;
    const phiLength = categoryData[category].pieRadianLength;
    currentTotalRadians += phiLength;

    console.log('category: ' + category);
    console.log(phiStart);
    console.log(phiLength);
  })

  return (
    <></>
  );
};

export default Pie;
