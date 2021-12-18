import React, { useEffect, useState } from 'react';
import './Home.css'
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Banner from '../Banner/Banner';
import Posts from '../Posts/Posts';
import axios from "axios";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async() => {
            const res = await axios.get("http://localhost:7000/api/posts")
            setPosts(res.data)
            console.log(res.data);
        }
        fetchPosts()
    }, [])
    return (
        <>
            <Banner/>
            <div className="sideBar_postBar">
                <Posts
                    posts={posts}
                />
                <Sidebar/>
            </div>
        </>
    );
};

export default Home; 