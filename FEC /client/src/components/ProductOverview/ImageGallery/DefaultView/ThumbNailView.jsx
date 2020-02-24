import React from 'react';

function ThumbNailView(props) {
  const {
    image,
    changeIndex,
    changeImage,
    index,
    checkedThumb,
    indicateSelected,
    start,
    end,
  } = props;

  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: `${index >= start && index < end ? 'block' : 'none'}`,
  };

  return (
    <div className="allThumbs">
      <div
        className={
          index === checkedThumb ? 'selectThumbnail' : 'thumbnailImage'
        }
        role="button"
        style={styles}
        onKeyPress={() => changeImage(image)}
        onClick={function() {
          indicateSelected(index);
          changeIndex(index);
          changeImage(image);
        }}
        tabIndex={0}
        aria-label="yes"
      />
    </div>
  );
}

export default ThumbNailView;
