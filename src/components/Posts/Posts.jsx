import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    // console.log(posts);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            } 
        </div>
    );
};

export default Posts;