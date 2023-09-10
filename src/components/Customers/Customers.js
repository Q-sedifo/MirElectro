import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Customers.scss';

import user from '../../img/svg/user.svg';
import mail from '../../img/svg/mail.svg';
import phone from '../../img/svg/phone.svg';

const Customers = () => {
    const [customers, setCustomers] = useState(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
        getCustomers()
            .then(({ data }) => {
                setCustomers(data.customers)
            })
            .catch((err) => console.log(err))
    }, [])

    const getCustomers = () => {
        return axios.get('http://localhost:3001/api/users')
    }

    return (
        <div className='customers'>
            <div className='wrapper'>
                <div className='customers__wrapper'>
                    <button  
                        className='button' 
                        onClick={ () => setShow(!show) }>{!show ? 'Показать пользователей' : 'Скрыть  пользователей'}
                    </button>
                    {show && (<>
                        <div className='title'><div className='title__header'>Пользователи:</div></div>
                        <div className='customers__list'>
                            {customers && customers.map(customer => (
                                <div key={customer._id} className='customers__item'>
                                    <div><img src={user}/>{customer.name}</div>
                                    <div><img src={mail}/>{customer.email}</div>
                                    <div><img src={phone}/>{customer.number}</div>
                                </div>
                            ))}
                        </div>
                    </>)}
                </div>
            </div>
        </div>
    )
}

export default Customers;