import React from 'react';
import { Logo } from '../components/index';
import { Logos_data } from '../data/data';
import '../scss/style.scss';

const Logos = () => {
	return (
		<div className='Logos'>
			<div className='Logos__container'>
				{Logos_data.map((logo, index) => {
					return <Logo key={index} src={logo.src} alt={logo.alt} />;
				})}
			</div>
		</div>
	)
}

export default Logos;