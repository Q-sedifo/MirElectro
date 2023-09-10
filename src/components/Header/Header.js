import React from 'react';

import logo from '../../img/svg/logo.svg';
import phone from '../../img/svg/phone.svg';
import bag from '../../img/svg/bag.svg';
import user from '../../img/svg/user.svg';
import search from '../../img/svg/search.svg';
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className='wrapper'>
                <div className='header__wrapper'>
                    <div className='header__logo'>
                        <a href='#' className='header__logo-link'>
                            <img src={logo} alt='logo'/>
                        </a>
                    </div>
                    <div className='input'>
                        <input className='input__text' type='text' placeholder='Ваш запрос' />
                        <img src={search} alt='search' />
                    </div>
                    <div className='header__nav'>
                        <ul className='header__list'>
                            <li className='header__item'>
                                <a href='#' className='header__link'>О компании</a>
                            </li>
                            <li className='header__item'>
                                <a href='#' className='header__link'>Каталог</a>
                            </li>
                            <li className='header__item'>
                                <a href='#' className='header__link'>Новинки</a>
                            </li>
                            <li className='header__item'>
                                <a href='#' className='header__link'>Акции</a>
                            </li>
                            <li className='header__item'>
                                <a href='#' className='header__link'>Контакты</a>
                            </li>
                        </ul>
                    </div>
                    <div className='header__others'>
                        <div className='header__phone'>
                            <img src={phone} alt='phone-icon'/>
                            +38 (097) 466 31 90
                        </div>
                        <a className='header__link'>
                            <img src={bag} alt='bag'/>
                        </a>
                        <a className='header__link'>
                            <img src={user} alt='user'/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;