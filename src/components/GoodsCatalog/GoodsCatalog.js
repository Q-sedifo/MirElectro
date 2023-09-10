import React from 'react';

import './GoodsCatalog.scss';
import '../ProductCard/ProductCard.scss';

import allGoods from '../../img/images/allGoods.png';
import bledner from '../../img/images/blender.png';
import kettle from '../../img/images/kettle.png';
import toaster from '../../img/images/toaster.png';
import whisk from '../../img/images/whisk.png';
import squeezer from '../../img/images/squeezer.png';
import coffesaver from '../../img/images/coffeeSaver.png';
import coffemaker from '../../img/images/coffeeMaker.png';
import meatgrinder from '../../img/images/meatGrinder.png';
import previous from '../../img/svg/previous.svg';
import next from '../../img/svg/next.svg';
import kitchen from '../../img/images/kitchen.png';
import kits from '../../img/images/kits.png';
import buy from '../../img/svg/buy.svg';
import compare from '../../img/svg/compare.svg';
import like from '../../img/svg/like.svg';

const GoodsCatalog = () => {
    return (
        <div className='goods-catalog'>
            <div className='wrapper'>
                <div className='goods-catalog__all-goods' style={{ backgroundImage: `url(${allGoods})` }}>
                    <div className='title'>
                        <div className='title__header'>Каталог товаров</div>
                        <div className='title__text'>Выбирай своего незаменимого помощника для приготовления любого блюда</div>
                    </div>
                </div>
                <div className='goods-catalog__filters'>
                    <div className='goods-catalog__filter'>
                        Фильтры: 
                        <select>
                            <option defaultValue='all'>Всё</option>
                        </select>
                    </div>
                    <div className='goods-catalog__filter'>
                        Сортировать: 
                        <select>
                            <option defaultValue='popular'>Самые популярные</option>
                        </select>
                    </div>
                </div>
                <div className='goods-catalog__list'>
                    <div className='product-card'>
                        <div className='product-card__preview-wrapper'>
                            <img className='product-card__preview' src={kitchen}/>
                            <div className='product-card__note'>Хиты этого года</div>
                        </div>
                        <div className='product-card__info'>
                            <div className='product-card__name'>Всё для кухни</div>
                            <div className='product-card__price'></div>
                        </div>
                    </div>
                    <div className='product-card product-card_discounted'>
                        <div className='product-card__preview-wrapper'>
                            <img className='product-card__preview' src={bledner} />
                            <img className='product-card__previous-btn' src={previous}/>
                            <img className='product-card__next-btn' src={next}/>
                            <div className='product-card__discount'>-20%</div>
                            <div className='product-card__tools'>
                                <img src={like} />
                                <img src={buy} />
                                <img src={compare} />
                            </div>
                        </div>
                        <div className='product-card__info'>
                            <div className='product-card__name'>Блендер Scarlet</div>
                            <div className='product-card__price-wrapper'>
                                <div className='product-card__price'>1.920 грн.</div>
                                <div className='product-card__new-price'>1.760 грн.</div>
                            </div>
                        </div>
                    </div>
                    <div className='product-card'>
                        <div className='product-card__preview-wrapper'>
                            <img className='product-card__preview' src={kettle} />
                            <img className='product-card__previous-btn' src={previous}/>
                            <img className='product-card__next-btn' src={next}/>
                            <div className='product-card__discount'>New</div>
                            <div className='product-card__tools'>
                                <img src={like} />
                                <img src={buy} />
                                <img src={compare} />
                            </div>
                        </div>
                        <div className='product-card__info'>
                            <div className='product-card__name'>Чайник Scarlet</div>
                            <div className='product-card__price-wrapper'>
                                <div className='product-card__price'>1.590 грн.</div>
                                <div className='product-card__new-price'></div>
                            </div>
                        </div>
                    </div>
                    <div className='product-card'>
                        <div className='product-card__preview-wrapper'>
                            <img className='product-card__preview' src={toaster} />
                            <img className='product-card__previous-btn' src={previous}/>
                            <img className='product-card__next-btn' src={next}/>
                            <div className='product-card__tools'>
                                <img src={like} />
                                <img src={buy} />
                                <img src={compare} />
                            </div>
                        </div>
                        <div className='product-card__info'>
                            <div className='product-card__name'>Тостер Scarlet</div>
                            <div className='product-card__price-wrapper'>
                                <div className='product-card__price'>1.120 грн.</div>
                                <div className='product-card__new-price'></div>
                            </div>
                        </div>
                    </div>
                    <div className='product-card'>
                        <div className='product-card__preview-wrapper'>
                            <img className='product-card__preview' src={whisk} />
                            <img className='product-card__previous-btn' src={previous}/>
                            <img className='product-card__next-btn' src={next}/>
                            <div className='product-card__tools'>
                                <img src={like} />
                                <img src={buy} />
                                <img src={compare} />
                            </div>
                        </div>
                        <div className='product-card__info'>
                            <div className='product-card__name'>Миксер Scarlet</div>
                            <div className='product-card__price-wrapper'>
                                <div className='product-card__price'>1.860 грн.</div>
                                <div className='product-card__new-price'></div>
                            </div>
                        </div>
                    </div>
                    <div className='product-card'>
                        <div className='product-card__preview-wrapper'>
                            <img className='product-card__preview' src={squeezer} />
                            <img className='product-card__previous-btn' src={previous}/>
                            <img className='product-card__next-btn' src={next}/>
                            <div className='product-card__tools'>
                                <img src={like} />
                                <img src={buy} />
                                <img src={compare} />
                            </div>
                        </div>
                        <div className='product-card__info'>
                            <div className='product-card__name'>Cоковыжималка Scarlet</div>
                            <div className='product-card__price-wrapper'>
                                <div className='product-card__price'>2.140 грн.</div>
                                <div className='product-card__new-price'></div>
                            </div>
                        </div>
                    </div>
                    <div className='product-card'>
                        <div className='product-card__preview-wrapper'>
                            <img className='product-card__preview' src={coffesaver} />
                            <img className='product-card__previous-btn' src={previous}/>
                            <img className='product-card__next-btn' src={next}/>
                            <div className='product-card__tools'>
                                <img src={like} />
                                <img src={buy} />
                                <img src={compare} />
                            </div>
                        </div>
                        <div className='product-card__info'>
                            <div className='product-card__name'>Кофемолка Scarlet</div>
                            <div className='product-card__price-wrapper'>
                                <div className='product-card__price'>1.120 грн.</div>
                                <div className='product-card__new-price'></div>
                            </div>
                        </div>
                    </div>
                    <div className='product-card product-card_discounted'>
                        <div className='product-card__preview-wrapper'>
                            <img className='product-card__preview' src={coffemaker} />
                            <img className='product-card__previous-btn' src={previous}/>
                            <img className='product-card__next-btn' src={next}/>
                            <div className='product-card__discount'>-20%</div>
                            <div className='product-card__tools'>
                                <img src={like} />
                                <img src={buy} />
                                <img src={compare} />
                            </div>
                        </div>
                        <div className='product-card__info'>
                            <div className='product-card__name'>Кофемашина Scarlet</div>
                            <div className='product-card__price-wrapper'>
                                <div className='product-card__price'>5.920 грн.</div>
                                <div className='product-card__new-price'>4.890 грн.</div>
                            </div>
                        </div>
                    </div>
                    <div className='product-card'>
                        <div className='product-card__preview-wrapper'>
                            <img className='product-card__preview' src={meatgrinder} />
                            <img className='product-card__previous-btn' src={previous}/>
                            <img className='product-card__next-btn' src={next}/>
                            <div className='product-card__tools'>
                                <img src={like} />
                                <img src={buy} />
                                <img src={compare} />
                            </div>
                        </div>
                        <div className='product-card__info'>
                            <div className='product-card__name'>Мясорубка Scarlet</div>
                            <div className='product-card__price-wrapper'>
                                <div className='product-card__price'>2.360 грн.</div>
                                <div className='product-card__new-price'></div>
                            </div>
                        </div>
                    </div>
                    <div className='product-card__card'>
                        <div className='product-card__preview-wrapper'>
                            <img className='product-card__preview' src={kits}/>
                            <div className='product-card__note'>Комлекты</div>
                        </div>
                        <div className='product-card__info'>
                            <div className='product-card__name'>Наборы техники</div>
                            <div className='product-card__price-wrapper'>
                                <div className='product-card__price'></div>
                                <div className='product-card__new-price'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='goods-catalog__footer'>
                    <a href='#'>Показать больше</a>
                </div>
            </div>
        </div> 
    )
}

export default GoodsCatalog;