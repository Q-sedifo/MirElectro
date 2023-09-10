import React from 'react';

import './Subscribtion.scss';
import mail from '../../img/svg/mail.svg';

import Button from '../Button/Button';

const Subscribtion = () => {
    return (
        <div className='subscription'>
            <div className='wrapper'>
                <div className='subscription__wrapper'>
                    <div className='subscription__left-side'>
                        <div className='title'>
                            <div className='title__header'>
                                Хотите быть в курсе всех самых послених новинок в мире бытовой технике?
                            </div>
                            <div className='title__text'>Уверяем Вас, никакого спама - только по делу</div>
                        </div>
                    </div>
                    <div className='subscription__right-side'>
                        <div className='input'>
                            <input className='input__text' placeholder='Введите Ваш email'/>
                            <div className='input__icon'><img src={mail} alt='mail'/></div>
                        </div>
                        <Button text='Подписаться'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribtion;