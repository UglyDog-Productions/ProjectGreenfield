import React from 'react';
import './displayImage/displayImage.scss';

import { GlassMagnifier } from 'react-image-magnifiers';

class DisplayExpanded extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      magnified: true,
    };
    this.change = this.change.bind(this);
  }

  change() {
    const { magnified } = this.state;
    this.setState({
      magnified: !magnified,
    });
  }

  render() {
    const { currentImage } = this.props;
    const { magnified } = this.state;
    const styled = {
      backgroundImage: `url(${currentImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    };

    return (
      <div
        className="displayImage  displayImageModal"
        style={styled}
        role="button"
        tabIndex="0"
        onClick={() => {
          this.change();
        }}
        onKeyPress={function() {
          this.change();
        }}
      >
        {!magnified && (
          <div>
            <GlassMagnifier
              className="magnified"
              magnifierSize="70%"
              square
              imageSrc={currentImage}
              imageAlt="Modal Image"
            />
          </div>
        )}
      </div>
    );
  }
}

export default DisplayExpanded;
