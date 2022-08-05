import React from 'react';

const NavItem = ({ text, isOpen, size }) => {
  return (
    <li className='Navbar__item' style={{ display: isOpen || size > 750 ? '' : 'none' }}>
      <a href='/SteakHouse/' className='Navbar__link'>
        {text}
      </a>
    </li>
  )
}

export default NavItem;