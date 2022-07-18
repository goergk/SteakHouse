import React from 'react';
import '../scss/style.scss';

const Button = ({ text }) => {
  return (
    <button className='Btn'>
      {text}
    </button>
  )
}

export default Button;