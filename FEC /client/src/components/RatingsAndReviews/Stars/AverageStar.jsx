/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// take all ratings and average them then put in stars reviews

import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class AverageStar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      averageRating: '',
    };
    this.getAverage = this.getAverage.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      return this.getAverage();
    }
  }

  getAverage() {
    // console.log(this.props.data);
    const arr = [];
    this.props.data.results.map((review) => {
      return arr.push(review.rating);
    });
    let sum = 0;
    this.props.data.results.map((review) => {
      sum += review.rating;
      return sum;
    });
    const average = Math.round(sum / arr.length);
    this.setState({
      averageRating: average,
    });
  }

  // this.props.rating => for immported stars
  // need to make on click for not clicked stars

  render() {
    return (
      <div className="starBreak">
        <div className="avgStars">
          <StarRatingComponent
            name="tileStar"
            editing={false}
            starCount={5}
            value={this.state.averageRating}
            renderStarIcon={(index, value) => {
              return (
                <span>
                  <i
                    id="reviewAvg"
                    className={index <= value ? 'fas fa-star' : 'far fa-star'}
                  />
                </span>
              );
            }}
            renderStarIconHalf={() => {
              return (
                <span>
                  <span style={{ position: 'absolute' }}>
                    <i id="reviewAvg" className="far fa-star" />
                  </span>
                  <span>
                    <i id="reviewAvg" className="fas fa-star-half" />
                  </span>
                </span>
              );
            }}
          />
        </div>
        <div className="avgReview">{this.state.averageRating}</div>
      </div>
    );
  }
}

export default AverageStar;
