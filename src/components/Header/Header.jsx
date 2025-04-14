import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'

const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-4 shadow font-semibold ">
                        <NavLink to={'/'}><div className='py-2'>Home</div></NavLink>
                        <NavLink to={'/mobiles'}><div className='py-2'>Mobile</div></NavLink>
                        <NavLink to={'/laptops'}><div className='py-2'>Laptop</div></NavLink>
                        <NavLink to={'/users'}><div className='py-2'>Users</div></NavLink>
                        <NavLink to={'/posts'}><div className='py-2'>Posts</div></NavLink>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">MyTech Store</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-5 font-semibold">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/mobiles'}>Mobile</NavLink>
                    <NavLink to={'/laptops'}>Laptops</NavLink>
                    <NavLink to={'/users'}>Users</NavLink>
                    <NavLink to={'/posts'}>Posts</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn text-white bg-blue-500 rounded-xl">Login</a>
            </div>
        </div>
    );
};

export default Header;