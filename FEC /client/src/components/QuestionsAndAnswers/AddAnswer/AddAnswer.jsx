/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';
import './AddAnswer.scss';

const url = 'http://3.134.102.30/qa';

ReactModal.setAppElement(document.getElementById('app'));

export default class AddAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      value: '',
      name: '',
      email: '',
      photo: '',
      photos: [],
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleSubmit = () => {
    const { value, name, email, photos } = this.state;
    const { question } = this.props;
    console.log(
      `value: ${typeof value} & name: ${typeof name} & email: ${typeof email}`,
    );
    axios
      .post(`${url}/${question.question_id}/answers`, {
        body: value,
        name,
        email,
        photos,
      })
      .then((response) => {
        console.log(response);
        alert('Thank you! Your answer has been submitted');
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        this.closeModal();
      });
  };

  addPhoto = () => {
    const { photo, photos } = this.state;
    console.log(photos, photos.length);
    if (photos.length < 5) {
      this.setState({ photos: photos.concat([photo]), photo: '' });
    } else if (photos.length === 5) {
      alert('Five Photo Maximum');
    }
  };

  handleValueChange = (event) => {
    const { value } = this.state;
    console.log(value);
    this.setState({ value: event.target.value });
  };

  handleNameChange = (event) => {
    const { name } = this.state;
    console.log(name);
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    const { email } = this.state;
    console.log(email);
    this.setState({ email: event.target.value });
  };

  handlePhotoChange = (event) => {
    const { photo } = this.state;
    console.log(photo);
    this.setState({ photo: event.target.value });
  };

  render() {
    const { modalIsOpen, value, email, name, photo, photos } = this.state;
    const { productDetails, question } = this.props;
    const custom = {
      marginLeft: `24vw`,
      marginRight: `25vw`,
    };

    return (
      <span>
        <button
          type="button"
          className="questionLinkButton"
          onClick={() => this.openModal()}
        >
          Add Answer
        </button>
        <div>
          <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={this.closeModal}
            className="Modal"
            overlayClassName="Overlay"
            contentLabel="Add Answer Modal"
          >
            <div>
              <button
                type="button"
                className="closeModalButton"
                onClick={this.closeModal}
              >
                close
                <br />
              </button>
            </div>
            <div>
              <h2 className="modalHeading">Submit your Answer</h2>
              <div className="myForm">
                <span>{`Product: ${productDetails.name}`}</span>
                <span>
                  <p>{question.question_body}</p>
                </span>
                {/* <form className="addAnswerForm" onSubmit={this.handleSubmit} > */}
                <label>*Your Answer</label>
                <br />
                <textarea
                  className="formBox"
                  placeholder="Please add your Answer..."
                  rows="5"
                  cols="50"
                  maxLength="1000"
                  value={value}
                  onChange={this.handleValueChange}
                  required
                />
                <br />
                <label>
                  *What is your nickname?
                  <input
                    type="text"
                    placeholder="Example: jack543!"
                    size="20"
                    maxLength="60"
                    value={name}
                    onChange={this.handleNameChange}
                    required
                  />
                  <div className="disclaimer">
                    <em>
                      For privacy reasons, do not use your full name or email
                      address
                    </em>
                  </div>
                </label>
                <label>
                  *Your email:
                  <input
                    type="email"
                    pattern=".+.com"
                    placeholder="Example: jack@email.com"
                    size="25"
                    maxLength="60"
                    value={email}
                    onChange={this.handleEmailChange}
                    required
                  />
                  <div className="disclaimer">
                    <em>For authentication reasons, you will not be emailed</em>
                  </div>
                </label>
                <label>
                  {/* api doesn't take files, cant upload photos, so have to use url text */}
                  Add photo urls here:
                  <input
                    type="url"
                    id="photoInput"
                    placeholder="https://example.com"
                    pattern="https://.*"
                    size="30"
                    multiple
                    value={photo}
                    onChange={this.handlePhotoChange}
                  />
                  <button type="button" onClick={this.addPhoto}>
                    {`Add Photo (${photos.length})`}
                  </button>
                </label>
                <br />
                <button
                  type="button"
                  className="submitModalButton"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </ReactModal>
        </div>
      </span>
    );
  }
}

// export default AddAnswer;
