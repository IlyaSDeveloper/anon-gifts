import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { StockSwiper, ReviewSwiper } from './Slider.jsx';

import './App.css';

import NewProduct from './icons/novelties.svg';
import PopularProduct from './icons/popular.svg';

import Header from './header-footer/Header.jsx';
import Footer from './header-footer/Footer.jsx';


export default function App({ children }) {
    const MainPage = () => {

    }
    return (
        <>
            <Header />
            {children}
            
            <Footer />
            <Outlet />
        </>
    );
}