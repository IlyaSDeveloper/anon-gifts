import React from "react";

import YandexDelivery from '../icons/yandex.svg';
import RussianDelivery from '../icons/russmail.svg';
import CDEKDelivery from '../icons/cdek.svg';

import Logo from '../icons/logoIcon.svg';

export default function Header() {

    return(
        <footer>
                <div className="container">
                    <div className="short-links">
                        <div className="short-list logo"><a href="/"><img src={Logo} alt="logo icon" /></a></div>
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
                                <li className="social-link"><a href='/' className="fa-brands fa-vk"> </a></li>
                                <li className="social-link"><a href='/' className="fa-brands fa-telegram"> </a></li>
                                <li className="social-link"><a href='/' className="fa-brands zen"> </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright py-5">
                        <div className="copyright-text">
                            All rights reserved
                        </div>
                        <ul className="copyright-delivery">
                            <li className="delivery-service yandex">
                                <img src={YandexDelivery} alt="yandex" />
                            </li>
                            <li className="delivery-service russmail">
                                <img src={RussianDelivery} alt="russia mail" />
                            </li>
                            <li className="delivery-service cdek">
                                <img src={CDEKDelivery} alt="cdek" />
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
    )
}