import React, { Component } from 'react';
import Moment from 'react-moment';
import axios from 'axios';
import Name from './Name.jsx';
import Image from '../AnswerImage/Image.jsx';
import './Answer.scss';

const url = 'http://3.134.102.30/qa/answer';

export default class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reported: 'Report',
      helpful: 'Yes',
      helpfulness: 0,
    };
  }

  componentDidMount() {
    const { answer } = this.props;
    this.setState({ helpfulness: answer.helpfulness });
  }

  handleReportClick = () => {
    const { reported } = this.state;
    const { aId } = this.props;

    if (reported === 'Report') {
      axios.put(`${url}/${aId}/report`);
      this.setState({ reported: 'Reported' });
      console.log(this.state);
    }
    return null;
  };

  handleHelpfulClick = () => {
    const { aId } = this.props;
    const { helpful } = this.state;

    if (helpful === 'Yes') {
      axios.put(`${url}/${aId}/helpful`);
      this.setState((previous) => ({ helpfulness: previous.helpfulness + 1 }));
      this.setState({ helpful: 'Yep' });
    }
    return null;
  };

  render() {
    const { answer } = this.props;
    const { reported, helpfulness } = this.state;

    return (
      <div>
        <span className="answer">{`A: ${answer.body} `}</span>
        <Image photos={answer.photos} />
        <div className="user">
          <span className="answerer">{'by: '}</span>
          <Name name={answer.answerer_name} />
          <span>{', '}</span>
          <span>
            <Moment format="MMMM DD, YYYY">{answer.date}</Moment>
          </span>
          <span className="helpfulA">{` | Helpful? `}</span>
          <button
            type="button"
            className="answerLinkButton"
            onClick={() => this.handleHelpfulClick()}
          >
            Yes
          </button>
          <span className="count">{`(${helpfulness}) | `}</span>
          <button
            type="button"
            className="answerLinkButton"
            onClick={() => this.handleReportClick()}
          >
            {reported}
          </button>
        </div>
      </div>
    );
  }
}

// export default Answer;
