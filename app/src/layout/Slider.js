import React from 'react';
import { SliderText } from '../components/index';
import '../scss/style.scss';

const Slider = () => {
  return (
    <div className='Slider'>
      <SliderText />
      <div className='Slider__photo' />
    </div>
  )
}

export default Slider;