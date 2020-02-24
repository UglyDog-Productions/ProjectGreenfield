/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';

const url = 'http://3.134.102.30/reviews';

class CharBreakdown extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const getChar = await axios.get(`${url}/${product}/meta`);
  }

  render() {
    return <div>HI</div>;
  }
}

export default CharBreakdown;
