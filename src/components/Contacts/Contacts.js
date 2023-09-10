import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import './Contacts.scss';

import Header from '../Header/Header';
import Button from '../Button/Button';

import phone from '../../img/svg/phone.svg';
import mail from '../../img/svg/mail.svg';
import geo from '../../img/svg/geoLocation.svg';
import map from '../../img/svg/map.svg';

const Contacts = () => {
    const [successForm, setSuccessForm] = useState(false)
    const [failedForm, setFailedForm] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ 
        mode: 'onSubmit' 
    })

    const onSubmit = (data) => {
        axios.post('http://localhost:3001/api/user', data)
            .then((res) => {
                setSuccessForm(true)
                setTimeout(() => setSuccessForm(false), 3000)

                reset()
            })
            .catch((err) => console.log(err)) 
    }

    return (
        <div className='contacts'>
            <div className='contacts__wrapper'>
                <div className='wrapper'>
                    <div className='contacts__flex'>
                        <div className='contacts__left-side'>
                            <form className='contacts__form' onSubmit={ handleSubmit(onSubmit) }>
                                <h2 className='contacts__header'>Запит пропозицій</h2>
                                {successForm && <div style={{ color: 'green' }}>Дані успішно відправлені</div>}
                                {failedForm && <div style={{ color: 'red' }}>Помилка серверу</div>}
                                {errors.name && <div style={{ color: 'red' }}>{errors.name.message}</div>}
                                <input className='input contacts__field' type='text' placeholder='Имя' { ...register('name', { 
                                    required: "Ім'я обов'язкове",
                                    minLength: {
                                        value: 3,
                                        message: 'Мінімум 3 символи'
                                    }
                                 }) }/>
                                {errors.email && <div style={{ color: 'red' }}>{errors.email.message}</div>}
                                <input className='input contacts__field' type='text' placeholder='Почта' { ...register('email', {
                                    required: "Введіть ваш email",
                                    pattern: {
                                        value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
                                        message: 'Некоректний email'
                                    }
                                }) }/>
                                {errors.number && <div style={{ color: 'red' }}>{errors.number.message}</div>}
                                <input className='input contacts__field' type='text' placeholder='Телефон' { ...register('number', {
                                    required: "Введіть номер телефону",
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: 'Некоректний номер телефону'
                                    }
                                }) }/>
                                <Button text='Заказать звонок'/>
                            </form>
                        </div>
                        <div className='contacts__right-side'>
                            <div className='title'>
                                <div className='title__header'>Мы всегда Вам рады</div>
                                <div className='contacts__flex'>
                                    <div>
                                        <div className='title__text'>Сязаться с нами:</div>
                                        <div className='contacts__item'><img src={phone} alt='phone'/>+38 (097) 466 31 90</div>
                                        <div className='title__text'>Написать:</div>
                                        <div className='contacts__item'><img src={mail} alt='mail'/>info@mir.electro.com</div>
                                        <div className='title__text'>Всегда быть в курсе:</div>
                                        <div className='contacts__item'>
                                            <div className='contacts__links-wrapper'>
                                                <a href='#' className='contacts__link'>Facebook</a>
                                                <a href='#' className='contacts__link'>Instagram</a>
                                            </div>
                                        </div>
                                        <div className='title__text'>Иди заходите в гости:</div>
                                        <div className='contacts__item'>
                                            <img src={geo} alt='location'/>
                                            г. Днепр, ул. Глинки 2,ТРЦ “Мост-Сити”
                                        </div>
                                    </div>
                                    <div>
                                        <img className='contacts__map' src={map} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className='contacts__footer'>
                <Header/>
            </footer>
        </div>
    )
}

export default Contacts;