import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';

const Root = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <div className='flex gap-5 my-10'>
                <div className='w-[20%]'>
                    <SideBar ></SideBar>
                </div>
                <div className='w-[80%]'>
                    <Outlet ></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;