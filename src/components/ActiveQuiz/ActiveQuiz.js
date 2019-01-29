import React from 'react';
import classes from './ActiveQuiz.module.sass';
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = (props) => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>2.</strong>&nbsp;
        {props.question}
      </span>

      <small>4 from 12</small>
    </p>

    <AnswersList
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
    />
  </div>
);

export default ActiveQuiz;

