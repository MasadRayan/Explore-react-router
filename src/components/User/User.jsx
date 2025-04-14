import React from 'react';
import { Link, NavLink } from 'react-router';

const User = ({ user }) => {

    const { id, name, email, phone } = user;
    return (
        <div className='bg-gradient-to-b from-blue-400 to-pink-400 border border-blue-700 text-center rounded-2xl py-5 flex flex-col '>
            <div className='flex-1'>
                <h2 className='text-3xl font-bold mb-2 '>{name}</h2>
                <h4 className='text-xl font-semibold'>{email}</h4>
                <p className='text-lg my-3'>{phone}</p>
            </div>
            <NavLink to={`/users/${id}`}>
            <button className='btn  btn-soft btn-primary'>Details</button>
            </NavLink>
        </div>
    );
};

export default User;


/**
 *  <button className='btn'><Link to={`users/${id}`}></Link>
            Details
            </button>
 */