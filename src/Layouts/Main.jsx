import React from 'react';
import MouseBack from '../Pages/Home/Home/MouseBack/MouseBack';
import Navbar from '../component/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../component/Footer';


const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;