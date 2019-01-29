import React from 'react';
import classes from './MenuToggle.module.sass';

const MenuToggle = (props) => {
  const cls = [
    classes.MenuToggle,
    'fa'
  ];

  if (props.isOpen) {
    cls.push('fa-times');
    cls.push(classes.open)
  } else {
    cls.push('fa-bars');
    cls.push(classes.close)
  }

  return (
    <i
      className={cls.join(' ')}
      onClick={props.onToggle}
    />
  )
};

export default MenuToggle;
