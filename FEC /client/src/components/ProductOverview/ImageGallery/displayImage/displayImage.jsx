import React from 'react';
import './displayImage.scss';
import ThumbNailView from '../DefaultView/ThumbNailView.jsx';

import '../DefaultView/defaultView.scss';

class DisplayImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedThumb: 0,
      start: 0,
      end: 3,
    };
    this.indicateSelected = this.indicateSelected.bind(this);
    this.decreaseIndex = this.decreaseIndex.bind(this);
    this.increaseIndex = this.increaseIndex.bind(this);
  }

  componentDidMount() {
    const { currentStyle } = this.props;
    this.setState({
      index: currentStyle.photos.slice(0, 3),
      start: 0,
      end: 3,
      length: currentStyle.photos.length,
    });
  }

  indicateSelected(num) {
    this.setState({
      checkedThumb: num,
    });
  }

  decreaseIndex() {
    const { currentStyle } = this.props;
    const { end, start } = this.state;
    this.setState((prevState) => ({
      start: prevState.start - 1,
      end: prevState.end - 1,
    }));
  }

  increaseIndex() {
    const { currentStyle } = this.props;
    const { end, start } = this.state;
    this.setState((prevState) => ({
      end: prevState.end + 1,
      start: prevState.start + 1,
    }));
  }

  render() {
    const {
      changeIndex,
      changeImage,
      currentImage,
      openModal,
      currentStyle,
    } = this.props;

    const { checkedThumb, index, start, end, length } = this.state;

    const styles = {
      backgroundImage: `url(${currentImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    };

    if (index) {
      return (
        <div role="button" tabIndex="0" className="displayImage" style={styles}>
          <div
            role="button"
            tabIndex={0}
            className="imageViewButton "
            onKeyDown={openModal}
            onClick={openModal}
          >
            <i className="fa fa-arrows-alt" size={70} aria-hidden="true" />
          </div>
          {start > 0 && (
            <div
              role="button"
              tabIndex={0}
              className="upArrowButton"
              onKeyDown={this.decreaseIndex}
              onClick={this.decreaseIndex}
            >
              <i className="fa fa-arrow-up" size={90} aria-hidden="true" />
            </div>
          )}
          <div className="thumbnailContainer">
            <div className="thumbnails">
              {currentStyle.photos.map((thumb, id) => (
                <ThumbNailView
                  indicateSelected={this.indicateSelected}
                  checkedThumb={checkedThumb}
                  changeIndex={changeIndex}
                  changeImage={changeImage}
                  image={thumb.url}
                  index={id}
                  key={thumb.url}
                  start={start}
                  end={end}
                />
              ))}
            </div>
          </div>
          {end !== length && (
            <div
              role="button"
              tabIndex={0}
              className="downArrowButton"
              onKeyDown={this.increaseIndex}
              onClick={this.increaseIndex}
            >
              <i className="fa fa-arrow-down" size={90} aria-hidden="true" />
            </div>
          )}
        </div>
      );
    }
    return null;
  }
}

export default DisplayImage;
