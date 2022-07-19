import React from 'react';
import '../scss/style.scss';

const Button = ({ text, inverse }) => {
  return (
    <button
      className={inverse ? 'Btn__inverse' : 'Btn'}
      onClick={e => alert('Zamów online')}
    >
      {text}
    </button>
  )
}

export default Button;