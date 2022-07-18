import React from 'react';

const NavOption = ({
  icon,
  text,
  selected,
}) => {
  return (
    <div className={!selected ? 'Navbar__option' : 'Navbar__option__selected'}>
      {icon}
      <p className='Navbar__option__text'>
        {text}
      </p>
    </div>
  )
}

export default NavOption;