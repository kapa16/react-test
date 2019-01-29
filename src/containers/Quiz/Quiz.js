import React, {Component} from 'react';
import classes from './Quiz.module.sass';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: 'What color is sky',
        rightAnswer: 3,
        id: 1,
        answers: [
          {text: 'Black', id: 1},
          {text: 'Green', id: 2},
          {text: 'Blue', id: 3},
          {text: 'Red', id: 4},
        ]
      },
      {
        question: 'in which year St. Petersburg was founded',
        rightAnswer: 4,
        id: 2,
        answers: [
          {text: '1700', id: 1},
          {text: '1705', id: 2},
          {text: '1702', id: 3},
          {text: '1703', id: 4},
        ]
      }
    ]
  };

  onAnswerClickHandler = (answerId) => {

    const answerState = this.state.answerState;
    if (answerState) {
      const key = Object.keys(answerState)[0];
      if (answerState[key]) {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;

    if (answerId === question.rightAnswer) {
      if (!results[question.id]) {
        results[question.id] = 'success';
      }

      this.setState({
        answerState: {[answerId]: 'success'},
        results
      });

    } else {
      results[question.id] = 'error';
      this.setState({
        answerState: {[answerId]: 'error'},
        results
      });
    }

    const timeout = setTimeout(() => {
      if (this.isQuizFinished()) {
        this.setState({
          isFinished: true
        });
      } else {
        this.setState({
          activeQuestion: this.state.activeQuestion + 1,
          answerState: null
        })
      }
      clearTimeout(timeout);
    }, 1000);

  };

  isQuizFinished() {
    return this.state.quiz.length === this.state.activeQuestion + 1;
  }

  retryHandler = () => {
    this.setState({
      results: {},
      isFinished: false,
      activeQuestion: 0,
      answerState: null
    })
  };

  render() {
    return (
      <div className={classes.Quiz}>

        <div className={classes.QuizWrapper}>
          <h1>Answer all question</h1>

          {
            this.state.isFinished
              ?
              <FinishedQuiz
                results={this.state.results}
                quiz={this.state.quiz}
                onRetry={this.retryHandler}
              />
              :
              <ActiveQuiz
                answers={this.state.quiz[this.state.activeQuestion].answers}
                question={this.state.quiz[this.state.activeQuestion].question}
                onAnswerClick={this.onAnswerClickHandler}
                quizLength={this.state.quiz.length}
                activeQuestion={this.state.activeQuestion + 1}
                state={this.state.answerState}
              />
          }

        </div>
      </div>
    )
  }
}

export default Quiz