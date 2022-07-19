import React from 'react';
import { Button } from '../index';
import { ReactComponent as Icon1 } from '../../assets/icons/Group 4.svg';
import { ReactComponent as Icon2 } from '../../assets/icons/App_Store_(iOS).svg';
import { ReactComponent as Icon3 } from '../../assets/icons/huawei-app-badge-9757fa 2.svg';

const Box2 = () => {
  return (
    <div className='Box2'>
      <div className='Boxes__container'>
        <h3 className='Boxes__container__header'>
          UberEats
        </h3>
        <p className='Boxes__container__description'>
          Zamawiaj w aplikacji <span className='Boxes__container__description__bg2'>10% taniej.</span>
          &nbsp; Pobierz aplikację UberEats już dziś.
        </p>
        <div className='Boxes__container__icons'>
          <Icon1 className='icon' onClick={e => alert('Google Play')} />
          <Icon2 className='icon' onClick={e => alert('App Store')} />
          <Icon3 className='icon' onClick={e => alert('Huawei Store')} />
        </div>
        <Button text='Zamów online' inverse={true} />
      </div>
    </div>
  )
}

export default Box2;