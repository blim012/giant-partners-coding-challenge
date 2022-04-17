import React, { useState, useEffect } from "react";
import Scene from "./r3f/Scene";
import CategorySelect from "./CategorySelect";

const DataVisual = (props) => {
  const { states, education, income, total } = props;
  const data = {
    education: education,
    states: states,
    income: income
  };
  const [category, setCategory] = useState('education');
  const [categoryColors, setCategoryColors] = useState([]);
  
  useEffect(() => {
    setCategoryColors(generateRandomHSL(data[category].length))
  }, [category]);

  function generateRandomHSL(numCategories) {
    const baseColor = Math.floor(Math.random() * 360);
    const increment = 360 / numCategories;
    const randomHSLs = [];
    for(let i = 0; i < numCategories; i++) {
      let randomHSL = Math.round((baseColor + (i * increment)) % 360);
      if(i % 2 !== 1) randomHSL = (randomHSL + 180) % 360; // Get the complement every odd iteration
      randomHSLs.push(randomHSL);
    }
    return randomHSLs;
  }

  return (
    <main id="data-content">
      <header id="data-header">{category}</header>
      <div id="data-visual">
        <CategorySelect 
          categoryNames={Object.keys(data)}
          currentCategory={category}
          changeCategory={(categoryName) => setCategory(categoryName)}
        />
        <figure id="pie-chart">
          <Scene 
            data={data[category]}
            total={total}
            categoryColors={categoryColors}
          />
        </figure>
      </div> 
    </main>
  );
};

export default DataVisual;
