import React from "react";
import Scene from "./r3f/Scene";

const DataVisual = (props) => {
  const { states, education, income, total } = props;
  const data = {
    states: states,
    education: education,
    income: income
  };

  return (
    <main id="data-content">
      <figure id="pie-chart">
        <Scene></Scene>
      </figure> 
    </main>
  );
};

export default DataVisual;
