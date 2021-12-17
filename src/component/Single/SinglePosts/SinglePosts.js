import React from 'react';
import './SinglePosts.css';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import SinglePost from '../SinglePost/SinglePost';

const SinglePosts = () => {
    return (
        <>
            <div className="singlePosts">
                <SinglePost/>
                <Sidebar/>
            </div>
        </>
    );
};

export default SinglePosts;