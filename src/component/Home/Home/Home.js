import React, { useEffect, useState } from 'react';
import './Home.css'
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Banner from '../Banner/Banner';
import Posts from '../Posts/Posts';
import axios from "axios";
import { useLocation } from 'react-router-dom';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(() => {
        const fetchPosts = async() => {
            const res = await axios.get(`http://localhost:7000/api/posts/${search}`)
            setPosts(res.data)
        }
        fetchPosts()
    }, [search])
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