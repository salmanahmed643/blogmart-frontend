import React from 'react';
import './Home.css'
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Banner from '../Banner/Banner';
import Posts from '../Posts/Posts';

const Home = () => {
    return (
        <>
            <Banner/>
            <div className="sideBar_postBar">
                <Posts/>
                <Sidebar/>
            </div>
        </>
    );
};

export default Home;