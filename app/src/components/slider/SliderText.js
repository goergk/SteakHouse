import React from 'react';
import { Button } from '../index';

const SliderText = () => {
  return (
    <div className='Slide__baner'>
      <h2 className='Slide__baner__header'>
        <span className='Slide__baner__header__bold'>Rabat 10% </span>
        &nbsp;na pierwsze zamówienie!
      </h2>
      <p className='Slide__baner__description'>
        Do 20 stycznia złóż zamówienie na stronie i skorzystaj z <b>promocji -10%</b>.
        Spiesz się, czas trwania promocji do końca lutego.
      </p>
      <Button text={'Zamów online'} inverse={false} />
    </div>
  )
}

export default SliderText;