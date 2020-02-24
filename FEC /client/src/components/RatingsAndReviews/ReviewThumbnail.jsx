/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ReactModal from 'react-modal';

class ReviewThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { image } = this.props;
    const { modalIsOpen } = this.state;
    // console.log({ image });
    return (
      <div>
        <div className="reviewThumbnail">
          <img
            className="reviewTileImages"
            src={image.url}
            alt=""
            onClick={() => this.openModal()}
          />
        </div>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          className="reviewImageModal"
          overlayClassName="OverlayModal"
          conentLabel="reviewImageModal"
        >
          {/* <button
            type="button"
            className="closeReviewImage"
            onClick={() => this.closeModal()}
          >
            X
          </button> */}
          <img src={image.url} alt="" className="expandedReviewImage" />
        </ReactModal>
      </div>
    );
  }
}

export default ReviewThumbnail;
