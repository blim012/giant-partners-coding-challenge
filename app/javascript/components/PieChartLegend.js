import React from "react";
import uniqid from "uniqid";

const PieChartLegend = (props) => {
  const { legendFields, categoryColors } = props;

  return (
    <figcaption id="pie-chart-legend">
      <div className="info-modal">
        <header className="info-modal-header">Legend:</header>
        <ul id="legend-list">
          {
            legendFields.map((field, i) => {
              return (
                <li
                  className="legend-category"
                  key={uniqid('legend-')}
                >
                  <div
                    className="legend-color"
                    style={{backgroundColor: `hsl(${categoryColors[i]}, 100%, 50%)`}}
                  ></div>
                  <p>{field[0]}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </figcaption>
  );
};

export default PieChartLegend;
