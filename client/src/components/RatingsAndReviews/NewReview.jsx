/* eslint-disable no-unused-vars */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
// this is the input for new review, utlizies a forms
// button under the list
// opens up modal window named wite your review about product name

import React from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';
import ReviewChar from './ReviewChar.jsx';
import NewReviewStars from './Stars/NewReviewStars.jsx';

const url = 'http://3.134.102.30/reviews';

class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charCountDown: 50,
      modalIsOpen: false,
      rating: 0,
      summary: '',
      body: '',
      recommend: false,
      name: '',
      email: '',
      photos: [],
      characteristics: {},
    };
    // const modalState = this.props.showNewReview
    //   ? 'modal display-on'
    //   : 'modal display-off';
    this.fileAlert = this.fileAlert.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onRadioChange = this.onRadioChange.bind(this);
    this.setStarRating = this.setStarRating.bind(this);
    this.setCharRating = this.setCharRating.bind(this);
  }

  onSubmit() {
    const {
      rating,
      summary,
      body,
      recommend,
      name,
      email,
      photos,
      characteristics,
    } = this.state;
    const { product } = this.props;
    axios
      .post(`${url}/${product}`, {
        rating,
        summary,
        body,
        recommend,
        name,
        email,
        photos,
        characteristics,
      })
      .then((response) => {
        console.log(response);
        alert('Thank you! Your review has been submitted');
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        this.closeModal();
      });
  }

  onRadioChange(e) {
    console.log(this.state.recommend);
    this.setState({
      recommend: e.target.value,
    });
  }

  onChange(e) {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  setStarRating(rate) {
    console.log('star rate work');
    this.setState({
      rating: rate,
    });
  }

  setCharRating(rate) {
    this.setState({
      characteristics: rate,
    });
  }

  openModal() {
    this.setState({
      modalIsOpen: true,
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
    });
  }

  handleChange(e) {
    let countdown = this.state.charCountDown - 1;
    if (countdown <= 0 || isNaN(countdown)) {
      countdown = 'Minimum reached';
    }
    this.setState({
      charCountDown: countdown,
    });
    this.onChange(e);
  }

  fileAlert(e) {
    if (e.files.length > 5) {
      alert('Only 5 Files Accepted');
      e.preventDefault();
    }
  }

  render() {
    const { newReview } = this.props;
    const { modalIsOpen, value } = this.state;
    return (
      // these go in the form brackert action = '/thewebsitehere' (similar to fetching) method = 'post'
      <span>
        <button
          type="button"
          className="expandList"
          onClick={() => this.openModal()}
        >
          NEW REVIEW+
        </button>
        <div>
          <ReactModal
            isOpen={modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            className="newReviewModal"
            overlayClassName="OverlayModal"
            contentLabel="Add Review Modal"
          >
            <div>
              <button
                type="button"
                className="closeReview"
                onClick={() => this.closeModal()}
              >
                close
              </button>
            </div>
            <form>
              <div>
                <h4 className="reviewHeader">Write Your Review</h4>
                <label>*Your Rating</label>
                <NewReviewStars setStarRating={this.setStarRating} />
                <br />
                <label>*Do you recommend this product?</label>
                <div name="recommend" required>
                  <input
                    type="radio"
                    name="yes"
                    value="true"
                    checked={this.state.recommend === true}
                    onChange={this.onRadioChange}
                  />{' '}
                  Yes
                  <input
                    type="radio"
                    name="no"
                    value="no"
                    checked={this.state.recommend === false}
                    onChange={this.onRadioChange}
                  />{' '}
                  No
                  <br />
                </div>
                <br />
                <ReviewChar setCharRating={this.setCharRating} />
                <br />
                <label>Review Summary</label>
                <br />
                <input
                  type="text"
                  name="summary"
                  maxLength="60"
                  onChange={this.onChange}
                />
                <br />
                <label>*Your Review</label>
                <br />
                <textArea
                  name="body"
                  className="body"
                  rows="10"
                  cols="40"
                  placeholder="Why did you like the product or not?"
                  minLength="50"
                  maxLength="1000"
                  onChange={(e) => this.handleChange(e)}
                  required
                />
                <div>{this.state.charCountDown}</div>
                <br />
                <label>Add your photo url</label>
                <br />
                <input
                  type="url"
                  className="photos"
                  pattern="https://.*"
                  size="30"
                  placeholder="https://example.com"
                  accept="image/*"
                  onChange={this.onChange}
                  multiple
                />
                <br />
                <br />
                <label>*Your Name </label>
                <br />
                <input
                  type="text"
                  name="name"
                  placeholder="Example: Luke456"
                  maxLength="60"
                  size="30"
                  onChange={this.onChange}
                  required
                />
                <div className="disclaimer">
                  <em>For privacy reasons, do not use your full name</em>
                </div>
                <br />
                <label>*Your email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Example: falcon@rebel.net"
                  size="30"
                  maxLength="60"
                  onChange={this.onChange}
                  required
                />
                <div className="disclaimer">
                  <em>For authentication reasons, you will not be emailed</em>
                </div>
                <br />
                <button
                  type="button"
                  className="submitReview"
                  onClick={this.onSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </ReactModal>
        </div>
      </span>
    );
  }
}

export default NewReview;

// overall rating (mandatory)- empty stars appear click to fill on them (fractions allowed)

// recomned (mandatory)- radio button y/n

// Characteristics (mandatory)- 5 radio buttons look on sheet

// Review summary - A text input allowing up to 60 characters.

// Review body (mandatory)- A text input allowing up to 1000 characters.
// Placeholder text should read: “Why did you like the product or not?”.
// The review must be over 50 characters long in order to be submitted.   If the user tries to submit a review shorter that 50 characters, then the submission should fail in the same manner as it would for a blank mandatory field. reuires counter thats dolled out on list page (get that)

//  Upload your photos-  A button will appear allowing users to upload their photos to the form.
// Clicking the button should open a separate window where the photo to be can be selected.
// After the first image is uploaded, a thumbnail showing the image should appear.  A user should be able to add up to five images before the button to add disappears, preventing further additions.

// What is your nickname (mandatory)- A text input allowing up to 60 characters for the user’s display name.Placeholder text should read: “Example: jackson11!”. Below this field, the text “For privacy reasons, do not use your full name or email address” will appear.

// Your email (mandatory)- A text input allowing up to 60 characters.  Placeholder text should read: “Example: jackson11@email.com”. Below this field, the text “For authentication reasons, you will not be emailed” will appear.

// Submit review (button) - A button by which the review can be submitted.Upon selecting this button the form’s inputs should be validated.   If there are any invalid entries, the submission should be prevented, and a warning message will appear.   This message should be titled “You must enter the following:”
// This error will occur if:
// Any mandatory fields are blank
// The review body is less than 50 characters
// The email address provided is not in correct email format
// The images selected are invalid or unable to be uploaded.
