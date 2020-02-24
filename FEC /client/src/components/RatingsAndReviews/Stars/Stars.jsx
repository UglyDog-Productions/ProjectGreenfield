import React from 'react';

class Stars extends React.Component {
  constructor(props) {
    super(props);
  }

  //this.props.rating => for immported stars
  // need to make on click for not clicked stars

  render() {
    return (
      // star rating
      <div className="starRatings">
        <span className="s" data-low="0.5" data-high="1">
          <i className="fa fa-star"></i>
        </span>
        <span className="s" data-low="1.5" data-high="2">
          <i className="fa fa-star"></i>
        </span>
        <span className="s" data-low="2.5" data-high="3">
          <i className="fa fa-star"></i>
        </span>
        <span className="s" data-low="3.5" data-high="4">
          <i className="fa fa-star"></i>
        </span>
        <span className="s" data-low="4.5" data-high="5">
          <i className="fa fa-star"></i>
        </span>

        <span className="r r05" data-rating="1" data-value="0.5"></span>
        <span className="r r1" data-rating="1" data-value="1"></span>
        <span className="r r105" data-rating="15" data-value="1.5"></span>
        <span className="r r2" data-rating="2" data-value="2"></span>
        <span className="r r205" data-rating="25" data-value="2.5"></span>
        <span className="r r3" data-rating="3" data-value="3"></span>
        <span className="r r305" data-rating="35" data-value="3.5"></span>
        <span className="r r4" data-rating="4" data-value="4"></span>
        <span className="r r405" data-rating="45" data-value="4.5"></span>
        <span className="r r5" data-rating="5" data-value="5"></span>
      </div>
    );
  }
}

export default Stars;

// this is where the stars aspect of the ratigs go

//This will be the rating given to the product by this individual review. The rating will be displayed in the format of solid or outlined stars, where the solid stars represent the review score.  A total of 5 stars should always appear, and the amount filled in should correspond to the average score.
// The visual for rating should be representative of up to a quarter of a review point.  For example, if the average is 3.8, this should display as 3¾ solid stars and 1¼ outlined stars.
