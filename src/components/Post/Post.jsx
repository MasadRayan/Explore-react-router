import React from 'react';
import { NavLink } from 'react-router';

const Post = ({ post }) => {
    const { id, title, body } = post
    return (
        <div className='border border-red-900 bg-gradient-to-r from-red-300 to-red-700 rounded-2xl text-center py-5'>
            <h3 className='w-8/12 mx-auto text-[#27213C] text-xl font-semibold mb-3' >Title: {title}</h3>
            <NavLink to={`/posts/${id}`}>
                <button className='btn btn-soft btn-error'>Read More</button>
            </NavLink>
        </div>
    );
};

export default Post;