import React from "react";
import uniqid from 'uniqid';

const CategorySelect = (props) => {
  const { categoryNames, currentCategory, changeCategory } = props;

  return (
    <div id="category-select-container">
      <div className="info-modal">
        <header className="info-modal-header">Categories:</header>
        <ul id="category-select-list">
          {
            categoryNames.map((categoryName) => {
              return (
                <li
                  className="category"
                  key={uniqid('category-')}
                >
                  <p
                    style={{color: `${categoryName === currentCategory ? 'white' : 'grey'}`}}
                    onClick={() => changeCategory(categoryName)}
                    className="category-name"
                  >
                    {categoryName}
                  </p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default CategorySelect;
