import React, { useState } from "react";
import Scene from "./r3f/Scene";

const DataVisual = (props) => {
  const { states, education, income, total } = props;
  const data = {
    education: education,
    states: states,
    income: income
  };
  const [category, setCategory] = useState('education');

  return (
    <main id="data-content">
      <figure id="pie-chart">
        <Scene 
          data={data[category]}
          total={total}
        />
      </figure> 
    </main>
  );
};

export default DataVisual;
