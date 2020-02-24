/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import './ProductDescription.scss';

function ProductDescription(props) {
  const { data } = props;
  return (
    <div className="PDOverview">
      <div className="leftcontainer">
        <div className="productSlogan">{data.slogan}</div>
        <div className="productDescription">{data.description}</div>
      </div>
      <div className="rightcontainer">
        <div className="features">
          {data.features.map((el, i) => (
            <ul id="feature" key={el.feature}>
              <li>
                {el.feature} : {el.value}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
