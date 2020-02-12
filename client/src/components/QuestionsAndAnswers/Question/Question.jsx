import React, { Component } from 'react';
// import React, { Component } from 'react'
import axios from 'axios';
import Modal from 'react-modal';
import AnswerList from '../AnswerList/AnswerList.jsx';
import AddAnswer from '../AddAnswer/AddAnswer.jsx';
import './Question.scss';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement(document.getElementById('app'));

const url = 'http://3.134.102.30/qa/question';

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helpful: 'Yes',
      helpfulness: 0,
    };
  }

  componentDidMount() {
    const { question } = this.props;
    this.setState({ helpfulness: question.question_helpfulness });
  }

  handleHelpfulClick = () => {
    const { qId } = this.props;
    const { helpful } = this.state;

    if (helpful === 'Yes') {
      axios.put(`${url}/${qId}/helpful`);
      this.setState((previous) => ({ helpfulness: previous.helpfulness + 1 }));
      this.setState({ helpful: 'Yep' });
    }
    return null;
  };

  render() {
    const { question, qId, productDetails } = this.props;
    const { helpfulness } = this.state;
    const custom = { marginBottom: '1%' };

    return (
      <span className="question">
        <div style={custom}>{`Q: ${question.question_body}`}</div>
        <span className="helpfulQ">
          {`Helpful? `}
          <span>
            <button
              type="button"
              className="questionLinkButton"
              onClick={() => this.handleHelpfulClick()}
            >
              Yes
            </button>
            <span className="count">{`(${helpfulness}) | `}</span>
            <AddAnswer productDetails={productDetails} question={question} />
          </span>
        </span>
        <AnswerList qId={qId} />
      </span>
    );
  }
}

// export default Question;
