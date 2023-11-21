import React, { useEffect } from 'react';

import './App.css';
import StockSwiper from './Slider.jsx';

import YandexDelivery from './icons/yandex.svg';
import RussianDelivery from './icons/russmail.svg';
import CDEKDelivery from './icons/cdek.svg';
import Logo from './icons/logoIcon.svg';

function App() {
    useEffect(() => {
        StockSwiper()
        
    }, [])
  return (
    <>
      <header className="App-header">
        <div className="container">
              <nav className="nav">
                  <div className="nav__block">
                      <a href="/pages/main/main.html" className="nav__item nav-item__logo"><img src={Logo} alt="logo icon"/></a>
                      <div className="nav__item nav-item__city"></div>
                  </div>
                  <div className="nav__block">
                      <div className="nav__item nav-item__links">
                          <div className="nav-item__link">Каталог</div>
                          <div className="nav-item__link">Условия</div>
                          <div className="nav-item__link">Акции</div>
                          <div className="nav-item__link">О компании</div>
                      </div>
                      <div className="nav__item nav-item__search-box">
                        <div className="input-group">
                            <input className="form-control bg-transparent rounded-pill" type="search" id="example-search-input" placeholder="Поиск"/>
                            <span className="input-group-append">
                                <button className="btn bg-transparent rounded-pill ms-n5" type="button">
                                    <i className="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                  </div>
                  <div className="nav__block">
                    <div className="nav__item nav-item__social-links">
                        <a href="/" className="nav-item__social-link bag"></a>
                        <a className="nav-item__social-link user"></a>
                        <a href="/" className="nav-item__social-link like"></a>
                    </div>
                    <div className="nav__item nav-item__contact">
                        <a href="" className="nav-item__contact-us fa-regular">Связаться с нами</a>
                    </div>
                  </div>
              </nav>
          </div>
      </header>
      <main className="main_content App">
        <section className="main_content-logo">
            <h1 className="text-center main_content-title">AnonGifts</h1>
            <h2 className="text-center main_content content_title-text">первый интернет-магазин, который умеет хранить тайны</h2>
        </section>
        <div className="container">
            <section className="swiper stock-swiper pb-5">
                <h2 className="text-center pt-5 pb-3">Акции</h2>
                {/* <div className="swiper-wrapper"> */}
                    <StockSwiper />
                {/* </div> */}
            </section>
            {/* <section className="swiper stock-swiper pb-5">
                <h2 className="text-center pt-5 pb-3">Акции</h2>
                <div className="swiper-wrapper">
                    <div className="swiper-slide"><img src="https://api.lorem.space/image/game?w=500&h=400" loading="lazy" alt="stock 1"/>
                        <div className="swiper-description">
                            <div className="swiper-percent">Фантастическая распродажа  до -50%</div>
                            <div className="swiper-dates">только с 1 февраля по 5 февраля</div>
                        </div>
                    </div>
                    <div className="swiper-slide"><img src="https://api.lorem.space/image/game?w=500&h=400&a=2" loading="lazy" alt="stock 2"/>
                        <div className="swiper-description">
                            <div className="swiper-percent">Фантастическая распродажа  до -50%</div>
                            <div className="swiper-dates">только с 1 февраля по 5 февраля</div>
                        </div>
                    </div>
                    <div className="swiper-slide"><img src="https://api.lorem.space/image/game?w=500&h=400&a=3" loading="lazy" alt="stock 3"/>
                        <div className="swiper-description">
                            <div className="swiper-percent">Фантастическая распродажа  до -50%</div>
                            <div className="swiper-dates">только с 1 февраля по 5 февраля</div>
                        </div>
                    </div>
                    <div className="swiper-slide"><img src="https://api.lorem.space/image/game?w=500&h=400&a=4" loading="lazy" alt="stock 4"/>
                        <div className="swiper-description">
                            <div className="swiper-percent">Фантастическая распродажа  до -50%</div>
                            <div className="swiper-dates">только с 1 февраля по 5 февраля</div>
                        </div>
                    </div>
                    <div className="swiper-slide"><img src="https://api.lorem.space/image/game?w=500&h=400&a=5" loading="lazy" alt="stock 5"/>
                        <div className="swiper-description">
                            <div className="swiper-percent">Фантастическая распродажа  до -50%</div>
                            <div className="swiper-dates">только с 1 февраля по 5 февраля</div>
                        </div>
                    </div>
                    <div className="swiper-slide"><img src="https://api.lorem.space/image/game?w=500&h=400&a=6" loading="lazy" alt="stock 6"/>
                        <div className="swiper-description">
                            <div className="swiper-percent">Фантастическая распродажа  до -50%</div>
                            <div className="swiper-dates">только с 1 февраля по 5 февраля</div>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination d-none"></div>
                <div className="swiper-navigate">
                    <div className="fa-solid fa-arrow-left"></div>
                    <div className="fa-solid fa-arrow-right"></div>
                </div>
            </section> */}
            <section className="novelties">
                <h2 className="text-center pt-5 pb-3">Новинки</h2>
                <div className="novelties-wrapper">
                    <div className="novelties-item content-list">
                        <div className='product-item'>
                            <div className='product-image'><img src="./icons/novelties.svg" loading='lazy' alt='Туалетная вода' /></div>
                            <div className="product-name">Туалетная вода VERSACE</div>
                            <div className="product-price">8 700 р.</div>
                            <div className="product-footer">
                                <button className="product-buy">В корзину</button>
                            </div>
                        </div>
                        <div className='product-item'>
                            <div className='product-image'><img src="./icons/novelties.svg" loading='lazy' alt='Туалетная вода' /></div>
                            <div className="product-name">Туалетная вода VERSACE</div>
                            <div className="product-price">8 700 р.</div>
                            <div className="product-footer">
                                <button className="product-buy">В корзину</button>
                            </div>
                        </div>
                        <div className='product-item'>
                            <div className='product-image'><img src="./icons/novelties.svg" loading='lazy' alt='Туалетная вода' /></div>
                            <div className="product-name">Туалетная вода VERSACE</div>
                            <div className="product-price">8 700 р.</div>
                            <div className="product-footer">
                                <button className="product-buy">В корзину</button>
                            </div>
                        </div>
                        <div className='product-item'>
                            <div className='product-image'><img src="./icons/novelties.svg" loading='lazy' alt='Туалетная вода' /></div>
                            <div className="product-name">Туалетная вода VERSACE</div>
                            <div className="product-price">8 700 р.</div>
                            <div className="product-footer">
                                <button className="product-buy">В корзину</button>
                            </div>
                        </div>
                    </div>
                    <a className="show-all">показать еще</a>
                </div>
            </section>
            <section className="popular">
                <h2 className="text-center pt-5 pb-3">Популярные товары</h2>
                <div className="popular-wrapper">
                    <div className="popular-item content-list">
                        <div className='product-item'>
                            <div className='product-image'><img src="./icons/popular.svg" loading='lazy' alt='Туалетная вода' /></div>
                            <div className="product-name">Туалетная вода VERSACE</div>
                            <div className="product-price">8 700 р.</div>
                            <div className="product-footer">
                                <button className="product-buy">В корзину</button>
                            </div>
                        </div>
                        <div className='product-item'>
                            <div className='product-image'><img src="./icons/popular.svg" loading='lazy' alt='Туалетная вода' /></div>
                            <div className="product-name">Сережки кольца</div>
                            <div className="product-price">700 р.</div>
                            <div className="product-footer">
                                <button className="product-buy">В корзину</button>
                            </div>
                        </div>
                        <div className='product-item'>
                            <div className='product-image'><img src="./icons/popular.svg" loading='lazy' alt='Туалетная вода' /></div>
                            <div className="product-name">Сережки кольца</div>
                            <div className="product-price">700 р.</div>
                            <div className="product-footer">
                                <button className="product-buy">В корзину</button>
                            </div>
                        </div>
                        <div className='product-item'>
                            <div className='product-image'><img src="./icons/popular.svg" loading='lazy' alt='Туалетная вода' /></div>
                            <div className="product-name">Сережки кольца</div>
                            <div className="product-price">700 р.</div>
                            <div className="product-footer">
                                <button className="product-buy">В корзину</button>
                            </div>
                        </div>
                    </div>
                    <a className="show-all">показать еще</a>
                </div>
            </section>
            <section className="swiper review-swiper pb-5">
                <h2 className="text-center pt-5 pb-3">Отзывы</h2>
                <div className="swiper-wrapper">
                    <div className="swiper-slide"><img src="./icons/mainReview.svg" loading="lazy" alt="review 1"/>
    
                    </div>
                    <div className="swiper-slide"><img src="./icons/mainReview.svg" loading="lazy" alt="review 2"/>

                    </div>
                    <div className="swiper-slide"><img src="./icons/mainReview.svg" loading="lazy" alt="review 3"/></div>
                </div>
                <div className="swiper-pagination d-none"></div>
                <div className="swiper-navigate">
                    <div className="fa-solid fa-arrow-left"></div>
                    <div className="fa-solid fa-arrow-right"></div>
                </div>
            </section>
        </div>
    </main>
      <footer>
        <div className="container">
            <div className="short-links">
                <div className="short-list logo"><a href="/"><img src={Logo} alt="logo icon"/></a></div>
                <div className="short-list customers">
                    <h5 className="castomer-title">Покупателям</h5>
                    <a href="/" className="customers-link">Каталог</a>
                    <a href="/" className="customers-link">Условия</a>
                    <a href="/" className="customers-link">Акции</a>
                    <a href="/" className="customers-link">О компании</a>
                </div>
                <div className="short-list info">
                    <h5 className="info-title">Информация</h5>
                    <a href="/" className="info-link">Наши отзывы</a>
                    <a href="/" className="info-link">Сотрудничество</a>
                    <a href="/" className="info-link">Пользовательское соглашение</a>
                    <a href="/" className="info-link">Политика конфиденциальности</a>
                </div>
                <div className="short-list contacts">
                    <h5 className="contacts-title">Контакты</h5>
                    <a href="/" className="contacts-link">Номер телефона</a>
                    <a href="/" className="contacts-link">Почта</a>
                    <ul className="social-links">
                        <li className="social-link"><a href='/' className="fa-brands fa-vk"></a></li>
                        <li className="social-link"><a href='/' className="fa-brands fa-telegram"></a></li>
                        <li className="social-link"><a href='/' className="fa-brands zen"></a></li>
                    </ul>
                </div>
            </div>
            <div className="copyright py-5">
                <div className="copyright-text">
                    All rights reserved
                </div>
                <ul className="copyright-delivery">
                    <li className="delivery-service yandex">
                        <img src={YandexDelivery} alt="yandex"/>
                    </li>
                    <li className="delivery-service russmail">
                        <img src={RussianDelivery} alt="russia mail"/>
                    </li>
                    <li className="delivery-service cdek">
                        <img src={CDEKDelivery} alt="cdek"/>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    </>
  );
}

export default App;
