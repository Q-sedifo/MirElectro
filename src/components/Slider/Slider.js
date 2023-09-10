import React from 'react';

import './Slider.scss';

import Button from '../Button/Button';

import arrowNavigationPrev from '../../img/svg/arrowNavigationPrev.svg';
import arrowNavigationNext from '../../img/svg/arrowNavigationNext.svg';
import blenderSliderVar1 from '../../img/images/blenderSliderVar1.png';
import blenderSliderVar2 from '../../img/images/blenderSliderVar2.png';
import add from '../../img/svg/add.svg';
import ellipse from '../../img/images/ellipse.png';

const Slider = () => {
    return (
        <div className='slider'>
            <div className='wrapper'>
                <div className='slider__wrapper'>
                    <div className='slider__item'>
                        <img className='slider__item-image-overflow' src={blenderSliderVar2}/>
                        <div className='slider__item-flex'>
                            <div className='slider__item-left-side'>
                                <div className='slider__item-novelty'>
                                    Новинка 2023
                                    <img src={ellipse}/>
                                </div>
                                <div className='title'>
                                    <div className='title__header'>Погружной блендер нового поколения</div>
                                    <div className='slider__item-content'>Удобство. Комфорт. Качество. Гарантия.</div>
                                    <div className='title__text'>
                                        Отличный и не заменимый помощник на любой кухне для приготовления и воплощения любых кулинарных идей
                                    </div>
                                    <div className='slider__item-btn-wrapper'>
                                        <Button text='Узнать больше'/>
                                    </div>
                                </div>
                            </div>
                            <div className='slider__item-right-side'>
                                <div className='slider__item-product'>
                                    <img src={blenderSliderVar1}/>
                                    <div className='slider__item-product-btn'>Sencor SHB 4460WH<img src={add}/></div>
                                </div>
                            </div>
                        </div>
                        <div className='slider__item-links'>
                            <a href='#'>Facebook</a>
                            <a href='#'>Instagram</a>
                        </div>
                    </div>
                    <div className='slider__navigation'>
                        <div className='slider__navigation-wrapper'>
                            <div className='slider__navigation-page-count'>
                                <span className='slider__navigation-current-item'>01</span>/05
                            </div>
                            <div className='slider__navigation-btns'>
                                <img src={arrowNavigationPrev}/>
                                <img src={arrowNavigationNext}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider;