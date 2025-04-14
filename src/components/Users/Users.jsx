import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {

    const userss = useLoaderData();
    // console.log(user);

    return (
        <>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    userss.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </>
    );
};

export default Users;