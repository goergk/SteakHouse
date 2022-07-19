import React from 'react';
import '../scss/style.scss';
import { Button } from './index';

const Box1 = () => {
  return (
    <div className='Box1'>
      <div className='Boxes__container'>
        <h3 className='Boxes__container__header'>
          Zestaw dla 3 osób
        </h3>
        <p className='Boxes__container__description'>
          Razem smakuje lepiej! Zamów zestaw obiadowy dla 3 osób już od
          <span className='Boxes__container__description__bg1'> 39 zł</span>
        </p>
        <Button text='Zamów online' inverse={true} />
      </div>
    </div>
  )
}

export default Box1;