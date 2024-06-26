import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Modal from 'react-modal';

import { GeoLocation } from "../GeoLocation"
import SingInUp from '../SingInUp.jsx';

import './Header.css';

import Logo from '../icons/logoIcon.svg';

export default function Header() {
    Modal.setAppElement('body');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
  
    useEffect(() => {
        console.log('Current location is ', location);
    }, [location]);

useEffect(() => {
    //Function the handle body scroll activity
    const handleBodyScroll = (scrollSwitch) => {
        document.body.style.overflow = scrollSwitch;
    };
    //Apply the status of scroll swiching
    handleBodyScroll(modalIsOpen ? 'hidden' : 'auto');
}, [modalIsOpen]);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    return (
        <header className="header">
                <div className="container">
                    <nav className="nav">
                        <div className="nav__block">
                            <Link to="/" className="nav__item nav-item__logo"><img src={Logo} alt="logo icon" /></Link>
                            <div className="nav__item nav-item__city"><GeoLocation /></div>
                        </div>
                        <div className="nav__block nav-block__center">
                            <div className="nav__item nav-item__links">
                                <Link to='/catalog' className="nav-item__link">Каталог</Link>
                                <a href='/' className="nav-item__link" target="_blank" rel="noopener noreferrer">Условия</a>
                                <a href='/' className="nav-item__link" target="_blank" rel="noopener noreferrer">Акции</a>
                                <a href='/' className="nav-item__link" target="_blank" rel="noopener noreferrer">О компании</a>
                            </div>
                            <div className="nav__item nav-item__search-box">
                                <div className="input-group">
                                    <input className="form-control bg-transparent rounded-pill" type="search" id="example-search-input" placeholder="Поиск" />
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
                                <a href=" " className="nav-item__social-link bag"
                                    target="_blank" rel="noopener noreferrer"> </a>
                                <Link to='user' onClick={openModal} className="nav-item__social-link user"> </Link>
                                 <button className="nav-item__social-link user" onClick={openModal}> </button>
                                <a href=" " className="nav-item__social-link like"
                                    target="_blank" rel="noopener noreferrer"> </a>
                            </div>
                            <div className="nav__item nav-item__contact">
                                <a href="/" className="nav-item__contact-us fa-regular"
                                    target="_blank" rel="noopener noreferrer">Связаться с нами</a>
                            </div>
                        </div>
                    </nav>
                </div>
                <Modal 
                    isOpen={modalIsOpen}
                    size={{size: 'sm'}}
                    onRequestClose={closeModal}
                    className="modal"
                    overlayClassName="Overlay"
                    >
                    <SingInUp onClose={closeModal}/>
                </Modal>
            </header>
    )
}