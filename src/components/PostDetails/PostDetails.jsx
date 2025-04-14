import React from 'react';
import { Link, useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body } = post
    return (
        <div className='border border-red-900 bg-gradient-to-r from-red-300 to-red-700 rounded-2xl text-center py-5'>
            <h3 className='w-8/12 mx-auto text-[#27213C] text-xl font-semibold mb-5' >Title: {title}</h3>
            <p className='text-xl underline font-semibold mb-2'>BODY</p>
            <p className='w-10/12 mx-auto mb-2'>{body}</p>
            <Link to={'/posts'}>
                <button className='btn btn-soft btn-error'>Back</button>
            </Link>
        </div>
    );
};

export default PostDetails;