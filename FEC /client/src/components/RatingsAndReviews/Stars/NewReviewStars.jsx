/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-no-bind */
// bassed on radio button clicked fill in stars
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class NewReviewStar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
  }

  onStarClick(nextValue, prevValue, name, e) {
    const xPos =
      (e.pageX - e.currentTarget.getBoundingClientRect().left) /
      e.currentTarget.offsetWidth;
    if (xPos <= 0.5) {
      nextValue -= 0.5;
    }
    console.log(
      'name: %s, nextValue: %s, prevValue: %s',
      name,
      nextValue,
      prevValue,
    );
    this.setState({
      rating: nextValue,
    });
    this.props.setStarRating(nextValue);
  }

  render() {
    const { rating } = this.state;
    return (
      <div style={{ fontSize: 24 }}>
        <StarRatingComponent
          name="newReviewStar"
          starColor="#ffb400"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
          renderStarIcon={(index, value) => {
            return (
              <span>
                <i className={index <= value ? 'fas fa-star' : 'far fa-star'} />
              </span>
            );
          }}
          renderStarIconHalf={() => {
            return (
              <span>
                <span style={{ position: 'absolute' }}>
                  <i className="far fa-star" />
                </span>
                <span>
                  <i className="fas fa-star-half" />
                </span>
              </span>
            );
          }}
        />
      </div>
    );
  }
}

export default NewReviewStar;
/*  */
