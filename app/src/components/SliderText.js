import React from 'react';
import { Button } from './index';
import '../scss/style.scss';

const SliderText = () => {
  return (
    <div className='Slider__baner'>
      <h2 className='Slider__baner__header'>
        <span className='Slider__baner__header__bold'>Rabat 10% </span>
        &nbsp;na pierwsze zamówienie!
      </h2>
      <p className='Slider__baner__description'>
        Do 20 stycznia złóż zamówienie na stronie i skorzystaj z <b>promocji -10%</b>.
        Spiesz się, czas trwania promocji do końca lutego.
      </p>
      <Button text={'Zamów online'} />
    </div>
  )
}

export default SliderText;