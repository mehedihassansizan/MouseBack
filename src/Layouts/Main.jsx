import React, { useContext } from 'react';

import Navbar from '../component/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../component/Footer';
import { AuthContext } from '../provider/AuthProvider/AuthProvider';


const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
    const {isDarkMode} = useContext(AuthContext)
    return (
        <div className={`transition-colors ${isDarkMode ? 'dark-mode' : 'light-mode' }`}>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;