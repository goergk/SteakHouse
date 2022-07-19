import React from 'react';
import { Logo } from '../components/logos/index';
import { Logos_data } from '../data/data';
import { useWindowSize } from '../helpers/useWindowSize';
import '../scss/style.scss';

const Logos = () => {

  const size = useWindowSize();

  return (
    <div className='Logos'>
      <div className='Logos__container'>
        {Logos_data.map((logo, index) => {
          return <Logo key={index} src={logo.src} alt={logo.alt} />;
        })}
        {size < 751 &&
          Logos_data.map((logo, index) => {
            return <Logo key={index} src={logo.src} alt={logo.alt} />;
          })
        }
      </div>
    </div>
  )
}

export default Logos;