import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';

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