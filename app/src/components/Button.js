import React from 'react';
import '../scss/style.scss';

const Button = ({ text, inverse }) => {
  return (
    <button className={inverse ? 'Btn__inverse' : 'Btn'}>
      {text}
    </button>
  )
}

export default Button;