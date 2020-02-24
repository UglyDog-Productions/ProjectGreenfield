/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// so take in the rating and fill in the number of stars

import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class TileStar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      rating: this.props.rating,
    };
  }

  // this.props.rating => for immported stars

  render() {
    return (
      <div className="tileStar">
        <StarRatingComponent
          name="tileStar"
          editing={false}
          starCount={5}
          value={this.props.rating}
          renderStarIcon={(index, value) => {
            return (
              <span>
                <i
                  id="tileStar"
                  className={index <= value ? 'fas fa-star' : 'far fa-star'}
                />
              </span>
            );
          }}
          renderStarIconHalf={() => {
            return (
              <span>
                <span style={{ position: 'absolute' }}>
                  <i id="tileStar" className="far fa-star" />
                </span>
                <span>
                  <i id="tileStar" className="fas fa-star-half" />
                </span>
              </span>
            );
          }}
        />
      </div>
    );
  }
}

export default TileStar;
