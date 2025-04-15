import React, { use } from 'react';

const UserDetails2 = ({UserPromise}) => {

    const user = use(UserPromise);
    
    const {name , username} = user;

    return (
        <div>
            <p  className='text-lg font-semibold'>User name:{username}</p>
            <h2 className='text-lg font-semibold'>Name: {name}</h2>
        </div>
    );
};

export default UserDetails2;