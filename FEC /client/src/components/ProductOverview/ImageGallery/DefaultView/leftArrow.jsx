import React from 'react';

import './defaultView.scss';

function LeftArrow(props) {
  const { goToPreviousSlide } = props;
  return (
    <div
      className="backArrow arrow"
      role="button"
      tabIndex={0}
      onKeyDown={goToPreviousSlide}
      onClick={goToPreviousSlide}
    >
      <i className="fa fa-arrow-left fa-2x" />
    </div>
  );
}

export default LeftArrow;
