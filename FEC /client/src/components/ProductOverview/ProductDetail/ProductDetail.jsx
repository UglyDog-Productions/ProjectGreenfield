/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import './ProductDetail.scss';

function ProductDetail(props) {
  const { data, currentStyle } = props;
  const origPrice = currentStyle.original_price;
  const salePrice = currentStyle.sale_price;
  let price;
  if (salePrice > 0) {
    price = salePrice;
  } else {
    price = origPrice;
  }
  return (
    <div className="ProductDetail">
      <div className="productCategory">{data.category}</div>
      <div className="productName">
        <strong>{data.name}</strong>
      </div>
      <div className="productPrice">
        {currentStyle.sale_price > 0 && (
          <strike>${currentStyle.original_price}</strike>
        )}{' '}
        ${price}
      </div>
    </div>
  );
}

export default ProductDetail;
