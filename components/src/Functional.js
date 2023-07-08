import React from 'react';

const Button = (props) => {
    
  return <button onClick={props.onClick}> functional-component{props.label}</button>;
};

export default Button;
