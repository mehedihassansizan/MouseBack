import React from 'react';
import MouseBack from '../Pages/Home/Home/MouseBack/MouseBack';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;