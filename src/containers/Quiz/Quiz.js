import React, {Component} from 'react';
import classes from './Quiz.module.sass';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
  state = {
    quiz: [
      {
        question: 'What color is sky',
        rightAnswer: 3,
        answers: [
          {text: 'Black', id: 1},
          {text: 'Green', id: 2},
          {text: 'Blue', id: 3},
          {text: 'Red', id: 4},
        ]
      }
    ]
  };

  onAnswerClickHandler = (answerId) => {
    console.log(answerId);
  };

  render() {
    return (
      <div className={classes.Quiz}>

        <div className={classes.QuizWrapper}>
          <h1>Answer all question</h1>

          <ActiveQuiz
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    )
  }
}

export default Quiz