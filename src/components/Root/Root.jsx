import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';

const Root = () => {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <div className='flex gap-5 my-10'>
                <div className='w-[20%]'>
                    <SideBar ></SideBar>
                </div>
                {isNavigating && <span>Loading...</span>}
                <div className='w-[80%]'>
                    <Outlet ></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;