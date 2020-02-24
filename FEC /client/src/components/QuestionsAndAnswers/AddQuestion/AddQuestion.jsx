/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './AddQuestion.scss';
import axios from 'axios';

const url = 'http://3.134.102.30/qa';

ReactModal.setAppElement(document.getElementById('app'));

export default class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      value: '',
      name: '',
      email: '',
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleSubmit = () => {
    const { value, name, email } = this.state;
    const { productDetails } = this.props;
    console.log(
      `id: ${productDetails.id} & value: ${value} & name: ${name} & email: ${email}`,
    );
    axios
      .post(`${url}/${productDetails.id}`, {
        body: value,
        name,
        email,
      })
      .then((response) => {
        console.log(response);
        alert('Thank you! Your question has been submitted');
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        this.closeModal();
      });
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

  render() {
    const { modalIsOpen, value, name, email, heading } = this.state;
    const { productDetails } = this.props;
    const custom = {
      marginLeft: `24vw`,
      marginRight: `25vw`,
    };

    return (
      <span>
        <button
          type="button"
          className="expandList"
          onClick={() => this.openModal()}
        >
          ADD A QUESTION+
        </button>
        <div>
          <ReactModal
            isOpen={modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            className="Modal"
            overlayClassName="Overlay"
            contentLabel="Add Question Modal"
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
              <h2 className="modalHeading">Ask your Question</h2>
              <h4 className="modalHeading">{`Regarding ${productDetails.name}`}</h4>
              <div className="myForm">
                <label>*Your Question</label>
                <br />
                <textarea
                  className="formBox"
                  placeholder="Why did you like the product or not?"
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
                    placeholder="Example: jackson11!"
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
