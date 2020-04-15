import React from 'react';
import Modal from 'react-responsive-modal';
import ModalDisplay from '../ModalDisplay.jsx';
import DisplayImage from '../displayImage/displayImage.jsx';

import './imageView.scss';

class ImageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onOpenModal() {
    this.setState({ open: true });
  }

  onCloseModal() {
    this.setState({ open: false });
  }

  render() {
    const { currentIndex } = this.props;
    const { currentStyle } = this.props;
    const { currentImage } = this.props;
    const { changeImage } = this.props;
    const { changeIndex } = this.props;
    const { changeStyle } = this.props;
    const { open } = this.state;

    return (
      <div className="modalContainer">
        <Modal
          closeIconSize={50}
          className="modal"
          open={open}
          onClose={this.onCloseModal}
        >
          <div className="DefaultViewModal">
            <ModalDisplay
              currentIndex={currentIndex}
              gallery={currentStyle.photos}
              currentImage={currentImage}
            />
          </div>
        </Modal>
        <div className="DefaultView">
          <div className="slideWrap">
            <DisplayImage
              changeIndex={changeIndex}
              openModal={this.onOpenModal}
              currentImage={currentImage}
              currentStyle={currentStyle}
              changeImage={changeImage}
              changeStyle={changeStyle}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageView;
