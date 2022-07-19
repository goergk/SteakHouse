import React from 'react';
import { SliderText } from './index';

const Slide = ({ index }) => {

  return (
    <div className='Slide'>
      <SliderText />
      <div className={`Slide__photo__${index}`} />
    </div>
  )
}

export default Slide;