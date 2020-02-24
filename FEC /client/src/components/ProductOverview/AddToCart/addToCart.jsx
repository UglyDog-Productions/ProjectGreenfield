/* eslint-disable */
import React from 'react';

import './addToCart.scss';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      allsizes: '',
      size: 'Select a Size',
      amount: '-',
      numberOfSizeSelected: 15,
    };
    this.createQuantity = this.createQuantity.bind(this);
    this.selectSize = this.selectSize.bind(this);
    this.changeAmount = this.changeAmount.bind(this);
  }

  componentDidMount() {
    const { data } = this.props;
    this.setState({
      allsizes: [data.skus],
    });
  }

  createQuantity() {
    const { numberOfSizeSelected } = this.state;
    const quantity = [];
    for (let i = 1; i <= numberOfSizeSelected; i += 1) {
      quantity.push(
        <a onClick={(e) => this.changeAmount(e, i)} key={i}>
          {i}
        </a>,
      );
    }
    return quantity;
  }

  selectSize(select) {
    const { allsizes } = this.state;
    this.setState({
      size: select,
    });
    for (const key in allsizes[0]) {
      if (select === key) {
        this.setState({
          numberOfSizeSelected: allsizes[0][key],
          amount: 1,
        });
      }
    }
  }

  changeAmount(e, num) {
    console.log(num);
    this.setState({
      amount: num,
    });
  }

  render() {
    const { size, amount } = this.state;
    const { data } = this.props;
    return (
      <div className="cart">
        <div className="dropdown">
          Size:
          <button type="button" className="dropbtn">
            {size}
          </button>
          <div className="dropdown-content">
            {Object.keys(data.skus).map((el, i) => (
              <a
                onKeyPress={(e) => this.selectSize(el)}
                onClick={(e) => this.selectSize(el)}
                key={el}
                role="button"
                tabIndex="0"
              >
                {el}
              </a>
            ))}
          </div>
        </div>
        <div className="dropdown">
          Quantity:
          <button type="button" className="dropbtn">
            {' '}
            {amount}
          </button>
          <div className="dropdown-content">{this.createQuantity()}</div>
        </div>
        <br></br>
        <div className="dropdown">
          <button
            type="button"
            onClick={() =>
              alert(`${amount} of size ${size} added to the cart `)
            }
            className="dropbtn addToCartButton"
          >
            {' '}
            Add To Cart
          </button>
        </div>
      </div>
    );
  }
}

export default AddToCart;
