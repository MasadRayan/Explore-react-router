import React from 'react';
import { Link, useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const { id, name, email, phone, website, address } = user;
    return (
        <>
            <div className='bg-gradient-to-b from-blue-400 to-pink-400 border border-blue-700 text-center rounded-2xl py-5 '>
                <h2 className='text-3xl font-bold mb-2 '>Name: {name}</h2>
                <h4 className='text-xl font-semibold'>Email: {email}</h4>
                <p className='text-lg my-3'>Mobile: {phone}</p>
                <p className='text-lg my-3'>Portfolio: {website}</p>
                <p className='text-lg my-3'>Address: {address.city}</p>
                <Link to={'/users'}>
                <button className='btn  btn-soft btn-secondary'>Back</button>
                </Link>
            </div>
        </>
    );
};

export default UserDetails;