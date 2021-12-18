import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import about_me_img from '../../../img/sidebar-about-me.jpg'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [cats, setCats] = useState([]);

    useEffect( () => {
        const getCats = async () => {
            const res = await axios.get("http://localhost:7000/api/categories")
            setCats(res.data);
        }
        getCats()
    }, []);
    return (
        <>
            <div className="sidebarSection">
                {/* sidebar about start */}
                <div className="sidebarItem">
                    <div className="sidebarTitleHeight">
                        <div className="sidebarTitleBorder">
                            <span className="sidebarTitle">about me</span>
                        </div>
                    </div>
                    <img className="sidebarImg" src={about_me_img} alt="" />
                    <p className="sidebarDesc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ad sed quia assumenda ex sint quam, consequuntur in blanditiis qui minus earum itaque, suscipit iure! Minima dolorem quod provident veritatis.
                    </p>
                </div>
                {/* sidebar about end */}
                {/* sidebar categories start */}
                <div className="sidebarItem">
                    <div className="sidebarTitleHeight">
                        <div className="sidebarTitleBorder">
                            <span className="sidebarTitle">Categories</span>
                        </div>
                    </div>
                    <div className="sidebarCategories">
                        <div className="sidebarCategoriesItem">
                            {
                                cats.map(cat => (
                                    <Link to={`/?cat=${cat.name}`} 
                                        key={cat._id}>
                                        {cat.name}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* sidebar categories end */}
                {/* sidebar follow start */}
                <div className="sidebarItem">
                    <div className="sidebarTitleHeight">
                        <div className="sidebarTitleBorder">
                            <span className="sidebarTitle">follow us</span>
                        </div>
                    </div>
                    <div className="socialList">
                        <a href="/"><i className="fab fa-facebook-f"></i></a>
                        <a href="/"><i className="fab fa-facebook-f"></i></a>
                        <a href="/"><i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
                {/* sidebar follow end */}
            </div> 
        </>
    );
};

export default Sidebar;