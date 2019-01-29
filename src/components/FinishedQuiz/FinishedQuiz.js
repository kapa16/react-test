import React from 'react';
import classes from './FinishedQuiz.module.sass';
import Button from '../UI/Button/Button';

const FinishedQuiz = (props) => {

  const successCount = props.quiz.reduce((accumulator, quizItem) => {
    return props.results[quizItem.id] === 'success' ? accumulator++ : accumulator;
  }, 0);
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {props.quiz.map((quizItem,index) => {
          const cls =[
            'fa',
            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
            classes[props.results[quizItem.id]]
          ];

          return (
            <li
            key={index}>
              <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(' ')} />
            </li>
          )
        })}
      </ul>

      <p>Right {successCount} from {props.quiz.length}</p>

      <div>
        <Button onClick={props.onRetry} type='primary'>AGAIN</Button>
        <Button type='success'>In test list</Button>
      </div>
    </div>
  )
};

export default FinishedQuiz;