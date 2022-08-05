import React, { useEffect, useState } from 'react';
import { Items_data } from '../../data/data';
import Logo from '../../assets/images/l.png';
import { ReactComponent as Dots } from '../../assets/icons/dots.svg';
import { useWindowSize } from '../../helpers/useWindowSize';
import { NavItem } from './index';


const NavItems = () => {

  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size > 750 && isOpen) {
      setIsOpen(false);
    }
  }, [isOpen, size]);

  const handleOpenMobile = () => {
    setIsOpen(!isOpen);
  }

  return (
    <ul className='Navbar__items'>
      <li>
        <a href='/SteakHouse/' className='Navbar__link'>
          <img src={Logo} alt="Logo" className='Navbar__logo' />
        </a>
      </li>
      <li>
        <Dots className='Navbar__dots' onClick={handleOpenMobile} />
      </li>
      <div className={isOpen ? 'Navbar__mobile' : 'Navbar__closed'}>
        {Items_data.map((item, index) => {
          return <NavItem key={index} text={item} isOpen={isOpen} size={size} />
        })}
      </div>
    </ul>
  )
}

export default NavItems;