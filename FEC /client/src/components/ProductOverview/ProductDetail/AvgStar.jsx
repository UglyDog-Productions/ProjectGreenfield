/* eslint-disable */

import React from 'react';
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';

import './ProductDetail.scss';

const url = ' http://3.134.102.30';

class AverageStar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      averageRating: undefined,
      numReviews: 0,
      rating: undefined,
    };
    this.getAverage = this.getAverage.bind(this);
  }

  async componentDidMount() {
    const { productId } = this.props;
    const ratings = await axios.get(`${url}/reviews/${productId}/list`);
    this.setState({
      numReviews: ratings.data.results.length,
      rating: ratings.data.results,
    });
    this.getAverage();
  }

  getAverage() {
    const { data } = this.props;
    const arr = [];
    data.results.map((review) => {
      return arr.push(review.rating);
    });
    let sum = 0;
    data.results.map((review) => {
      sum += review.rating;
      return sum;
    });
    const average = Math.round(sum / arr.length);
    this.setState({
      averageRating: average,
    });
  }

  render() {
    const { reviewLength } = this.props;
    const { averageRating } = this.state;

    if (averageRating) {
      return (
        <div className="ratingAndReviews">
          <div>
            <StarRatingComponent
              name="tileStar"
              editing={false}
              starCount={5}
              value={averageRating}
              renderStarIcon={(index, value) => {
                return (
                  <span>
                    <i
                      className={index <= value ? 'fas fa-star' : 'far fa-star'}
                    />
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
          <div className="linkToScroll">
            <a
              type="button"
              onClick={() =>
                document.getElementById('ratingsComp').scrollIntoView(true)
              }
            >
              {' '}
              Read all {reviewLength} Reviews...{' '}
            </a>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default AverageStar;
