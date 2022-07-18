import React from 'react';

const NavItem = ({ text, isOpen }) => {
  return (
    <li className='Navbar__item' style={{ display: !isOpen ? 'none' : '' }}>
      <a href='/' className='Navbar__link'>
        {text}
      </a>
    </li>
  )
}

export default NavItem;