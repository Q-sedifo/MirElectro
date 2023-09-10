import React from 'react';

import './Button.scss';

import arrow from '../../img/svg/arrow.svg';
import ellipse from '../../img/svg/ellipse.svg';

const Button = ({ text }) => {
    return (
        <button className='button'>
            <img className='button__ellipse' src={ellipse} alt='ellipse'/>
            {text && text}
            <img className='button__arrow' src={arrow} alt='arrow'/>
        </button>
    )
}

export default Button;