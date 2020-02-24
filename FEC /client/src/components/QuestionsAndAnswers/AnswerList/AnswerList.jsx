import React, { Component } from 'react';
import axios from 'axios';
import Answer from '../Answer/Answer.jsx';
import './AnswerList.scss';

const url = 'http://3.134.102.30';

export default class AnswerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      showing: 2,
      status: 'LOAD MORE ANSWERS',
    };
  }

  async componentDidMount() {
    const { qId } = this.props;
    try {
      const getAnswers = await axios.get(`${url}/qa/${qId}/answers?count=10`);
      this.setState({ answers: getAnswers.data.results });
    } catch (error) {
      console.error(error);
    }
  }

  handleClick = () => {
    const { status, answers } = this.state;
    if (status === 'LOAD MORE ANSWERS') {
      this.setState({ showing: answers.length, status: 'COLLAPSE ANSWERS' });
    } else {
      this.setState({ showing: 2, status: 'LOAD MORE ANSWERS' });
    }
  };

  render() {
    const { answers, showing, status } = this.state;
    const custom = {
      fontSize: 'small',
      // top-right-bottom-left
      margin: '1% 0 1% 1%',
    };
    if (answers.length === 0) {
      return (
        <div className="answerList">
          <div className="noAnswers">
            A: Be the first to submit an answer to this question!
            <br />
            <div id="dogs">By: Ugly Dogs</div>
          </div>
        </div>
      );
    }
    if (answers.length > 2) {
      return (
        <div className="answerList">
          {answers.slice(0, showing).map((a) => (
            <div key={a.answer_id}>
              <Answer answer={a} aId={a.answer_id} />
            </div>
          ))}
          <button
            className="expandList"
            style={custom}
            type="button"
            onClick={() => {
              this.handleClick();
            }}
          >
            {status}
          </button>
        </div>
      );
    }
    return (
      <div className="answerList">
        {answers.slice(0, showing).map((a) => (
          <div key={a.answer_id}>
            <Answer answer={a} aId={a.answer_id} />
          </div>
        ))}
      </div>
    );
  }
}
