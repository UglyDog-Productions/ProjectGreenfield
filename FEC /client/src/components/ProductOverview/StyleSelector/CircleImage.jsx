import React from 'react';

import './styleSelector.scss';

function CircleImage(props) {
  const { image } = props;
  const imageStyles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
  const { checkedCircle } = props;
  const { index } = props;
  return (
    <div
      className={index === checkedCircle ? 'CircleActive' : 'CircleImage'}
      style={imageStyles}
      onKeyPress={(e) => props.updateStyle(e, props.image)}
      onClick={function(e) {
        props.indicateSelected(props.index);
        props.updateStyle(e, props.image);
        props.changeImage(props.image);
      }}
      role="button"
      tabIndex={0}
      aria-label="Save"
    />
  );
}

export default CircleImage;
