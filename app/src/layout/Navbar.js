import React from 'react';
import { NavItems, NavOptions } from '../components/navbar/index';
import '../scss/style.scss';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <nav className='Navbar__nav'>
        <NavItems />
        <NavOptions />
      </nav>
    </div>
  )
}

export default Navbar;