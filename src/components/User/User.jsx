import React, { Suspense, useState } from 'react';
import { Link, Navigate, NavLink } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({ user }) => {

    const { id, name, email, phone } = user;
    const [show, setShow] = useState(false);
    const [visitHome, setVisitHome] = useState(false);
    if (visitHome) {
        return <Navigate to={'/'}></Navigate>
    }

    const UserPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());

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
            <button onClick={() => setShow(!show)
            } className=' mt-2 btn btn-soft btn-primary'>{show ? 'Hide' : 'Show'} info</button>
            <div className='mt-2'>
                {
                    show && <Suspense fallback={<span>Loading...</span>}>
                        <UserDetails2 UserPromise={UserPromise}></UserDetails2>
                    </Suspense>
                }
            </div>
            <button onClick={()=> setVisitHome(true)} className='btn btn-soft btn-primary'>Visite Home</button>
        </div>
    );
};

export default User;


