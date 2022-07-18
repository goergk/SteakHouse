import React from 'react';

const Logo = ({ src, alt }) => {
  return (
    <div className='Logos__logo'>
      <img src={src} alt={alt} />
    </div>
  )
}

export default Logo;