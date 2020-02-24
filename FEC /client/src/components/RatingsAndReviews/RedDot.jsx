import React from 'react';

const RedDot = ({ show }) => {
  const reported = show ? 'modal display-block' : 'modal display-none';

  return <span className={reported} />;
};

export default RedDot;
