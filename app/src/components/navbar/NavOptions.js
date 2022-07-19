import React from 'react';
import { Options_data } from '../../data/data';
import NavOption from './NavOption';

const NavOptions = () => {
  return (
    <div className='Navbar__options'>
      {Options_data.map((option, index) => {
        return (
          <NavOption
            key={index}
            icon={option.icon}
            text={option.text}
            selected={option.selected}
          />
        )
      })}
    </div>
  )
}

export default NavOptions;