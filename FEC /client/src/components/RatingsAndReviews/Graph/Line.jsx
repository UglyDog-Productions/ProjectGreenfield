/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

const Line = ({ left }) => {
  return <div className="line" style={{ left: `${left}%` }} />;
};

export default Line;
