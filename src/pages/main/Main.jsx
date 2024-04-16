import { useEffect, useState } from 'react';
import { StockSwiper, ReviewSwiper } from '../../Slider.jsx';

import './Main.css';

import NewProduct from '../../icons/novelties.svg';
import PopularProduct from '../../icons/popular.svg';


export default function Main({ children }) {

    return (
        <>
            <main className="main-content">
                <section className="main-content-logo">
                    <h1 className="text-center main-content-title">AnonGifts</h1>
                    <h2 className="text-center main-content content-title-text">первый интернет-магазин, который умеет хранить тайны</h2>
                </section>
                <div className="container">
                    <section className="swiper stock-swiper pb-5">
                        <h2 className="text-center pt-5 pb-3">Акции</h2>
                        {/* <div className="swiper-wrapper"> */}
                        <StockSwiper />
                        {/* </div> */}
                    </section>
                    <section className="novelties">
                        <h2 className="text-center pt-5 pb-3">Новинки</h2>
                        <div className="novelties-wrapper">
                            <div className="novelties-item content-list">
                                <div className='product-item'>
                                    <div className='product-image'><img src={NewProduct} loading='lazy' alt='Туалетная вода' /></div>
                                    <div className="product-name">Туалетная вода VERSACE</div>
                                    <div className="product-price">8 700 р.</div>
                                    <div className="product-footer">
                                        <button className="product-buy">В корзину</button>
                                    </div>
                                </div>
                                <div className='product-item'>
                                    <div className='product-image'><img src={NewProduct} loading='lazy' alt='Туалетная вода' /></div>
                                    <div className="product-name">Туалетная вода VERSACE</div>
                                    <div className="product-price">8 700 р.</div>
                                    <div className="product-footer">
                                        <button className="product-buy">В корзину</button>
                                    </div>
                                </div>
                                <div className='product-item'>
                                    <div className='product-image'><img src={NewProduct} loading='lazy' alt='Туалетная вода' /></div>
                                    <div className="product-name">Туалетная вода VERSACE</div>
                                    <div className="product-price">8 700 р.</div>
                                    <div className="product-footer">
                                        <button className="product-buy">В корзину</button>
                                    </div>
                                </div>
                                <div className='product-item'>
                                    <div className='product-image'><img src={NewProduct} loading='lazy' alt='Туалетная вода' /></div>
                                    <div className="product-name">Туалетная вода VERSACE</div>
                                    <div className="product-price">8 700 р.</div>
                                    <div className="product-footer">
                                        <button className="product-buy">В корзину</button>
                                    </div>
                                </div>
                            </div>
                            <a href="/" className="show-all" target="_blank"
                                rel="noopener noreferrer">показать еще</a>
                        </div>
                    </section>
                    <section className="popular">
                        <h2 className="text-center pt-5 pb-3">Популярные товары</h2>
                        <div className="popular-wrapper">
                            <div className="popular-item content-list">
                                <div className='product-item'>
                                    <div className='product-image'><img src={PopularProduct} loading='lazy' alt='Туалетная вода' /></div>
                                    <div className="product-name">Туалетная вода VERSACE</div>
                                    <div className="product-price">8 700 р.</div>
                                    <div className="product-footer">
                                        <button className="product-buy">В корзину</button>
                                    </div>
                                </div>
                                <div className='product-item'>
                                    <div className='product-image'><img src={PopularProduct} loading='lazy' alt='Туалетная вода' /></div>
                                    <div className="product-name">Сережки кольца</div>
                                    <div className="product-price">700 р.</div>
                                    <div className="product-footer">
                                        <button className="product-buy">В корзину</button>
                                    </div>
                                </div>
                                <div className='product-item'>
                                    <div className='product-image'><img src={PopularProduct} loading='lazy' alt='Туалетная вода' /></div>
                                    <div className="product-name">Сережки кольца</div>
                                    <div className="product-price">700 р.</div>
                                    <div className="product-footer">
                                        <button className="product-buy">В корзину</button>
                                    </div>
                                </div>
                                <div className='product-item'>
                                    <div className='product-image'><img src={PopularProduct} loading='lazy' alt='Туалетная вода' /></div>
                                    <div className="product-name">Сережки кольца</div>
                                    <div className="product-price">700 р.</div>
                                    <div className="product-footer">
                                        <button className="product-buy">В корзину</button>
                                    </div>
                                </div>
                            </div>
                            <a href="/" className="show-all" target="_blank"
                                rel="noopener noreferrer">показать еще</a>
                        </div>
                    </section>
                    <section className="swiper review-swiper pb-5">
                        <h2 className="text-center pt-5 pb-3">Отзывы</h2>
                        <ReviewSwiper />
                    </section>
                </div>
            </main>
        </>
    );
}