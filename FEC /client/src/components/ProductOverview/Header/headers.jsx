import React from 'react';

import './header.scss';

class Headers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: 0,
    };
  }

  changeValue = (e) => {
    e.preventDefault();
    this.setState({
      product: e.target.value,
    });
  };

  render() {
    const { changeProduct } = this.props;
    const { product } = this.state;
    const { value } = this.state;
    return (
      <div>
        <div className="header">
          <img
            alt="logo"
            src="https://ca-times.brightspotcdn.com/dims4/default/7170900/2147483647/strip/true/crop/400x543+0+0/resize/840x1140!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F47%2Fd7%2Fae1010fce5e4431458213dffdd3d%2Fsdut-6a025e38-6c19-543f-abf9-4c2eaec-20160828"
          />
        </div>
        <h1>Ugly Dog Store</h1>
        <div className="searchfield">
          <form
            className="form"
            onSubmit={(e) => changeProduct(e, Number(product))}
          >
            <input
              size="25"
              type="text"
              value={value}
              onChange={this.changeValue}
              placeholder="Search by product number...."
            />
            <button
              aria-label="Search"
              type="button"
              className="fas fa-search"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Headers;
