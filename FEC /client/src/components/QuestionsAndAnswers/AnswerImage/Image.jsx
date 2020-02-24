/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './Image.scss';

ReactModal.setAppElement(document.getElementById('app'));

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { photos } = this.props;
    const { modalIsOpen } = this.state;
    const custom = {
      height: '100px',
      width: `${photos.length}${photos.length}0px`,
    };
    if (photos.length === 0) {
      return null;
    }
    return (
      <div className="images" style={custom}>
        {photos.map((image) => (
          <span key={image.id} className="singleImage">
            <img
              src={image.url}
              alt=""
              className="anImage"
              onClick={() => this.openModal()}
            />
            <ReactModal
              isOpen={modalIsOpen}
              onRequestClose={this.closeModal}
              className="Modal"
              overlayClassName="Overlay"
              contentLabel="Image Modal"
            >
              <img src={image.url} alt="" className="bigImage" />
            </ReactModal>
          </span>
        ))}
      </div>
    );
  }
}
